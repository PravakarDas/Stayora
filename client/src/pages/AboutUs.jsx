import React from "react";

export default function AboutUs() {
  return (
    <div className="md:my-5 overflow-hidden  lg:px-28">
      <div className="absolute top-70 overflow-hidden -left-20 md:left-10 w-96 h-96 md:bg-[#ffbd59]/30 bg-[#ffbd59]/15 rounded-full blur-3xl pointer-events-none"></div>
            
      {/* Banner with image */}
      <div className="relative overflow-x-hidden pt-20 md:h-[600px] rounded-lg overflow-hidden shadow-lg">
        <img
          src="https://i.ibb.co/LdCmQ309/Blue-and-White-Simple-Hotel-Promotion-Presentation.jpg"
          alt="Hotel Banner"
          className="w-full my-5 h-[300px] md:h-full  object-cover"
        />
        {/* Overlay */}
        <div className="absolute  " />

        <div className="absolute top-3/5 mt-5 bg-white/60 sm:bg-none md:top-2/3 lg:left-8 left-2 transform -translate-y-1/2 max-w-lg  px-6 py-2 lg:p-6 md:p-12  castoro font-bold text-[#445c12] md:text-lg text-[10px] md:text-[20px]">
          Welcome to Serenity Stays — where comfort meets elegance and every guest is family.
        </div>
      </div>

      {/* Our Story section */}




      <section className="mt-16 overflow-hidden px-4 md:px-8 lg:px-16">
        {/* Section Header */}
        <div className="max-w-7xl o mx-auto mb-16">
          <div className="relative  inline-block">
            <h2 className="text-5xl castoro md:text-6xl font-bold text-[#28140c] dark:text-[#28140c] relative z-10">
              Our Story
            </h2>
            <div className="absolute -bottom-2 left-0 w-32 h-2 bg-[#ffbd59]"></div>
            <div className="absolute -bottom-2 left-36 w-16 h-2 bg-[#ffbd59] opacity-50"></div>
          </div>
        </div>

        {/* Founding Story with Image Grid */}
        <div className="max-w-7xl mx-auto mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Image Mosaic */}
            <div className="order-2 relative lg:order-1 z-5 grid grid-cols-6 grid-rows-6 gap-3 h-[400px] md:h-[500px]">
              <div className="absolute top-20 overflow-hidden right-10 w-96 border-2 h-96 bg-[#ffbd59]/70 rounded-full blur-3xl -z-5 pointer-events-none"></div>
              <div className="col-span-4 row-span-4 relative overflow-hidden rounded-2xl shadow-2xl group">
                <img
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800"
                  alt="Hotel Exterior"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#28140c]/60 to-transparent"></div>
              </div>
              <div className="col-span-2 row-span-3 relative overflow-hidden rounded-xl shadow-lg group">
                <img
                  src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400"
                  alt="Hotel Room"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="col-span-2 row-span-3 col-start-5 row-start-4 relative overflow-hidden rounded-xl shadow-lg group">
                <img
                  src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400"
                  alt="Hotel Lobby"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="col-span-4 row-span-2 col-start-1 row-start-5 relative overflow-hidden rounded-xl shadow-lg group">
                <img
                  src="https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=600"
                  alt="Hotel Service"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>

            {/* Content */}
            <div className="order-1 relative lg:order-2 z-5 space-y-6">
              <div className="absolute top-30 right-10 w-96 border-2 h-96 bg-[#ffbd59]/20 rounded-full blur-3xl -z-5 pointer-events-none"></div>
            
              <div className="inline-block bg-[#ffbd59] px-4 py-2 rounded-full">
                <span className="text-[#28140c] font-bold text-sm tracking-wider uppercase">Est. 2025</span>
              </div>
              <h3 className="text-3xl castoro md:text-4xl font-bold text-[#28140c] dark:text-[#28140c]">
                How It All Began
              </h3>
              <div className="w-16 h-1 bg-[#ffbd59]"></div>
              <p className="text-[#28140c] eb text-[21px] dark:text-[#28140c] leading-relaxed ">
                AurIs was founded in 2025 with a vision to revolutionize hotel booking experiences. We started as a passionate team dedicated to connecting travelers with their perfect accommodations. Our platform quickly gained recognition for its user-friendly interface, transparent pricing, and commitment to making hotel booking seamless and enjoyable for everyone.
              </p>
            </div>
          </div>
        </div>

        {/* Growth Journey - Reverse Layout */}
        <div className="max-w-7xl mx-auto mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Content */}
            <div className="space-y-6 z-5 relative">
              <div className="absolute top-30 -left-5 w-96 border-2 h-96 bg-[#ffbd59]/20 rounded-full blur-3xl -z-5 pointer-events-none"></div>
              <div className="inline-block bg-[#28140c] px-4 py-2 rounded-full">
                <span className="text-[#ffbd59] font-bold text-sm tracking-wider uppercase">Growing Fast</span>
              </div>
              <h3 className="text-3xl castoro md:text-4xl font-bold text-[#28140c] dark:text-[#28140c]">
                Our Growth Journey
              </h3>
              <div className="w-16 h-1 bg-[#ffbd59]"></div>
              <p className="text-[#28140c] eb text-[21px] dark:text-[#28140c] leading-relaxed text-lg">
                Since our launch, AurIs has rapidly expanded its network of partner hotels and satisfied customers. Our innovative approach to hotel booking has attracted thousands of travelers who trust us to find their ideal stays. We've built a platform that combines cutting-edge technology with personalized service to deliver exceptional booking experiences.
              </p>
              <div className="flex gap-8 pt-4">
                <div>
                  <div className="text-4xl font-bold text-[#ffbd59]">500+</div>
                  <div className="text-sm text-[#28140c] dark:text-[#28140c]">Partner Hotels</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#ffbd59]">5K+</div>
                  <div className="text-sm text-[#28140c] dark:text-[#28140c]">Happy Travelers</div>
                </div>
              </div>
            </div>

            {/* Image Collage */}
            <div className="grid grid-cols-2 gap-3 h-[400px] md:h-[500px]">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
                <img
                  src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=500"
                  alt="Hotel Staff"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#28140c]/60 to-transparent"></div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="relative overflow-hidden rounded-xl shadow-lg flex-1 group">
                  <img
                    src="https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400"
                    alt="Reception"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="relative overflow-hidden rounded-xl shadow-lg flex-1 group">
                  <img
                    src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=400"
                    alt="Hotel Interior"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services - Full Width Feature */}
        <div className="max-w-7xl mx-auto mb-24">
          <div className="bg-[#28140c] rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
              {/* Small Images Grid */}
              <div className="lg:col-span-2 grid grid-cols-2 gap-0">
                <div className="relative h-48 lg:h-auto overflow-hidden group">
                  <img
                    src="https://images.unsplash.com/photo-1540541338287-41700207dee6?w=400"
                    alt="Spa"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="relative h-48 lg:h-auto overflow-hidden group">
                  <img
                    src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400"
                    alt="Dining"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="relative h-48 lg:h-auto overflow-hidden group">
                  <img
                    src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400"
                    alt="Pool"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="relative bg-[#ffbd59] h-48 lg:h-auto  group">
                  <div className="absolute -top-9 -left-8  z-50">
                    <img
                      src="https://i.ibb.co.com/PGvBRyZN/Belmond-El-Encanto-Samuel-Elkins.jpg"
                      alt="Pool"
                      className="w-28 h-24 rounded-2xl object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="lg:col-span-3 relative z-5 p-8 md:p-12 flex flex-col justify-center">
                <div className="inline-block bg-[#ffbd59] px-4 py-2 rounded-full w-fit mb-6">
                  <span className="text-[#28140c] font-bold text-sm tracking-wider uppercase">Platform Features</span>
                </div>
                <div className="absolute bottom-20 left-0 w-72 h-64 bg-[#532716] rounded-full -z-5 blur-3xl"></div>
                <h3 className="text-3xl beau tracking-widest md:text-4xl font-bold text-white mb-6">
                  What We Offer
                </h3>
                <div className="w-16 h-1 bg-[#ffbd59] mb-6"></div>
                <p className="text-white eb text-[21px] leading-relaxed text-lg">
                  From instant booking confirmations and secure payment processing to detailed hotel reviews and 24/7 customer support, AurIs offers everything you need for a perfect hotel booking experience. Our platform is designed with you in mind, providing transparent pricing, easy comparison tools, and exclusive deals that make finding your ideal accommodation effortless.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Values & Trust - Diagonal Split */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="relative bg-gradient-to-br from-[#ffbd59] to-[#ffd891] rounded-3xl overflow-hidden shadow-2xl min-h-[500px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Content */}
              <div className="p-8 md:p-12 flex flex-col justify-center relative z-10">
                <div className="inline-block bg-[#28140c] px-4 py-2 rounded-full w-fit mb-6">
                  <span className="text-[#ffbd59] font-bold text-sm tracking-wider uppercase">Our Promise</span>
                </div>
                <h3 className="text-3xl castoro md:text-4xl font-bold text-[#28140c] mb-6">
                  Why Trust Us
                </h3>
                <div className="w-16 h-1 bg-[#28140c] mb-6"></div>
                <p className="text-[#28140c] eb text-[21px] leading-relaxed text-lg mb-8">
                  At AurIs, transparency, security, and customer satisfaction are at the heart of everything we do. We partner only with verified hotels, ensure secure transactions, and provide honest reviews from real travelers. Our commitment to innovation and user experience has made us a trusted name in hotel booking, with thousands of satisfied customers who return to us for every journey.
                </p>

                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#28140c]">4.8★</div>
                    <div className="text-sm text-[#28140c]">User Rating</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#28140c]">99%</div>
                    <div className="text-sm text-[#28140c]">Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#28140c]">2025</div>
                    <div className="text-sm text-[#28140c]">Est. Year</div>
                  </div>
                </div>
              </div>

              {/* Big Image with Diagonal Overlay */}
              <div className="relative h-64 lg:h-auto">
                <img
                  src="https://i.ibb.co.com/FbYHKN8Q/Served-Outside-photography-natural-light-1.jpg"
                  alt="Trust"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#ffbd59]/40 to-transparent"></div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#28140c]/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </section>





    </div>
  );
}
