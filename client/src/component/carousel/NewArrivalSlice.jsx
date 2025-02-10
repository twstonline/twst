import React from "react";
import { CiHeart } from "react-icons/ci";
import { IoBagAddOutline } from "react-icons/io5";
import Carousel from "react-multi-carousel";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const NewArrivalSlice = ({ text, items }) => {
  return (
    <>
      <div className="p-6">
        <h1 className="text-2xl font-thin mb-6">{text}</h1>
        <Carousel responsive={responsive}>
          {items &&
            items.map((item) => (
              <div className="w-full md:w-56 lg:w-64 bg-white rounded-lg overflow-hidden relative group">
                {/* Image Container */}
                <div className="relative h-80">
                  {" "}
                  {/* Fixed height for the image container */}
                  <img
                    src={item?.img}
                    alt="Product"
                    className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                  />
                  {/* Wishlist Button */}
                  <button className="absolute top-2 right-2 bg-white p-1 rounded-full cursor-pointer">
                    <CiHeart className="hover:text-red-500" size={18} />
                  </button>
                  {/* Add to Bag Button */}
                  <button className="flex items-center gap-3 md:gap-1 lg:gap-3 absolute left-1/2 bottom-4 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out bg-white text-black py-3 px-3 md:py-2 md:px-2 lg:py-3 lg:px-3 text-sm font-thin">
                    <IoBagAddOutline /> ADD TO BAG
                  </button>
                </div>

                {/* Product Information */}
                <div className="p-4 flex items-center justify-between gap-2">
                  <h2 className="text-sm font-light text-gray-800">
                    Alto White Pique Polo
                  </h2>
                  <p className="text-lg font-light text-gray-800">₹1,794</p>
                </div>
              </div>
            ))}
        </Carousel>
      </div>
    </>
  );
};

export default NewArrivalSlice;

