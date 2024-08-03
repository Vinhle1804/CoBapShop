// src/pages/Carousel.js
import React from 'react';
import carouselImage from '../assets/carousel.jpg';

function Carousel() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <img src={carouselImage} alt="kkk" className="max-w-full h-auto" />
    </div>
  );
}

export default Carousel;
