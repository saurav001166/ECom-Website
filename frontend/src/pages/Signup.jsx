import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import signupBg from "../assets/205.jpg"; // background image
import shoppingGif from "../assets/206.gif"; // gif

const Signup = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(
        `http://localhost:5174/signup`,
        { name, email, password }
      );
      const data = await res.data;

      if (res.status === 201) {
        toast.success(data.message);
        navigate("/login");
      } else if (res.status === 400 || res.status === 500) {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-4"
      style={{ backgroundImage: `url(${signupBg})` }}
    >
      <div className="bg-black bg-opacity-60 w-full max-w-5xl rounded-lg shadow-lg p-8 flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left Info */}
        <div className="text-white w-full lg:w-1/2 space-y-4">
          <h1 className="text-4xl font-bold">
            Join Apna Bazar Today!
          </h1>
          <p className="text-sm text-gray-200">
            Sign up now to access exclusive deals on fashion, electronics,
            groceries, cosmetics, and rentals — all under one roof.
          </p>
          <div className="flex items-center gap-32 mt-25">
            <button className="px-5 py-2 bg-orange-500 text-white font-semibold rounded hover:bg-orange-600">
              Signup Now
            </button>
            <img
              src={shoppingGif}
              alt="Shopping GIF"
              className="w-32 h-32  object-cover"
            />
          </div>
        </div>

        {/* Signup Form */}
        <form
          onSubmit={handleSignup}
          className="bg-white w-full max-w-sm p-6 rounded-lg shadow-md flex flex-col gap-4"
        >
          <h2 className="text-xl font-semibold text-center text-orange-600">
            Create Account
          </h2>

          <input
            type="text"
            name="name"
            id="name"
            className="border-b border-orange-400 px-3 py-2 text-gray-800 focus:outline-none"
            autoComplete="off"
            placeholder="Full Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            name="email"
            id="email"
            className="border-b border-orange-400 px-3 py-2 text-gray-800 focus:outline-none"
            autoComplete="off"
            placeholder="Email Address"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name="password"
            id="password"
            className="border-b border-orange-400 px-3 py-2 text-gray-800 focus:outline-none"
            autoComplete="off"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600"
            disabled={loading}
          >
            {loading ? "Signing up..." : "Signup"}
          </button>

          <p className="text-xs text-center text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-orange-600 hover:underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
