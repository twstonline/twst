
import React, { useEffect, useState } from 'react';
import { Carousel } from "flowbite-react";
import axiosInstance from "../../axios"

const ImageSlider=()=> {
  const [banners, setBanners] = useState([{}]);


  const fetchBanners = async () => {
    try {
      const { data } = await axiosInstance.get(`/banners/store`);
      console.log('products-', data);
      setBanners(data?.data);
    } catch (error) {
      console.error('Error fetching products:', error.message);
    }
  };

  useEffect(() => {
    fetchBanners();
  }, []);
  return (
    <div className="h-64 sm:h-[500px] z-50">   
      <Carousel>
      {banners.length ?
      (banners?.map((item,i) => (
        <img key={i} src={`${process.env.REACT_APP_API_BASE_URL}/uploads/${item?.src}`} alt={item?.title} />
      ))): <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />}
      </Carousel>
    </div>
  );
}
export default ImageSlider