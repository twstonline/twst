import React from "react";
import { FaWhatsapp, FaPhone, FaEnvelope, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Contact Section */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold uppercase tracking-wider">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <FaWhatsapp className="w-5 h-5 text-gray-400" />
                <span>+91 807 882 5243</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="w-5 h-5 text-gray-400" />
                <span>+91 807 882 5243</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="w-5 h-5 text-gray-400" />
                <span>contact.twst@gmail.com</span>
              </div>
            </div>
            <div className="text-sm text-gray-400">
              Bijisadan, North Pipeline, HMT Colony P.O,<br />
              Ernakulam District - 683503, Kerala, India
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/shop" className="text-gray-400 hover:text-white transition">Shop</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition">Contact</Link></li>
              <li><Link to="/profile" className="text-gray-400 hover:text-white transition">My Account</Link></li>
            </ul>
          </div>

          {/* Policies Section */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold uppercase tracking-wider">Policies</h3>
            <ul className="space-y-3">
              <li><Link to="/privacypolicy" className="text-gray-400 hover:text-white transition">Privacy Policy</Link></li>
              <li><Link to="/cancellation" className="text-gray-400 hover:text-white transition">Cancellation & Refunds</Link></li>
              <li><Link to="/returnpolicy" className="text-gray-400 hover:text-white transition">Return Policy</Link></li>
              <li><Link to="/storepolicy" className="text-gray-400 hover:text-white transition">Store Policies</Link></li>
              <li><Link to="/termsofservice" className="text-gray-400 hover:text-white transition">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold uppercase tracking-wider">Follow Us</h3>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FaFacebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FaInstagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FaLinkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} TWST. All rights reserved. | 
          Designed by <a href="https://www.acmeflare.in" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">acmeflare</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
