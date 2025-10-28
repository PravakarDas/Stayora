import axios from 'axios';
import React, { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../AuthContext';
import StarRatings from 'react-star-ratings';
import { motion } from 'framer-motion';

const BookingsTableRow = ({ index, Booking, myBooking, setMyBookings }) => {
  const { user } = useContext(AuthContext)
  const { roomId, name, price, bedType,  date } = Booking;
  const [newDate, setNewDate] = useState(date);
  const [ratings, setRatings] = useState(0)

  const modalId = `modal_${roomId}`;
  const reviewModalId = `review_modal_${roomId}`

  const handleUpdate = (e) => {
    e.preventDefault();
    document.getElementById(modalId).showModal();
  };

  const handleConfirm = (e) => {
    e.preventDefault();
    const updatedDate = e.target.updatedDate.value;

    axios.put(`https://hotel-server-side-mu.vercel.app/bookings/${roomId}`, {
      date: updatedDate,
    })
      .then((res) => {
        if (res.data.matchedCount) {
          setNewDate(updatedDate);
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Date updated successfully',
            showConfirmButton: false,
            timer: 1500,
            confirmButtonColor: '#ffbd59',
          });
          document.getElementById(modalId).close();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleReview = e => {
    e.preventDefault()
    document.getElementById(reviewModalId).showModal()
  }

  const handleReviewPost = e => {
    e.preventDefault()
    const comment = e.target.comment.value
    const time = Date.now();
    const timestamp = new Intl.DateTimeFormat('en-US', { 
      year: 'numeric', month: '2-digit', day: '2-digit', 
      hour: '2-digit', minute: '2-digit', second: '2-digit' 
    }).format(time);

    const review = {
      userImage: user.photoURL,
      username: user.displayName,
      ratings,
      comment,
      timestamp,
      roomId
    }

    axios.post(`https://hotel-server-side-mu.vercel.app/reviews`, review).then(res => {
      if (res.data.insertedId) {
        Swal.fire({
          title: "Thanks for Sharing Your Thoughts!",
          text: "Your review is now live",
          icon: "success",
          confirmButtonColor: '#ffbd59',
          timer: 3000,
        })
      }
    }).catch(error => console.log(error))
    document.getElementById(reviewModalId).close();
  }

  const handleCancel = (e) => {
    e.preventDefault();
    const now = new Date();
    const cancelDate = new Intl.DateTimeFormat('en-US', {
      year: 'numeric', month: '2-digit', day: '2-digit'
    }).format(now);

    Swal.fire({
      title: "Cancel Booking?",
      text: "This action cannot be undone",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ffbd59",
      cancelButtonColor: "#28140c",
      confirmButtonText: "Yes, cancel it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`https://hotel-server-side-mu.vercel.app/bookings/${roomId}?cancelDate=${cancelDate}&bookingDate=${date}`)
          .then(res => {
            Swal.fire({
              title: "Cancelled!",
              text: "Your booking has been cancelled.",
              icon: "success",
              confirmButtonColor: '#ffbd59',
            });
            const remainingBooking = myBooking.filter(book => book.roomId !== roomId);
            setMyBookings(remainingBooking)

            axios.put(`https://hotel-server-side-mu.vercel.app/hotels/${roomId}`, {
              availability: true
            })
              .then(res => {
                console.log("Room availability updated:", res.data);
              })
              .catch(err => {
                console.log("Error updating availability:", err);
              });
          })
          .catch(error => {
            if (error.response && error.response.status === 400) {
              Swal.fire({
                position: 'center',
                title: error.response.data,
                icon: 'error',
                confirmButtonColor: '#ffbd59',
                showConfirmButton: true,
              });
            } else {
              console.log("Unexpected error:", error);
            }
          });
      }
    });
  };

  return (
    <>
      <tr className='bg-white px-5 hover:bg-[#fffcec] transition-all border-b-2 border-[#28140c]/10 py-7'>
        <td className='text-[18px] pl-5 py-7 font-bold text-[#28140c] '>{index + 1}</td>
        <td className='text-[18px] py-7 text-[#28140c] font-semibold' style={{ fontFamily: 'EB Garamond, serif' }}>
          {name}
        </td>
        <td className='text-[17px] py-7 text-[#28140c]'>{bedType}</td>
        
        <td className='text-[17px] py-7 text-[#28140c]'>
          <div className='flex flex-col gap-2'>
            <span className='font-semibold'>{newDate}</span>
            <button 
              onClick={handleUpdate} 
              className='px-4 py-2 bg-[#ffbd59] text-[#28140c] rounded-lg font-semibold hover:bg-[#28140c] hover:text-[#ffbd59] transition-all text-sm'
            >
              📅 Update Date
            </button>
          </div>
        </td>

        <td className='text-[18px] py-7 text-[#28140c] font-bold'>
          ${price}
        </td>

        <td className='text-[17px] pr-5 py-7'>
          <div className='flex flex-col gap-2'>
            <button 
              onClick={handleReview} 
              className='px-4 py-2 bg-[#28140c] text-[#ffbd59] rounded-lg font-semibold hover:bg-[#ffbd59] hover:text-[#28140c] transition-all text-sm'
            >
              ⭐ Give Review
            </button>
            <button 
              onClick={handleCancel} 
              className='px-4 py-2 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all text-sm'
            >
              ✕ Cancel Booking
            </button>
          </div>
        </td>
      </tr>

      {/* Update Date Modal */}
      <dialog id={modalId} className="modal modal-bottom sm:modal-middle">
        <div className='modal-box bg-white border-4 border-[#ffbd59] rounded-2xl max-w-md'>
          <div className='flex justify-between items-center mb-6'>
            <h3 className='font-bold text-2xl text-[#28140c]' style={{ fontFamily: 'Castoro, serif' }}>
              Update Booking Date
            </h3>
            <button 
              onClick={() => document.getElementById(modalId).close()} 
              className='btn btn-sm btn-circle bg-[#28140c] text-[#ffbd59] hover:bg-[#ffbd59] hover:text-[#28140c]'
            >
              ✕
            </button>
          </div>
          
          <form onSubmit={handleConfirm} className='flex flex-col gap-6'>
            <div>
              <label className='block text-[#28140c] font-semibold mb-2' style={{ fontFamily: 'EB Garamond, serif' }}>
                Select New Date
              </label>
              <input
                type='date'
                name='updatedDate'
                className='input w-full bg-[#fffcec] border-2 border-[#ffbd59] text-[#28140c] focus:outline-none focus:border-[#28140c]'
                required
              />
            </div>
            
            <div className='flex gap-3'>
              <button 
                type='button'
                onClick={() => document.getElementById(modalId).close()}
                className='flex-1 px-6 py-3 bg-gray-300 text-[#28140c] rounded-xl font-semibold hover:bg-gray-400 transition-all'
              >
                Cancel
              </button>
              <button 
                type='submit' 
                className='flex-1 px-6 py-3 bg-[#ffbd59] text-[#28140c] rounded-xl font-semibold hover:bg-[#28140c] hover:text-[#ffbd59] transition-all'
              >
                Confirm
              </button>
            </div>
          </form>
        </div>
      </dialog>

      {/* Review Modal */}
      <dialog id={reviewModalId} className="modal modal-bottom sm:modal-middle">
        <div className='modal-box bg-white border-4 border-[#ffbd59] rounded-2xl max-w-lg'>
          <div className='flex justify-between items-center mb-6'>
            <h3 className='font-bold text-2xl text-[#28140c]' style={{ fontFamily: 'Castoro, serif' }}>
              Share Your Experience
            </h3>
            <button 
              onClick={() => document.getElementById(reviewModalId).close()} 
              className='btn btn-sm btn-circle bg-[#28140c] text-[#ffbd59] hover:bg-[#ffbd59] hover:text-[#28140c]'
            >
              ✕
            </button>
          </div>
          
          <form onSubmit={handleReviewPost} className='flex flex-col gap-6'>
            <div className='bg-[#fffcec] p-4 rounded-xl'>
              <p className='text-[#28140c] font-semibold' style={{ fontFamily: 'EB Garamond, serif' }}>
                Dear {user.displayName}, we'd love to hear your thoughts!
              </p>
            </div>

            <div className='flex flex-col items-center gap-3 bg-[#fffcec] p-6 rounded-xl'>
              <label className='text-lg font-bold text-[#28140c]' style={{ fontFamily: 'EB Garamond, serif' }}>
                Rate Your Stay
              </label>
              <StarRatings
                rating={ratings}
                starRatedColor='#ffbd59'
                starHoverColor='#28140c'
                changeRating={setRatings}
                numberOfStars={5}
                name='rating'
                starDimension='35px'
                starSpacing='5px'
              />
            </div>

            <div>
              <label className='block text-[#28140c] font-semibold mb-2' style={{ fontFamily: 'EB Garamond, serif' }}>
                Your Review
              </label>
              <textarea
                required
                name='comment'
                placeholder='Tell us about your experience...'
                className='textarea w-full h-32 bg-[#fffcec] border-2 border-[#ffbd59] text-[#28140c] placeholder-gray-500 focus:outline-none focus:border-[#28140c] text-[16px]'
                style={{ fontFamily: 'EB Garamond, serif' }}
              ></textarea>
            </div>

            <div className='flex gap-3'>
              <button 
                type='button'
                onClick={() => document.getElementById(reviewModalId).close()}
                className='flex-1 px-6 py-3 bg-gray-300 text-[#28140c] rounded-xl font-semibold hover:bg-gray-400 transition-all'
              >
                Cancel
              </button>
              <button 
                type='submit' 
                className='flex-1 px-6 py-3 bg-[#ffbd59] text-[#28140c] rounded-xl font-semibold hover:bg-[#28140c] hover:text-[#ffbd59] transition-all'
              >
                Post Review
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default BookingsTableRow;