import React from "react";
import ImageSlider from "../component/carousel/ImageSlider";
import Categories from "../component/categories/Categories";
import BestSeller from "../component/bestSeller/BestSeller";
import fashion from "../asset/fashion.png";
import { useNavigate } from 'react-router-dom';


const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/shop');
  };
  return (
    <div className="w-full px-6 md:px-6">
      <ImageSlider />
      <div className="flex justify-center  mt-20">
        <div className="w-full  lg:w-1/2  text-center">
          <h1 className="text-center mb-10">
            WELCOME TO <span className="text-textColor">TWST</span>
          </h1>
          <h2 className="text-center md:text-2xl font-light tracking-widest			">
            Discover consciously curated high-quality fashion, crafted to stand
            the test of time. Don’t miss our biggest sale ever—featuring over
            1200 timeless styles at up to{" "}
            <span className="text-textColor"> 40% off</span>
          </h2>
          <button className="px-10 py-3 border-solid border-2 border-zinc-500 text-sm mx-auto mt-8" onClick={handleClick} >
            SHOP NOW
          </button>
        </div>
      </div>
      <div className="p-5 md:pb-10">
        <div className="py-5">
          <Categories />
        </div>
        <div className="pt-10 ">
          <BestSeller />
        </div>
      </div>

      <div className="relative h-full mb-5">
        <img src={fashion} alt="" className="w-full  object-cover" />
        <div className=" gap-5 absolute text-right right-4 top-1/4 md:right-16 md:top-1/2 transform-translate-y-1/2 text-zinc-300  py-2 px-4 text-sm font-semibold">
          <h1 className="text-right text-[8px] md:text-sm font-extralight ">
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
  );
};

export default Home;
