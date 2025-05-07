import React from "react";
import Layout from "../components/Layout"; // Your Layout component
import Cart from "../components/Cart"; // Your Cart component to display cart details

const CartPage = () => {
  return (
    <Layout>
      <div className="cart-page-container">
       
        <h1 className="text-center text-2xl font-bold my-5">Your Cart</h1>
        <Cart /> 
      </div>
    </Layout>
  );
};

export default CartPage;
