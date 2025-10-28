import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../AuthContext';
import Swal from 'sweetalert2';
import { motion } from "framer-motion";
import { IoBed } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FcMoneyTransfer, FcRating } from "react-icons/fc";

const RoomDetails = () => {
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const Location = useLocation()
    const { roomId, name, bannerImage, description, price, view, occupancy, roomSize, roomBeds, image, bedType, rating, availability } = useLoaderData()
    const [reviews, setReviews] = useState([]);
    const [available, setAvailable] = useState(availability)

    useEffect(() => {
        axios.get('https://hotel-server-side-mu.vercel.app/reviews').then(res => {
            const review = res.data.filter(review => review.roomId == roomId)
            setReviews(review)
        }).catch(error => {
            console.log(error)
        })
    }, [])

    const handleBooking = e => {
        e.preventDefault();
        if (user) {
            document.getElementById('my_modal_4').showModal()
        } else { 
            navigate('/login', { state: { from: Location.pathname } }) 
        }
    }

    const handleConfirm = e => {
        e.preventDefault();
        const date = e.target.date.value
        const bookings = {
            userEmail: user.email,
            roomId,
            name,
            description,
            date,
            price,
            image,
            bedType,
            rating
        }
        
        axios.post('https://hotel-server-side-mu.vercel.app/bookings', bookings).then(res => {
            if (res.data.insertedId) {
                Swal.fire({
                    title: "Booking Confirmed!",
                    text: "You have successfully booked this room",
                    icon: "success",
                    confirmButtonColor: '#ffbd59',
                    draggable: true
                });
            }
        }).catch(error => {
            console.log(error)
        })

        axios.put(`https://hotel-server-side-mu.vercel.app/hotels/${roomId}`, {
            availability: false
        }).then(res => {
            console.log(res.data)
        }).catch(error => {
            console.log(error)
        })
        setAvailable(false)
        document.getElementById('my_modal_4').close()
    }

    return (
        <div className='bg-gradient-to-br from-[#fffcec] to-[#fff8dc] min-h-screen'>
            {/* Banner Image - Keep as before */}
            <div className='relative'>
                <img className='max-h-screen w-full object-cover' src={bannerImage} alt="" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#28140c]/80 to-transparent"></div>
            </div>

            <div className='max-w-7xl mx-auto px-4 md:px-8 lg:px-16 -mt-32 relative z-10'>
                {/* Room Title Card */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className='bg-[#28140c] rounded-3xl p-8 md:p-12 shadow-2xl mb-12'
                >
                    <div className='flex items-center justify-between flex-wrap gap-4'>
                        <h1 className='text-4xl md:text-5xl font-bold text-[#ffbd59]' style={{ fontFamily: 'Castoro, serif' }}>
                            {name}
                        </h1>
                        {available ? (
                            <span className='px-6 py-3 bg-green-500 text-white rounded-full font-bold'>
                                ✓ Available
                            </span>
                        ) : (
                            <span className='px-6 py-3 bg-red-500 text-white rounded-full font-bold'>
                                ✕ Booked
                            </span>
                        )}
                    </div>
                </motion.div>

                {/* Main Content Section */}
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12'>
                    {/* Room Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className='relative rounded-3xl overflow-hidden shadow-2xl group'
                    >
                        <img className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110' src={image} alt={name} />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#28140c]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </motion.div>

                    {/* Room Details */}
                    <motion.div
                        initial={{ opacity: 0, x: 0 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className='space-y-6'
                    >
                        <div className='bg-white rounded-3xl p-8 shadow-xl'>
                            <h3 className='text-2xl font-bold text-[#28140c] mb-4' style={{ fontFamily: 'Castoro, serif' }}>
                                Description
                            </h3>
                            <p className='text-[#28140c] leading-relaxed text-lg' style={{ fontFamily: 'EB Garamond, serif' }}>
                                {description}
                            </p>
                        </div>

                        {/* Quick Info Cards */}
                        <div className='grid grid-cols-3 gap-4'>
                            <div className='bg-[#ffbd59] rounded-2xl p-6 text-center shadow-lg hover:scale-105 transition-transform'>
                                <FcMoneyTransfer className='text-4xl mx-auto mb-2' />
                                <p className='text-[#28140c] font-bold text-xl'>${price}</p>
                                <p className='text-[#28140c] text-sm'>Per Night</p>
                            </div>
                            <div className='bg-[#ffbd59] rounded-2xl p-6 text-center shadow-lg hover:scale-105 transition-transform'>
                                <FcRating className='text-4xl mx-auto mb-2' />
                                <p className='text-[#28140c] font-bold text-xl'>{rating}</p>
                                <p className='text-[#28140c] text-sm'>Rating</p>
                            </div>
                            <div className='bg-[#ffbd59] rounded-2xl p-6 text-center shadow-lg hover:scale-105 transition-transform'>
                                <IoBed className='text-4xl mx-auto mb-2 text-[#28140c]' />
                                <p className='text-[#28140c] font-bold text-xl'>{bedType}</p>
                                <p className='text-[#28140c] text-sm'>Bed Type</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Room Overview Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className='bg-[#28140c] rounded-3xl p-8 md:p-12 shadow-2xl mb-12'
                >
                    <h2 className='text-3xl font-bold text-[#ffbd59] mb-8 text-center' style={{ fontFamily: 'Castoro, serif' }}>
                        Room Overview
                    </h2>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
                        <div className='bg-[#ffbd59]/10 rounded-2xl p-6 border-2 border-[#ffbd59]/30 hover:border-[#ffbd59] transition-all'>
                            <div className='flex items-center gap-3 mb-2'>
                                <div className='w-3 h-3 rounded-full bg-[#ffbd59]'></div>
                                <p className='text-[#ffbd59] font-bold' style={{ fontFamily: 'EB Garamond, serif' }}>Room Size</p>
                            </div>
                            <p className='text-white text-lg ml-6'>{roomSize}</p>
                        </div>

                        <div className='bg-[#ffbd59]/10 rounded-2xl p-6 border-2 border-[#ffbd59]/30 hover:border-[#ffbd59] transition-all'>
                            <div className='flex items-center gap-3 mb-2'>
                                <div className='w-3 h-3 rounded-full bg-[#ffbd59]'></div>
                                <p className='text-[#ffbd59] font-bold' style={{ fontFamily: 'EB Garamond, serif' }}>Room Beds</p>
                            </div>
                            <p className='text-white text-lg ml-6'>{roomBeds}</p>
                        </div>

                        <div className='bg-[#ffbd59]/10 rounded-2xl p-6 border-2 border-[#ffbd59]/30 hover:border-[#ffbd59] transition-all'>
                            <div className='flex items-center gap-3 mb-2'>
                                <div className='w-3 h-3 rounded-full bg-[#ffbd59]'></div>
                                <p className='text-[#ffbd59] font-bold' style={{ fontFamily: 'EB Garamond, serif' }}>Occupancy</p>
                            </div>
                            <p className='text-white text-lg ml-6'>{occupancy}</p>
                        </div>

                        <div className='bg-[#ffbd59]/10 rounded-2xl p-6 border-2 border-[#ffbd59]/30 hover:border-[#ffbd59] transition-all'>
                            <div className='flex items-center gap-3 mb-2'>
                                <div className='w-3 h-3 rounded-full bg-[#ffbd59]'></div>
                                <p className='text-[#ffbd59] font-bold' style={{ fontFamily: 'EB Garamond, serif' }}>View</p>
                            </div>
                            <p className='text-white text-lg ml-6'>{view}</p>
                        </div>
                    </div>
                </motion.div>

                {/* Reviews Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className='bg-white rounded-3xl p-8 md:p-12 shadow-2xl mb-12'
                >
                    <h2 className='text-3xl font-bold text-[#28140c] mb-8 text-center' style={{ fontFamily: 'Castoro, serif' }}>
                        Guest Reviews
                    </h2>

                    {reviews.length > 0 ? (
                        <Swiper
                            modules={[Autoplay, Pagination]}
                            spaceBetween={20}
                            slidesPerView={1}
                            breakpoints={{
                                640: { slidesPerView: 1 },
                                768: { slidesPerView: 2 },
                                1024: { slidesPerView: 3 },
                            }}
                            autoplay={{ delay: 3000, disableOnInteraction: false }}
                            pagination={{ clickable: true }}
                            loop={true}
                            className="pb-12"
                        >
                            {reviews.map((reviewDetails, index) => (
                                <SwiperSlide key={index}>
                                    <div className='bg-[#fffcec] rounded-2xl p-6 shadow-lg h-full border-2 border-[#ffbd59]/30 hover:border-[#ffbd59] transition-all'>
                                        <div className='flex items-center gap-4 mb-4'>
                                            <img 
                                                src={reviewDetails.userImage} 
                                                alt={reviewDetails.username}
                                                className='w-16 h-16 rounded-full object-cover border-4 border-[#ffbd59]'
                                            />
                                            <div>
                                                <h3 className='text-[#28140c] font-bold text-lg' style={{ fontFamily: 'EB Garamond, serif' }}>
                                                    {reviewDetails.username}
                                                </h3>
                                                <div className='flex items-center gap-2'>
                                                    <span className='text-[#ffbd59] text-2xl'>★</span>
                                                    <span className='text-[#28140c] font-bold'>{reviewDetails.ratings}/5</span>
                                                </div>
                                            </div>
                                        </div>
                                        <p className='text-[#28140c] mb-3 italic' style={{ fontFamily: 'EB Garamond, serif' }}>
                                            "{reviewDetails.comment}"
                                        </p>
                                        <p className='text-gray-500 text-sm'>{reviewDetails.timestamp}</p>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    ) : (
                        <div className='text-center py-12'>
                            <p className='text-[#28140c] text-lg' style={{ fontFamily: 'EB Garamond, serif' }}>
                                No reviews yet. Be the first to review this room!
                            </p>
                        </div>
                    )}
                </motion.div>

                {/* Book Now Button */}
                <div className='text-center pb-16'>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleBooking}
                        className='px-12 py-5 bg-[#ffbd59] text-[#28140c] rounded-full text-xl font-bold hover:bg-[#28140c] hover:text-[#ffbd59] transition-all shadow-2xl'
                        style={{ fontFamily: 'EB Garamond, serif' }}
                    >
                        🏨 Book This Room Now
                    </motion.button>
                </div>
            </div>

            {/* Booking Modal */}
            {available ? (
                <dialog id="my_modal_4" className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box bg-white border-4 border-[#ffbd59] rounded-3xl max-w-lg">
                        <div className='flex justify-between items-center mb-6'>
                            <h3 className='text-2xl font-bold text-[#28140c]' style={{ fontFamily: 'Castoro, serif' }}>
                                Confirm Booking
                            </h3>
                            <button 
                                onClick={() => document.getElementById('my_modal_4').close()}
                                className='btn btn-sm btn-circle bg-[#28140c] text-[#ffbd59] hover:bg-[#ffbd59] hover:text-[#28140c]'
                            >
                                ✕
                            </button>
                        </div>

                        <div className='bg-[#fffcec] rounded-2xl p-6 mb-6'>
                            <h4 className='text-xl font-bold text-[#28140c] mb-3'>{name}</h4>
                            <div className='space-y-2'>
                                <p className='text-[#28140c]'><strong>Occupancy:</strong> {occupancy}</p>
                                <p className='text-[#28140c]'><strong>Bed Type:</strong> {bedType}</p>
                                <p className='text-[#28140c] text-2xl font-bold'>${price} <span className='text-sm font-normal'>per night</span></p>
                            </div>
                        </div>

                        <form onSubmit={handleConfirm} className='space-y-6'>
                            <div>
                                <label className='block text-[#28140c] font-semibold mb-2' style={{ fontFamily: 'EB Garamond, serif' }}>
                                    Select Booking Date
                                </label>
                                <input 
                                    type='date' 
                                    name='date'
                                    className='input w-full bg-[#fffcec] border-2 border-[#ffbd59] text-[#28140c] focus:outline-none focus:border-[#28140c]'
                                    required
                                />
                            </div>

                            <div className='flex gap-3'>
                                <button 
                                    type='button'
                                    onClick={() => document.getElementById('my_modal_4').close()}
                                    className='flex-1 px-6 py-3 bg-gray-300 text-[#28140c] rounded-xl font-semibold hover:bg-gray-400 transition-all'
                                >
                                    Cancel
                                </button>
                                <button 
                                    type='submit'
                                    className='flex-1 px-6 py-3 bg-[#ffbd59] text-[#28140c] rounded-xl font-semibold hover:bg-[#28140c] hover:text-[#ffbd59] transition-all'
                                >
                                    Confirm Booking
                                </button>
                            </div>
                        </form>
                    </div>
                </dialog>
            ) : (
                <dialog id="my_modal_4" className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box bg-white border-4 border-red-500 rounded-3xl max-w-md">
                        <h3 className='text-2xl font-bold text-red-600 mb-4 text-center' style={{ fontFamily: 'Castoro, serif' }}>
                            Room Unavailable
                        </h3>
                        <p className='text-[#28140c] text-center mb-6' style={{ fontFamily: 'EB Garamond, serif' }}>
                            This room is already booked. Please check other available rooms.
                        </p>
                        <div className='text-center'>
                            <button 
                                onClick={() => document.getElementById('my_modal_4').close()}
                                className='px-8 py-3 bg-[#28140c] text-white rounded-xl font-semibold hover:bg-[#ffbd59] hover:text-[#28140c] transition-all'
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </dialog>
            )}
        </div>
    );
};

export default RoomDetails;