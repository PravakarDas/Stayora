# 🏨 Auris — Modern Hotel Booking Platform

![Auris Screenshot](https://i.ibb.co/1f0cvwq6/Screenshot-2025-08-08-183015.png)

Auris is a modern, full-featured hotel booking web application that allows users to explore rooms, check availability, book stays, manage reservations, and share reviews — all in one elegant, responsive interface. The system is built with a MERN stack and designed to offer a smooth and secure booking experience.

🔗 **Live Demo:** [https://hotel-client-side.web.app/](https://hotel-client-side.web.app/)

---

## 🛠️ Tech Stack

### Frontend
- **React.js**
- **React Router**
- **Tailwind CSS** + **DaisyUI**
- **Framer Motion** (animations)
- **React Helmet**
- **React Leaflet** (interactive map)
- **Axios** (HTTP client)
- **Moment.js**
- **SweetAlert2** (notifications)
- **Firebase Authentication** (Google login)
- **TanStack Query** (data fetching & caching)

### Backend
- **Node.js** + **Express.js**
- **MongoDB Atlas** (NoSQL database)
- **JWT Authentication**
- **dotenv**, **cors**, **mongoose**, **moment**

---

## 🚀 Key Features

### 🏠 Home Page
- Dynamic **banner slider**
- Interactive **hotel map**
- **Featured rooms** carousel
- Real-time **reviews** section
- Two marketing sections for promotions
- **Special offers** popup

### 🛏️ Rooms Page
- Displays all available rooms from database
- **Server-side filtering** by price range
- Toggle **grid or table** layout
- Click on a room for full details and booking

### 📄 Room Details
- Full room description, images, and amenities
- **Review section** with user comments and ratings
- **Booking modal** with date picker & summary
- Booking confirmation & toast notifications

### 📅 My Bookings
- View all user bookings
- Update or cancel (up to 1 day before check-in)
- Post reviews for completed stays
- Secure and private data access

### 🌟 Reviews System
- Only verified (booked) users can post reviews
- Ratings (1–5) and comment system
- Timestamps, auto-sorted by newest
- Real-time updates using React Query

### 🔒 Authentication & Access
- Secure login with **Firebase Auth (Google)**
- Private routes protected by **JWT**
- Redirect non-logged-in users to login for booking/review

### ⚠️ Error Handling
- Beautifully designed **404 Page**
- Smooth navigation back to homepage

---

## ⚙️ Getting Started (Local Setup)

### 1️⃣ Clone the Repositories

#### Client
```bash
git clone https://github.com/<your-username>/Auris.git
cd Auris
```

#### Server
```bash
git clone https://github.com/<your-username>/Auris-Server.git
cd Auris-Server
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Set Up Environment Variables

#### Client (.env)
```
VITE_apiKey=your_firebase_api_key
VITE_authDomain=your_project.firebaseapp.com
VITE_projectId=your_project_id
VITE_storageBucket=your_project.appspot.com
VITE_messagingSenderId=your_sender_id
VITE_appId=your_app_id
VITE_backendURL=http://localhost:5000
```

#### Server (.env)
```
PORT=5000
DB_URI=your_mongodb_uri
ACCESS_TOKEN_SECRET=your_jwt_secret
```

### 4️⃣ Run the Project
Start the backend first, then the frontend.

#### Server
```bash
npm run dev
```

#### Client
```bash
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173)

---

## 📦 Dependencies Overview

| Frontend | Backend |
|-----------|----------|
| react | express |
| react-router-dom | mongoose |
| @tanstack/react-query | cors |
| axios | dotenv |
| tailwindcss | jsonwebtoken |
| daisyui | moment |
| framer-motion | nodemon |
| react-helmet |  |
| react-leaflet |  |
| moment |  |
| sweetalert2 |  |

---

## 🧰 Folder Structure

```
Auris/
├── src/
│   ├── assets/
│   ├── components/
│   ├── layouts/
│   ├── pages/
│   ├── routes/
│   ├── hooks/
│   └── main.jsx
├── public/
├── .env
├── package.json
└── tailwind.config.js
```

---

## 🧠 Future Enhancements
- Admin dashboard (manage rooms, bookings, and users)
- Stripe/PayPal payment integration
- Push notifications for booking updates
- Advanced search (by location, amenities, and date range)

---

## 💬 Feedback & Contribution
If you’d like to contribute:
1. Fork this repo  
2. Create a new branch (`feature/new-feature`)  
3. Commit your changes  
4. Push to your fork and open a Pull Request  

---

## 📜 License
This project is licensed under the **MIT License**.  
You’re free to use and modify it, but please include attribution when sharing.

---

## 🧑‍💻 Developed By
**Pravakar Das**  
📧 [pravakar459@example.com]  
GitHub: [@Pravakar](https://github.com/PravakarDas)

---

> “Auris — where every stay feels like home.” 🏡
