import React, { Suspense, useContext } from 'react';
import BookingsTable from '../Components/BookingsTable';
import { myBookingsPromise } from '../Api/api';
import { AuthContext } from '../AuthContext';

const MyBookings = () => {
    const {user}=useContext(AuthContext)
    
    return (
        <div>
            <h1 className='text-3xl font-bold text-[#7e3a1f] castoro leading-15 text-center pt-30  py-22'>Hi <span className='beau text-5xl'>{user.displayName}</span> , <br /> here are your all Booked rooms</h1>
            <Suspense fallback={<h1> data are coming</h1>}>
                <BookingsTable myBookingsPromise={myBookingsPromise(user.email)}></BookingsTable>
            </Suspense>
        </div>
    );
};

export default MyBookings;