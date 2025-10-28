import axios from 'axios';
import React, { useEffect, useState } from 'react';
import HotelCard from './Components/HotelCard';
import { motion } from "framer-motion";

const AllRooms = () => {
    const [hotels, setHotels] = useState([]);
    const [sort, setSort] = useState('');

    useEffect(() => {
        let url = 'https://hotel-server-side-mu.vercel.app/hotels';
        if (sort) {
            url += `?sort=${sort}`;
        }

        axios.get(url)
            .then(res => setHotels(res.data))
            .catch(err => console.error(err));
    }, [sort]);

    return (
        <div className="min-h-screen py-16 px-4 md:px-8 lg:px-16 pt-30 relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-20 right-10 w-96 h-72 bg-[#ffbd59]/20 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-70 left-10 w-96 h-96 bg-[#ffbd59]/30 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute top-70 left-10 w-96 h-96 bg-[#ffbd59]/30 rounded-full blur-3xl pointer-events-none"></div>
            
            {/* Header Section */}
            <div className="max-w-7xl mx-auto mb-16 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    {/* Decorative Line Top */}
                    <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="flex items-center justify-center mb-8"
                    >
                        <div className="h-px bg-gradient-to-r from-transparent via-[#ffbd59] to-transparent w-full max-w-md"></div>
                    </motion.div>

                    {/* Title with Castoro font */}
                    <motion.h1 
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl md:text-7xl font-bold text-[#582a18] eb mb-6 relative inline-block"
                       
                    >
                        Discover Your Perfect Stay
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            className="absolute -top-6 -right-6 w-12 h-12 border-4 border-[#ffbd59] rounded-full"
                        ></motion.div>
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.6, delay: 1 }}
                            className="absolute -bottom-4 -left-4 w-8 h-8 bg-[#ffbd59] rounded-full"
                        ></motion.div>
                    </motion.h1>

                    {/* Description with EB Garamond font */}
                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="text-xl md:text-2xl text-[#28140c] max-w-3xl mx-auto leading-relaxed italic"
                        style={{ fontFamily: 'EB Garamond, serif' }}
                    >
                        Where comfort meets elegance, and every room tells a story of luxury.
                        <br />
                        <span className="text-[#f3a32b] font-semibold not-italic">Your journey to extraordinary begins here.</span>
                    </motion.p>

                    {/* Decorative Line Bottom */}
                    <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 1, delay: 0.7 }}
                        className="flex items-center justify-center mt-8"
                    >
                        <div className="h-px bg-gradient-to-r from-transparent via-[#ffbd59] to-transparent w-full max-w-md"></div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Sort Filter Section */}
            <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="max-w-7xl mx-auto mb-12 relative z-10"
            >
                <div className="flex items-center justify-between flex-wrap gap-4 bg-[#542816] rounded-2xl p-6 shadow-xl">
                    <div className="flex md:flex-row flex-col items-center gap-4">
                        <span className="text-[#ffbd59] font-bold text-lg" style={{ fontFamily: 'EB Garamond, serif' }}>
                            Refine Your Selection:
                        </span>
                        <select 
                            onChange={(e) => setSort(e.target.value)} 
                            className="bg-[#ffbd59] text-[#28140c] font-bold px-6 py-3 rounded-full border-none outline-none cursor-pointer hover:bg-white transition-all shadow-lg"
                            style={{ fontFamily: 'EB Garamond, serif' }}
                        >
                            <option value="">Default</option>
                            <option value="price_asc">Price Low to High</option>
                            <option value="price_desc">Price High to Low</option>
                        </select>
                    </div>
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2 }}
                        className="text-white text-sm"
                        style={{ fontFamily: 'EB Garamond, serif' }}
                    >
                        <span className="text-[#ffbd59] font-bold">{hotels.length}</span> exquisite rooms available
                    </motion.div>
                </div>
            </motion.div>

            {/* Room Cards Grid */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="max-w-7xl mx-auto relative z-10"
            >
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8'>
                    {hotels.map((hotel, index) => (
                        <motion.div
                            key={hotel.roomId}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 1.2 + (index * 0.1) }}
                        >
                            <HotelCard hotel={hotel} />
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Decorative Bottom Wave */}
            <div className="absolute w-full bottom-0 left-0 right-0 pointer-events-none">
                <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-24 opacity-30">
                    <path d="M0 0L60 10C120 20 240 40 360 43.3C480 46.7 600 33.3 720 26.7C840 20 960 20 1080 26.7C1200 33.3 1320 46.7 1380 53.3L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="#ffbd59"/>
                </svg>
            </div>
        </div>
    );
};

export default AllRooms;