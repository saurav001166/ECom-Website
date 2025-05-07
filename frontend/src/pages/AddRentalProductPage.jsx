import React from 'react';
import AddRentalProductForm from '../components/AddRentalProduct';
import Cart from '../components/Cart.jsx'; 

const AddRentalProductPage = () => {
  return (
    <div className="relative">
      <h1 className="text-2xl font-bold mb-4">Add a New Rental Product</h1>
      <AddRentalProductForm />
      
      <Cart /> 
    </div>
  );
};

export default AddRentalProductPage;
