import React from "react";
import { FaWhatsapp, FaPhone, FaEnvelope, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10">
      <div className="container mx-auto px-5 md:px-10 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10">
          {/* Need Help Section */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-semibold">Need Help?</h3>
            <p className="flex items-center space-x-2">
              <FaWhatsapp className="text-gray-500" />
              <span>WhatsApp Us</span>
            </p>
            <p className="flex items-center space-x-2">
              <FaPhone className="text-gray-500" />
              <span>Call Us</span>
            </p>
            <p className="flex items-center space-x-2">
              <FaEnvelope className="text-gray-500" />
              <span>Email Us</span>
            </p>
            <p className="text-sm">Mon-Fri: 10am-6pm</p>
            <div className="flex space-x-4">
              <FaFacebook className="text-gray-500 hover:text-white transition" />
              <FaInstagram className="text-gray-500 hover:text-white transition" />
              <FaLinkedin className="text-gray-500 hover:text-white transition" />
            </div>
          </div>

          {/* Shop Section */}
          <div className="space-y-2">
            <h3 className="text-white text-lg font-semibold">Shop</h3>
            <ul className="space-y-1">
              <li>New Dawn Sale</li>
              <li>Shirts</li>
              <li>Polos</li>
              <li>Crew Necks</li>
              <li>Winterwear</li>
              <li>Ethnicwear</li>
              <li>Pure Denim</li>
            </ul>
          </div>

          {/* Info Section */}
          <div className="space-y-2">
            <h3 className="text-white text-lg font-semibold">Info</h3>
            <ul className="space-y-1">
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          {/* Manage Section */}
          <div className="space-y-2">
            <h3 className="text-white text-lg font-semibold">Manage</h3>
            <ul className="space-y-1">
              <li>Track Order</li>
              <li>Return/Exchange</li>
              <li>Free Shipping & Returns</li>
              <li>Referral Policy</li>
            </ul>
          </div>

          {/* Subscription Section */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-semibold">Sign up & Save 15% on your first order</h3>
            <p className="text-sm">
              We’ll send you updates on new launches, products, and events, only good stuff.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Email"
                className="bg-gray-800 text-white p-3 rounded-l-md outline-none flex-grow"
              />
              <button className="bg-yellow-500 text-white px-5 rounded-r-md">
                →
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-10 pt-5 text-center text-sm">
          © 2024, Andamen - All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
