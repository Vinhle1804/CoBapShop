import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Header() {
  return (
    <header className="bg-gradient-to-r from-gray-700 to-gray-900 text-gray-200 p-6 flex justify-between items-center shadow-lg">
      {/* Logo */}
      <div className="flex items-center">
        <a href="/">
        <img 
          src="https://bizweb.dktcdn.net/100/350/151/themes/712167/assets/logo.png?1687355802347" 
          alt="Logo" 
          className="h-12 mr-6 rounded-lg shadow-md" 
        />
        </a>
      </div>

      {/* Navigation */}
      <nav className="flex flex-grow justify-center space-x-8">
        <a href="/bt5/product" className="hover:text-gray-400 text-xl font-semibold transition duration-300">Product</a>
        <a href="/bt5/about" className="hover:text-gray-400 text-xl font-semibold transition duration-300">About</a>
        <a href="https://www.facebook.com/hi.all.people/" className="hover:text-gray-400 text-xl font-semibold transition duration-300">Contact</a>
      </nav>

      {/* Links (Text Links) */}
      <div className="flex items-center space-x-8">
        <a href="/bt5/cart" className="hover:text-gray-400 text-xl font-semibold transition duration-300">
          <ShoppingCartIcon fontSize="large" />
        </a>
        <a href="/bt5/login" className="hover:text-gray-400 text-xl font-semibold transition duration-300">Login</a>
        <a href="/bt5/register" className="hover:text-gray-400 text-xl font-semibold transition duration-300">Sign Up</a>
      </div>
    </header>
  );
}

export default Header;
