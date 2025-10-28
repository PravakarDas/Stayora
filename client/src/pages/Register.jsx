import React, { useContext, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router';
import { GoogleAuthProvider, signInWithPopup, updateProfile } from 'firebase/auth';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet';
import { AuthContext } from '../AuthContext';
import { auth } from '../Firebase.init';
import { motion } from 'framer-motion';
import '../App.css'

const Register = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const { createUser, loading } = useContext(AuthContext)
    const [success, setSuccess] = useState(false)
    const [errormessage, setErrorMessage] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    if (loading) {
        return (
            <div className='flex justify-center items-center min-h-screen'>
                <span className="loading loading-ring loading-xl text-[#ffbd59]"></span>
            </div>
        )
    }

    const handleSignIn = e => {
        e.preventDefault()
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        setSuccess(false)

        setErrorMessage('')
        if (password.length < 6) {
            setErrorMessage('Your password must have at least 6 characters')
            return
        }

        if (!/(?=.*[a-z])/.test(password)) {
            setErrorMessage('Your password must have a lowercase character')
            return
        }
        if (!/(?=.*[A-Z])/.test(password)) {
            setErrorMessage('Your password must have an uppercase character')
            return
        }

        createUser(email, password).then((result) => {
            console.log(result)
            setSuccess(true)
            navigate(location?.state || '/')
            toast.success('Signed up successfully!');

            const profile = {
                displayName: name,
                photoURL: photo
            }
            updateProfile(auth.currentUser, profile).then((result) => {
                console.log(result)
                navigate(location?.state || '/')
            }).catch((error) => {
                console.log(error)
            })
        }).catch((error) => {
            console.log(error)
            setErrorMessage(error.message)
        })
    }

    const provider = new GoogleAuthProvider();

    const handleLoginByGoogle = e => {
        e.preventDefault();
        signInWithPopup(auth, provider).then((result) => {
            navigate(location?.state || '/')
            toast.success('Signed in successfully!');
        }).catch((error) => console.log(error))
    }

    return (
        <div className='min-h-screen pt-30 py-16 px-4  relative overflow-hidden bg-gradient-to-br from-[#fffcec] to-[#fff8dc]'>
            <Helmet>
                <title>AurIs | Register</title>
            </Helmet>

            {/* Decorative Background Elements */}
            <div className="absolute top-20 right-10 w-72 h-72 bg-[#ffbd59]/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-40 left-10 w-96 h-96 bg-[#28140c]/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className=" relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

                    {/* Left Side - Image & Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="hidden lg:block"
                    >
                        <div className="relative">
                            {/* Main Image */}
                            <div className="rounded-3xl overflow-hidden shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800"
                                    alt="Hotel Luxury"
                                    className="w-full h-[700px] object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#28140c]/80 to-transparent"></div>
                            </div>

                            {/* Floating Info Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                className="absolute bottom-8 left-8 right-8 bg-[#ffbd59] rounded-2xl p-8 shadow-xl"
                            >
                                <h3 className="text-3xl font-bold text-[#28140c] mb-4" style={{ fontFamily: 'Castoro, serif' }}>
                                    Join AurIs Today
                                </h3>
                                <p className="text-[#28140c] leading-relaxed" style={{ fontFamily: 'EB Garamond, serif' }}>
                                    Create your account and unlock exclusive access to luxury hotels, special deals, and personalized booking experiences.
                                </p>
                                <div className="mt-6 flex items-center gap-4">
                                    <div className="flex -space-x-3">
                                        <div className="w-10 h-10 rounded-full bg-[#28140c] border-2 border-[#ffbd59]"></div>
                                        <div className="w-10 h-10 rounded-full bg-[#28140c] border-2 border-[#ffbd59]"></div>
                                        <div className="w-10 h-10 rounded-full bg-[#28140c] border-2 border-[#ffbd59]"></div>
                                    </div>
                                    <p className="text-sm text-[#28140c] font-semibold">Join 5000+ happy travelers</p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right Side - Registration Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="w-full"
                    >
                        <div className="bg-[#28140c] rounded-3xl shadow-2xl p-8 md:p-12">
                            {/* Header */}
                            <div className="text-center mb-8">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className="inline-block bg-[#ffbd59] px-6 py-2 rounded-full mb-4"
                                >
                                    <span className="text-[#28140c] font-bold text-sm tracking-wider eb uppercase">Welcome</span>
                                </motion.div>
                                <h2 className="text-4xl font-bold text-[#ffbd59] mb-2" style={{ fontFamily: 'Castoro, serif' }}>
                                    Create Account
                                </h2>
                                <p className="text-white eb" >
                                    Start your journey with AurIs
                                </p>
                            </div>

                            {/* Form */}
                            <form onSubmit={handleSignIn} autoComplete="off" className="space-y-6">
                                {/* Name Input */}
                                <div>
                                    <label className="block text-[#ffbd59] font-semibold mb-2" style={{ fontFamily: 'EB Garamond, serif' }}>
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        name='name'
                                        className="w-full px-4 py-3 rounded-xl bg-white/10 border-2 border-[#ffbd59]/30 text-white placeholder-gray-400 focus:outline-none focus:border-[#ffbd59] transition-all"
                                        placeholder="Enter your name"
                                        autoComplete="off"
                                        required
                                    />
                                </div>

                                {/* Email Input */}
                                <div>
                                    <label className="block text-[#ffbd59] font-semibold mb-2" style={{ fontFamily: 'EB Garamond, serif' }}>
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        name='email'
                                        className="w-full px-4 py-3 rounded-xl bg-white/10 border-2 border-[#ffbd59]/30 text-white placeholder-gray-400 focus:outline-none focus:border-[#ffbd59] transition-all"
                                        placeholder="your@email.com"
                                        autoComplete="off"
                                        required
                                    />
                                </div>

                                {/* Photo URL Input */}
                                <div>
                                    <label className="block text-[#ffbd59] font-semibold mb-2" style={{ fontFamily: 'EB Garamond, serif' }}>
                                        Photo URL
                                    </label>
                                    <input
                                        type="text"
                                        name='photo'
                                        className="w-full px-4 py-3 rounded-xl bg-white/10 border-2 border-[#ffbd59]/30 text-white placeholder-gray-400 focus:outline-none focus:border-[#ffbd59] transition-all"
                                        placeholder="https://your-photo-url.com"
                                        required
                                    />
                                </div>

                                {/* Password Input */}
                                <div>
                                    <label className="block text-[#ffbd59] font-semibold mb-2" style={{ fontFamily: 'EB Garamond, serif' }}>
                                        Password
                                    </label>
                                    <div className="relative">
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            name='password'
                                            className="w-full px-4 py-3 rounded-xl bg-white/10 border-2 border-[#ffbd59]/30 text-white placeholder-gray-400 focus:outline-none focus:border-[#ffbd59] transition-all"
                                            placeholder="••••••••"
                                            autoComplete="new-password"
                                            required
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-4 top-1/2 -translate-y-1/2 text-[#ffbd59] hover:text-white transition-colors"
                                        >
                                            {showPassword ? '👁️' : '👁️‍🗨️'}
                                        </button>
                                    </div>
                                </div>

                                {/* Error/Success Messages */}
                                {success && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="bg-green-500/20 border-2 border-green-500 text-green-300 px-4 py-3 rounded-xl"
                                    >
                                        ✓ User registered successfully!
                                    </motion.div>
                                )}
                                {errormessage && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="bg-red-500/20 border-2 border-red-500 text-red-300 px-4 py-3 rounded-xl"
                                    >
                                        ⚠ {errormessage}
                                    </motion.div>
                                )}

                                {/* Register Button */}
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    className="w-full bg-[#ffbd59] text-[#28140c] py-4 rounded-xl font-bold text-lg hover:bg-white transition-all shadow-lg"
                                    style={{ fontFamily: 'EB Garamond, serif' }}
                                >
                                    Create Account
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

                                {/* Login Link */}
                                <p className="text-center text-white mt-6" style={{ fontFamily: 'EB Garamond, serif' }}>
                                    Already have an account?{' '}
                                    <NavLink to='/login' className='text-[#ffbd59] font-bold hover:underline'>
                                        Login here
                                    </NavLink>
                                </p>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Register;