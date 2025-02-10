import React, { useEffect, useState } from "react";
import Filter from "../component/shop/Filter";
// import ProductList from "../component/shop/ProductList";
import ProductListPagination from "../component/shop/ProductListPagination";
import { useSearchParams } from "react-router-dom";
import axiosInstance from "../axios";
import CardDatas from "../component/cardData/CardDatas";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [message, setMessage] = useState("");
  const [searchParams] = useSearchParams();

  const fetchProducts = async () => {
    const page = searchParams.get("page") || 1;
    const category = searchParams.get("category") || "";
    const search = searchParams.get("search") || "";
    const priceRange = searchParams.get("priceRange") || "";
    const sort = searchParams.get("sort") || "";

    // const response = await fetch(
    //   `/api/products?page=${page}&category=${category}&search=${search}&priceRange=${priceRange}&sort=${sort}`
    // );
    // const data = await response.json();
    const { data } = await axiosInstance.get(`/products`, {
      params: {
        page,
        search,
        category,
        priceRange,
        sort,
      },
    });

    setProducts(data.products);
    setTotalPages(data.totalPages);
    setMessage(data.message);
  };

  useEffect(() => {
    fetchProducts();
  }, [searchParams]);
  return (
    <div className="w-full p-6">
      <div className="w-full md:w-1/2 ">
        <h1 className="text-center text-xl md:text-2xl">MIRAI</h1>
        <p className=" text-sm text-center md:text-left  md:text-lg font-thin ">
          Introducing MIRAI—A modern take on traditional Indian silhouettes,
          MIRAI is a beautiful juxtaposition of contemporary styles rooted in
          heritage fashion.Presenting our first-ever range of incredibly refined
          kurtas and meticulously elevated pyjamas crafted from some of the
          finest materials in the world
        </p>
      </div>
      <div className="w-full p-3  border border-gray-50 rounded-md flex items-center gap-3 mt-4">
        <Filter btnText="Remove All" />
        <Filter btnText="In Stock" />
       
      </div>
      {/* <div
        className="w-full grid gap-4 
                grid-cols-1 
                sm:grid-cols-2 
                md:grid-cols-3 
                lg:grid-cols-4
                xl:grid-cols-5
                "
      >
        {Array.from({ length: 20 }).map((_, index) => (
          <ProductList key={index} />
        ))}
      </div> */}
      <p className="mt-4">{message}</p>
      {/* <div
        className="w-full grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
      >
        {products.map((product) => (
          <CardDatas key={product._id} product={product} />
        ))}
      </div> */}
      <div className="w-full grid gap-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {products.map((product) => (
          <CardDatas key={product._id} product={product} />
        ))}
      </div>

      <div></div>

      <div className="mt-10">
        <ProductListPagination totalPages={totalPages} />
      </div>
    </div>
  );
};

export default Shop;

// import React from "react";
// import Filter from "../component/shop/Filter";
// import ProductList from "../component/shop/ProductList";
// import ProductListPagination from "../component/shop/ProductListPagination";

// const Shop = () => {
//   return (
//     <div className="w-full p-6">
//       <div className="w-full md:w-1/2 ">
//         <h1 className="text-center text-xl md:text-2xl">MIRAI</h1>
//         <p className=" text-sm text-center md:text-left  md:text-lg font-thin ">
//           Introducing MIRAI—A modern take on traditional Indian silhouettes,
//           MIRAI is a beautiful juxtaposition of contemporary styles rooted in
//           heritage fashion.Presenting our first-ever range of incredibly refined
//           kurtas and meticulously elevated pyjamas crafted from some of the
//           finest materials in the world
//         </p>
//       </div>
//       <div className="w-full p-3  border border-gray-50 rounded-md flex items-center gap-3 mt-4">
//         <Filter btnText="Remove All" />
//         <Filter btnText="In Stock" />
//         <Filter btnText="In Stock" />
//         <Filter btnText="In Stock" />
//       </div>
//       <div
//         className="w-full grid gap-4
//                 grid-cols-1
//                 sm:grid-cols-2
//                 md:grid-cols-3
//                 lg:grid-cols-4
//                 xl:grid-cols-5
//                 "
//       >
//         {Array.from({ length: 20 }).map((_, index) => (
//           <ProductList key={index} />
//         ))}
//       </div>
//       <div>

//       </div >

//       <div className="mt-10">
//       <ProductListPagination/>
//       </div>
//     </div>
//   );
// };

// export default Shop;  this is my shop page.

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import CardDatas from "../cardData/CardDatas";
// import { Link } from "react-router-dom";
// import CardDatas from "../cardData/CardDatas";
// const ProductList = () => {
//   const [changePhoto, setChangePhoto] = useState(false);

//   return (
//     <>
// <CardDatas />
//  </>
//   );
// };

// export default ProductList;
// this is my ProductList.jsx.

// import React, { useState } from "react";
// import { CiHeart } from "react-icons/ci";
// import { IoBagAddOutline } from "react-icons/io5";
// import { Link } from "react-router-dom";

// const CardDatas = (product) => {
//     console.log('new product',product);

//     const [changePhoto, setChangePhoto] = useState(false);

//     return (
//       <>
//         <Link to="/details/1/Alto_White_Pique_Polo">
//           <div
//             className="w-full md:w-56 lg:w-64 bg-white rounded-lg overflow-hidden relative group cursor-pointer"
//             onMouseEnter={() => setChangePhoto(true)}
//             onMouseLeave={() => setChangePhoto(false)}
//           >
//             <div className="relative">
//               <img
//                 src={changePhoto ? `${process.env.REACT_APP_API_BASE_URL}/uploads/${product?.image[0]}` : product?.image[1] ? `${process.env.REACT_APP_API_BASE_URL}/uploads/${product?.image[1]}` : `${process.env.REACT_APP_API_BASE_URL}/uploads/${product?.image[0]}`}
//                 alt="Product"
//                 className="w-full h-74 object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
//               />
//               <div className="absolute top-2 left-2 bg-red-950 text-white px-2 py-1 rounded text-xs font-semibold">
//                 {`${product?.discount}% OFF`}
//               </div>

//               <button className="absolute top-2 right-2 bg-white p-1 rounded-full cursor-pointer">
//                 <CiHeart className="bg- hover:text-red-500" size={18} />
//               </button>

//               <button className="flex items-center gap-3 md:gap-1 lg:gap-3  absolute left-1/2 bottom-4 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out bg-white text-black py-3 px-3  md:py-2 md:px-2  lg:py-3 lg:px-3 text-sm font-thin">
//                 <IoBagAddOutline /> ADD TO BAG
//               </button>
//             </div>

//             <div className="p-4 flex flex-col gap-2">
//               <div className="flex items-center justify-between">
//                 <h2 className="text-sm font-light text-gray-800">
//                 {product?.name}
//                 </h2>
//                 <p className="text-lg font-light text-gray-800">₹{product?.sale_rate}</p>
//               </div>
//               <div className="flex items-center justify-between ">
//                 <p className="text-xs text-red-500">{product?.category?.name}</p>
//                 <p className=" font-light text-gray-300 text-sm line-through">
//                 ₹{product?.price}
//                 </p>
//               </div>
// </div>
//           </div>
//         </Link>
//       </>
//     );
//   };

// export default CardDatas
// this is my CardDatas.jsx.
// import React, { useState } from "react";
// import { Pagination } from "flowbite-react";

// const ProductListPagination = () => {
//   const [currentPage, setCurrentPage] = useState(1);

//   const onPageChange = (page) => setCurrentPage(page);
//   return (
//     <>
//       <div className="flex overflow-x-auto sm:justify-center">
//         <Pagination
//           currentPage={currentPage}
//           totalPages={10}
//           previousLabel=""
//           nextLabel=""
//           onPageChange={onPageChange}

//           showIcons
//         />
//       </div>
//     </>
//   );
// };

// export default ProductListPagination;
// this is my ProductListPagination.jsx.
// import React from "react";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// const ProductSlide = ({ text, items, slider }) => {
// return (
//     <>
//       <h1 key={text} className="text-2xl font-thin mb-6">{text}</h1>
//       <Carousel>
// {slider === "Categories" &&
//           (items &&
//           items?.map((item) => (
//             <div
//               key={item?._id}
//               className="w-full md:w-56  lg:w-64 lg:h-70 mr-11 bg-red-400 rounded-lg relative  overflow-hidden group"
//             >
//               <img
//                 src={`${process.env.REACT_APP_API_BASE_URL}/uploads/${item?.image}`}
//                 alt=""
//                 srcSet=""
//                 className="rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-110"
//               />
//               <button className=" font-semibold px-6 py-2  border-solid border-2 border-white text-sm text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
//                 {item?.name}
//               </button>
//             </div>
//           ))) }
// </Carousel>
//     </>
//   );
// };

// export default ProductSlide;
// this is my ProductSlide.jsx.
// how to list shop page products in proper type . it means proper pagination . ProductSlide page category select time shop page redirect and shop page show that category related product . any product selected time show that product related ProductDetails page . include filters .
