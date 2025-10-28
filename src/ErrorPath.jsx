import React from 'react';

import { useNavigate } from 'react-router';
const ErrorPath = () => {
    const navigate=useNavigate();
    const handleNvigate=()=>{
        navigate('/')

    }
    return (
        <div>
          
            <div className='bg-[#fdf7c4] md:pt-12 pt-7 px-2 flex flex-col items-center'>
            <img src="https://i.ibb.co.com/hFkrBKnX/3828541.jpg" className='md:h-[300px] md:w-[400px] rounded-2xl mx-auto  md:mt-16 px-2 ' alt="" />
            <h1 className=' text-[#f8952a] text-shadow-2xl  text-center mt-20  text-4xl font-bold'>404-Page Not Found</h1>
            <p className='text-[19px] text-[#f8952a] font-medium text-center pb-10 mt-4  '>OOps! The Page you're looking for doesn't exist</p>
            <button onClick={handleNvigate} className='  btn bg-[#a8cc61] text-black text-2xl md:mb-96 px-7 py-4 rounded-xl mb-12  '>Go Back To Home</button>
            </div>
            
        </div>
    );
};

export default ErrorPath;