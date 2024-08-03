import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Header() {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center">
        <img src="https://bizweb.dktcdn.net/100/350/151/themes/712167/assets/logo.png?1687355802347" alt="Logo" className="h-8 mr-4" />
      </div>

      {/* Navigation */}
      <nav className="flex flex-grow justify-center space-x-4">
        <a href="/bt5/product" className="hover:text-gray-400">Product</a>
        <a href="/bt5/about" className="hover:text-gray-400">About</a>
        <a href="/contact" className="hover:text-gray-400">Contact</a>
      </nav>

      {/* Links (Text Links) */}
      <div className="flex items-center space-x-4">
        <a href="/bt5/cart" className="hover:text-gray-400"> <ShoppingCartIcon/> </a>
        <a href="/bt5/login" className="hover:text-gray-400">Login</a>
        <a href="/bt5/register" className="hover:text-gray-400">Sign Up</a>
      </div>
    </header>
  );
}

export default Header;
