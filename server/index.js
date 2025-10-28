const express = require('express')
const app = express()
const cors = require('cors')
const moment = require('moment');

const port = process.env.PORT || 5000
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config()

app.use(cors());
app.use(express.json())


app.get('/', (req, res) => {
  res.send('Hello World!')
})



const uri =
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.g5skvf8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const hotelCollection = client.db('hotelDB').collection('hotels')
    const reviewCollection = client.db('hotelDB').collection('reviews')
    const bookingCollection = client.db('hotelDB').collection('bookings')
    app.get('/hotels', async (req, res) => {
      // const email=req.body.email
      // const query={ user:email}

      // const result= await hotelCollection.find(query).toArray()
      const result = await hotelCollection.find().toArray()
      res.send(result)

    })
    app.get('/hotels/:id', async (req, res) => {
      const id = req.params.id
      const query = { roomId: id }

      const result = await hotelCollection.findOne(query)
      res.send(result)
    })

    app.get('/topratedhotels', async (req, res) => {
      const query = {}
      const sort = { rating: -1 }

      const result = await hotelCollection.find(query).sort(sort).toArray()
      res.send(result)

    })
    app.get('/reviews', async (req, res) => {
      const query = {}
      const sort = { timestamp: -1 }
      const result = await reviewCollection.find(query).sort(sort).toArray()
      res.send(result)

    })
    app.get('/review/:id', async (req, res) => {
      const id = req.params.id
      const query = { roomId: id }

      const result = await reviewCollection.find(query).toArray()
      res.send(result)
    })
    app.post('/reviews', async (req, res) => {
      const review = req.body
      const result = await reviewCollection.insertOne(review)
      res.send(result)
    })
    app.post('/bookings', async (req, res) => {
      const booking = req.body
      const result = await bookingCollection.insertOne(booking)
      res.send(result)
    })
    app.get('/bookings', async (req, res) => {
      const email = req.query.email
      const query = {
        userEmail: email
      }
      console.log(query)
      const result = await bookingCollection.find(query).toArray();
      res.send(result)
    })
    app.put('/bookings/:id', async (req, res) => {
      const id = req.params.id;
      const filter = { roomId: id }
      const options = { upsert: true };
      const updatedStatus = req.body;
      const updatedDoc = {
        $set: updatedStatus
      }

      const result = await bookingCollection.updateOne(filter, updatedDoc, options);

      res.send(result)

    })
    app.delete('/bookings/:id', async (req, res) => {
      const id = req.params.id;
      const { cancelDate, bookingDate } = req.query;

      if (!cancelDate || !bookingDate) {
        return res.status(400).send('Missing dates for cancellation check');
      }

      const cancelMoment = moment(cancelDate, 'MM/DD/YYYY');
      const bookingMoment = moment(bookingDate, 'YYYY-MM-DD');

      const difference = bookingMoment.diff(cancelMoment, 'days');
      const isOneDayGap = difference === 1;

      if (!isOneDayGap) {
        try {
          const filter = { roomId: id };
          const result = await bookingCollection.deleteOne(filter);
          res.send(result);
        } catch (error) {
          console.error(error);
          res.status(500).send('Server error while cancelling booking');
        }
      } else {
        res.status(400).send('Sorry! You can only cancel exactly 1 day before the booking date.');
      }
    });

    app.put('/hotels/:id', async (req, res) => {
      const id = req.params.id;
      const filter = { roomId: id }
      const options = { upsert: true };
      const updatedStatus = req.body;
      const updatedDoc = {
        $set: updatedStatus
      }

      const result = await hotelCollection.updateOne(filter, updatedDoc, options);

      res.send(result)

    })

  } finally {

  }
}
run().catch(console.dir);



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
