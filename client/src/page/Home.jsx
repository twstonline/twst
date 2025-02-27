import React from "react";
import ImageSlider from "../component/carousel/ImageSlider";
import Categories from "../component/categories/Categories";
import BestSeller from "../component/bestSeller/BestSeller";
import fashion from "../asset/fashion.png";
import { useNavigate } from 'react-router-dom';
import TestimonialSlider from "../component/testimonials/testimonials";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/shop');
  };
  return (
    <div className="w-full">
      <ImageSlider className="relative z-0" />
      <div className="sm:px-6">
        <div className="flex justify-center mt-20">
          <div className="w-full lg:w-1/2 text-center">
            <h1 className="text-center mb-10">
              WELCOME TO <span className="text-textColor">TWST</span>
            </h1>
            <h2 className="text-center md:text-2xl font-light tracking-wider font-sans">
              For those who <span className="text-yellow-500">dare to be different</span>. TWST is a clothing brand crafted for <span className="text-yellow-500">bold individuals</span> who embrace their unique style. We blend <span className="text-yellow-500">contemporary designs</span> with premium quality to create pieces that stand out. Our fashion is <span className="text-yellow-500">unapologetically original</span>, effortlessly stylish, and always authentic.
            </h2>
            <button className="px-10 py-3 border-solid border-2 border-zinc-500 text-sm mx-auto mt-8 hover:bg-amber-600 hover:text-white hover:border-amber-600 transition-colors duration-300" onClick={handleClick}>
              SHOP NOW
            </button>
          </div>
        </div>
        <div className="sm:p-5 md:pb-10 w-full">
          <div className="py-5" >
            <Categories />
          </div>
          <div className="pt-10">
            <BestSeller />
          </div>
        </div>
        <div className="relative h-full mb-5">
          <TestimonialSlider />
        </div>

        <div className="relative h-full mb-5">
          <img src={fashion} alt="" className="w-full object-cover" />
          <div className="gap-5 absolute text-right right-4 top-1/4 md:right-16 md:top-1/2 transform-translate-y-1/2 text-zinc-300 py-2 px-4 text-sm font-semibold">
            <h1 className="text-right text-[8px] md:text-sm font-extralight">
              GET 15% OFF ON YOUR FIRST BUY.
            </h1>
            <p className="text-right text-sm md:text-4xl font-medium">
              More reasons for Joy!
            </p>
            <button className="mt-6 bg-zinc-400 bg-opacity-20 backdrop-blur-sm px-1 py-2 md:px-6 md:py-3 rounded-md shadow-md" onClick={handleClick}>
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
