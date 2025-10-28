export const myBookingsPromise=email=>{
    return fetch(`https://server-mu.vercel.app/bookings?email=${email}`).then(res=>res.json())
}