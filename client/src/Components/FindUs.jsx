import React from 'react';
import { motion } from 'framer-motion';
import { Map, Marker } from 'pigeon-maps';

const FindUs = () => {
  const radissonCoords = [22.3476, 91.8231];

  return (
    <section className="py-16 z-5 overflow-hidden relative px-4 pt-30 md:px-8 lg:px-16">
       <div className="absolute -top-30 overflow-hidden md:left-30 w-96 h-96 md:bg-[#ffbd59]/30 bg-[#ffbd59]/15 rounded-full blur-3xl pointer-events-none"></div>
      {/* Section Header */}
      <div className="max-w-7xl mx-auto mb-16">
        <div className="text-center">
          <div className="relative inline-block mb-6">
            <h2 className="text-5xl beau md:text-6xl font-bold text-[#28140c] relative z-10">
              Find Us
            </h2>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-2 bg-[#ffbd59]"></div>
          </div>
          <p className="mt-8 eb text-[22px] text-[#28140c] max-w-3xl mx-auto leading-relaxed">
            Experience the perfect blend of comfort and luxury at AurIs Hotel, located in the heart of Chattogram's vibrant <strong className="text-[#ffbd59]">Lalkhan Bazar</strong>. 
            We're easy to reach, surrounded by shopping centers, local attractions, and business hubs.
          </p>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="md:px-6 px-2 lg:px-10 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {/* Location Details Card */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex overflow-hidden"
          >
            <div className="bg-[#28140c] lg:mt-35 overflow-hidden relative z-5 castoro rounded-3xl p-8 md:p-12 shadow-2xl w-full flex flex-col">
               <div className="absolute top-0 overflow-hidden left-0 md:left-8 w-96 h-96  bg-[#4e2211] rounded-full blur-3xl -z-5 pointer-events-none"></div>
              <div className="inline-block bg-[#ffbd59] px-4 py-2 rounded-full mb-6 w-fit">
                <span className="text-[#28140c] font-bold text-sm tracking-wider uppercase">Our Location</span>
              </div>
              
              <h3 className="text-4xl beau font-bold text-[#ffbd59] mb-6">
                Visit AurIs Hotel
              </h3>
              
              <div className="w-16 h-1 bg-[#ffbd59] mb-6"></div>
              
              <p className="text-white leading-relaxed mb-8">
                AurIs Hotel is situated in <strong className="text-[#ffbd59]">Lalkhan Bazar, Chattogram</strong>, a prime location known for its lively atmosphere and excellent connectivity. 
                Whether you're visiting for business or leisure, our central position makes it easy to explore the city.
              </p>

              {/* Contact Details */}
              <div className="space-y-5 flex-grow">
                <div className="flex items-start gap-4 bg-[#ffbd59]/10 rounded-xl p-4 hover:bg-[#ffbd59]/20 transition-all border border-[#ffbd59]/20">
                  <div className="text-2xl mt-1">📍</div>
                  <div>
                    <div className="font-semibold text-[#ffbd59] mb-1">Address</div>
                    <div className="text-white">AurIs Hotel, Lalkhan Bazar, Chattogram, Bangladesh</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-[#ffbd59]/10 rounded-xl p-4 hover:bg-[#ffbd59]/20 transition-all border border-[#ffbd59]/20">
                  <div className="text-2xl mt-1">📞</div>
                  <div>
                    <div className="font-semibold  text-[#ffbd59] mb-1">Phone</div>
                    <a href="tel:01569029731" className="text-white hover:text-[#ffbd59] transition-colors">
                      01569029731
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-[#ffbd59]/10 rounded-xl p-4 hover:bg-[#ffbd59]/20 transition-all border border-[#ffbd59]/20">
                  <div className="text-2xl mt-1">📧</div>
                  <div>
                    <div className="font-semibold text-[#ffbd59] mb-1">Email</div>
                    <a href="mailto:fahmidanimra@gmail.com" className="text-white hover:text-[#ffbd59] transition-colors break-all">
                      fahmidanimra@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-[#ffbd59]/10 rounded-xl p-4 hover:bg-[#ffbd59]/20 transition-all border border-[#ffbd59]/20">
                  <div className="text-2xl mt-1">🕐</div>
                  <div>
                    <div className="font-semibold text-[#ffbd59] mb-1">Available</div>
                    <div className="text-white">Open 24/7 — We're always ready to welcome you</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map Section */}
          <motion.div 
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex"
          >
            <div className="w-full flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 bg-[#ffbd59] rounded-full animate-pulse"></div>
                <h3 className="text-2xl castoro font-bold text-[#28140c]">
                  Live Hotel Location
                </h3>
              </div>
              
              <div className="rounded-3xl overflow-hidden   flex-grow">
                <Map height={500} defaultCenter={radissonCoords} defaultZoom={15}>
                  <Marker anchor={radissonCoords}>
                    <img
                      src="https://i.ibb.co/nZvbkFK/2355144.jpg"
                      alt="AurIs Hotel"
                      width={50}
                      height={50}
                      className="animate-bounce"
                    />
                  </Marker>
                </Map>
              </div>

            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom CTA Section */}
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative bg-[#28140c] rounded-3xl overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#432113] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#532716] rounded-full blur-3xl"></div>
          
          <div className="relative z-10 text-center py-12 px-6">
            <h3 className="text-3xl castoro md:text-4xl font-bold text-[#ffbd59] mb-4">
              Need Help Finding Us?
            </h3>
            <p className="text-lg eb text-white max-w-2xl mx-auto leading-relaxed mb-6">
              Call or email anytime — our team is happy to guide you. We look forward to welcoming you to <span className="text-[#ffbd59] font-bold">AurIs Hotel</span>.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a 
                href="tel:01569029731"
                className="bg-[#ffbd59] text-[#28140c] px-8 py-4 rounded-full font-bold hover:bg-white transition-all transform hover:scale-105 shadow-lg"
              >
                📞 Call Now
              </a>
              <a 
                href="mailto:fahmidanimra@gmail.com"
                className="bg-white text-[#28140c] px-8 py-4 rounded-full font-bold hover:bg-[#ffbd59] transition-all transform hover:scale-105 shadow-lg"
              >
                📧 Send Email
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FindUs;