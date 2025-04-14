import React, { useState } from 'react';
import Header from '../component/header';
import Footer from '../component/footter';
import { useDispatch } from "react-redux";
import { addtoCart } from "../redux/slide/cartSlice";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import productList from '../data/productList';

function Product() {
  const dispatch = useDispatch();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedType, setSelectedType] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const itemsPerPage = 4;

  // Filter theo type và search
  const filteredProducts = productList.filter(product => {
    const matchType = selectedType === 'all' || product.type === selectedType;
    const matchSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchType && matchSearch;
  });

  const totalItems = filteredProducts.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const currentProducts = filteredProducts.slice(currentIndex, currentIndex + itemsPerPage);

  const handlePrev = () => {
    setCurrentIndex(prev => Math.max(prev - itemsPerPage, 0));
  };

  const handleNext = () => {
    setCurrentIndex(prev => Math.min(prev + itemsPerPage, totalItems - itemsPerPage));
  };

  const handleFilter = (type) => {
    setSelectedType(type);
    setCurrentIndex(0); // Reset về trang đầu
  };

  const addCart = (item) => {
    dispatch(addtoCart(item));
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentIndex(0); // Reset trang đầu mỗi khi tìm
  };

  return (
    <div>
      <Header />

      <div className="p-8 bg-gradient-to-r from-blue-500 to-teal-500 min-h-screen">
        {/* Bộ lọc & tìm kiếm */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-6">
          <div className="flex gap-2">
            {['all', 'food', 'drink'].map(type => (
              <button
                key={type}
                onClick={() => handleFilter(type)}
                className={`px-4 py-2 rounded-full font-semibold transition ${
                  selectedType === type ? 'bg-white text-blue-600' : 'bg-gray-200 text-gray-700'
                }`}
              >
                {type === 'all' ? 'Tất cả' : type === 'food' ? 'Đồ ăn' : 'Đồ uống'}
              </button>
            ))}
          </div>

          <input
            type="text"
            placeholder="Tìm theo tên món..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="px-4 py-2 rounded-lg w-64 outline-none focus:ring-2 focus:ring-white shadow-md"
          />
        </div>

        {/* Danh sách sản phẩm */}
        <div className="flex flex-wrap justify-center gap-4">
          {currentProducts.length > 0 ? (
            currentProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center p-4 w-[250px]"
              >
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-[200px] h-[200px] object-cover mb-4 rounded-lg"
                />
                <h3 className="text-lg font-semibold mb-2 text-center">{product.name}</h3>
                <p className="text-red-600 mb-4 font-medium">
                  {product.price.toLocaleString()} VNĐ
                </p>
                <button
                  onClick={() => addCart(product)}
                  className="bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-lg flex items-center hover:brightness-110"
                >
                  <AddShoppingCartIcon className="mr-2" />
                  Thêm vào giỏ hàng
                </button>
              </div>
            ))
          ) : (
            <p className="text-white font-semibold text-xl mt-10">Không tìm thấy sản phẩm phù hợp.</p>
          )}
        </div>

        {/* Phân trang */}
        {totalPages > 1 && (
          <div className="flex flex-col items-center mt-6">
            <div className="flex items-center">
              <button
                onClick={handlePrev}
                className="bg-gray-700 text-white px-4 py-2 rounded-lg mx-2"
                disabled={currentIndex === 0}
              >
                Previous
              </button>
              <span className="text-white font-medium">
                Trang {Math.floor(currentIndex / itemsPerPage) + 1} / {totalPages}
              </span>
              <button
                onClick={handleNext}
                className="bg-gray-700 text-white px-4 py-2 rounded-lg mx-2"
                disabled={currentIndex + itemsPerPage >= totalItems}
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default Product;
