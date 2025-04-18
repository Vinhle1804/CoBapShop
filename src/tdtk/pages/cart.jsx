import React, { useState } from "react";
import Header from "../component/header";
import { useSelector, useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeItem,
} from "../redux/slide/cartSlice";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import momoQR from "../assets/checkouttt.jpeg";

function Cart() {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const [isOpen, setIsOpen] = useState(false);
  const [shippingInfo, setShippingInfo] = useState({
    name: "",
    phone: "",
    room: "",
    note: "",
    paid: "Tiền mặt",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleIncreaseQuantity = (id) => dispatch(increaseQuantity(id));

  const handleDecreaseQuantity = (id, quantity) => {
    if (quantity > 1) {
      dispatch(decreaseQuantity(id));
    } else {
      Swal.fire({
        title: "Bạn có chắc chắn muốn xóa sản phẩm này?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Xóa",
        cancelButtonText: "Hủy",
      }).then((result) => {
        if (result.isConfirmed) dispatch(removeItem(id));
      });
    }
  };

  const handleRemoveItem = (id) => {
    Swal.fire({
      title: "Xóa sản phẩm?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Xóa",
      cancelButtonText: "Hủy",
    }).then((result) => {
      if (result.isConfirmed) dispatch(removeItem(id));
    });
  };

  const handleOrder = () => {
    if (isOpen) {
      const { name, phone, room } = shippingInfo;
      if (!name || !phone || !room) {
        Swal.fire(
          "Thiếu thông tin!",
          "Vui lòng điền đầy đủ thông tin giao hàng.",
          "warning"
        );
        return;
      }
    }

    const paymentStatus =
      shippingInfo.paid === "Chuyển khoản" ? "Đã thanh toán" : "Chưa thanh toán";

    const order = {
      id: Date.now(),
      items: cart,
      total,
      shipping: isOpen ? shippingInfo : null,
      paid: paymentStatus,
      createdAt: new Date().toISOString(),
    };

    const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];
    localStorage.setItem("orders", JSON.stringify([...existingOrders, order]));
    localStorage.removeItem("cart");

    if (shippingInfo.paid === "Chuyển khoản") {
      Swal.fire({
        title: "Quét mã để thanh toán",
        html: `
          <p>Vui lòng quét mã QR Momo để thanh toán số tiền:</p>
          <p class="text-lg font-bold text-indigo-600">${total.toLocaleString(
            "vi-VN",
            {
              style: "currency",
              currency: "VND",
            }
          )}</p>
          <div style="display: flex; justify-content: center; margin-top: 20px;">
            <img src="${momoQR}" alt="QR Momo" style="max-width: 300px; width: 100%; height: auto; border-radius: 8px;" />
          </div>
        `,
        showConfirmButton: false,
        timer: 10000,
        timerProgressBar: true,
        didClose: () => {
          navigate("/tdtk/order");
        },
      });
    } else {
      Swal.fire(
        "Đặt hàng thành công!",
        isOpen
          ? "Đơn hàng sẽ được giao tận lớp."
          : "Vui lòng đến quầy nhận hàng.",
        "success"
      ).then(() => {
        navigate("/tdtk/order");
      });
    }
  };

  const handleContinueShopping = () => {
    navigate("/tdtk/product");
  };

  return (
    <div>
      <Header />
      <div className="container mx-auto mt-10 px-4">
        <div className="mt-6 text-center flex ">
          <button
            onClick={handleContinueShopping}
            className="py-2 px-6 bg-orange-500 text-white rounded hover:bg-indigo-600"
          >
            Tiếp tục chọn món
          </button>
        </div>
        <h1 className="font-semibold text-2xl mb-4 text-center">Giỏ hàng</h1>

        <div className="flex flex-col space-y-4">
          {cart.map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 bg-white shadow rounded"
            >
              <div className="text-center w-full md:w-[5%] font-bold">
                {index + 1}
              </div>
              <div className="w-full md:w-[15%] flex justify-center">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="h-20 w-20 object-cover rounded border"
                />
              </div>
              <div className="w-full md:w-[25%] text-center">{item.name}</div>
              <div className="w-full md:w-[20%] flex justify-center items-center space-x-3">
                <button
                  onClick={() => handleDecreaseQuantity(item.id, item.quantity)}
                  className="px-3 py-1 bg-gray-400 text-white rounded"
                >
                  −
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => handleIncreaseQuantity(item.id)}
                  className="px-3 py-1 bg-gray-700 text-white rounded"
                >
                  +
                </button>
              </div>
              <div className="w-full md:w-[20%] text-center text-indigo-600 font-semibold">
                {(item.price * item.quantity).toLocaleString("vi-VN", {
                  style: "currency",
                  currency: "VND",
                })}
              </div>
              <div className="w-full md:w-[10%] text-center">
                <button
                  onClick={() => handleRemoveItem(item.id)}
                  className="text-red-600 hover:underline"
                >
                  Xóa
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Phương thức thanh toán</h3>
          <div className="flex flex-col md:flex-row gap-4">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="paid"
                value="Tiền mặt"
                checked={shippingInfo.paid === "Tiền mặt"}
                onChange={handleInputChange}
              />
              <span>Tiền mặt</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="paid"
                value="Chuyển khoản"
                checked={shippingInfo.paid === "Chuyển khoản"}
                onChange={handleInputChange}
              />
              <span>Chuyển khoản</span>
            </label>
          </div>
        </div>

        <div className="mt-6 p-6 bg-white shadow rounded">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">
              Tổng cộng:
              <span className="text-indigo-600 ml-2">
                {total.toLocaleString("vi-VN", {
                  style: "currency",
                  currency: "VND",
                })}
              </span>
            </h2>
            <div className="flex items-center space-x-2">
              <span>Giao hàng tận lớp</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={isOpen}
                  onChange={handleToggle}
                />
                <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-indigo-600 transition-all"></div>
                <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full shadow peer-checked:translate-x-full transition-all"></div>
              </label>
            </div>
          </div>

          {isOpen && (
            <div className="mt-4 p-6 bg-white shadow rounded">
              <h3 className="text-lg font-semibold mb-4">
                Thông tin giao hàng
              </h3>
              <form className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Họ và tên"
                  value={shippingInfo.name}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Số điện thoại"
                  value={shippingInfo.phone}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                />
                <input
                  type="text"
                  name="room"
                  placeholder="Tên phòng"
                  value={shippingInfo.room}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                />
              </form>
            </div>
          )}

          <button
            onClick={handleOrder}
            disabled={cart.length === 0}
            className={`py-2 mt-6 px-6 rounded text-white transition-all ${
              cart.length === 0
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-indigo-500 hover:bg-indigo-600"
            }`}
          >
            Đặt hàng
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
