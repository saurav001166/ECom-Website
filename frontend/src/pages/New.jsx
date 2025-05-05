import React from "react";
import { useNavigate } from "react-router-dom";

const New = () => {
  const navigate = useNavigate();

  // Handle the button click to redirect to the home page
  const handleGoHome = () => {
    navigate("/"); // Redirects to the homepage
  };

  return (
    <div className="relative h-screen bg-yellow-100">
      {/* Fixed Button at the top, centered */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10">
        <button
          onClick={handleGoHome}
          className="flex flex-col items-center justify-center gap-2 px-6 py-4 rounded-lg transform duration-300 hover:scale-110 bg-blue-600"
        >
          {/* Image inside the button */}
          <img
            src="https://cdn-icons-png.flaticon.com/512/1029/1029183.png"  // Replace with your image URL
            alt="Go Home"
            className="w-20 h-20 rounded-full"
          />
        </button>

        {/* Text below the button */}
        <p className="mt-2 text-lg font-semibold text-center">Back to Home</p>
      </div>

      {/* Main content */}
      <div className="flex items-center justify-center h-full">
        <h1 className="text-3xl font-bold">Welcome to the New Page!</h1>
      </div>
    </div>
  );
};

export default New;
