// src/pages/Carousel.js
import React from 'react';
import carouselImage from '../assets/carousel.png';
import carouselImage2 from '../assets/aoc.png';


function Carousel() {
  return (
    <div>
    <div className="flex justify-center items-center bg-red-100 p-2">
      <img src={carouselImage} alt="kkk" className="max-w-full h-auto" />
    </div>
      <div className="flex justify-center items-center bg-red-100 p-2">
      <img src={carouselImage2} alt="kkk" className="max-w-full h-auto" />
    </div>
    </div>
  );
}

export default Carousel;
