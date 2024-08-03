import React, { useState } from 'react';
import Header from '../component/header';
import productList from '../pages/productList';
import { useDispatch } from "react-redux";
import { addtoCart } from "../redux/slide/cartSlice"; 
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

function Product() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const dispatch = useDispatch();
  
  const itemsPerPage = 4; // Số lượng sản phẩm hiển thị mỗi trang
  const totalItems = productList.length; // Tổng số sản phẩm
  const totalPages = Math.ceil(totalItems / itemsPerPage); // Tổng số trang

  // Cập nhật sản phẩm hiện tại để hiển thị
  const currentProducts = productList.slice(currentIndex, currentIndex + itemsPerPage);

  // Hàm chuyển đến trang trước
  const handlePrev = () => {
    setCurrentIndex(prevIndex => (prevIndex - itemsPerPage + totalItems) % totalItems);
  };

  // Hàm chuyển đến trang tiếp theo
  const handleNext = () => {
    setCurrentIndex(prevIndex => (prevIndex + itemsPerPage) % totalItems);
  };

  const addCart = (item) => {
    console.log("Adding to cart:", item);
    dispatch(addtoCart(item));
  };

  return (
    <div>
      <Header />
      <div className="p-8 bg-gradient-to-r from-blue-500 to-teal-500">
        <div className="flex flex-wrap justify-center gap-4">
          {currentProducts.map((product) => (
            <div 
              key={product.id} 
              className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center p-4 m-2"
            >
              <img 
                src={product.imageUrl} 
                alt={product.name} 
                className="w-full h-48 object-cover mb-4 rounded-lg"
              />
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-700 mb-4">{product.price}</p>
              <button 
                onClick={() => addCart(product)} 
                className="bg-gradient-to-r from-red-500 to-red-600 text-white p-2 rounded-lg flex items-center transition-colors duration-300"
              >
                <AddShoppingCartIcon className="mr-2" />
                Add to Cart
              </button>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center mt-4">
          <div className="flex items-center mb-2">
            <button 
              onClick={handlePrev} 
              className="bg-gray-500 text-white px-4 py-2 rounded-lg mx-2"
              disabled={currentIndex === 0} // Disable button if on first page
            >
              Previous
            </button>
            <span className="text-white">
              Page {Math.floor(currentIndex / itemsPerPage) + 1} of {totalPages}
            </span>
            <button 
              onClick={handleNext} 
              className="bg-gray-500 text-white px-4 py-2 rounded-lg mx-2"
              disabled={currentIndex + itemsPerPage >= totalItems} // Disable button if on last page
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
