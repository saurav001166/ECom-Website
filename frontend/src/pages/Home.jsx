import RentalImage from "../assets/919.jpg"; // Adjust the path as needed
import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import CategoryMenu from "../components/CategoryMenu";
import FoodItems from "../components/FoodItems";
import Cart from "../components/Cart";
import Footer from "../components/Footer";
import Switch from "../components/Switch";


const Home = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/new-page");
  };

  return (
    <div className="bg-white">
      <Navbar />
     <Switch />
      <div className="pt-10">
        
        <CategoryMenu />
        <FoodItems />
        <Cart />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
