import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PiShareFatBold } from "react-icons/pi";
import { CiHeart } from "react-icons/ci";
// import men from "../../asset/men.jpg";

import Accordion from "./Accordion";
import ProductQuality from "../product/ProductQuality";
import FeatureProductSlide from "../carousel/FeatureProductSlide";
import { categories } from "../../utils/constant/categories";
import { Browse } from "../../utils/constant/browse";
import ProductReview from "../product/ProductReview";
import axiosInstance from '../../axios';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { setUserDetails } from '../../redux/actions/userActions';
import { setCheckoutProduct } from '../../redux/actions/storeActions';
import { useNavigate } from "react-router-dom";
import Login from "../auth/Login";
import { FaFacebookF, FaTwitter, FaLinkedin, FaWhatsapp, FaCopy } from "react-icons/fa";


const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const currentUrl = window.location.href;
  const [selectedOption, setSelectedOption] = useState("");
  const [showSelectBox, setSelectBox] = useState(false)
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedSize, setSelectedSize] = useState()
  const [openModal, setOpenModal] = useState(false);
  const [wishlistItems, setWishlistItems] = useState([]);
  const userDetails = useSelector(state => state?.userDetails);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axiosInstance.get(`/products/client/${id}`);
        setProduct(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.response?.data?.message || "Something went wrong");
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [id]);
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

  if (loading) {
    return <p>Loading product details...</p>;
  }

  if (error) {
    // return <p className="text-red-500">{error}</p>;
    return toast.error(error)
  }
  const handleSizeSelect = (size) => {
    setSelectedSize(size);

  };

  const addCartData = async (proId1) => {

    if (!userDetails) {
      setOpenModal(true)
    } else {
      try {
        const urlQuery = `/user/addToCart/${proId1}`;
        const payload = {
          size: selectedSize
        };
        const response = await axiosInstance.patch(urlQuery, payload);
        dispatch(setUserDetails(response?.data?.userData));

      } catch (error) {
        console.error('Error adding to cart:', error);
      }
    }
  };

  const handleAddToCartClick = (product) => {
    if (selectedSize || product?.stock) {
      addCartData(product?._id);
    } else {
      toast.error('please select size')
    }
  };

  const handleCheckout = () => {
    if (!userDetails) {
      setOpenModal(true)
    }
    if (selectedSize || product?.stock) {
      selectedSize ? dispatch(setCheckoutProduct({ product, selectedSize: selectedSize || null })) : dispatch(setCheckoutProduct({ product }))
      navigate('/checkout')
    } else {
      toast.error('please select size')
    }

  };

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

  // const handleShare = (platform) => {
  //   let shareUrl = "";

  //   switch (platform) {
  //       case "facebook":
  //           shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  //           break;
  //       case "twitter":
  //           shareUrl = `https://twitter.com/share?url=${encodeURIComponent(currentUrl)}&text=Check%20this%20out!`;
  //           break;
  //       case "whatsapp":
  //           shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(currentUrl)}`;
  //           break;
  //       case "linkedin":
  //           shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(currentUrl)}`;
  //           break;
  //       default:
  //           return;
  //   }

  //   window.open(shareUrl, "_blank", "noopener,noreferrer");
  // };

  const handleShare = (platform) => {
    let shareUrl = "";

    switch (platform) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
        break;
      case "twitter":
        shareUrl = `https://twitter.com/share?url=${encodeURIComponent(currentUrl)}&text=Check%20this%20out!`;
        break;
      case "whatsapp":
        shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(currentUrl)}`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(currentUrl)}`;
        break;
      case "copy":
        navigator.clipboard.writeText(currentUrl);
        alert("URL copied to clipboard!");
        return;
      default:
        return;
    }

    window.open(shareUrl, "_blank", "noopener,noreferrer");
  };

  console.log('product single', product);

  return (
    <>
      <div className="w-full p-6  lg:flex justify-center gap-3">
        {product && (
          <>
            <div className="w-full lg:w-1/2 p-4  grid grid-cols-2 gap-3  lg:h-screen overflow-scroll productPhoto">
              {product?.image && product?.image?.map(val =>
                <img
                  src={`${process.env.REACT_APP_API_BASE_URL}/uploads/${val}`}
                  alt={val}
                  className="w-full h-auto object-cover rounded-md"
                />
                // <img src={men} alt="prod_Photo" height="" /> 
              )}
            </div>
            <div className="w-full lg:w-1/2  ">
              <div className="p-4 md:p-8 max-w-screen-lg mx-auto relative">
                <div className="absolute top-0 right-0 lg:top-4 lg:right-4 flex gap-2">
                  {/* <button
                    className="w-5 h-5  lg:w-10 lg:h-10 rounded-sm border border-gray-300 flex items-center justify-center hover:bg-gray-200"
                    aria-label="Share"
                    onClick={(e) => {
                      // Show sharing options (you can customize this)
                      const options = prompt("Share on:\n1. Facebook\n2. Twitter\n3. WhatsApp\n4. LinkedIn\nSelect platform number:");
                      if (options) {
                          const platformMap = {
                              "1": "facebook",
                              "2": "twitter",
                              "3": "whatsapp",
                              "4": "linkedin",
                          };
                          const selectedPlatform = platformMap[options];
                          if (selectedPlatform) {
                              handleShare(selectedPlatform);
                          } else {
                              alert("Invalid selection");
                          }
                      }
                  }}
                  >
                    <PiShareFatBold />
                  </button> */}

                  <div>
                  {!showSelectBox ?
                   ( <button
                      className="w-5 h-5 lg:w-10 lg:h-10 rounded-sm border border-gray-300 flex items-center justify-center hover:bg-gray-200"
                      aria-label="Share"
                      onClick={()=>setSelectBox(true)}
                    >
                      <PiShareFatBold />
                    </button>):

                   ( <select
                      onChange={(e) => {
                        const platform = e.target.value;
                        setSelectedOption(platform);
                        handleShare(platform);
                      }}
                      value={selectedOption}
                      className="h-5  lg:h-10 rounded-sm border border-gray-300 flex items-center justify-center hover:bg-gray-200"
                    >
                      <option value="">Share via...</option>
                      <option value="facebook">Facebook <FaFacebookF className="inline ml-2" /></option>
                      <option value="twitter">Twitter <FaTwitter className="inline ml-2" /></option>
                      <option value="whatsapp">WhatsApp <FaWhatsapp className="inline ml-2" /></option>
                      <option value="linkedin">LinkedIn <FaLinkedin className="inline ml-2" /></option>
                      <option value="copy">Copy link <FaCopy className="inline ml-2" /></option>
                    </select>)}
                  </div>  
                  <button
                    className={`w-5 h-5  lg:w-10 lg:h-10  rounded-sm border border-gray-300 flex items-center justify-center hover:bg-gray-200 ${isInWishlist(product._id) ? 'text-red-500' : 'text-gray-400'}`}
                    aria-label="Like"
                    onClick={() => toggleWishlist(product?._id)}>
                    <CiHeart />
                  </button>
                </div>

                <div>
                  <h1 className=" text-lg lg:text-xl md:text-2xl font-bold">
                    {product?.name}
                  </h1>
                  <p className="text-sm text-gray-500 mt-1">
                    {product?.subheading}
                  </p>
                </div>
                <div className="mt-4">
                  <p className="text-2xl font-semibold">₹ {product?.sale_rate}
                    <span className=" font-light text-gray-500 text-sm line-through mx-3">
                      ₹{product?.price}
                    </span>
                  </p>
                  <p className="text-sm text-gray-500">
                    MRP inclusive of all taxes
                  </p>
                </div>

                <div className="mt-6">
                  {product?.sizes?.length > 0 &&
                    <>
                      <p className="font-medium">
                        SELECT SIZE & FIT
                        <span className="text-textColor"> Last few left</span>
                      </p>
                      <div className="flex gap-2 mt-2">
                        {product?.sizes.map((sizeObj, index) => (
                          sizeObj?.quantity > 0 &&
                          <button
                            key={index}
                            onClick={() => handleSizeSelect(sizeObj.sizes, index)}
                            className="border rounded-lg px-4 py-2 text-sm hover:border-black focus:border-black"
                          >
                            {sizeObj.sizes?.toUpperCase()}
                          </button>
                        ))}
                      </div>
                      <div className="flex justify-between mt-4 text-sm">
                        <a href="/shop" className="text-blue-500 underline">
                          Find my size?
                        </a>
                        <a href="/about" className="text-blue-500 underline">
                          Size Chart
                        </a>
                      </div>
                    </>
                  }
                </div>

                <div className="mt-6 bg-red-100 text-red-600 text-center p-2 rounded-md">
                  Subscribe for 15% off on your first purchase
                </div>

                <div className="mt-6 flex flex-col md:flex-row gap-4">
                  <button className="w-full bg-black text-white py-2 rounded-md" onClick={() => handleAddToCartClick(product)}>
                    ADD TO BAG
                  </button>
                  <button onClick={handleCheckout} className="w-full border border-black text-black py-2 rounded-md">
                    BUY IT NOW
                  </button>
                </div>

                {/* this accordian component contain the delivery component like the input for enter the pincode and the checking button and the feature component like the 60 days delivery and freedeliver component */}
                <div className="mt-8">
                  <Accordion items={product} />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <ProductQuality />
      <ProductReview data={product} />

      {/* <FeatureProductSlide text="You may also like" items={categories} /> */}

      <div className="w-full p-4 lg:p-8 bg-secondary">
        <FeatureProductSlide
          text="More from the collection"
          items={product?.variantProduct}
        />
      </div>
      <div className="w-full p-6">
        <p>Browse More</p>
        <div className="flex  gap-3 flex-wrap">
          {Browse.map((item) => (
            <button
              key={item?.id}
              className="py-2 px-4 rounded-md border border-black text-sm sm:text-base w-auto sm:w-auto hover:bg-gray-400 hover:text-white"
            >
              {item?.name}
            </button>
          ))}
        </div>
      </div>
      {openModal && <Login openModal={openModal} setOpenModal={setOpenModal} />}
    </>
  );
};

export default ProductDetails;
