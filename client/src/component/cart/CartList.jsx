// import React from "react";


// const CartList = ({img}) => {
//   return (
//     <>
//       <div className="flex flex-col md:flex-row items-center md:items-start justify-between border-b pb-6 mb-6  ">
//         <div className="flex items-center gap-6">
//           <img
//             src={img}
//             alt="Product"
//             className="w-28 h-28 object-cover rounded-lg shadow-sm"
//           />
//           <div>
//             <h3 className="text-xl font-medium text-gray-800">
//               Scorpio Cotton Melange Shirt
//             </h3>
//             <p className="text-gray-500 mt-1">Brown, S, Regular</p>
//             <button className="mt-2 text-red-500 hover:underline font-medium">
//               REMOVE
//             </button>
//           </div>
//         </div>
//         <div className="mt-4 md:mt-0 flex items-center gap-6">
//           <div className="flex items-center border rounded-md overflow-hidden">
//             <button className="px-4 py-2 bg-gray-100 text-gray-600 hover:bg-gray-200">
//               -
//             </button>
//             <span className="px-6 py-2 bg-white text-gray-800">1</span>
//             <button className="px-4 py-2 bg-gray-100 text-gray-600 hover:bg-gray-200">
//               +
//             </button>
//           </div>
//           <p className="text-lg font-semibold text-gray-800">₹4,590</p>
//         </div>
//       </div>
//     </>
//   );
// };

// export default CartList;



import React from "react";
// import { FaTrash } from "react-icons/fa";

const CartList = ({ cartData, onQuantityChange, onRemoveItem }) => {
  console.log('cartData', cartData);

  return (
    <>
      {cartData?.map((item, index) => (
        <div key={item?._id} className="flex flex-col md:flex-row items-center md:items-start justify-between border-b pb-6 mb-6">
          <div className="flex items-center gap-6">
            <img
              src={`${process.env.REACT_APP_API_BASE_URL}/uploads/${item?.productId?.image?.[0]}`}
              alt="Product"
              width={100}
              height={100}
              className="w-28 h-28 object-cover rounded-lg shadow-sm"
            />
            <div>
              <h3 className="text-xl font-medium text-gray-800">{item?.productId?.name}</h3>
              {item?.size && <p className="text-gray-500 mt-1">Size: {item.size}</p>}
              <button
                className="mt-2 text-red-500 hover:underline font-medium"
                onClick={() => onRemoveItem(item)}
              >
                REMOVE
              </button>
            </div>
          </div>
          <div className="mt-4 md:mt-0 flex items-center gap-6">
            <div className="flex items-center border rounded-md overflow-hidden">
              <button
                className="px-4 py-2 bg-gray-100 text-gray-600 hover:bg-gray-200"
                onClick={() => onQuantityChange(item, "decrement", index)}
                disabled={item?.qty === 1}
              >
                -
              </button>
              <span className="px-6 py-2 bg-white text-gray-800">{item?.qty}</span>
              <button
                className="px-4 py-2 bg-gray-100 text-gray-600 hover:bg-gray-200"
                onClick={() => onQuantityChange(item, "increment", index)}
              >
                +
              </button>
            </div>
            <p className="text-lg font-semibold text-gray-800">₹ {item?.productId?.sale_rate}
              <span className=" font-light text-gray-500 text-sm line-through mx-3">
                ₹{item?.productId?.price}
              </span>
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default CartList;
