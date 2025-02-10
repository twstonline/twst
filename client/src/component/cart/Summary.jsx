// const Summary =()=>{
//     return (
//         <>
//          <div className="w-full lg:w-1/3 p-6 rounded-lg mt-6 shadow-md lg:mt-0  lg:h-[calc(100vh-100px)]">
//           <h2 className="text-2xl font-bold mb-6">Summary</h2>
//           <div className="flex justify-between mb-4">
//             <p className="text-gray-600">Product Total</p>
//             <p className="text-gray-800 font-medium">₹4,590</p>
//           </div>
//           <div className="flex justify-between mb-4">
//             <p className="text-gray-600">Your Savings</p>
//             <p className="text-gray-800 font-medium">₹0</p>
//           </div>
//           <div className="flex justify-between mb-4">
//             <p className="text-gray-600">Shipping</p>
//             <p className="text-green-600 font-medium">FREE</p>
//           </div>
//           <div className="border-t pt-4 flex justify-between font-bold text-lg">
//             <p>Total</p>
//             <p>₹4,590</p>
//           </div>
//           <div className="w-full mt-6 text-center border p-3  ">
//             <input type="checkbox" name="" id="" className="mr-3"/>
//             <label htmlFor="checkbox">GIFT WRAP THIS ORDER?</label>
//           </div>
//           <button className="w-full mt-6 bg-black text-white py-3 rounded-lg hover:bg-gray-800">
//             CONTINUE SHOPPING
//           </button>
//           <p className="mt-4 text-center text-gray-500 text-sm">
//             FREE Shipping | 100-Day Hassle-Free Returns
//           </p>
//           <h3 className="font-thin text-center mt-6">Secured & Encrypted Payments</h3>
//         </div>
//         </>
//     )
// }

// export default Summary

import { useNavigate } from "react-router-dom";

const Summary = ({ salePriceTotal, deliveryCharge, proPriceTotal,lastTotal }) => {
  const navigate = useNavigate();
  const handleCheckout = () => {
    navigate('/checkout')
  }
  return (
    <div className="w-full lg:w-1/3 p-6 rounded-lg mt-6 shadow-md lg:mt-0 lg:h-[calc(100vh-100px)]">
      <h2 className="text-2xl font-bold mb-6">Summary</h2>
      <div className="flex justify-between mb-4">
        <p className="text-gray-600">Product Total</p>
        <p className="text-gray-800 font-medium">₹ {salePriceTotal.toFixed(2)}</p>
      </div>
      <div className="flex justify-between mb-4">
        <p className="text-gray-600">Your Savings</p>
        <p className="text-gray-800 font-medium">₹{(proPriceTotal-salePriceTotal).toFixed(2)}</p>
      </div>
      <div className="flex justify-between mb-4">
        <p className="text-gray-600">Shipping</p>
        <p className="text-green-600 font-medium">
          {salePriceTotal > 500 ? "FREE" : `₹ ${deliveryCharge}`}
        </p>
      </div>
      <div className="border-t pt-4 flex justify-between font-bold text-lg">
        <p>Total</p>
        <p>₹ {lastTotal}</p>
      </div>
      <button className="w-full mt-6 bg-black text-white py-3 rounded-lg hover:bg-gray-800" onClick={handleCheckout}>
        PROCEED TO CHECKOUT
      </button>
      <p className="mt-4 text-center text-gray-500 text-sm">
        FREE Shipping | 100-Day Hassle-Free Returns
      </p>
      <h3 className="font-thin text-center mt-6">Secured & Encrypted Payments</h3>
    </div>
  );
};

export default Summary;
