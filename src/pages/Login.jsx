import React, { use, useRef } from 'react';
import '../App.css'
import { NavLink, useLocation, useNavigate } from 'react-router';
import { GoogleAuthProvider, sendPasswordResetEmail, signInWithPopup } from 'firebase/auth';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet';
import Swal from 'sweetalert2';
import { auth } from '../Firebase.init';
import { AuthContext } from '../AuthContext';
import { motion } from 'framer-motion';

const Login = () => {
    const emailref = useRef()
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from || '/'
    const { signInUser } = use(AuthContext)

    const handleLogIn = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)
        signInUser(email, password).then((result) => {
            console.log(result.user)
            toast.success('Logged in successfully!');
            navigate(from, { replace: true })
        }).catch((error) => {
            console.log(error)
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: 'Please give valid email and password!',
                confirmButtonColor: '#ffbd59',
                draggable: true
            });
            return;
        })
    }

    const provider = new GoogleAuthProvider();

    const handleLoginByGoogle = e => {
        e.preventDefault();
        console.log('before google signin')
        signInWithPopup(auth, provider).then((result) => {
            console.log('before google signin')
            console.log(result.user)
            toast.success('Logged in successfully!');
            navigate(from, { replace: true })
        }).catch((error) =>
            console.log(error)
        )
    }

    const handleForget = e => {
        e.preventDefault()
        if (!emailref.current.value) {
            toast.error('Please enter your email first');
            return;
        }
        sendPasswordResetEmail(auth, emailref.current.value).then(() => {
            toast.success('Check email for password reset');
        }).catch((error) => {
            console.log(error)
            toast.error('Error sending reset email');
        })
    }

    return (
        <div className='min-h-screen pt-30 py-16 px-4 md:px-8 lg:px-16 relative overflow-hidden bg-gradient-to-br from-[#fffcec] to-[#fff8dc]'>
            <Helmet>
                <title>AurIs | Login</title>
            </Helmet>

            {/* Decorative Background Elements */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-[#ffbd59]/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-40 right-10 w-96 h-96 bg-[#28140c]/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className='max-w-7xl mx-auto relative z-10'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center shadow-2xl rounded-3xl overflow-hidden bg-[#28140c]'>
                    
                    {/* Left Side - Form */}
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="order-2 lg:order-1 p-8 md:p-12"
                    >
                        {/* Header */}
                        <div className="text-center mb-8">
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="inline-block bg-[#ffbd59] px-6 py-2 rounded-full mb-4"
                            >
                                <span className="text-[#28140c] font-bold text-sm tracking-wider uppercase">Welcome Back</span>
                            </motion.div>
                            <h2 className="text-4xl font-bold text-[#ffbd59] mb-2" style={{ fontFamily: 'Castoro, serif' }}>
                                Login to AurIs
                            </h2>
                            <p className="text-white" style={{ fontFamily: 'EB Garamond, serif' }}>
                                Continue your journey with us
                            </p>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleLogIn} autoComplete="off" className="space-y-6">
                            {/* Email Input */}
                            <div>
                                <label className="block text-[#ffbd59] font-semibold mb-2" style={{ fontFamily: 'EB Garamond, serif' }}>
                                    Email Address
                                </label>
                                <input 
                                    type="email" 
                                    name='email'
                                    ref={emailref}
                                    className="w-full px-4 py-3 rounded-xl bg-white/10 border-2 border-[#ffbd59]/30 text-white placeholder-gray-400 focus:outline-none focus:border-[#ffbd59] transition-all"
                                    placeholder="your@email.com" 
                                    autoComplete="off"
                                    required
                                />
                            </div>

                            {/* Password Input */}
                            <div>
                                <label className="block text-[#ffbd59] font-semibold mb-2" style={{ fontFamily: 'EB Garamond, serif' }}>
                                    Password
                                </label>
                                <input 
                                    type="password"
                                    name='password'
                                    className="w-full px-4 py-3 rounded-xl bg-white/10 border-2 border-[#ffbd59]/30 text-white placeholder-gray-400 focus:outline-none focus:border-[#ffbd59] transition-all"
                                    placeholder="••••••••" 
                                    autoComplete="new-password"
                                    required
                                />
                            </div>

                            {/* Forget Password Link */}
                            <div className="text-right">
                                <button
                                    type="button"
                                    onClick={handleForget}
                                    className="text-[#ffbd59] hover:underline text-sm font-semibold"
                                    style={{ fontFamily: 'EB Garamond, serif' }}
                                >
                                    Forgot Your Password?
                                </button>
                            </div>

                            {/* Login Button */}
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className="w-full bg-[#ffbd59] text-[#28140c] py-4 rounded-xl font-bold text-lg hover:bg-white transition-all shadow-lg"
                                style={{ fontFamily: 'EB Garamond, serif' }}
                            >
                                Login
                            </motion.button>

                            {/* Divider */}
                            <div className="flex items-center gap-4 my-6">
                                <div className="flex-1 h-px bg-[#ffbd59]/30"></div>
                                <span className="text-white text-sm">OR</span>
                                <div className="flex-1 h-px bg-[#ffbd59]/30"></div>
                            </div>

                            {/* Google Sign In */}
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={handleLoginByGoogle}
                                type="button"
                                className="w-full bg-white text-[#28140c] py-4 rounded-xl font-bold text-lg hover:bg-[#ffbd59] transition-all shadow-lg flex items-center justify-center gap-3"
                                style={{ fontFamily: 'EB Garamond, serif' }}
                            >
                                <img className='w-6 h-6' src="https://i.ibb.co.com/0yympJ9z/pngwing-com.png" alt="Google" />
                                Continue with Google
                            </motion.button>

                            {/* Register Link */}
                            <p className="text-center text-white mt-6" style={{ fontFamily: 'EB Garamond, serif' }}>
                                Don't have an account?{' '}
                                <NavLink to='/register' className='text-[#ffbd59] font-bold hover:underline'>
                                    Register here
                                </NavLink>
                            </p>
                        </form>
                    </motion.div>

                    {/* Right Side - Images */}
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="order-1 lg:order-2 relative h-full min-h-[400px] lg:min-h-[700px]"
                    >
                        {/* Main Image */}
                        <div className="relative h-full">
                            <img
                                src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800"
                                alt="Hotel Luxury Room"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#28140c]/50"></div>
                            
                            {/* Floating Card with Benefits */}
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                                className="absolute bottom-8 left-8 right-8 bg-[#ffbd59] rounded-2xl p-6 shadow-xl"
                            >
                                <h3 className="text-2xl font-bold text-[#28140c] mb-3" style={{ fontFamily: 'Castoro, serif' }}>
                                    Why Choose AurIs?
                                </h3>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-3 text-[#28140c]">
                                        <div className="w-6 h-6 rounded-full bg-[#28140c] flex items-center justify-center">
                                            <span className="text-[#ffbd59] text-sm">✓</span>
                                        </div>
                                        <span style={{ fontFamily: 'EB Garamond, serif' }}>Best Price Guarantee</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-[#28140c]">
                                        <div className="w-6 h-6 rounded-full bg-[#28140c] flex items-center justify-center">
                                            <span className="text-[#ffbd59] text-sm">✓</span>
                                        </div>
                                        <span style={{ fontFamily: 'EB Garamond, serif' }}>24/7 Customer Support</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-[#28140c]">
                                        <div className="w-6 h-6 rounded-full bg-[#28140c] flex items-center justify-center">
                                            <span className="text-[#ffbd59] text-sm">✓</span>
                                        </div>
                                        <span style={{ fontFamily: 'EB Garamond, serif' }}>Exclusive Member Deals</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-[#28140c]">
                                        <div className="w-6 h-6 rounded-full bg-[#28140c] flex items-center justify-center">
                                            <span className="text-[#ffbd59] text-sm">✓</span>
                                        </div>
                                        <span style={{ fontFamily: 'EB Garamond, serif' }}>Secure Booking Process</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Login;