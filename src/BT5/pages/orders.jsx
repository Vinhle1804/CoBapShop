import React, { useEffect, useState } from "react";
import Header from "../component/header";

export default function Order() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(savedOrders.reverse()); // đơn mới nhất lên trước
  }, []);

  return (
    <div>
      <Header />
      <div className="container mx-auto mt-10 px-4">
        <h1 className="text-2xl font-bold mb-6 text-center">Đơn hàng của bạn</h1>

        {orders.length === 0 ? (
          <p className="text-center text-gray-500">Chưa có đơn hàng nào.</p>
        ) : (
          orders.map((order) => (
            <div key={order.id} className="mb-8 p-6 bg-white rounded shadow">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Mã đơn: {order.id}</h2>
                <span className="text-sm text-gray-500">
                  {new Date(order.createdAt).toLocaleString("vi-VN")}
                </span>
              </div>
                  {/* Thêm trạng thái đơn hàng */}
                  <div className="mt-4 p-4 bg-gray-100 rounded-lg">
                <p className="text-sm font-semibold">Trạng thái đơn hàng:</p>
                <div className="flex justify-between items-center">
                  {/* Bạn có thể thay đổi trạng thái ở đây, ví dụ: */}
                  <span className="text-lg font-medium text-indigo-600">
                    {order.status ? order.status : "Đang xử lý"} {/* Hiển thị trạng thái */}
                  </span>
                  <span className="text-sm text-gray-500">
                    {new Date().toLocaleDateString()} {/* Bạn có thể thay đổi nó thành ngày cập nhật trạng thái */}
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                {order.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center border p-4 rounded shadow-sm space-x-4"
                  >
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="w-12 h-12 object-cover rounded border"
                    />
                    <div className="flex flex-col">
                      <p className="font-semibold">{item.name}</p>
                      <p>Số lượng: {item.quantity}</p>
                      <p className="text-indigo-600 font-medium">
                        {(item.price * item.quantity).toLocaleString("vi-VN", {
                          style: "currency",
                          currency: "VND",
                        })}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
<div><div>
              {order.shipping === null && (
                <div className="mt-4 p-4 bg-yellow-100">
                  <p className="font-semibold">
                    <strong>Vui lòng đến quầy để nhận hàng</strong>
                  </p>
                </div>
              )}

              {order.shipping && (
                <div className="mt-4 text-sm text-gray-700">
                  <p><strong>Giao hàng đến:</strong></p>
                  <p>Họ tên: {order.shipping.name}</p>
                  <p>SĐT: {order.shipping.phone}</p>
                  <p>Phòng: {order.shipping.room}</p>
                </div>
              )}
</div>
<div className="mt-4 text-right font-semibold text-lg text-indigo-600">
                Tổng tiền:{" "}
                {order.total.toLocaleString("vi-VN", {
                  style: "currency",
                  currency: "VND",
                })}
              </div>
</div>
              

          
            </div>
          ))
        )}
      </div>
    </div>
  );
}
