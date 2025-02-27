import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import axiosInstance from "../../axios"
import { useNavigate } from "react-router-dom";
import { Preloader } from '../common/Preloader';

const ImageSlider = () => {
  const [banners, setBanners] = useState([{}]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

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

  useEffect(() => {
    if (banners && banners.length > 0) {
      setIsLoading(false);
    }
  }, [banners]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
  };

  const handleShopNow = () => {
    navigate('/shop');
  };

  const currentBanner = banners[currentIndex] || {};

  return (
    <div className="relative w-full h-[80vh] sm:h-screen bg-neutral-800 overflow-hidden">
      {isLoading ? (
        <div className="flex justify-center items-center h-full">
          <Preloader />
        </div>
      ) : (
        <>
          {/* Background image */}
          <div className="absolute inset-0">
            <img 
              src={banners.length ? `${process.env.REACT_APP_API_BASE_URL}/uploads/${currentBanner?.src}` : "https://flowbite.com/docs/images/carousel/carousel-1.svg"}
              alt={currentBanner?.title || "Fallback banner"}
              className="w-full h-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
          </div>

          {/* Shop Now Button */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center lg:top-1/2 lg:left-auto lg:right-[-25%] lg:transform-none text-sm">
            <button 
              onClick={handleShopNow}
              className="border border-white px-8 py-3 text-sm uppercase tracking-wide text-white hover:bg-white hover:text-amber-500 transition-colors duration-300 ease-in-out"
            >
              Shop Now
            </button>
          </div>

          {/* Navigation arrows */}
          <button 
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white bg-opacity-30 rounded-full flex items-center justify-center hover:bg-opacity-50 transition-all"
          >
            <ChevronLeft className="text-white" />
          </button>
          
          <button 
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white bg-opacity-30 rounded-full flex items-center justify-center hover:bg-opacity-50 transition-all"
          >
            <ChevronRight className="text-white" />
          </button>
        </>
      )}
    </div>
  );
}

export default ImageSlider;