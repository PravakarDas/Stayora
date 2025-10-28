import React from 'react';
import { Link } from 'react-router';
import { motion } from "framer-motion";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const HotelCard = ({ hotel }) => {
  const { roomId, name, description, availability, image, price } = hotel;

  return (
    <>
      {/* Large Device Version */}
      <div className="hidden eb md:block relative w-full max-w-md overflow-hidden rounded-2xl shadow-lg group mx-auto">
        {/* Image */}
        <img
          src={image}
          alt={name}
          className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Initial Info (Bottom) */}
        <div className="absolute bottom-10 left-4 bg-black/60 px-6 py-4 rounded text-white text-[15px] font-medium w-[90%] 
          group-hover:opacity-0 transition duration-300">
          {name} – BDT-{price}
          <p className="text-center">
            {availability ? "Available" : "Unavailable"}
          </p>
        </div>

        {/* Hover Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileHover={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 bg-gradient-to-r from-yellow-400/30 via-yellow-200/20 to-transparent backdrop-blur-sm 
            px-6 py-8 opacity-0 group-hover:opacity-100 transition duration-500"
        >
          <h2 className="text-4xl mt-10 mb-25 text-center font-bold text-white">{name}</h2>
          <div className='flex  justify-center items-center gap-2'>
            <div className='flex-1'>

              <p className="text-lg mt-2 text-black line-clamp-3">{description}</p>
            </div>
            <div className='text-center'>
              <span className="text-lg font-semibold mt-2 text-white">BDT-{price}</span>
              <div>
                <button className="btn1 mt-10">
                  <Link to={`/roomDetails/${roomId}`}>Learn More</Link>
                </button>
              </div>

            </div>
          </div>



        </motion.div>
      </div>

      {/* Mobile Version */}
      <div className="block eb md:hidden bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-200">
        <img src={image} alt={name} className="w-full h-60 object-cover" />

        <div className="p-4">
          <h2 className="text-2xl font-bold text-black">{name}</h2>
          <p className="text-[20px] text-gray-700 mt-1">{description.slice(0, 60)}...</p>
          <span className="block mt-2 text-[#a8cc61] font-semibold text-lg">
            BDT-{price}
          </span>

          {/* Availability */}
          <div className="flex items-center gap-2 mt-2">
            {availability ? (
              <FaCheckCircle className="text-green-500" />
            ) : (
              <FaTimesCircle className="text-red-500" />
            )}
            <span className="text-gray-700">
              {availability ? "Available" : "Unavailable"}
            </span>
          </div>

          {/* Learn More */}
          <button className="mt-4 btn1 w-full font-bold">
            <Link to={`/roomDetails/${roomId}`}><span className='font-bold text-[12px]'>Learn More</span> </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default HotelCard;
