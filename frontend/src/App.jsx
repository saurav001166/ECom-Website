import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Success from "./pages/Success";
import Error from "./pages/Error";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ResetPassword from "./pages/ResetPassword";
import VerifyOtp from "./pages/VerifyOtp";
import NewPage from "./pages/New";
import AddRentalProductPage from "./pages/AddRentalProductPage";
import CartPage from "./pages/CartPage"; // ✅ Import this
import Layout from "./components/Layout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout><Home /></Layout>} />
      <Route path="/add-rental" element={<Layout><AddRentalProductPage /></Layout>} />
      <Route path="/new-page" element={<Layout><NewPage /></Layout>} />
      <Route path="/success" element={<Success />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot-password" element={<ResetPassword />} />
      <Route path="/verify-otp" element={<VerifyOtp />} />
      
      
      <Route
        
        element={
          <ProtectedRoute>
          
          </ProtectedRoute>
        }
      />
      
     
    </Routes>
  );
};

export default App;
