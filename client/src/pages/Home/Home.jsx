import axios from 'axios';
import React, { useEffect, useState } from 'react';
import HotelCard from '../../Components/HotelCard';
import { motion, AnimatePresence } from "framer-motion";
import '../../App.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import HomeSections from '../../Components/Homesections';

// Hotel Slider Component
const HotelSlider = ({ hotels }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Responsive cards per view
  const getCardsPerView = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 4; // lg
      if (window.innerWidth >= 768) return 2;  // md
      return 1; // sm
    }
    return 4;
  };

  const [cardsPerView, setCardsPerView] = useState(getCardsPerView());

  useEffect(() => {
    const handleResize = () => {
      setCardsPerView(getCardsPerView());
      setCurrentIndex(0);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSlides = Math.ceil(hotels.length / cardsPerView);
  
  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const getCurrentCards = () => {
    const start = currentIndex * cardsPerView;
    const end = start + cardsPerView;
    return hotels.slice(start, end);
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <div className="relative w-full px-4  mx-6 sm:px-10  py-8">
      {/* Slider Container */}
      <div className="relative overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            className={`grid gap-2.5 lg:gap-5 ${
              cardsPerView === 4 ? 'grid-cols-4' :
              cardsPerView === 2 ? 'grid-cols-2' :
              'grid-cols-1'
            }`}
          >
            {getCurrentCards().map((hotel) => (
              <HotelCard key={hotel.roomId} hotel={hotel} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Previous Button */}
      {currentIndex > 0 && (
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={prevSlide}
          className="absolute left-0 md:top-1/2 -bottom-10 -translate-y-1/2 -translate-x-2 bg-[#ac6f26] text-white p-4 rounded-full  md:rounded-br-4xl md:rounded-tl-2xl shadow-xl hover:bg-[#8b5a1f] transition-all z-10"
          aria-label="Previous slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </motion.button>
      )}

      {/* Next Button */}
      {currentIndex < totalSlides - 1 && (
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={nextSlide}
          className="absolute right-0 md:top-1/2 -bottom-10 -translate-y-1/2 translate-x-2 bg-[#ac6f26] text-white p-4 rounded-full md:rounded-bl-4xl md:rounded-tr-2xl shadow-xl hover:bg-[#8b5a1f] transition-all z-10"
          aria-label="Next slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </motion.button>
      )}

      {/* Dots Navigation */}
      <div className="flex justify-center gap-2 mt-8">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => goToSlide(index)}
            className={`transition-all rounded-full ${
              index === currentIndex
                ? 'bg-[#ac6f26] w-12 h-3'
                : 'bg-[#ac6f26]/30 w-3 h-3 hover:bg-[#ac6f26]/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="text-center mt-4">
        <span className="text-[#ac6f26] font-semibold castoro">
          {currentIndex + 1} / {totalSlides}
        </span>
      </div>
    </div>
  );
};

const Home = () => {

    const [hotels, setHotels] = useState([]);

    useEffect(() => {
        axios.get('https://hotel-server-side-mu.vercel.app/topratedhotels').then(res => {
            const sliceData = res.data.slice(0, 8)
            setHotels(sliceData)
        }).catch(error => {
            console.log(error)
        })
    }, [])


    return (
        <div className='bg-[#fffcec] dark:bg-[#fffcec]' >
            {/* <Modal></Modal> */}

            <div className="relative flex">

                <div className="flex flex-1/3">
                    <div className="lg:flex-1">
                        <img
                            className="h-[650px] hidden sm:block w-full object-cover opacity-90"
                            src="https://i.ibb.co.com/rGK87Q2V/banner1.jpg"
                            alt=""
                        />
                    </div>
                    <div>
                        <img
                            className="h-[650px] w-full object-cover opacity-9=70 sm:opacity-80"
                            src="https://i.ibb.co.com/nsGrg9sM/banner2.jpg"
                            alt=""
                        />
                    </div>
                    <div className="lg:flex-1">
                        <img
                            className="h-[650px] w-full object-cover  sm:opacity-80"
                            src="https://i.ibb.co.com/TM6S9QJB/banner3.jpg"
                            alt=""
                        />
                    </div>
                </div>

                <div className="flex-1">
                    <img
                        className="h-[650px]  sm:w-full object-cover sm:opacity-80"
                        src="https://i.ibb.co.com/Y7SsyKYV/banner4.jpg"
                        alt=""
                    />
                     <div className="absolute sm:hidden inset-0 bg-gradient-to-b from-black/70 to-transparent"></div>

                </div>


                <div className="absolute hidden sm:block inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>


                <div className="absolute inset-0  text-center sm:text-left pt-60 sm:pt-25 flex flex-col justify-center sm:bg-gradient-to-r sm:from-black/80 sm:to-transparent bg-gradient-to-r from-black/40 to-transparent items-start px-6 sm:px-10 lg:max-w-2/5">
                    <h1 className="lg:text-center text-5xl md:text-6xl beau  font-bold text-white drop-shadow-lg">
                        Book <span className='sm:text-[#ac6f26] text-[#f39726]  '>Moments</span>, Not Just <span className='sm:text-[#ac6f26] text-[#f39726]'>Rooms</span>
                    </h1>
                    <p className="pt-10 sm:mt-7 castoro text-center text-lg  text-white max-w-xl drop-shadow-md">
                        Book your dream stay in seconds — comfort, luxury, and the best deals await you
                    </p>
                </div>
            </div>

            <motion.h1
                initial={{ opacity: 0, x: 20, scale: 0 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 1.2 }}
                className='lg:text-5xl md:text-4xl text-3xl castoro mt-20 md:mt-30 md:mb-10 md:my-20 text-center font-bold fascinate-inline-regular text-[#8d2e0f]'>
                Top Rated Rooms
            </motion.h1>

                <div className= 'mx-0 md:mx-10 flex justify-center '>
                      <HotelSlider hotels={hotels} />

                </div>
          

            <HomeSections></HomeSections>

        </div>
    );
};

export default Home;