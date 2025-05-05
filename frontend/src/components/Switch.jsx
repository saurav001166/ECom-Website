import React from "react";
import { useNavigate } from "react-router-dom"; // if using react-router


const Switch = () => {
  const navigate = useNavigate(); // for client-side navigation

  const handleClick = () => {
    navigate("/new-page"); // navigate to the specified path
  };

  return (
    <div className="grid grid-cols-2 gap-8  py-5 px-5">
      {/* Left Side */}
      <div className="relative group cursor-pointer" onClick={() => handleClick()}>
        <p className="absolute top-4 left-4 text-white text-center text-xl font-semibold z-10  bg-opacity-50 px-3 py-1 rounded">
          Left Side Title
        </p>
        <img
          src="https://www.ramco.com/hubfs/Evolving-Models-In-Equipment-Rental-Business-1.jpg"
          alt="Left"
          className="w-full h-40 object-cover transform duration-300 ease-in-out hover:scale-105 rounded-lg shadow-lg group-hover:opacity-90 transition"
        />
      </div>

      {/* Right Side */}
      <div className="relative group cursor-pointer" onClick={() => handleClick('/right-page')}>
        <p className="absolute top-4 left-4 text-white text-xl backdrop-blur-sm font-semibold z-10 bg-black bg-opacity-50 px-3 py-1 rounded">
          Right Side Title
        </p>
        <img
          src="https://www.ramco.com/hubfs/Evolving-Models-In-Equipment-Rental-Business-1.jpg"
          alt="Right"
          className="w-full h-40 object-cover rounded-lg shadow-lg  group-hover:opacity-90 transition transform duration-300 ease-in-out hover:scale-105"
        />
      </div>
    </div>
  );
};

export default Switch;
