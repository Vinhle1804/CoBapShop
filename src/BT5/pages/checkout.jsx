// src/pages/Checkout.js
import React from 'react';
import checkoutImage from '../assets/checkout.jpg';

function Checkout() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Quét mã đê</h1>
      <img className="h-96 w-96" src={checkoutImage} alt="kaka" />
    </div>
  );
}

export default Checkout;
