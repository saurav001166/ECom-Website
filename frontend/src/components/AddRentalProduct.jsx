import React, { useState } from 'react';
import axios from 'axios';

const AddRentalProductForm = () => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [rentPrice, setRentPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [rating, setRating] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send POST request to the backend to add rental product
      const response = await axios.post('http://localhost:5000/rentals/add', {
        name,
        category,
        rentPrice,
        description,
        image,
        rating,
      });

      
      alert(response.data.message);
    } catch (error) {
      console.error('Error adding rental product:', error);
      alert('Failed to add rental product');
    }
  };

  return (
    <div>
      <h2>Add a New Rental Product</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Rent Price"
          value={rentPrice}
          onChange={(e) => setRentPrice(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          required
        />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddRentalProductForm;
