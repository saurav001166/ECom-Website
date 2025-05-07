import React from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import toast from "react-hot-toast";
import { AiFillStar } from "react-icons/ai";
import { setCart } from "../redux/slices/CartSlice"; // Redux action to set cart state
import { getCart } from "../helper"; // Helper to fetch cart data

const FoodCard = ({ id, name, price, desc, img, rating, isRental = false }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  // Handle adding item to cart
  const handleCartAction = async () => {
    if (!user) {
      toast.error("Please login to continue");
      return;
    }

    try {
      // Adding item to cart in the backend
      const res = await axios.post(
        `https://flavoro-clone-backend.onrender.com/api/add-to-cart/${user._id}`,
        {
          id,
          image: img,
          name,
          price,
          rating,
          quantity: 1,
        }
      );

      toast.success("Added to cart");

      // Get updated cart from backend
      const updatedCart = await getCart(user);
      dispatch(setCart(updatedCart.cartItems)); // Update Redux state with new cart items

    } catch (err) {
      toast.error("Error adding to cart");
    }
  };

  return (
    <div className="font-bold w-[250px] bg-white p-5 flex flex-col rounded-lg gap-2">
      <img
        src={img}
        alt={name}
        className="w-auto h-[130px] hover:scale-110 cursor-grab transition-all duration-500 ease-in-out"
      />
      <div className="text-sm flex justify-between">
        <h2>{name}</h2>
        <span className="text-green-500">
          ₹{price} {isRental && <span className="text-xs">/day</span>}
        </span>
      </div>
      <p className="text-sm font-normal">
        {desc ? desc.slice(0, 50) + "..." : "No description available"}
      </p>
      <div className="flex justify-between items-center">
        <span className="flex items-center">
          <AiFillStar className="mr-1 text-yellow-400" /> {rating}
        </span>
        <button
          onClick={handleCartAction}
          className="p-1 px-2 text-white bg-blue-500 hover:bg-blue-600 rounded-lg text-sm"
        >
          {isRental ? "Rent Now" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
