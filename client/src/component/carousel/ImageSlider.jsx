import React, { useEffect, useState } from 'react';
import { Carousel } from "flowbite-react";
import axiosInstance from "../../axios"

const ImageSlider = () => {
  const [banners, setBanners] = useState([{}]);

  const fetchBanners = async () => {
    try {
      const { data } = await axiosInstance.get(`/banners/store`);
      setBanners(data?.data);
    } catch (error) {
      console.error('Error fetching banners:', error.message);
    }
  };

  useEffect(() => {
    fetchBanners();
  }, []);

  return (
    <div className="h-96 sm:h-[600px] xl:h-[700px] 2xl:h-[800px] relative group">
      <Carousel 
        leftControl={
          <span className="p-3 bg-white/30 backdrop-blur-sm rounded-full shadow-xl hover:bg-white/50 transition-all duration-300">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/>
            </svg>
          </span>
        }
        rightControl={
          <span className="p-3 bg-white/30 backdrop-blur-sm rounded-full shadow-xl hover:bg-white/50 transition-all duration-300">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
            </svg>
          </span>
        }
      >
        {banners.length ? (
          banners?.map((item, i) => (
            <div key={i} className="relative h-full w-full">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
              <img 
                src={`${process.env.REACT_APP_API_BASE_URL}/uploads/${item?.src}`} 
                alt={item?.title}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute bottom-20 left-10 text-white max-w-2xl space-y-6">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope tracking-tight">
                  {item?.title}
                </h2>
                <p className="text-lg md:text-xl lg:text-2xl font-light opacity-90">
                  {item?.description}
                </p>
              </div>
            </div>
          ))
        ) : (
          <div className="relative h-full w-full bg-gray-100 flex items-center justify-center rounded-xl shadow-xl">
            <img 
              src="https://flowbite.com/docs/images/carousel/carousel-1.svg" 
              alt="Fallback banner" 
              className="w-1/2 opacity-50"
            />
          </div>
        )}
      </Carousel>
    </div>
  );
}

export default ImageSlider;