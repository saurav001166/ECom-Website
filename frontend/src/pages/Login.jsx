import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../redux/slices/AuthSlice";
import toast from "react-hot-toast";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("https://flavoro-clone-backend.onrender.com/api/login", {
        email,
        password,
      });
      const data = await res.data;

      if (res.status === 200) {
        dispatch(loginUser());
        toast.success(data.message);
        navigate("/");
      }
    } catch (error) {
      toast.error("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-white flex flex-col justify-between">
      <div className="flex flex-col lg:flex-row items-center justify-center flex-grow px-4 py-10">
        {/* Left Info Section */}
        <div className="hidden lg:flex flex-col items-start justify-center text-gray-700 w-1/2 pr-10">
          <h1 className="text-3xl font-bold mb-4">Welcome to ShopEase!</h1>
          <p className="text-sm">
            Your one-stop destination for fashion, groceries, electronics,
            cosmetics, and even rentals — all in one cart. Sign in to start
            shopping!
          </p>
        </div>

        {/* Login Form */}
        <form
          onSubmit={handleLogin}
          className="bg-white rounded-lg p-6 shadow-lg flex flex-col gap-4 w-full max-w-sm"
        >
          <h2 className="text-xl font-semibold text-center text-green-600">Login</h2>
          <input
            type="email"
            name="email"
            className="border rounded-md px-3 py-2 focus:border-green-400 text-gray-700"
            placeholder="johndoe@gmail.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name="password"
            className="border rounded-md px-3 py-2 focus:border-green-400 text-gray-700"
            placeholder="********"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Link to="/forgot-password" className="text-xs text-gray-500 hover:underline">
            Forgot Password?
          </Link>
          <button
            type="submit"
            className="bg-green-500 text-white py-2 rounded-md hover:bg-green-400"
          >
            Login
          </button>
          <p className="text-xs text-center text-gray-600">
            Don't have an account?{" "}
            <Link to="/signup" className="text-green-600 hover:underline">
              Sign up
            </Link>
          </p>
        </form>
      </div>

      {/* Footer */}
      <footer className="bg-green-50 py-4 text-center text-sm text-gray-600">
        <div className="flex justify-center gap-4 mb-2 text-green-700">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <FaTwitter />
          </a>
        </div>
        <p>
          Need help? Contact us at{" "}
          <a href="mailto:support@shopease.com" className="text-green-600 underline">
            support@shopease.com
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Login;
