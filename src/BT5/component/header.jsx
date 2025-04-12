import React, { useState, useEffect } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Kiểm tra nếu có user trong localStorage khi component được mount
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser); // Cập nhật state user nếu có thông tin người dùng trong localStorage
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user'); // Xóa user khỏi localStorage
    setUser(null); // Cập nhật lại state user
    navigate('/bt5/login'); // Chuyển hướng về trang đăng nhập
  };

  return (
    <header className="bg-gradient-to-r from-gray-700 to-gray-900 text-gray-200 p-4 md:p-6 flex items-center justify-between shadow-lg relative">
      {/* Logo */}
      <div className="flex items-center">
        <a href="/">
          <img 
            src="https://bizweb.dktcdn.net/100/350/151/themes/712167/assets/logo.png?1687355802347" 
            alt="Logo" 
            className="h-10 md:h-12 mr-4 md:mr-6 rounded-lg shadow-md" 
          />
        </a>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex flex-grow justify-center space-x-6 md:space-x-8">
        <a href="/bt5/product" className="hover:text-gray-400 text-lg md:text-xl font-semibold transition">Product</a>
        <a href="/bt5/about" className="hover:text-gray-400 text-lg md:text-xl font-semibold transition">About</a>
        <a href="https://www.facebook.com/hi.all.people/" className="hover:text-gray-400 text-lg md:text-xl font-semibold transition">Contact</a>
      </nav>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center space-x-6 md:space-x-8">
        {user ? (
          <>
            <span className="text-lg font-semibold">Xin chào, {user.username}</span>
            <button
              onClick={handleLogout}
              className="hover:text-gray-400 text-lg font-semibold transition"
            >
              Đăng xuất
            </button>
          </>
        ) : (
          <>
            <a href="/bt5/login" className="hover:text-gray-400 text-lg font-semibold transition">Login</a>
            <a href="/bt5/register" className="hover:text-gray-400 text-lg font-semibold transition">Sign Up</a>
          </>
        )}
        <a href="/bt5/cart" className="hover:text-gray-400 transition">
          <ShoppingCartIcon fontSize="large" />
        </a>
      </div>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden text-white"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-gray-800 text-white flex flex-col items-center space-y-4 py-6 z-10 shadow-lg">
          <a href="/bt5/product" className="hover:text-gray-400 text-lg font-semibold transition">Product</a>
          <a href="/bt5/about" className="hover:text-gray-400 text-lg font-semibold transition">About</a>
          <a href="https://www.facebook.com/hi.all.people/" className="hover:text-gray-400 text-lg font-semibold transition">Contact</a>
          <a href="/bt5/cart" className="hover:text-gray-400 text-lg font-semibold transition flex items-center gap-2">
            <ShoppingCartIcon />
            Cart
          </a>
          {user ? (
            <>
              <span className="text-lg font-semibold">Xin chào, {user.username}</span>
              <button
                onClick={handleLogout}
                className="hover:text-gray-400 text-lg font-semibold transition"
              >
                Đăng xuất
              </button>
            </>
          ) : (
            <>
              <a href="/bt5/login" className="hover:text-gray-400 text-lg font-semibold transition">Login</a>
              <a href="/bt5/register" className="hover:text-gray-400 text-lg font-semibold transition">Sign Up</a>
            </>
          )}
        </div>
      )}
    </header>
  );
}

export default Header;
