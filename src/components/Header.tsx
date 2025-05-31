
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Top contact bar */}
      <div className="bg-yellow-500 text-black py-2 px-4">
        <div className="container mx-auto flex justify-center md:justify-end items-center space-x-6 text-sm">
          <div className="flex items-center space-x-2">
            <Phone size={14} />
            <span>(416) 555-0123</span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail size={14} />
            <span>info@6ixsideconstruction.com</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <header className="bg-white shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="bg-gray-800 text-yellow-500 p-2 rounded-lg">
                <span className="text-xl font-bold">6ix</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800">6ixSide Construction</h1>
                <p className="text-sm text-gray-600">Building Supplies</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link 
                to="/" 
                className={`font-medium transition-colors ${isActive('/') ? 'text-yellow-600' : 'text-gray-700 hover:text-yellow-600'}`}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={`font-medium transition-colors ${isActive('/about') ? 'text-yellow-600' : 'text-gray-700 hover:text-yellow-600'}`}
              >
                About Us
              </Link>
              <Link 
                to="/products" 
                className={`font-medium transition-colors ${isActive('/products') ? 'text-yellow-600' : 'text-gray-700 hover:text-yellow-600'}`}
              >
                Products
              </Link>
              <Link 
                to="/services" 
                className={`font-medium transition-colors ${isActive('/services') ? 'text-yellow-600' : 'text-gray-700 hover:text-yellow-600'}`}
              >
                Services
              </Link>
              <Link 
                to="/contact" 
                className={`font-medium transition-colors ${isActive('/contact') ? 'text-yellow-600' : 'text-gray-700 hover:text-yellow-600'}`}
              >
                Contact
              </Link>
              <Link 
                to="/quote" 
                className="bg-yellow-500 text-black px-6 py-2 rounded-lg font-medium hover:bg-yellow-600 transition-colors"
              >
                Request Quote
              </Link>
            </nav>

            {/* Mobile menu button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <nav className="flex flex-col space-y-4">
                <Link 
                  to="/" 
                  className={`font-medium transition-colors ${isActive('/') ? 'text-yellow-600' : 'text-gray-700'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  to="/about" 
                  className={`font-medium transition-colors ${isActive('/about') ? 'text-yellow-600' : 'text-gray-700'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link 
                  to="/products" 
                  className={`font-medium transition-colors ${isActive('/products') ? 'text-yellow-600' : 'text-gray-700'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Products
                </Link>
                <Link 
                  to="/services" 
                  className={`font-medium transition-colors ${isActive('/services') ? 'text-yellow-600' : 'text-gray-700'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </Link>
                <Link 
                  to="/contact" 
                  className={`font-medium transition-colors ${isActive('/contact') ? 'text-yellow-600' : 'text-gray-700'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
                <Link 
                  to="/quote" 
                  className="bg-yellow-500 text-black px-6 py-2 rounded-lg font-medium hover:bg-yellow-600 transition-colors text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Request Quote
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
