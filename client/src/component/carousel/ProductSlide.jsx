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
    <div className="w-full overflow-hidden">
      <h1 key={text} className="text-2xl font-thin mb-6">{text}</h1>
      <Carousel 
        responsive={responsive}
        partialVisible={true}
        containerClass="carousel-container"
        itemClass="carousel-item-padding-40-px"
        swipeable={true}
        draggable={true}
        ssr={true} // server-side rendering
        infinite={true}
        autoPlay={false}
        keyBoardControl={true}
        customTransition="transform 300ms ease-in-out"
        transitionDuration={300}
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
