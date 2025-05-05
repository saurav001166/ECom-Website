import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../redux/slices/CategorySlice";


// Import images for each category
import ImgAll from "../assets/912.jpg";
import ImgBurger from "../assets/9312.jpg";      // Cosmetics
import ImgPizza from "../assets/913.jpg";        // Shoes
import ImgDessert from "../assets/16509.jpg";    // Electronics
import ImgMobiles from "../assets/914.jpg";
import ImgToys from "../assets/915.jpg";
import ImgFurniture from "../assets/917.jpg";
import ImgGrocery from "../assets/916.jpg";
import ImgHome from "../assets/918.jpg";
import HomeGif from "../assets/home.gif"

const CategoryMenu = () => {
  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.category.category);

  return (
    <div className="ml-6">
      <h3 className="text-xl font-semibold mb-4">Find the best products</h3>
      <div className="flex gap-4 overflow-x-scroll lg:overflow-x-hidden">
        {/* All Button */}
        <button
          onClick={() => dispatch(setCategory("All"))}
          className={`flex flex-col items-center justify-center gap-1 px-4 py-2 rounded-lg transform duration-300 hover:scale-110 ${
            selectedCategory === "All" ? "text-black" : "bg-white/10"
          }`}
        >
          <img src={HomeGif} alt="All" className="w-14 h-14 rounded-full" />
          <span className="text-sm font-medium">Home</span>
        </button>

        {/* Cosmetics */}
        <button
          onClick={() => dispatch(setCategory("Cosmetics"))}
          className={`flex flex-col items-center justify-center gap-1 px-4 py-2 rounded-lg transform duration-300 hover:scale-110 ${
            selectedCategory === "Cosmetics" ? "text-black" : "bg-white/10"
          }`}
        >
          <img src={ImgBurger} alt="Cosmetics" className="w-14 h-14 rounded-full" />
          <span className="text-sm font-medium">Cosmetics</span>
        </button>

        {/* Shoes */}
        <button
          onClick={() => dispatch(setCategory("Shoes"))}
          className={`flex flex-col items-center justify-center gap-1 px-4 py-2 rounded-lg transform duration-300 hover:scale-110 ${
            selectedCategory === "Shoes" ? "text-black" : "bg-white/10"
          }`}
        >
          <img src={ImgPizza} alt="Shoes" className="w-14 h-14 rounded-full" />
          <span className="text-sm font-medium">Shoes</span>
        </button>

        {/* Electronics */}
        <button
          onClick={() => dispatch(setCategory("Electronics"))}
          className={`flex flex-col items-center justify-center gap-1 px-4 py-2 rounded-lg transform duration-300 hover:scale-110 ${
            selectedCategory === "Electronics" ? "text-black" : "bg-white/10"
          }`}
        >
          <img src={ImgDessert} alt="Electronics" className="w-14 h-14 rounded-full" />
          <span className="text-sm font-medium">Electronics</span>
        </button>

        {/* Mobiles */}
        <button
          onClick={() => dispatch(setCategory("Mobiles"))}
          className={`flex flex-col items-center justify-center gap-1 px-4 py-2 rounded-lg transform duration-300 hover:scale-110 ${
            selectedCategory === "Mobiles" ? "text-black" : "bg-white/10"
          }`}
        >
          <img src={ImgMobiles} alt="Mobiles" className="w-14 h-14 rounded-full" />
          <span className="text-sm font-medium">Mobiles</span>
        </button>

        {/* Toys and Teddies */}
        <button
          onClick={() => dispatch(setCategory("Toys and Teddies"))}
          className={`flex flex-col items-center justify-center gap-1 px-4 py-2 rounded-lg transform duration-300 hover:scale-110 ${
            selectedCategory === "Toys and Teddies" ? "text-black" : "bg-white/10"
          }`}
        >
          <img src={ImgToys} alt="Toys and Teddies" className="w-14 h-14 rounded-full" />
          <span className="text-sm font-medium">Toys & Teddies</span>
        </button>

        {/* Furniture */}
        <button
          onClick={() => dispatch(setCategory("Furniture"))}
          className={`flex flex-col items-center justify-center gap-1 px-4 py-2 rounded-lg transform duration-300 hover:scale-110 ${
            selectedCategory === "Furniture" ? "text-black" : "bg-white/10"
          }`}
        >
          <img src={ImgFurniture} alt="Furniture" className="w-14 h-14 rounded-full" />
          <span className="text-sm font-medium">Furniture</span>
        </button>

        {/* Grocery */}
        <button
          onClick={() => dispatch(setCategory("Grocery"))}
          className={`flex flex-col items-center justify-center gap-1 px-4 py-2 rounded-lg transform duration-300 hover:scale-110 ${
            selectedCategory === "Grocery" ? "text-black" : "bg-white/10"
          }`}
        >
          <img src={ImgGrocery} alt="Grocery" className="w-14 h-14 rounded-full" />
          <span className="text-sm font-medium">Grocery</span>
        </button>

        {/* Home */}
        <button
          onClick={() => dispatch(setCategory("Home"))}
          className={`flex flex-col items-center justify-center gap-1 px-4 py-2 rounded-lg transform duration-300 hover:scale-110 ${
            selectedCategory === "Home" ? "text-black" : "bg-white/10"
          }`}
        >
          <img src={ImgHome} alt="Home" className="w-14 h-14 rounded-full" />
          <span className="text-sm font-medium">Home</span>
        </button>
      </div>
    </div>
  );
};

export default CategoryMenu;
