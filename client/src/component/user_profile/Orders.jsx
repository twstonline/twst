// import React, { useState, useEffect } from 'react';
// import axiosInstance from '../../axios';
// import dayjs from 'dayjs';
// import { useSelector } from 'react-redux';


// const Orders = () => {
//   const userDetails = useSelector(state => state.userDetails);

//   const [showOrders, setShowOrders] = useState(false)
//   const [selectedStatus, setSelectedStatus] = useState('Placed');
//   const [orders, setOrders] = useState([]);
//   const [selectedOrder, setSelectedOrder] = useState(orders?.[0] ?? null);

//   useEffect(() => {
//     axiosInstance.get(`/orders/client?status=${selectedStatus}`)
//       .then((res) => setOrders(res?.data?.data))
//       .catch((error) => console.error(error));
//   }, [selectedStatus, userDetails]);

//   const handleSelect = (data) => {
//     setSelectedOrder(data)
//     setShowOrders(!showOrders)
//   }

//   return (
//     <div className={`${selectedOrder && "hidden"} md:block`} style={{ padding: '20px' }}>
//       <h2 className="text-xl font-bold mb-4">My Orders</h2>
//       <div className="relative flex lg:gap-1 mb-4">
//         {['Placed', 'Delivered', 'Canceled', 'Returned'].map((status, index) => (
//           <button
//             key={index}
//             onClick={() => setSelectedStatus(status)}
//             className={`px-3 py-1 rounded-full text-sm ${selectedStatus === status ? 'bg-black text-white' : 'bg-gray-200 text-gray-700'
//               }`}
//           >
//             {status}
//           </button>
//         ))}
//       </div>

//       <div className="space-y-4 md:max-h-[50vh] md:overflow-y-scroll">
//         {orders?.map((order) => (
//           <div key={order?._id} className={`bg-gray-100 rounded-lg p-4 cursor-pointer border`} >
//             <div className="flex justify-between items-start mb-2">
//               <div>
//                 <p className="text-sm md:text-base font-bold pb-2">Order No : {order?._id}</p>
//                 <p className="text-xs text-gray-600">Shipping addresses</p>
//                 <p className="text-xs text-gray-600 max-w-xs">{order?.address.address_line_1}, {order?.address.city}</p>
//               </div>
//               <p className="text-sm text-gray-600">{dayjs(order?.createdAt).format('DD/MM/YYYY')}</p>
//             </div>
//             <div className="flex justify-between items-center">
//               <p className="text-sm">Products : {order?.products?.item?.length} </p>
//               <div className="text-right">
//                 <p className="text-sm">Total Amount ₹{order?.amount}</p>
//                 <button className="text-sm bg-gray-200 px-3 py-1 rounded-full mt-1" onClick={() => handleSelect(order)}>Details</button>
//               </div>
//             </div>
//             <div className="flex justify-between items-center">
//               <p className="text-green-500 text-sm mt-2">{order?.status}</p>
//               {order?.delivery_days && <p className="text-green-500 text-sm mt-2"><span className="text-black text-sm mt-2">Arrival in : </span>{order?.delivery_days === 'free' ? '1-2 days' : `${order?.delivery_days} days`}</p>}
//             </div>
//             {showOrders &&
//               <div className='overflow-y-scroll md:h-[40vh]'>
//                 <h2 className="text-lg font-semibold mb-4">Items - {order?.products?.item?.length}</h2>

//                 {order?.products?.item.map(product => <div key={product?.product_id?._id} className='flex gap-3 py-4 border-t'>
//                   <div className='w-1/5'>
//                     <div className='flex items-center w-14 overflow-hidden  md:w-20 h-14 md:h-20 border-[2px] rounded-lg border-[#B17E3E] cursor-pointer' >
//                       <img src={`${process.env.REACT_APP_API_BASE_URL}/uploads/${product?.product_id?.image?.[0]}`} height={100} width={150} />
//                     </div>
//                   </div>
//                   <div className='w-1/5'>
//                     <p className="block text-sm font-medium text-gray-900">{product?.product_id?.name}</p>
//                     <p className="mb-2 text-xs md:text-sm text-gray-500 dark:text-gray-400">
//                       {product?.product_id?.brand}
//                     </p>
//                   </div>

//                   <p className="w-1/5 text-xs text-gray-600">
//                     qty • {product?.qty}
//                   </p>
//                   <p className="w-1/5 text-xs text-gray-600">
//                     Price • {product?.product_id?.price}
//                   </p>
//                 </div>)}
//               </div>}
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default Orders





import React, { useState, useEffect } from 'react';
import axiosInstance from '../../axios';
import dayjs from 'dayjs';
import { useSelector } from 'react-redux';

const Orders = () => {
  const userDetails = useSelector(state => state.userDetails);
  const [showOrders, setShowOrders] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState('Placed');
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);

  useEffect(() => {
    axiosInstance.get(`/orders/client?status=${selectedStatus}`)
      .then((res) => setOrders(res?.data?.data))
      .catch((error) => console.error(error));
  }, [selectedStatus, userDetails]);

  const handleSelect = (data) => {
    setSelectedOrder(data);
    setShowOrders(!showOrders);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold mb-6">My Orders</h2>

      <div className="flex gap-2 mb-6">
        {['Placed', 'Delivered', 'Canceled', 'Returned'].map((status, index) => (
          <button
            key={index}
            onClick={() => setSelectedStatus(status)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 
              ${selectedStatus === status ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
          >
            {status}
          </button>
        ))}
      </div>

      <div className="space-y-4 max-h-[100vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
        {orders?.map((order) => (
          <div key={order?._id} className="bg-white shadow-md rounded-lg p-5 border border-gray-200 transition-all hover:shadow-lg">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm font-semibold">Order No: {order?._id}</p>
                <p className="text-xs text-gray-500 mt-1">Shipping to: {order?.address.address_line_1}, {order?.address.city}</p>
              </div>
              <p className="text-xs text-gray-500">{dayjs(order?.createdAt).format('DD/MM/YYYY')}</p>
            </div>

            <div className="flex justify-between items-center mt-3">
              <p className="text-sm">Products: {order?.products?.item?.length}</p>
              <div className="text-right">
                <p className="text-lg font-semibold text-gray-800">₹{order?.amount}</p>
                <button
                  className="text-sm bg-blue-600 text-white px-4 py-1 rounded-full mt-2 transition-all hover:bg-blue-700"
                  onClick={() => handleSelect(order)}
                >
                  View Details
                </button>
              </div>
            </div>

            <div className="flex justify-between items-center mt-3">
              <p className={`text-sm font-medium ${order?.status === 'Delivered' ? 'text-green-600' : 'text-gray-600'}`}>{order?.status}</p>
              {order?.delivery_days && (
                <p className="text-sm text-gray-700">
                  <span className="text-black">Arrival in: </span>
                  {order?.delivery_days === 'free' ? '1-2 days' : `${order?.delivery_days} days`}
                </p>
              )}
            </div>

            {showOrders && selectedOrder?._id === order?._id && (
              <div className="mt-4 max-h-[40vh] overflow-y-auto border-t pt-4 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
                <h3 className="text-lg font-semibold mb-3">Order Items ({order?.products?.item?.length})</h3>

                {order?.products?.item.map(product => (
                  <div key={product?.product_id?._id} className="flex gap-4 py-3 border-b">
                    <div className="w-16 h-16 border rounded-md overflow-hidden">
                      <img
                        src={`${process.env.REACT_APP_API_BASE_URL}/uploads/${product?.product_id?.image?.[0]}`}
                        alt={product?.product_id?.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{product?.product_id?.name}</p>
                      <p className="text-xs text-gray-500">{product?.product_id?.brand}</p>
                    </div>
                    <p className="text-sm text-gray-600">Qty: {product?.qty}</p>
                    <p className="text-sm text-gray-600">₹{product?.product_id?.price}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
