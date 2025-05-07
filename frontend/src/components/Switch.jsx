import React from "react";
import { useNavigate } from "react-router-dom"; // if using react-router
import RentalBanner from '../assets/919.jpg'; // adjust the path if needed
import RentalBanners from '../assets/204.jpg'; // adjust the path if needed



const Switch = () => {
  const navigate = useNavigate(); // for client-side navigation

  const handleClick = () => {
    navigate("/new-page"); // navigate to the specified path
  };

  return (
    <div className="grid grid-cols-2 gap-8  py-5 px-5">
      {/* Left Side */}
      <div className="relative group cursor-pointer" onClick={() => handleClick()}>
        <p className="absolute top-0 left-1/2 transform -translate-x-1/2 text-white text-xl backdrop-blur-sm font-semibold z-10 bg-black bg-opacity-50 px-3 py-1 rounded">
          Apna Bazar
        </p>
        <img
          src={RentalBanners}
          alt="Left"
          className="w-full h-40 object-cover transform duration-300 ease-in-out hover:scale-105 rounded-lg shadow-lg group-hover:opacity-90 transition"
        />

      </div>

      {/* Right Side */}
      <div className="relative group cursor-pointer" onClick={() => handleClick('/right-page')}>
        <p className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-white text-xl backdrop-blur-sm font-semibold z-10 bg-black bg-opacity-50 px-3 py-1 rounded
">
          Rental Store
        </p>
        <img
          src={RentalBanner}
          alt="Left"
          className="w-full h-40 object-cover filter blur-xs transform duration-300 ease-in-out hover:scale-105 rounded-lg shadow-lg group-hover:opacity-90 transition"
        />

      </div>
    </div>
  );
};

export default Switch;
