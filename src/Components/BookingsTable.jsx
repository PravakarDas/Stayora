import React, { use, useState } from 'react';
import BookingsTableRow from './BookingsTableRows/BookingsTableRow';

const BookingsTable = ({myBookingsPromise}) => {
    const myBookings=use(myBookingsPromise)
    const [myBooking,setMyBookings]=useState(myBookings)
    return (
      <div>
        {myBooking.length>0?     <div className="overflow-x-auto">
  <table className="table table-xs ">
    <thead>
      <tr className='px-7 border-t-3 py-5 border-white'>
        <th className='text-[23px] pl-7 py-5 text-[#6d3e2c] beau '>NO.</th>
        <th className='text-[23px] text-[#6d3e2c] py-5 eb'>Name</th>
        <th className='text-[23px] text-[#6d3e2c] py-5 eb'>Bed Type</th>
       
        <th className='text-[23px] text-[#6d3e2c] py-5 eb'>Booking Date</th>
        <th className='text-[23px] pr-7 text-[#6d3e2c] eb py-5'>Price</th>
      </tr>
    </thead>
    <tbody >
 
      
       {
        myBooking.map((Booking,index)=><BookingsTableRow index={index}
        myBooking={myBooking} setMyBookings={setMyBookings} Booking={Booking} ></BookingsTableRow>)
      }
  
 
    </tbody>
   
  </table>
</div> :<h1 className='text-3xl text-center text-[#7e3a1f] eb font-bold my-30'>You have not Booked Any Room Yet</h1>}
      </div>
  

         
    );
};

export default BookingsTable;