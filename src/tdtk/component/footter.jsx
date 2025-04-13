// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo & Description */}
        <div>
          <h2 className="text-xl sm:text-2xl font-bold mb-2">MyCompany</h2>
          <p className="text-sm sm:text-base leading-relaxed">
            Mang đến sản phẩm chất lượng cao cho khách hàng trên toàn quốc.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Liên kết</h3>
          <ul className="space-y-1 text-sm sm:text-base">
            <li><a href="/" className="hover:text-gray-300">Trang chủ</a></li>
            <li><a href="/about" className="hover:text-gray-300">Giới thiệu</a></li>
            <li><a href="/products" className="hover:text-gray-300">Sản phẩm</a></li>
            <li><a href="/contact" className="hover:text-gray-300">Liên hệ</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Liên hệ</h3>
          <p className="text-sm sm:text-base">📍 123 Đường ABC, TP.HCM</p>
          <p className="text-sm sm:text-base">📞 0123 456 789</p>
          <p className="text-sm sm:text-base">✉️ support@mycompany.vn</p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="text-center text-xs sm:text-sm py-4 bg-gray-900">
        © 2025 MyCompany. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
