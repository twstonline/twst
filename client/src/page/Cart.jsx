// import { useEffect, useState } from "react";
// import axiosInstance from '../axios'
// import men from "../asset/men.jpg";
// import CartList from "../component/cart/CartList";
// import Summary from "../component/cart/Summary";
// import FeatureProductSlide from '../component/carousel/FeatureProductSlide'
// import {categories} from '../utils/constant/categories'
// import { useDispatch, useSelector } from 'react-redux';
// import { setUserDetails } from '../../../redux/actions/userActions';
// import { setCart } from '../../../redux/actions/storeActions';

// const Cart = () => {
//   const dispatch = useDispatch();

//   return (
//     <>
//       <div className="w-full  flex flex-col lg:flex-row gap-0 lg:gap-3">
//         <div className="w-full lg:w-2/3 p-6 shadow-md rounded-lg  h-96 overflow-scroll  productPhoto">
//           <h2 className="text-xl lg:text-2xl font-bold mb-6">Your Bag</h2>

//           <CartList img={men} />
//         </div>

//        <Summary/>
//       </div>
//       <FeatureProductSlide items={categories} text="You may also like"/>
//     </>
//   );
// };

// export default Cart;



import { useEffect, useState } from "react";
import axiosInstance from "../axios";
import CartList from "../component/cart/CartList";
import Summary from "../component/cart/Summary";
import { useDispatch, useSelector } from "react-redux";
import { setUserDetails } from "../redux/actions/userActions";

const Cart = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userDetails);
  const storeDataCart = useSelector((state) => state?.storeDetails?.cart);

  const [cartData, setCartData] = useState([]);
  const [salePriceTotal, setSalePriceTotal] = useState(0);
  const [proPriceTotal, setProPriceTotal] = useState(0);

  const deliveryCharge = 40;

  const calculateTotalSalePrice = (items) => {
    return items.reduce((total, item) => total + item?.productId?.sale_rate * item?.qty, 0);
  };

  const calculateTotalProPrice = (items) => {
    return items.reduce((total, item) => total + item?.productId?.price * item?.qty, 0);
  };

  const fetchData = async () => {
    try {
      const response = await axiosInstance.get(`/user/getcarts`);
      const items = response?.data?.data?.item || [];
      setCartData(items);
      const filteredItems = items.filter((obj) => obj.productId.isAvailable !== false);

      setSalePriceTotal(calculateTotalSalePrice(filteredItems));
      setProPriceTotal(calculateTotalProPrice(filteredItems));
    } catch (error) {
      console.error(error);
      setCartData([]);
    }
  };

  useEffect(() => {
    fetchData();
  }, [storeDataCart]);



  // const handleQuantityChange = async (item, operation, index) => {
  //   let newQty = item?.qty;

  //   if (operation === "increment" && item?.qty < item?.productId?.stock) {
  //     newQty += 1;
  //   } else if (operation === "decrement" && item?.qty > 1) {
  //     newQty -= 1;
  //   }

  //   const updatedCartData = [...cartData];
  //   updatedCartData[index].qty = newQty;
  //   setCartData(updatedCartData);

  //   const filteredItems = updatedCartData.filter((obj) => obj.productId.isAvailable !== false);
  //   setSalePriceTotal(calculateTotalSalePrice(filteredItems));
  //   setProPriceTotal(calculateTotalProPrice(filteredItems));

  //   try {
  //     const response = await axiosInstance.patch(`/user/updateQty`, {
  //       qty: newQty,
  //       productId: item?.productId?._id,
  //       size: item.size,
  //     });
  //     dispatch(setUserDetails({ ...userData, cartData: updatedCartData }));
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const handleQuantityChange = async (item, operation, index) => {
    let newQty = item?.qty;
    if (operation === 'increment' && item?.size) {
      item?.productId?.sizes?.forEach((siz) => {
        if (siz.sizes === item.size && item?.qty < siz.quantity) {
          newQty += 1;
        }
      })
    } else if (operation === 'decrement' && item?.size) {
      item?.productId?.sizes?.forEach((siz) => {
        if (siz.sizes === item.size && item?.qty > 1) {
          newQty -= 1;
        }
      })

    } else {
      if (operation === 'increment' && item?.qty < item?.productId?.stock) {
        newQty += 1;
      } else if (operation === 'decrement' && item.qty > 1) {
        newQty -= 1;
      }
    }
    // setLoadingIndex(index);


    const updatedCartData = [...cartData];
    updatedCartData[index].qty = newQty;

    const items = updatedCartData;
    const filteredItems = items.filter((obj) => {
      return obj.productId.isAvailable != false
    })
    const totalSalePrice = calculateTotalSalePrice(filteredItems);
    setSalePriceTotal(totalSalePrice)
    const totalProPrice = calculateTotalProPrice(filteredItems);
    setProPriceTotal(totalProPrice)

    setCartData(updatedCartData);

    try {
      const response = await axiosInstance.patch(`/user/updateQty`, { qty: newQty, productId: item?.productId?._id, size: item.size });
      dispatch(setUserDetails({ ...userData, cartData: updatedCartData }));

    } catch (error) {
      console.log(error);

      const revertedCartData = [...cartData];
      revertedCartData[index].qty = item?.qty;

      const items = revertedCartData;
      const filteredItems = items.filter((obj) => {
        return obj.productId.isAvailable != false
      })
      const totalSalePrice = calculateTotalSalePrice(filteredItems);
      setSalePriceTotal(totalSalePrice)
      const totalProPrice = calculateTotalProPrice(filteredItems);
      setProPriceTotal(totalProPrice)

      setCartData(revertedCartData);

    }
    //  finally {
    //   setLoadingIndex(null);
    // }
  };

  const handleRemoveItem = async (itemId) => {
    try {
      const response = await axiosInstance.patch(`/user/removeFromCart/${itemId._id}`, {
        size: itemId?.size,
      });
      if (response?.data?.userData) {
        dispatch(setUserDetails(response?.data?.userData));
      }

      const updatedCartItems = cartData.filter((item) => item?._id !== itemId?._id);
      setCartData(updatedCartItems);

      const filteredItems = updatedCartItems.filter((obj) => obj.productId.isAvailable !== false);
      setSalePriceTotal(calculateTotalSalePrice(filteredItems));
      setProPriceTotal(calculateTotalProPrice(filteredItems));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-full flex flex-col lg:flex-row gap-0 lg:gap-3">
      <div className="w-full lg:w-2/3 p-6 shadow-md rounded-lg h-96 overflow-scroll productPhoto">
        <h2 className="text-xl lg:text-2xl font-bold mb-6">Your Bag</h2>
        <CartList cartData={cartData} onQuantityChange={handleQuantityChange} onRemoveItem={handleRemoveItem} />
      </div>
      <Summary
        salePriceTotal={salePriceTotal}
        deliveryCharge={deliveryCharge}
        proPriceTotal={proPriceTotal}
        lastTotal={(salePriceTotal > 500  ? salePriceTotal : salePriceTotal + deliveryCharge).toFixed(2)}
      />
    </div>
  );
};

export default Cart;
