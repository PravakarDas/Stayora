export const myBookingsPromise=email=>{
    return fetch(`https://hotel-server-side-mu.vercel.app/bookings?email=${email}`).then(res=>res.json())
}