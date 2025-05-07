import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../redux/slices/AuthSlice";
import toast from "react-hot-toast";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import loginBg from "../assets/205.jpg";
import shoppingGif from "../assets/207.gif";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5174/login", {
        email,
        password,
      });

      if (res.status === 200) {
        dispatch(loginUser());
        toast.success(res.data.message);
        navigate("/");
      }
    } catch (error) {
      toast.error("Login failed. Please check your credentials.");
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-4"
      style={{
        backgroundImage: `url(${loginBg})`,
      }}
    >
      <div className="bg-black bg-opacity-60 w-full max-w-5xl rounded-lg shadow-lg p-8 flex flex-col lg:flex-row items-center justify-between gap-10">
        
        {/* Left Info */}
        <div className="text-white w-full lg:w-1/2 space-y-4">
          <h1 className="text-4xl font-bold">
            Apna Bazar: Everything in One Cart
          </h1>
          <p className="text-sm text-gray-200">
            Explore our vast collection of fashion, electronics, groceries,
            cosmetics, and even rentals. Experience a seamless and powerful
            shopping journey — all in one place.
          </p>
          <div className="flex items-center gap-40 mt-4">
            <button className="px-5 py-2 bg-orange-500 text-white font-semibold rounded hover:bg-orange-600">
              Join Us
            </button>
            <img src={shoppingGif} alt="shopping animation" className="w-40 h-40" />
          </div>
        </div> {/* ← This closing tag was missing */}

        {/* Login Form */}
        <form
          onSubmit={handleLogin}
          className="bg-white w-full max-w-sm p-6 rounded-lg shadow-md flex flex-col gap-4"
        >
          <h2 className="text-xl font-semibold text-center text-orange-600">
            Login Here
          </h2>
          <input
            type="email"
            className="border-b border-orange-400 px-3 py-2 text-gray-800 focus:outline-none"
            placeholder="Enter Email Here"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="border-b border-orange-400 px-3 py-2 text-gray-800 focus:outline-none"
            placeholder="Enter Password Here"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Link
            to="/forgot-password"
            className="text-xs text-right text-gray-500 hover:underline"
          >
            Forgot Password?
          </Link>
          <button
            type="submit"
            className="bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600"
          >
            Login
          </button>
          <p className="text-xs text-center text-gray-600">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-orange-600 hover:underline">
              Sign up
            </Link>
          </p>

          {/* Social Media Icons */}
          <div className="text-center mt-4">
            <p className="text-sm text-gray-600 mb-2">Log in with</p>
            <div className="flex justify-center gap-4 text-orange-600 text-lg">
              <FaFacebookF />
              <FaInstagram />
              <FaTwitter />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
