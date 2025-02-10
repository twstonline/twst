// import React, { useState, useEffect } from "react";
// import axiosInstance from "../../axios";

// const AddressListing = ({ onEdit }) => {
//   const [addresses, setAddresses] = useState([]);

//   const fetchAddresses = async () => {
//     try {
//       const res = await axiosInstance.get("/address");
//       setAddresses(res.data.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   useEffect(() => {
//     fetchAddresses();
//   }, []);

//   const handleDelete = async (id) => {
//     try {
//       await axiosInstance.delete(`/address/${id}`);
//       fetchAddresses();
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleSetPrimary = async (id) => {
//     try {
//       await axiosInstance.patch("/address/setprimary", { addressId: id });
//       fetchAddresses();
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div className="max-w-6xl mx-auto px-4 py-8">
//       <h2 className="text-2xl font-bold mb-6">Address Listings</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//         {addresses.map((address) => (
//           <div
//             key={address._id}
//             className="bg-white shadow-lg rounded-lg border border-gray-200 transform transition-transform hover:scale-105 hover:shadow-xl"
//           >
//             <div className="p-6">
//               <h3 className="text-2xl font-semibold text-gray-800 mb-2">
//                 {address.firstname} {address.lastname}
//               </h3>
//               <p className="text-gray-600 text-lg mb-1">
//                 <span className="font-medium text-gray-800">Email:</span>{" "}
//                 {address.email}
//               </p>
//               <p className="text-gray-600 text-lg mb-1">
//                 <span className="font-medium text-gray-800">Mobile:</span>{" "}
//                 {address.mobile}
//               </p>
//             </div>
//             <div className="bg-gray-100 p-4 mt-4 flex justify-between items-center">
//               <button
//                 onClick={() => onEdit(address)}
//                 className="text-blue-500 font-medium hover:underline"
//               >
//                 Edit
//               </button>
//               <button
//                 onClick={() => handleDelete(address._id)}
//                 className="text-red-500 font-medium hover:underline"
//               >
//                 Delete
//               </button>
//               <label className="flex items-center">
//                 <input
//                   type="radio"
//                   checked={address.primary}
//                   onChange={() => handleSetPrimary(address._id)}
//                   className="h-4 w-4 text-blue-500 border-gray-300 rounded"
//                 />
//                 <span className="ml-2 text-sm">Primary</span>
//               </label>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AddressListing;



import React, { useState, useEffect } from "react";
import axiosInstance from "../../axios";

const AddressListing = ({ onEdit }) => {
  const [addresses, setAddresses] = useState([]);

  const fetchAddresses = async () => {
    try {
      const res = await axiosInstance.get("/address");
      setAddresses(res.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchAddresses();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axiosInstance.delete(`/address/${id}`);
      fetchAddresses();
    } catch (error) {
      console.error(error);
    }
  };

  const handleSetPrimary = async (id) => {
    try {
      await axiosInstance.patch("/address/setprimary", { addressId: id });
      fetchAddresses();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">Address Listings</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
        {addresses.map((address) => (
          <div
            key={address._id}
            className="bg-white shadow-md rounded-lg border border-gray-200 transition-transform hover:scale-105 hover:shadow-xl p-6"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-4 truncate">
              {address.firstname} {address.lastname}
            </h3>
            <p className="text-gray-700 text-md mb-2 truncate">
              <span className="font-medium">Email:</span> {address.email}
            </p>
            <p className="text-gray-700 text-md mb-4 truncate">
              <span className="font-medium">Mobile:</span> {address.mobile}
            </p>
            <div className="bg-gray-100 p-4 flex justify-between items-center border-t border-gray-300">
              <button
                onClick={() => onEdit(address)}
                className="text-blue-500 font-medium hover:underline"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(address._id)}
                className="text-red-500 font-medium hover:underline"
              >
                Delete
              </button>
              <label className="flex items-center">
                <input
                  type="radio"
                  checked={address.primary}
                  onChange={() => handleSetPrimary(address._id)}
                  className="h-4 w-4 text-blue-500 border-gray-300 rounded"
                />
                <span className="ml-2 text-sm">Primary</span>
              </label>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddressListing;
