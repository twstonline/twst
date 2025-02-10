import React from "react";
import { quality } from "../../utils/constant/quality";
import cloth from "../../asset/cloth.png";


const ProductQuality = () => {
  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 px-4 sm:px-8 lg:px-16 py-8">
        {quality.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className=" mb-2">{item.icon}</div>
            <p className="text-xs font-thin text-gray-500 uppercase">
              {item.title}
            </p>
            <p className="text-sm font-semibold text-gray-700">
              {item.description}
            </p>
          </div>
        ))}
      </div>
      <div className="relative w-full h-96 ">
        {/* Background Image */}
        <img
          src={cloth}
          alt="Clothing Item"
          className="w-full h-full object-cover"
        />

        {/* Centered Text */}
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-40  text-center px-4">
          <p className="text-sm sm:text-sm font-thin text-gray-300">
            
            BETTER MATERIALS
          </p>
          <h1 className="mt-2 text-md sm:text-base max-w-lg text-gray-300">
            Consciously Chosen Rabrics
          </h1>
          <p className="mt-2 text-sm sm:text-base max-w-lg font-thin text-gray-300">it all starts with choosing the right ingredients for our styles.For a garment,the right material is the difference between staying in a wardobe or ending up in a landlill</p>
        </div>
      </div>
      
    </>
  );
};

export default ProductQuality;
