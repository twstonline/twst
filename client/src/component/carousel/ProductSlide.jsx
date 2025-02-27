import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CardDatas from "../cardData/CardDatas";
import { useNavigate } from "react-router-dom";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 6,
    partialVisibilityGutter: 40
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    partialVisibilityGutter: 30
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
    partialVisibilityGutter: 20
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1.2,
    partialVisibilityGutter: 20
  },
};

const ProductSlide = ({ text, items, slider }) => {
  const navigate = useNavigate();
  
  return (
    <div className="w-full overflow-hidden relative">
      <h1 key={text} className="text-2xl font-thin mb-6">{text}</h1>
      <Carousel 
        responsive={responsive}
        partialVisible={true}
        containerClass="carousel-container"
        itemClass="carousel-item-padding-40-px"
        swipeable={true}
        draggable={true}
        ssr={true}
        infinite={true}
        autoPlay={false}
        keyBoardControl={true}
        customTransition="transform 300ms ease-in-out"
        transitionDuration={300}
        additionalTransfrom={0}
        arrows
        customLeftArrow={
          <button className="absolute left-0 z-10 bg-white bg-opacity-75 p-2 rounded-full shadow-md hover:bg-opacity-100 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        }
        customRightArrow={
          <button className="absolute right-0 z-10 bg-white bg-opacity-75 p-2 rounded-full shadow-md hover:bg-opacity-100 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        }
      >
        {slider === "Categories" &&
          (items &&
          items?.map((item) => (
            <div
              key={item?._id}
              onClick={() => navigate(`/shop?category=${item.name}`)}
              className="h-[400px] w-[280px] md:w-48 lg:w-56 mx-2 bg-red-400 relative overflow-hidden group"
            >
              <img
                src={`${process.env.REACT_APP_API_BASE_URL}/uploads/${item?.image}`}
                alt=""
                srcSet=""
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
              />
              <button className="font-semibold px-6 py-2 border-solid border-2 border-white text-sm text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                {item?.name}
              </button>
            </div>
          ))) }
       {slider === text &&
          (items &&
          items.map((item) => (
            <div key={item._id} className="px-2">
              <CardDatas product={item} />
            </div>
          )))}
      </Carousel>
    </div>
  );
};

export default ProductSlide;
