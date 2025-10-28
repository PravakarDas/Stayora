import React from 'react';
import { motion } from 'framer-motion';
import { FaSpa, FaConciergeBell, FaSwimmer, FaWifi, FaUtensils, FaStar } from 'react-icons/fa';
import {
  Coffee,
  BedDouble,
  Dumbbell,
  Utensils,
  Calendar,

  Wifi,
  Leaf,
} from "lucide-react";



const HomeSections = () => {
  const features = [
    {
      text: "Complimentary breakfast to start your day right",
      icon: Coffee,
    },
    {
      text: "Luxury rooms with king-size beds, modern furniture, and in-room services",
      icon: BedDouble,
    },
    {
      text: "Fully equipped fitness center and gym services",
      icon: Dumbbell,
    },
    {
      text: "Multi-cuisine restaurants with fine dining experience",
      icon: Utensils,
    },
    {
      text: "Event spaces for weddings, parties, and corporate gatherings",
      icon: Calendar,
    },
    {
      text: "World-class spa and wellness facilities",
      icon: Leaf,
    },
    {
      text: "High-speed Wi-Fi and smart in-room technology",
      icon: Wifi,
    },
    {
      text: "Eco-friendly practices and sustainable hospitality",
      icon: Leaf,
    },
  ];

  return (
    <div className='mt-20 md:mt-30 mb-10 '>








      {/* Banner */}
      <div
        className="relative z-5  h-[500px] md:h-[600px] bg-cover bg-center flex flex-col w-full justify-end my-20 md:my-30"
        style={{
          backgroundImage:
            "url('https://i.ibb.co.com/Xxm0Bn7s/Blue-and-White-Simple-Hotel-Promotion-Presentation-2.jpg')",
        }}
      >

        <div className="absolute inset-0 dark:bg-black/40" />
        <div className="absolute hidden lg:block -bottom-15 overflow-hidden left-23  w-72 -z-5 h-72  bg-gradient-to-b from-[#f6672a]  to-transparent rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute hidden lg:block -bottom-15 overflow-hidden left-96  w-72 -z-5 h-72  bg-gradient-to-b from-[#f6672a]  to-transparent rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute hidden lg:block -bottom-15 overflow-hidden left-63  w-72 -z-5 h-72  bg-gradient-to-b from-[#f6672a]  to-transparent rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute hidden lg:block -bottom-15 overflow-hidden right-96  w-72 -z-5 h-72 bg-gradient-to-b from-[#f6672a]  to-transparent rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute hidden lg:block -bottom-15 overflow-hidden right-63  w-72 -z-5 h-72 bg-gradient-to-b from-[#f6672a]  to-transparent rounded-full blur-3xl pointer-events-none"></div>
        {/* Heading */}
        <motion.h1
          className="castoro shadow-2xl shadow-black text-white text-3xl md:text-5xl font-bold py-6 px-2 md:p-12 absolute mt-45 sm:mt-35 top-0 md:left-15 right-0 z-10"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Our Promise,{" "}
          <span className="text-shadow-2xs shadow-2xl shadow-black">Your Comfort</span>
        </motion.h1>

        {/* Cards (Large Devices Only) */}
        <div className="hidden lg:flex items-center justify-center gap-2 relative z-10 -mb-70 px-6 md:px-12">
          {/* Card 1 */}
          <motion.div
            className="relative mt-200 flex-1"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >

            <img
              src="https://i.ibb.co.com/5hJhxkLm/Blue-Building-Apartment-Real-Estate-Logo-2-removebg-preview.png"
              alt="Luxury & Comfort Shape"
              className="w-full h-full object-contain"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
              <h3 className="text-2xl text-[#ac6f26] castoro font-bold mb-2">
                Luxury & Comfort
              </h3>
              <p className="p-2 eb text-[19px]">
                Experience cozy rooms with modern design, premium beds, and a peaceful atmosphere.
              </p>
            </div>
          </motion.div>

          {/* Arrow */}
          <img
            src="https://i.ibb.co.com/mmDs6Vr/colored-arrow-removebg-preview.png"
            alt="arrow"
            className="h-22 mt-200 mx-2"
          />

          {/* Card 2 */}
          <motion.div
            className="relative mt-200 flex-1"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <img
              src="https://i.ibb.co.com/5hJhxkLm/Blue-Building-Apartment-Real-Estate-Logo-2-removebg-preview.png"
              alt="Personalized Hospitality Shape"
              className="w-full h-full object-contain"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
              <h3 className="text-2xl text-[#ac6f26] castoro font-bold mb-2">
                Personalized Hospitality
              </h3>
              <p className="p-2 eb text-[19px]">
                Our team ensures every guest feels at home with warm service and attention to every detail.
              </p>
            </div>
          </motion.div>

          {/* Arrow */}
          <img
            src="https://i.ibb.co.com/mmDs6Vr/colored-arrow-removebg-preview.png"
            alt="arrow"
            className="h-22 mt-200"
          />

          {/* Card 3 */}
          <motion.div
            className="relative mt-200 flex-1"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <img
              src="https://i.ibb.co.com/5hJhxkLm/Blue-Building-Apartment-Real-Estate-Logo-2-removebg-preview.png"
              alt="Events & Celebrations Shape"
              className="w-full h-full object-contain"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
              <h3 className="text-2xl text-[#ac6f26] castoro font-bold mb-2">
                Events & Celebrations
              </h3>
              <p className="p-2 text-[19px] font-medium eb">
                Make birthdays, weddings, and parties unforgettable with our event hosting services.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Text for Small & Medium Devices */}
        <div className="relative z-10 -mt-11 md:mt-0 p-2 md:p-12">
          <motion.p
            className="eb text-white text-2xl font-medium lg:ml-12 ml-5 py-3 md:p-6 mb-4 z-10 lg:hidden"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Every stay should feel like home — only better. We blend warmth with convenience for unforgettable moments.
          </motion.p>
        </div>
      </div>
















      {/* What Makes Us Different */}
      <div className="mb-30 md:mb-50 mt-30 md:mt-90">
        <h1 className="cinzel text-[#ac6f26] castoro p-2 dark:text-[#ad7026] text-4xl text-center mb-20 font-bold">
          What Makes Us Different
        </h1>

        <div
          className="relative bg-fixed bg-center bg-cover flex justify-center"
          style={{
            backgroundImage:
              "url('https://i.ibb.co.com/99rfKN2h/lobby-398845-1280.jpg')",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Scrollable grid container */}
          <div className="relative z-10 max-h-[800px] overflow-y-auto w-full px-4 md:px-12 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="bg-white/10 backdrop-blur-md rounded-2xl p-6 flex flex-col items-center gap-4 text-white"
                  >
                    <Icon className="w-8 h-8 text-[#ffffff] flex-shrink-0" />
                    <p className="font-semibold text-lg text-center">{item.text}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>


      {/* Breakfast Section */}
      <div className="md:flex overflow-hidden relative bg-[#28140c] z-5 md:flex-row  max-h-min gap-3 flex-col  mb-30">
        {/* Left Section with Black Background */}
        <div className="absolute top-10 overflow-hidden -left-30 md:left-10  w-96 -z-5 h-96 bg-[#4f2615] rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-70 md:bottom-0 overflow-hidden -left-20  md:left-8 w-96 -z-5 h-96 bg-[#4f2615] rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 overflow-hidden lg:block lg:left-40 hidden w-96 -z-5 h-96 bg-[#4f2615] rounded-full blur-3xl pointer-events-none"></div>
        <div className="flex-1 py-10 md:py-20 px-2 md:px-10 lg:px-20 relative  rounded-2xl p-4">
          <div className="flex flex-col mt-15 group">
            <h1 className="castoro font-bold md:text-right text-center md:px-10 mb-20 md:mb-30 text-4xl text-[#b77729]">
              <span className="text-white text-6xl md:text-7xl dark:text-white beau">A Morning </span>
              <br />
              <br />
              Worth Waking Up For
            </h1>
            <img
              className="h-52 object-cover shadow-2xl rounded-b-md shadow-black dark:shadow-none"
              src="https://i.ibb.co.com/v5KHytK/Served-Outside-photography-natural-light-1.jpg"
              alt=""
            />
            <p className="eb mb-15 mt-7 text-[20px] dark:text-white text-white font-bold">
              Wake up to a breakfast experience like no other. Begin your morning with our complimentary gourmet spread, crafted to delight every palate. From golden, buttery pastries and delicate croissants to seasonal fruits and creamy yogurts, every bite is a celebration of freshness.
              For those craving something hearty, indulge in perfectly cooked farm-fresh eggs, crisp parathas, and tender grilled delights. Complement your meal with aromatic coffee, soothing teas, or freshly pressed juices — turning every morning into a moment of pure indulgence
            </p>
          </div>
        </div>

        {/* Right Section with Image Background + Black Overlay */}
        <div className="flex-1 md:pt-40 px-2 md:px-5 relative rounded-2xl overflow-hidden">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{
              backgroundImage:
                "url('https://i.ibb.co.com/kgKpnvft/Parede-de-tijolo-velha-do-vintage-superf-cie-escura-decorativa-da-parede-de-tijolo-para-o-fundo-Foto.jpg')",
            }}
          />
          {/* Black Overlay */}
          <div className="absolute inset-0 bg-black/50 z-10"></div>

          <div className="relative z-20 flex flex-col gap-3 rounded-2xl">
            <div className="flex lg:grid lg:grid-cols-5 gap-3">
              <div className="col-span-3 overflow-hidden group">
                <img
                  className="rounded-tl-2xl object-cover md:h-96 w-full transition-transform duration-700 ease-in-out group-hover:scale-110 group-hover:rotate-2"
                  src="https://i.ibb.co.com/Tqq1S0F6/table-2600954-1280.jpg"
                  alt=""
                />
              </div>
              <div className="col-span-2 overflow-hidden group">
                <img
                  className="rounded-tr-2xl md:h-96 w-full transition-transform duration-700 ease-in-out group-hover:scale-110 group-hover:-rotate-2"
                  src="https://i.ibb.co.com/KcBT4QMq/pastries-1749603-1280.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="col-span-3 overflow-hidden rounded-b-2xl group">
              <img
                className="rounded-b-2xl transition-transform duration-700 ease-in-out group-hover:scale-110"
                src="https://i.ibb.co.com/0jnHFNdx/breakfast-4474527-1280.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      {/* <div className='md:flex max-h-min gap-3 flex-col py-20 px-2 md:px-10 lg:px-20 md:flex-row bg-white dark:bg-black mb-30'>
        <div className='flex-1'>
          <div className='flex flex-col mt-15 group'>
            <h1 className='castoro font-bold md:text-right text-center md:px-10  mb-30 text-4xl text-[#b77729] '>
              <span className=' text-black dark:text-white '>A Morning </span>
              <br />
              <br />
              Worth Waking Up For
            </h1>
            <img
              className='h-52  object-cover shadow-2xl rounded-b-md shadow-white dark:shadow-none '
              src="https://i.ibb.co.com/v5KHytK/Served-Outside-photography-natural-light-1.jpg"
              alt=""
            />
            <p className='eb mb-15 mt-7 text-[20px]  dark:text-white font-bold   '>
              Wake up to a breakfast experience like no other. Begin your morning with our complimentary gourmet spread, crafted to delight every palate. From golden, buttery pastries and delicate croissants to seasonal fruits and creamy yogurts, every bite is a celebration of freshness.
              For those craving something hearty, indulge in perfectly cooked farm-fresh eggs, crisp parathas, and tender grilled delights. Complement your meal with aromatic coffee, soothing teas, or freshly pressed juices — turning every morning into a moment of pure indulgence
            </p>
          </div>
        </div>

        <div className='flex-1'>
          <div className='flex  flex-col gap-3 rounded-2xl'>
            <div className='flex lg:grid lg:grid-cols-5 gap-3'>
              <div className='col-span-3 overflow-hidden group'>
                <img
                  className='rounded-tl-2xl object-cover md:h-96 w-full transition-transform duration-700 ease-in-out group-hover:scale-110 group-hover:rotate-2'
                  src="https://i.ibb.co.com/Tqq1S0F6/table-2600954-1280.jpg"
                  alt=""
                />
              </div>
              <div className='col-span-2 overflow-hidden group'>
                <img
                  className='rounded-tr-2xl md:h-96 w-full transition-transform duration-700 ease-in-out group-hover:scale-110 group-hover:-rotate-2'
                  src="https://i.ibb.co.com/KcBT4QMq/pastries-1749603-1280.jpg"
                  alt=""
                />
              </div>.
            </div>
            <div className='col-span-3 overflow-hidden rounded-b-2xl group'>
              <img
                className='rounded-b-2xl transition-transform duration-700 ease-in-out group-hover:scale-110 '
                src="https://i.ibb.co.com/0jnHFNdx/breakfast-4474527-1280.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div> */}

      {/* Spa Section */}
      <div className="bg-[#28140c] overflow-hidden z-5 px-6 md:px-10 dark:bg-[#28140c] relative flex flex-col md:flex-row items-center justify-center py-16  gap-10 mb-30">
        <div className="absolute top-0 overflow-hidden -left-25 md:left-8 w-96 -z-5 h-96 bg-[#4f2615] rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 overflow-hidden left-20 md:left-8 w-96 -z-5 h-96 bg-[#4f2615] rounded-full blur-3xl pointer-events-none"></div>
        <div className="flex-1">
          <h1 className="md:text-5xl text-4xl text-center md:text-left castoro font-bold text-[#ffbd59] dark:text-[#ffbd59] text-wrap mb-6">
            Larana Spa — Relaxation Right Here at Our Hotel
          </h1>
          <p className="text-white eb text-[20px] dark:text-white text-lg leading-relaxed">
            Enjoy total relaxation without leaving the hotel. At Larana Spa, we offer soothing massages, refreshing facials, and calming herbal treatments designed to help you unwind after a busy day. Whether you want to relax your body or clear your mind, our spa services are here to make your stay even better. Treat yourself to some peaceful “me time” just steps away from your room.
          </p>
        </div>
        <div className='flex-1'>
          <div className="overflow-hidden bg-[#fffcec] rounded-lg">
            <img
              src="https://i.ibb.co.com/vxsh2Nkm/Transform-Your-Space-with-Luxurious-Home-Spa-Ideas.jpg"
              alt="Spa Pool"
              className="w-full h-[500px] object-contain transition-transform duration-700 ease-in-out hover:scale-110"
            />
          </div>
        </div>
        <div className="absolute top-5/6 md:top-50 md:ml-70 md:flex-col flex gap-1">
          <div className="overflow-hidden bg-black py-2 pl-2 object-cover w-full h-36 rounded-lg col-span-2 md:col-span-1">
            <img
              src="https://i.ibb.co.com/PZBHhCL6/spa4.jpg"
              alt="Spa Room"
              className="h-full object-cover transition-transform duration-700 ease-in-out hover:scale-110"
            />
          </div>
          <div className="overflow-hidden w-full bg-black h-36 rounded-lg">
            <img
              src="https://i.ibb.co.com/9mk1062j/spa2.jpg"
              alt="Spa Lounge"
              className="h-full object-cover p-2 transition-transform duration-700 ease-in-out hover:scale-110"
            />
          </div>
        </div>
      </div>

    </div>
  );
};

export default HomeSections;
