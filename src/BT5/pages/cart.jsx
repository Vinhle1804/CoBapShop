import React from 'react';
import Header from '../component/header';
import { useSelector } from 'react-redux';

function Cart() {
  const cart = useSelector(state => state.cart.cart);
  
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div>
      <Header />
      <div className="container mx-auto mt-10">
        <h1 className="font-semibold text-2xl mb-4">Shopping Cart</h1>
        <div className="flex flex-col">
          {cart.map((item, index) => (
            <div key={index} className="flex items-center justify-between mb-4 p-4 bg-white shadow-sm">
              {/* STT */}
              <div className="w-1/6">
                <p className="font-semibold">{index + 1}</p>
              </div>
              {/* Image */}
              <div className="w-1/6">
                <img className="h-16 w-16 object-cover" src={item.imageUrl} alt={item.name} />
              </div>
              {/* Product Name */}
              <div className="w-2/6">
                <p className="font-semibold">{item.name}</p>
              </div>
              {/* Quantity */}
              <div className="w-1/6 text-center">
                <p>1</p> {/* Cần cập nhật logic cho số lượng sản phẩm */}
              </div>
              {/* Price */}
              <div className="w-1/6 text-center">
                <p>${item.price}</p>
              </div>
              {/* Remove Button */}
              <button className="text-red-500 hover:underline ml-4">Remove</button> {/* Thêm logic để xóa sản phẩm */}
            </div>
          ))}
        </div>
        {/* Total Section */}
        <div className="mt-4 p-4 bg-white shadow-sm">
          <h2 className="font-semibold text-xl">Total: ${total}</h2>
          <button className="bg-indigo-500 text-white py-2 px-4 mt-2">Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
