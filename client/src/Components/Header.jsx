import React, { useContext, useEffect, useState } from 'react'; 
import { AuthContext } from '../AuthContext';
import { NavLink, useNavigate, useLocation } from 'react-router'; // ✅ import useLocation
import '../App.css';
import { toast } from 'react-toastify';
import { motion } from "framer-motion";

const Navbar = () => {
    const { user, LogOut } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation(); // ✅ detect current route

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        if (location.pathname === "/") {
            const handleScroll = () => {
                if (window.scrollY > 500) {
                    setScrolled(true);
                } else {
                    setScrolled(false);
                }
            };
            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
        } else {
            // reset scroll effect for other pages
            setScrolled(true); 
        }
    }, [location.pathname]);

    const handleSignOut = e => {
        e.preventDefault();
        LogOut().then(() => {
            toast('You have succesfully Logged Out');
            navigate('/');
        }).catch(error => {
            console.log(error);
        });
    };

    // ✅ conditional text color
    const textColorClass =
        location.pathname === "/"
            ? scrolled
                ? "text-[#ac6f26] dark:text-[#ac6f26]"
                : "text-white"
            : "text-[#ac6f26] dark:text-[#ac6f26]";

    return (
        <div>
           <div className={`flex w-full items-center fixed top-0 z-50 
                bg-white/10 backdrop-blur-md castoro
                shadow-black shadow-inner text-[15px]
                py-4 md:px-6 px-2 lg:px-10 lobster ${textColorClass}`}>

                {/* Left: Logo + Mobile Menu */}
                <div className="flex items-center">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost gap-5 mt-3 lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                                viewBox="0 0 24 24" stroke={location.pathname === "/" ? (scrolled ? "#ac6f26" : "white") : "#ac6f26"}>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu text-white menu-sm py-8 px-4 space-y-2 dropdown-content bg-[#ac6f26]  z-1 mt-3 w-72 p-2 shadow castoro font-medium text-[15px]">
                            <NavLink to='/'>Home</NavLink>
                            <NavLink to='/allrooms'>All Rooms</NavLink>
                            <NavLink to='/mybookings'>My Booking</NavLink>
                            <NavLink to='/aboutus'>About Us</NavLink>
                            <NavLink to='/findus'>Find Us</NavLink>
                            <NavLink to='/termsandcondition'>Terms and Conditions</NavLink>
                            {
                                !user && (
                                    <>
                                        <NavLink to='/login'><span className='font-medium'>LogIn</span></NavLink>
                                        <NavLink to='/register'><span className='font-medium'>Register</span></NavLink>
                                    </>
                                )
                            }
                            {
                                user && (
                                    <li>
                                        <button
                                            onClick={handleSignOut}
                                            className="btn1"
                                        >
                                             Log Out
                                        </button>
                                    </li>
                                )
                            }
                        </ul>
                    </div>

                    <motion.h1
                        initial={{ opacity: 0, y: -20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="text-4xl beau font-bold tracking-widest ml-2"
                    >
                       <span className='text-[#ac6f26]'>A</span><span className='castoro text-2xl '>URI</span>S
                    </motion.h1>
                </div>

                {/* Center: Nav Links */}
                <div className="hidden lg:flex flex-1 justify-center">
                    <ul className="flex font-extrabold text-[15px] space-x-6">
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/allrooms'>All Rooms</NavLink>
                        <NavLink to='/mybookings'>My Booking</NavLink>
                        <NavLink to='/aboutus'>About Us</NavLink>
                        <NavLink to='/findus'>Find Us</NavLink>
                        <NavLink to='/termsandcondition'>Terms and Conditions</NavLink>
                    </ul>
                </div>

                {/* Right: Auth Buttons / User Info */}
                <div className="flex items-center gap-2 ml-auto">
                    {
                        !user && (
                            <div className="hidden lg:flex space-x-2 overpass">
                                <NavLink to='/login'><button className='btn1 '>Login </button></NavLink>
                                <NavLink to='/register'><button className='btn2 '>Register</button></NavLink>
                            </div>
                        )
                    }

                    {/* User Photo always visible */}
                    {
                        user && (
                            <div className="avatar">
                                <div className="w-12 h-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img
                                        src={user.photoURL}
                                        alt="User"
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                            </div>
                        )
                    }

                    {/* Logout on desktop */}
                    {
                        user && (
                            <div className="hidden lg:flex">
                                <button
                                    onClick={handleSignOut}
                                    className="btn1"
                                >
                                     Log Out
                                </button>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;
