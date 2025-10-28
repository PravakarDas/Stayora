import React, { useEffect, useState } from "react";

const Modal = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showModal && (
        <dialog id="offer_modal" className="modal modal-open">
          <div className="modal-box p-0 max-w-4xl">
            <button
              onClick={() => setShowModal(false)}
              className="btn btn-sm btn-circle absolute right-2 top-2 z-10"
            >
              ✕
            </button>

            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/2 h-64">
                <img
                  src="https://i.ibb.co/GQ7z9tkK/herbal-compress-herbal-spa-treatment-equipments-put-dark-floor.jpg"
                  alt="Spa Offer"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="w-full md:w-1/2 bg-black text-white p-6 h-64 flex flex-col justify-center space-y-4">
                <h2 className="text-2xl font-bold">Special Offer on Spa Service!</h2>
                <p className="text-sm">
                  Relax and rejuvenate with our exclusive spa packages. Get 20% off for all services booked this week.
                </p>
                <button
                  onClick={() => setShowModal(false)}
                  className="btn btn-warning text-black font-bold w-fit"
                >
                  Claim Now
                </button>
              </div>
            </div>
          </div>
        </dialog>
      )}
    </>
  );
};

export default Modal;
