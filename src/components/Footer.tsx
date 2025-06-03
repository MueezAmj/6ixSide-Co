
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-construction-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-construction-medium text-white p-2 rounded-lg">
                <span className="text-lg font-bold">881</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">881 Canada Inc.</h3>
                <p className="text-sm text-construction-light">Building Supplies</p>
              </div>
            </div>
            <p className="text-construction-light text-sm leading-relaxed">
              Your trusted local supplier of premium building and renovation materials serving the Greater Toronto Area.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-construction-light hover:text-construction-medium-light transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-construction-light hover:text-construction-medium-light transition-colors">About Us</Link></li>
              <li><Link to="/products" className="text-construction-light hover:text-construction-medium-light transition-colors">Products</Link></li>
              <li><Link to="/services" className="text-construction-light hover:text-construction-medium-light transition-colors">Services</Link></li>
              <li><Link to="/quote" className="text-construction-light hover:text-construction-medium-light transition-colors">Request Quote</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone size={16} className="text-construction-medium-light mt-1" />
                <span className="text-construction-light text-sm">(416) 555-0123</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail size={16} className="text-construction-medium-light mt-1" />
                <span className="text-construction-light text-sm">info@881canadainc.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={16} className="text-construction-medium-light mt-1" />
                <span className="text-construction-light text-sm">
                  123 Construction Ave<br />
                  Toronto, ON M5V 3A8
                </span>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Business Hours</h4>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Clock size={14} className="text-construction-medium-light" />
                <span className="text-construction-light text-sm">Mon-Fri: 7:00 AM - 6:00 PM</span>
              </li>
              <li className="flex items-center space-x-2">
                <Clock size={14} className="text-construction-medium-light" />
                <span className="text-construction-light text-sm">Saturday: 8:00 AM - 4:00 PM</span>
              </li>
              <li className="flex items-center space-x-2">
                <Clock size={14} className="text-construction-medium-light" />
                <span className="text-construction-light text-sm">Sunday: Closed</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-construction-medium mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-construction-light text-sm">
              © 2024 881 Canada Inc. All rights reserved.
            </p>
            <p className="text-construction-light text-sm mt-2 md:mt-0">
              Serving the Greater Toronto Area
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
