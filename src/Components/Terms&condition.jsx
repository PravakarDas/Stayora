import React from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import watchAnimation from '../../public/animation/watch.json'

const TermsAndCondition = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  const iconVariants = {
    hover: {
      rotate: [0, -10, 10, -10, 0],
      scale: 1.2,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-16 px-4 pt-30 md:px-8 lg:px-16">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="relative inline-block z-5 mb-6">
            <div className="absolute -top-50 overflow-hidden -left-20 md:left-8 w-96 h-96 md:bg-[#ffbd59]/20 bg-[#ffbd59]/15 rounded-full blur-3xl pointer-events-none"></div>
            <motion.h2
              initial={{ scale: 0.5 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, type: "spring" }}
              className="text-5xl beau md:text-6xl font-bold text-[#28140c] relative z-10"
            >
              Terms & Conditions
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "8rem" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 h-2 bg-[#ffbd59]"
            ></motion.div>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 text-lg text-[#28140c] dark:text-[#28140c] max-w-3xl mx-auto leading-relaxed"
          >
            At <span className="text-[#61311e] dark:text-[#61311e] eb font-bold">AurIs Hotel</span>, we are committed to making your stay exceptional. These terms ensure a safe, fair, and enjoyable experience for all our guests.
          </motion.p>
        </motion.div>
      </div>

      {/* Terms Cards Grid */}
      <div className="max-w-7xl mx-auto space-y-6">

        {/* Card 1 - Slide from Left */}
        <motion.div
          custom={0}
          initial="hidden"
          whileInView="visible"
          variants={cardVariants}
          viewport={{ once: true }}
          whileHover={{ x: 10 }}
          className="relative"
        >
          <div className="bg-[#28140c] rounded-3xl p-8 md:p-10 shadow-2xl overflow-hidden border-l-8 border-[#ffbd59]">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#ffbd59]/5 rounded-full blur-3xl"></div>
            <div className="relative z-10 flex md:flex-row flex-col items-center  md:items-start gap-6">
              <motion.div
                variants={iconVariants}
                whileHover="hover"
                className="text-5xl flex-shrink-0"
              >
                💳
              </motion.div>
              <div>
                <h3 className="text-2xl font-bold text-[#ffbd59] castoro md:text-start text-center mb-3">1. Reservations & Payment</h3>
                <p className="text-white eb text-lg leading-relaxed">
                  All bookings require valid payment details to confirm. Rates may vary depending on season and demand. Some special offers require full prepayment and are non-refundable.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Card 2 - Slide from Right */}
        <motion.div
          custom={1}
          initial="hidden"
          whileInView="visible"
          variants={cardVariants}
          viewport={{ once: true }}
          whileHover={{ x: -10 }}
          className="relative lg:ml-auto lg:w-11/12"
        >
          <div className="bg-gradient-to-br from-[#ffbd59] to-[#ffd891] rounded-3xl p-8 md:p-10 shadow-2xl overflow-hidden border-r-8 border-[#28140c]">
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#28140c]/10 rounded-full blur-3xl"></div>
            <div className="relative z-10 flex md:flex-row flex-col items-center  md:items-start gap-6">
              <motion.div
                variants={iconVariants}
                whileHover="hover"
                className="text-5xl flex-shrink-0"
              >
                <Lottie  animationData={watchAnimation} loop={true} />
              </motion.div>
              <div>
                <h3 className="text-2xl font-bold text-[#28140c] castoro md:text-start text-center mb-3">2. Check-In & Check-Out</h3>
                <p className="text-[#28140c] eb text-lg leading-relaxed">
                  Check-in starts at <strong>2:00 PM</strong> and check-out is by <strong>12:00 PM</strong>. Early check-in or late check-out is subject to availability and may incur additional charges.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Card 3 - Zoom In */}
        <motion.div
          custom={2}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
          className="relative"
        >
          <div className="bg-[#28140c] rounded-3xl p-8 md:p-10 shadow-2xl overflow-hidden border-l-8 border-[#ffbd59]">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#ffbd59]/5 rounded-full blur-3xl"></div>
            <div className="relative z-10 flex md:flex-row flex-col items-center  md:items-start gap-6">
              <motion.div
                variants={iconVariants}
                whileHover="hover"
                className="text-5xl flex-shrink-0"
              >
                ❌
              </motion.div>
              <div>
                <h3 className="text-2xl font-bold text-[#ffbd59] castoro md:text-start text-center mb-3">3. Cancellation Policy</h3>
                <p className="text-white eb text-lg leading-relaxed">
                  Free cancellation up to <strong>48 hours before arrival</strong>. Cancellations made later may be charged one night's stay. No-shows will be charged the full booking amount.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Card 4 - Rotate In */}
        <motion.div
          custom={3}
          initial={{ opacity: 0, rotate: -5 }}
          whileInView={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileHover={{ rotate: 2 }}
          className="relative lg:ml-auto lg:w-11/12"
        >
          <div className="bg-gradient-to-br from-[#ffbd59] to-[#ffd891] rounded-3xl p-8 md:p-10 shadow-2xl overflow-hidden border-r-8 border-[#28140c]">
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#28140c]/10 rounded-full blur-3xl"></div>
            <div className="relative z-10 flex md:flex-row flex-col items-center  md:items-start  gap-6">
              <motion.div
                variants={iconVariants}
                whileHover="hover"
                className="text-5xl flex-shrink-0"
              >
                🛡️
              </motion.div>
              <div>
                <h3 className="text-2xl font-bold castoro text-[#28140c] md:text-start text-center mb-3">4. Guest Responsibilities</h3>
                <p className="text-[#28140c] eb text-lg leading-relaxed">
                  Guests are responsible for any damages or loss of property during their stay. A cleaning fee may apply if rooms are left in poor condition.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Card 5 - Slide Up */}
        <motion.div
          custom={4}
          initial="hidden"
          whileInView="visible"
          variants={cardVariants}
          viewport={{ once: true }}
          whileHover={{ y: -5 }}
          className="relative"
        >
          <div className="bg-[#28140c] rounded-3xl p-8 md:p-10 shadow-2xl overflow-hidden border-l-8 border-[#ffbd59]">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#ffbd59]/5 rounded-full blur-3xl"></div>
            <div className="relative z-10 flex md:flex-row flex-col items-center  md:items-start gap-6">
              <motion.div
                variants={iconVariants}
                whileHover="hover"
                className="text-5xl flex-shrink-0"
              >
                🚭
              </motion.div>
              <div>
                <h3 className="text-2xl font-bold castoro text-[#ffbd59] md:text-start text-center mb-3">5. Smoking & Pets</h3>
                <p className="text-white eb text-lg leading-relaxed">
                  We are a <strong>non-smoking hotel</strong> with designated smoking areas. Pets are allowed only in specific rooms with prior approval and may incur an additional fee.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Card 6 - Flip Effect */}
        <motion.div
          custom={5}
          initial={{ opacity: 0, rotateY: 90 }}
          whileInView={{ opacity: 1, rotateY: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          whileHover={{ rotateY: 5 }}
          className="relative lg:ml-auto lg:w-11/12"
          style={{ perspective: 1000 }}
        >
          <div className="bg-gradient-to-br from-[#ffbd59] to-[#ffd891] rounded-3xl p-8 md:p-10 shadow-2xl overflow-hidden border-r-8 border-[#28140c]">
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#28140c]/10 rounded-full blur-3xl"></div>
            <div className="relative z-10 flex md:flex-row flex-col items-center  md:items-start gap-6">
              <motion.div
                variants={iconVariants}
                whileHover="hover"
                className="text-5xl flex-shrink-0"
              >
                🔒
              </motion.div>
              <div>
                <h3 className="text-2xl font-bold castoro text-[#28140c] md:text-start text-center mb-3">6. Privacy & Data Protection</h3>
                <p className="text-[#28140c] eb text-lg leading-relaxed">
                  Your personal data is protected and will only be used for reservations, communication, and service purposes in line with our Privacy Policy.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Card 7 - Bounce In */}
        <motion.div
          custom={6}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
          className="relative"
        >
          <div className="bg-[#28140c] rounded-3xl p-8 md:p-10 shadow-2xl overflow-hidden border-l-8 border-[#ffbd59]">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#ffbd59]/5 rounded-full blur-3xl"></div>
            <div className="relative z-10 flex md:flex-row flex-col items-center  md:items-start gap-6">
              <motion.div
                variants={iconVariants}
                whileHover="hover"
                className="text-5xl flex-shrink-0"
              >
                📝
              </motion.div>
              <div>
                <h3 className="text-2xl font-bold text-[#ffbd59] md:text-start text-center castoro mb-3">7. Changes to Terms</h3>
                <p className="text-white  leading-relaxed">
                  AurIs Hotel may update these Terms & Conditions at any time. Updates will be posted on our website and apply immediately.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Contact Footer */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto mt-16"
      >
        <div className="relative bg-[#28140c] z-5 rounded-3xl overflow-hidden shadow-2xl">
          <div className="absolute top-0 -right-20 w-96 -z-5 h-96 bg-[#512412] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 -left-10 w-64 h-64 bg-[#512412] rounded-full blur-3xl"></div>

          <div className="relative z-10 text-center py-12 px-6">
            <motion.h3
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-3xl beau md:text-4xl font-bold text-[#ffbd59] mb-4"
            >
              Questions or Clarifications?
            </motion.h3>
            <p className="text-[20px] text-white eb max-w-2xl mx-auto mb-6">
              Our team is here to help you understand our terms better
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <motion.a
                href="mailto:fahmidanimra@gmail.com"
                whileHover={{ scale: 1.05, rotate: 2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#ffbd59] text-[#28140c] px-8 py-4 rounded-full font-bold hover:bg-white transition-all shadow-lg inline-flex items-center gap-2"
              >
                📧 fahmidanimra@gmail.com
              </motion.a>
              <motion.a
                href="tel:01569029731"
                whileHover={{ scale: 1.05, rotate: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#28140c] px-8 py-4 rounded-full font-bold hover:bg-[#ffbd59] transition-all shadow-lg inline-flex items-center gap-2"
              >
                📞 01569029731
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default TermsAndCondition;