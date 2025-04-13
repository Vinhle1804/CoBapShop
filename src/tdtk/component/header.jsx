import React, { useState, useEffect } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/ogol.png';

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    setUserMenuOpen(false);
    navigate('/tdtk/login');
  };

  return (
    <header className="bg-gradient-to-r from-gray-700 to-gray-900 text-gray-200 p-4 md:p-6 flex items-center justify-between shadow-lg relative">
      {/* Logo */}
      <div className="flex items-center">
        <a href="/">
          <img 
            src={logo} 
            alt="Logo" 
            className="h-10 md:h-12 mr-4 md:mr-6 rounded-lg shadow-md" 
          />
        </a>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex flex-grow justify-center space-x-6 md:space-x-8">
        <a href="/tdtk/product" className="hover:text-gray-400 text-lg md:text-xl font-semibold transition">Product</a>
        <a href="/tdtk/about" className="hover:text-gray-400 text-lg md:text-xl font-semibold transition">About</a>
        <a href="https://www.facebook.com/hi.all.people/" className="hover:text-gray-400 text-lg md:text-xl font-semibold transition">Contact</a>
      </nav>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center space-x-6 md:space-x-8 relative">
        {user ? (
          <div className="relative">
            <button
              onClick={() => setUserMenuOpen(!userMenuOpen)}
              className="text-lg font-semibold hover:text-gray-400 transition focus:outline-none"
            >
              Xin chào, {user.username}
            </button>
            {userMenuOpen && (
              <div> 
            
              <div className="absolute right-0 mt-2 w-40 bg-white text-gray-800 rounded shadow-lg z-20">
                <button
                 href='/'
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Thông tin
                </button>
                <button
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Đăng xuất
                </button>
              </div>
              </div>
            )}
          </div>
        ) : (
          <>
            <a href="/tdtk/login" className="hover:text-gray-400 text-lg font-semibold transition">Login</a>
            <a href="/tdtk/register" className="hover:text-gray-400 text-lg font-semibold transition">Sign Up</a>
          </>
        )}
        <a href="/tdtk/cart" className="hover:text-gray-400 transition">
          <ShoppingCartIcon fontSize="large" />
        </a>
      </div>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden text-white"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
      </button>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-gray-800 text-white flex flex-col items-center space-y-4 py-6 z-10 shadow-lg">
          <a href="/tdtk/product" className="hover:text-gray-400 text-lg font-semibold transition">Product</a>
          <a href="/tdtk/about" className="hover:text-gray-400 text-lg font-semibold transition">About</a>
          <a href="https://www.facebook.com/hi.all.people/" className="hover:text-gray-400 text-lg font-semibold transition">Contact</a>
          <a href="/tdtk/cart" className="hover:text-gray-400 text-lg font-semibold transition flex items-center gap-2">
            <ShoppingCartIcon />
            Cart
          </a>
          {user ? (
            <>
              <div className="text-lg font-semibold">
                Xin chào, {user.username}
              </div>
              <button
                onClick={handleLogout}
                className="hover:text-gray-400 text-lg font-semibold transition"
              >
                Đăng xuất
              </button>
            </>
          ) : (
            <>
              <a href="/tdtk/login" className="hover:text-gray-400 text-lg font-semibold transition">Login</a>
              <a href="/tdtk/register" className="hover:text-gray-400 text-lg font-semibold transition">Sign Up</a>
            </>
          )}
        </div>
      )}
    </header>
  );
}

export default Header;
