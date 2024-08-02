import React, { useState, useEffect } from 'react';
import Header from '../component/header';
import productList from '../pages/productList';
import { useDispatch } from "react-redux";
import { addtoCart } from "../redux/slide/cartSlice"; // Điều chỉnh đường dẫn nếu cần


function Product() {
  const [list, setList] = useState([]);
  const dispatch = useDispatch();
  console.log(list)

  useEffect(() => {
    setList(productList);
  }, []);

  const addCart = (item) => {
    console.log("Adding to cart:", item);
    dispatch(addtoCart(item));
  };

  return (
    <div>
      <Header />
      <div className="flex flex-wrap justify-center gap-4 p-4">
        {list.map((product) => (
          <div key={product.id} className="bg-pink-200 h-72 w-56 flex flex-col justify-center items-center p-4">
            <img src={product.imageUrl} alt={product.name} className="w-44 h-36 bg-slate-400 mb-4" />
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-700">{product.price}</p>
            <button 
              onClick={() => addCart(product)} 
              className="bg-red-400 p-2 mt-2"
            >
              Muangay
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
