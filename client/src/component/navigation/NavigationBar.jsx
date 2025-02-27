import React, { useEffect, useState } from "react";
import twst from "../../asset/Logo.png";
import { RiMenu3Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { openMobileNav } from "../../redux/actions/generalActions.js";
import MobilNav from "./MobilNav.jsx";
import { Dropdown } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import Login from "../auth/Login.jsx";
import { FaRegUser } from "react-icons/fa";
import axiosInstance from '../../axios.js'
import { setUserDetails, clearUserDetails } from '../../redux/actions/userActions.js';
import { ButtonPreloader } from '../common/Preloader';

const NavigationBar = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const openNav = useSelector((state) => state.general.openNav);
  const userData = useSelector(state => state.userDetails);
  const [openModal, setOpenModal] = useState(false);
  const [cartData, setCartData] = useState([]);
  const [wishlistData, setWishlistData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (userData) {
      setCartData(userData?.cart?.item?.length || 0);
      setWishlistData(userData?.wishlist?.length || 0);
    }
  }, [userData])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get('/auth/user');
        dispatch(setUserDetails(response.data.data));
      } catch (error) {
        console.log('errr', error);
        dispatch(clearUserDetails());
      }
    };

    if (!userData) {
      fetchData();
    }
  }, [dispatch]);

  const handleCart = async () => {
    setIsLoading(true);
    try {
      if (!userData) {
        setOpenModal(true)
      } else {
        try {
          navigate('/cart')
        } catch (error) {
          console.error('Error adding to cart:', error);
        }
      }
    } finally {
      setIsLoading(false);
    }
  }

  const handleWishlist = () => {
    if (!userData) {
      setOpenModal(true)
    } else {
      try {
        navigate('/wishlist')
      } catch (error) {
        console.error('Error adding to cart:', error);
      }
    }
  }

  return (
    <>
      <nav className={`w-full fixed top-0 z-[1000] bg-white/80 backdrop-blur-sm shadow-sm`}>
        <div className="px-6 py-4 w-full flex items-center justify-between">
          <div className="hidden md:block">
            <ul className="flex gap-4 cursor-pointer text-black">
              <li><Link to="/shop">Shop</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="scale-150">
            <Link to="/">
              <img src={twst} alt="TWST" width="50px" className="cursor-pointer" />
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              <ul className="flex gap-4 cursor-pointer text-black items-center">
                <li>
                  <button onClick={handleWishlist}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    {wishlistData > 0 && <span className="absolute top-1 bg-[#FF5722] text-white text-xs py-[0.1em] px-[0.5em] rounded-full">{wishlistData}</span>}
                  </button>
                </li>
                
                <li>
                  <button
                    onClick={handleCart}
                    disabled={isLoading}
                    className="flex items-center justify-center"
                  >
                    {isLoading ? <ButtonPreloader /> : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    )}
                    {cartData > 0 && <span className="absolute top-1 bg-[#FF5722] text-white text-xs py-[0.1em] px-[0.5em] rounded-full">{cartData}</span>}
                  </button>
                </li>
              </ul>
            </div>
            
            {/* Show login button for all devices */}
            {!userData && (
              <button
                onClick={() => setOpenModal(true)}
                className="bg-gradient-to-r from-orange-300 to-red-600 bg-clip-text text-transparent hover:opacity-80 text-sm md:text-base"
              >
                Login
              </button>
            )}
            
            {userData && (
              <Link to="/profile/dashboard" className="hidden md:block">
                <FaRegUser className="mt-1"/>
              </Link>
            )}
            
            <div className="flex items-center gap-4">
              <div className="text-2xl block md:hidden" onClick={() => dispatch(openMobileNav())}>
                <RiMenu3Line className="hover:text-gray-600" />
              </div>
            </div>
          </div>
        </div>
      </nav>
      {openNav && <MobilNav />}
      {openModal && <Login openModal={openModal} setOpenModal={setOpenModal} />}
    </>
  );
};

export default NavigationBar;
