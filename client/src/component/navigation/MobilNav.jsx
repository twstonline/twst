import { useState, useEffect } from "react";
import { Drawer, Sidebar } from "flowbite-react";
import { useSelector, useDispatch } from "react-redux";
import { openMobileNav } from "../../redux/actions/generalActions.js";
import { FaShoppingBag, FaTimes } from "react-icons/fa";
import { RiContactsLine } from "react-icons/ri";
import { CiLogin } from "react-icons/ci";
import { IoCartOutline, IoHeartOutline } from "react-icons/io5";
import { HiShoppingBag } from "react-icons/hi";
import Login from "../auth/Login.jsx";
import { Link, useNavigate } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import axiosInstance from '../../axios.js'
import { setUserDetails, clearUserDetails } from '../../redux/actions/userActions.js';

const MobilNav = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { openNav } = useSelector((store) => store.general)
  const userData = useSelector(state => state.userDetails);
  const [openModal, setOpenModal] = useState(false);
  const [cartData, setCartData] = useState([]);
  const [wishlistData, setWishlistData] = useState([]);

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

  const handleCart = () => {
    if (!userData) {
      setOpenModal(true)
    } else {
      try {
        dispatch(openMobileNav())
        navigate('/cart')
      } catch (error) {
        console.error('Error adding to cart:', error);
      }
    }
  }

  const handleWishlist = () => {
    if (!userData) {
      setOpenModal(true)
    } else {
      try {
        dispatch(openMobileNav())
        navigate('/wishlist')
      } catch (error) {
        console.error('Error adding to cart:', error);
      }
    }
  }

  return (
    <>
      <Drawer open={openNav} onClose={() => dispatch(openMobileNav())} position="right" className="w-full">
        <div className="flex justify-end p-4">
          <button 
            onClick={() => dispatch(openMobileNav())}
            className="text-gray-500 hover:text-gray-700"
          >
            <FaTimes className="h-6 w-6" />
          </button>
        </div>
        
        <Drawer.Items className="w-full">
          <Sidebar
            aria-label="Sidebar with multi-level dropdown example"
            className="[&>div]:bg-transparent [&>div]:p-0 w-full"
          >
            <div className="flex h-full flex-col justify-between py-2 w-full">
              <div>
                <Sidebar.Items className="mt-10 w-full">
                  <Sidebar.ItemGroup className="w-full">
                    <Link to="/shop" className="w-full">
                      <Sidebar.Item icon={FaShoppingBag} onClick={() => dispatch(openMobileNav())} className="w-full">
                        Shop
                      </Sidebar.Item>
                    </Link>
                    <Link to="/about" className="w-full">
                      <Sidebar.Item icon={HiShoppingBag} onClick={() => dispatch(openMobileNav())} className="w-full">
                        About
                      </Sidebar.Item>
                    </Link>
                    <Link to="/contact" className="w-full">
                      <Sidebar.Item icon={RiContactsLine} onClick={() => dispatch(openMobileNav())} className="w-full">
                        Contact
                      </Sidebar.Item>
                    </Link>
                    {userData ? (
                      <Link to="/profile/dashboard" className="w-full">
                        <Sidebar.Item icon={FaRegUser} className="mt-1 w-full" onClick={() => dispatch(openMobileNav())}>
                          Profile
                        </Sidebar.Item>
                      </Link>
                    ) : (
                      <Sidebar.Item 
                        icon={CiLogin} 
                        onClick={() => setOpenModal(true)}
                        className="w-full"
                      >
                        Login
                      </Sidebar.Item>
                    )}
                    {cartData > 0 && <span className="relative top-6 left-5 bg-[#FF5722] text-white text-xs py-[0.1em] px-[0.5em] rounded-full">{cartData}</span>}
                    <Sidebar.Item icon={IoCartOutline} onClick={handleCart} className="w-full">
                      Cart
                    </Sidebar.Item>
                    {wishlistData > 0 && <span className="relative top-6 left-5 bg-[#FF5722] text-white text-xs py-[0.1em] px-[0.5em] rounded-full">{wishlistData}</span>}
                    <Sidebar.Item icon={IoHeartOutline} onClick={handleWishlist} className="w-full">
                      Wishlist
                    </Sidebar.Item>
                  </Sidebar.ItemGroup>
                </Sidebar.Items>
              </div>
            </div>
          </Sidebar>
        </Drawer.Items>
      </Drawer>
      {openModal && <Login openModal={openModal} setOpenModal={setOpenModal} />}
    </>
  );
}

export default MobilNav