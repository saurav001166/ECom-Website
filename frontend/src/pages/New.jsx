import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import RentalBanners from '../assets/204.jpg';
import RentalData from "../data/RentalData"; // ✅ Import your static rental data

const New = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const rentalItems = RentalData; // ✅ Use static data

  const handleGoHome = () => {
    navigate("/");
  };

  const categories = ["All", "Furniture", "Electronics", "Appliances", "Vehicles"];
  
  return (
    <div className="flex flex-col min-h-screen bg-yellow-50">
      <Navbar />

      {/* Banner Section */}
      <div className="grid grid-cols-2 gap-8 py-5 px-5">
        <div className="relative group cursor-pointer" onClick={handleGoHome}>
          <p className="absolute top-0 left-1/2 transform -translate-x-1/2 text-white text-xl backdrop-blur-sm font-semibold z-10 bg-black bg-opacity-50 px-3 py-1 rounded">
            Apna Bazar
          </p>
          <img
            src={RentalBanners}
            alt="Rental Banner"
            className="w-full h-40 object-cover transform duration-300 ease-in-out hover:scale-105 rounded-lg shadow-lg group-hover:opacity-90 transition"
          />
        </div>
      </div>

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mt-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
              selectedCategory === category
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-blue-100"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Rental Products */}
      <div className="flex-grow px-4 pt-8 pb-10">
        <h1 className="text-3xl font-bold mb-6 text-center">Rental Products</h1>
        {rentalItems.length === 0 ? (
          <p className="text-center text-gray-600">No rental items available.</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {rentalItems
              .filter((item) =>
                selectedCategory === "All" || item.category === selectedCategory
              )
              .map((item) => (
                <ProductCard
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  price={item.rentPrice}
                  desc={item.description}
                  img={item.image}
                  rating={item.rating}
                  isRental={true}
                />
              ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default New;
