// import React, { useState } from "react";
// import { CiHeart } from "react-icons/ci";
// import { IoBagAddOutline } from "react-icons/io5";
// import category from "../../asset/category.png";
// import men from "../../asset/men.jpg";
// import { Link } from "react-router-dom";

// const CardDatas = ({key,product}) => {
//     console.log('new product',product);

//     const [changePhoto, setChangePhoto] = useState(false);

//     return (
//       <>
//         {/* <Link to="/details/1/Alto_White_Pique_Polo"> */}
//         <Link to={`/details/${product._id}`}>
//           <div
//             className="w-full md:w-56 lg:w-64 bg-white rounded-lg overflow-hidden relative group cursor-pointer"
//             onMouseEnter={() => setChangePhoto(true)}
//             onMouseLeave={() => setChangePhoto(false)}
//           >
//             <div className="relative">
//               <img
//                 // src={changePhoto ? `${process.env.REACT_APP_API_BASE_URL}/uploads/${product?.image[0]}` : (product?.image[1] ? `${process.env.REACT_APP_API_BASE_URL}/uploads/${product?.image[1]}` : `${process.env.REACT_APP_API_BASE_URL}/uploads/${product?.image[0]}`)}
//                 src={changePhoto?men:category}
//                 alt="Product"
//                 className="w-full h-74 object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
//               />
//               <div className="absolute top-2 left-2 bg-red-950 text-white px-2 py-1 rounded text-xs font-semibold">
//                 {`${Math.ceil(product?.discount || 0)}% OFF`}
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

//               {/* <div className="flex items-center justify-between mt-2">
//                 <div className="flex items-center space-x-2">
//                   <div className="w-5 h-5 bg-gray-800 border border-gray-300"></div>
//                   <div className="w-5 h-5 bg-gray-400 border border-gray-300"></div>
//                   <div className="w-5 h-5 bg-brown-600 border border-gray-300"></div>
//                   <div className="w-5 h-5 bg-green-500 border border-gray-300"></div>
//                   <div className="w-5 h-5 bg-yellow-500 border border-gray-300"></div>
//                   <div className="w-5 h-5 bg-blue-500 border border-gray-300"></div>

//                   <p className="text-xs text-gray-500 ml-2">more..</p>
//                 </div>
//               </div> */}
//             </div>
//           </div>
//         </Link>
//       </>
//     );
//   };

// export default CardDatas

import React, { useEffect, useState } from "react";
import { CiHeart } from "react-icons/ci";
import { IoBagAddOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import Login from "../auth/Login";
import axiosInstance from '../../axios';
// import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { setUserDetails } from '../../redux/actions/userActions';


const CardDatas = ({ key, product }) => {
  // console.log("new product", product);
  const dispatch = useDispatch()
  const [changePhoto, setChangePhoto] = useState(false);
  const [wishlistItems, setWishlistItems] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const userDetails = useSelector(state => state?.userDetails);

  const fetchWishlist = async () => {
    try {
      const wishlistResponse = await axiosInstance.get('/user/getwishlist');
      setWishlistItems(wishlistResponse?.data?.data);
    } catch (error) {
      console.error('Error fetching wishlist:', error);
    }
  };
  useEffect(() => {
    fetchWishlist();
  }, []);


  const isInWishlist = (productId) => {

    if (wishlistItems === undefined) {
      return false;
    }
    return wishlistItems.some((item) => item?._id === productId);
  };



  const toggleWishlist = async (proId) => {
    if (!userDetails) {
      setOpenModal(true)
    } else {
      const alreadyInWishlist = isInWishlist(proId);
      setWishlistItems((prev) => {
        if (alreadyInWishlist) {
          return prev.filter(item => item._id !== proId);
        } else {
          return [...prev, { _id: proId }];
        }
      });

      try {
        const response = await axiosInstance.patch(
          alreadyInWishlist ? `/user/removeFromWishlist/${proId}` : `/user/addToWishlist/${proId}`
        );
        dispatch(setUserDetails(response?.data?.userData));
        // await fetchWishlist(); 
      } catch (error) {
        console.error('Error toggling wishlist:', error);
        setWishlistItems(prev => (alreadyInWishlist ? [...prev, { _id: proId }] : prev.filter(item => item._id !== proId)));
      }
    }
  };

  return (
    <>
      <div
        // className="w-full md:w-56 lg:w-64 bg-white rounded-lg overflow-hidden relative group cursor-pointer"
        className="w-full md:w-56  bg-white rounded-lg overflow-hidden relative group cursor-pointer"
        onMouseEnter={() => setChangePhoto(true)}
        onMouseLeave={() => setChangePhoto(false)}
        key={key}
      >
        <div className="relative  w-full">
          <Link to={`/details/${product._id}`}>
            <img
              src={changePhoto ? `${process.env.REACT_APP_API_BASE_URL}/uploads/${product?.image[0]}` : (product?.image[1] ? `${process.env.REACT_APP_API_BASE_URL}/uploads/${product?.image[1]}` : `${process.env.REACT_APP_API_BASE_URL}/uploads/${product?.image[0]}`)}
              alt="Product"
              className="w-full h-48 sm:h-64 object-cover lg:object-fill transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
            <div className="absolute top-2 left-2 bg-red-950 text-white px-2 py-1 rounded text-xs font-semibold">
              {`${Math.ceil(product?.discount || 0)}% OFF`}
            </div>
          </Link>
          <button aria-label="Like"
            onClick={() => toggleWishlist(product?._id)}
            className={`absolute top-0 right-0 m-1 bg-slate-50 rounded-2xl p-1 z-10 focus:outline-none ${isInWishlist(product._id) ? 'text-red-500' : 'text-gray-400'}`}
          >
            <CiHeart className="hover:text-blue-500" size={18} />
          </button>
          <Link to={`/details/${product._id}`}>
            <button className="flex items-center gap-3 md:gap-1 lg:gap-3 absolute left-1/2 bottom-4 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out bg-white text-black py-3 px-3 md:py-2 md:px-2 lg:py-3 lg:px-3 text-sm font-thin  text-[10px] sm:text-xs px-1.5 py-0.5 whitespace-nowrap">
              <IoBagAddOutline /> ADD TO BAG
            </button>
          </Link>
        </div>
        <Link to={`/details/${product._id}`}>
          <div className="p-4 flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <h2 className="text-[10px] sm:text-xs font-light text-gray-800">
                {product?.name}
              </h2>
              <p className="text-[10px] sm:text-xs font-light text-gray-800">
                ₹{product?.sale_rate}
              </p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-xs text-red-500">{product?.category?.name}</p>
              <p className="font-light text-gray-300 text-[10px] sm:text-xs line-through">
                ₹{product?.price}
              </p>
            </div>
          </div>
        </Link >
      </div>
      {openModal && <Login openModal={openModal} setOpenModal={setOpenModal} />
      }

    </>
  );
};

export default CardDatas;


