import React from "react";
import { FaShippingFast, FaShieldAlt, FaUndoAlt, FaHeadset } from "react-icons/fa";

const FeaturesSection = () => {
  return (
    <div className="bg-gray-300 py-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-8 p-3">
        
        <div className="flex flex-col items-center text-center space-y-2">
          <FaShippingFast className="text-textColor text-3xl" />
          <h3 className="text-lg font-semibold text-gray-800">Free Shipping</h3>
          <p className="text-sm text-gray-500">Free shipping on all US orders over $200</p>
        </div>

       
        <div className="hidden md:block h-10 w-px bg-textColor"></div>

     
        <div className="flex flex-col items-center text-center space-y-2">
          <FaShieldAlt className="text-textColor text-3xl" />
          <h3 className="text-lg font-semibold text-gray-800">Payment Secure</h3>
          <p className="text-sm text-gray-500">We ensure secure payment with PEV</p>
        </div>

        <div className="hidden md:block h-10 w-px bg-textColor"></div>

       
        <div className="flex flex-col items-center text-center space-y-2">
          <FaUndoAlt className="text-textColor text-3xl" />
          <h3 className="text-lg font-semibold text-gray-800">7 Days Return</h3>
          <p className="text-sm text-gray-500">Simply return it within 7 days for an exchange.</p>
        </div>

       
        <div className="hidden md:block h-10 w-px bg-textColor"></div>

        <div className="flex flex-col items-center text-center space-y-2">
          <FaHeadset className="text-textColor text-3xl" />
          <h3 className="text-lg font-semibold text-gray-800">Support 24/7</h3>
          <p className="text-sm text-gray-500">Contact us 24 hours a day, 7 days a week</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
