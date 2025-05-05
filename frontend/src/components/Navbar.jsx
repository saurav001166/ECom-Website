import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../redux/slices/SearchSlice";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { FiLogIn } from "react-icons/fi";
import NavList from "./NavList";
import axios from "axios";
import { loginUser, setUser, logoutUser } from "../redux/slices/AuthSlice";
import { getCart } from "../helper";
import { setCart } from "../redux/slices/CartSlice";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/ApnaBazarLogo.png"

axios.defaults.withCredentials = true;

const carouselImages = [
  "https://img.freepik.com/free-photo/black-friday-elements-assortment_23-2149074075.jpg?semt=ais_hybrid&w=740",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSODCnyMUyG-Z7Qc0SF8-iyR7Dj4ZPAJdI6oEqaW82yg1uvSKBN1SxzqXKNdMzSglLxI0&usqp=CAU",
  "https://www.shutterstock.com/image-photo/kazan-russia-oct-14-2021-260nw-2057505134.jpg",
];

const Navbar = () => {
  const dispatch = useDispatch();
  const [toggleNav, setToggleNav] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const auth = useSelector((state) => state.auth.isAuth);
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();

  // Image Carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % carouselImages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Fetch User & Cart
  useEffect(() => {
    const fetchData = async () => {
      if (!user) {
        try {
          const res = await axios.get("https://flavoro-clone-backend.onrender.com/api/get-user");
          dispatch(setUser(res.data.user));
          dispatch(loginUser());
          if (res.data.user) {
            const cartData = await getCart(res.data.user);
            dispatch(setCart(cartData.cartItems));
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    };
    fetchData();
  }, [user, dispatch]);

  // Logout
  const handleLogout = async () => {
    try {
      await axios.get("https://flavoro-clone-backend.onrender.com/api/logout");
      dispatch(logoutUser());
      alert("Logged out successfully.");
      navigate("/login");
    } catch (error) {
      console.error("Logout failed", error);
      alert("An error occurred while logging out.");
    }
  };

  return (
    <div className="relative w-screen h-[300px] overflow-hidden rounded-b-xl shadow-md">
      {/* Background Carousel */}
      <img
        src={carouselImages[currentImage]}
        alt="carousel"
        className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000"
      />

      {/* Overlay with Navigation Content */}
      <nav className="relative z-10 flex flex-col lg:flex-row justify-between items-center bg-black/40 backdrop-blur-sm p-6 text-white">
      <div className="mb-4 lg:mb-0 flex items-center">
  <img src={Logo} alt="logo" className="rounded-full w-20 h-20" />
  
  <div className="ml-4 flex flex-col">
    <h1 className="text-3xl font-bold tracking-wide">Apna Bazar</h1>
    <h3 className="text-xs text-gray-300">{new Date().toUTCString().slice(0, 16)}</h3>
  </div>
</div>


        <div className="w-full max-w-md">
          <input
            type="search"
            placeholder="Search for products..."
            onChange={(e) => dispatch(setSearch(e.target.value))}
            className="w-full px-4 py-2 rounded-lg text-gray-800 text-sm outline-none border-none"
          />
        </div>

        <div className="flex items-center gap-4 mt-4 lg:mt-0">
          {!auth ? (
            <button
              onClick={() => navigate("/login")}
              className="flex items-center gap-2 px-4 py-2 bg-white text-blue-600 rounded-full hover:bg-blue-100 transition"
            >
              <FiLogIn size={18} />
              Login
            </button>
          ) : (
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition"
            >
              Logout
            </button>
          )}
        </div>

        {/* Hamburger / Close icons */}
        <GiHamburgerMenu
          className={`absolute top-6 right-6 lg:hidden text-2xl cursor-pointer ${toggleNav && "hidden"}`}
          onClick={() => setToggleNav(true)}
        />
        <MdClose
          className={`absolute top-6 right-6 lg:hidden text-2xl cursor-pointer ${!toggleNav && "hidden"}`}
          onClick={() => setToggleNav(false)}
        />
      </nav>

      {/* Navigation Links */}
      <NavList toggleNav={toggleNav} setToggleNav={setToggleNav} auth={auth} handleLogout={handleLogout} />
    </div>
  );
};

export default Navbar;
