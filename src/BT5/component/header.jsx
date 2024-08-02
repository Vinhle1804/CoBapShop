import React from 'react';

function Header() {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center">
        <img src="/path/to/logo.png" alt="Logo" className="h-8 mr-4" />
      </div>

      {/* Navigation */}
      <nav className="flex flex-grow justify-center space-x-4">
        <a href="/" className="hover:text-gray-400">Product</a>
        <a href="/about" className="hover:text-gray-400">About</a>
        <a href="/contact" className="hover:text-gray-400">Contact</a>
      </nav>

      {/* Links (Text Links) */}
      <div className="flex items-center space-x-4">
        <a href="/bt5/cart" className="hover:text-gray-400">Cart</a>
        <a href="/login" className="hover:text-gray-400">Login</a>
        <a href="/signup" className="hover:text-gray-400">Sign Up</a>
      </div>
    </header>
  );
}

export default Header;
