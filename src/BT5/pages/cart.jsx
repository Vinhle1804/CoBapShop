import React from 'react';
import Header from '../component/header';
import { useSelector, useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeItem } from '../redux/slide/cartSlice';
import Swal from 'sweetalert2';

function Cart() {
  const cart = useSelector(state => state.cart.cart);
  const dispatch = useDispatch();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleIncreaseQuantity = (id) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecreaseQuantity = (id, quantity) => {
    if (quantity > 1) {
      // Giảm số lượng sản phẩm nếu lớn hơn 1
      dispatch(decreaseQuantity(id));
    } else {
      // Hiển thị hộp thoại xác nhận khi số lượng sản phẩm bằng 1
      Swal.fire({
        title: 'Bạn có chắc chắn muốn xóa sản phẩm này?',
        text: "Sản phẩm sẽ được xóa khỏi giỏ hàng!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Có, xóa!',
        cancelButtonText: 'Hủy'
      }).then((result) => {
        if (result.isConfirmed) {
          // Nếu người dùng xác nhận, xóa sản phẩm
          dispatch(removeItem(id));
        } else {
          // Nếu người dùng hủy, không làm gì cả
          // Có thể là điều này không cần thiết vì không có hành động nào
        }
      });
    }
  };

  const handleRemoveItem = (id) => {
    // Hiển thị hộp thoại xác nhận trước khi xóa sản phẩm
    Swal.fire({
      title: 'Bạn có chắc chắn muốn xóa sản phẩm này?',
      text: "Sản phẩm sẽ được xóa khỏi giỏ hàng!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Có, xóa!',
      cancelButtonText: 'Hủy'
    }).then((result) => {
      if (result.isConfirmed) {
        // Nếu người dùng xác nhận, thực hiện hành động xóa sản phẩm
        dispatch(removeItem(id));
      }
      // Nếu người dùng hủy, không làm gì cả
    });
  };
  

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
              <div className="w-1/6 text-center flex items-center justify-between">
                <button
                  onClick={() => handleDecreaseQuantity(item.id, item.quantity)}
                  className="px-2 py-1 text-gray-700 border border-gray-300 rounded"
                >
                  -
                </button>
                <span className="mx-2">{item.quantity}</span>
                <button
                  onClick={() => handleIncreaseQuantity(item.id)}
                  className="px-2 py-1 text-gray-700 border border-gray-300 rounded"
                >
                  +
                </button>
              </div>
              {/* Price */}
              <div className="w-1/6 text-center">
                <p>{(item.price * item.quantity).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</p>
              </div>
              {/* Remove Button */}
              <button
                onClick={() => handleRemoveItem(item.id)}
                className="text-red-500 hover:underline ml-4"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
        {/* Total Section */}
        <div className="mt-4 p-4 bg-white shadow-sm">
          <h2 className="font-semibold text-xl">Total: {total.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</h2>
          <a href="../pages/checkout">
            <button className="bg-indigo-500 text-white py-2 px-4 mt-2">Checkout</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Cart;  