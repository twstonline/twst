import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
// import category from "../../asset/category.png";
// import NewArrivalSlice from "../carousel/NewArrivalSlice";
// import {categories} from '../../utils/constant/categories'
import { useDispatch } from "react-redux";
import { clearUserDetails } from '../../redux/actions/userActions.js';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../axios';


const Dashboard = () => {
  // const [user, setUser] = useState(null);
  const userDetails = useSelector(state => state.userDetails);
    const [orders, setOrders] = useState([]);
    useEffect(() => {
      axiosInstance.get(`/orders/clientFullorder`)
        .then((res) => setOrders(res?.data?.data))
        .catch((error) => console.error(error));
    }, [userDetails]);
  
const dispatch = useDispatch()
const navigate = useNavigate()
  const logoutUser = () => {
    dispatch(clearUserDetails());
    localStorage.removeItem('Tokens');
    navigate('/');
  };
  return (
    <>
    <div className="p-6 md:p-10">
      <div>
        <h1 className="text-2xl md:text-3xl font-semibold">Hello, {userDetails?.username ? userDetails?.username : 'user'}</h1>
        <p className="text-gray-600 mt-2">
          Welcome to your Profile.
        </p>
      </div>

      <div className=" mt-6 space-x-8">
        <button className="text-gray-700 font-medium border-b-2 border-black">
          DASHBORD
        </button>
        <button className="text-gray-500" onClick={logoutUser}>LOG OUT</button>
      </div>

      <div className="flex flex-col md:flex-row  items-center gap-6 mt-8">
        <div className="w-full h-20 md:w-60 md:h-24 border flex flex-col justify-center items-center rounded-lg shadow-md">
          <p className="text-lg font-semibold">{orders?.length}</p>
          <p className="text-gray-600">TOTAL ORDERS</p>
        </div>
      </div>

      {/* <div className="mt-10 bg-gray-100 rounded-lg shadow-md p-6 flex flex-col md:flex-row items-start gap-6">
        <div className="bg-[#A97E4E] text-white p-6 rounded-lg flex flex-col items-center justify-center w-full md:w-1/4">
          <p className="text-4xl font-bold">1</p>
          <p className="mt-2 text-lg">ITEMS IN BAG</p>
          <button className="bg-white text-[#A97E4E] px-6 py-2 mt-4 rounded-lg font-medium hover:bg-[#8b6542] hover:text-white transition">
            VIEW BAG
          </button>
        </div>
        <div className="flex gap-6 overflow-x-auto w-full pb-4 scrollbar-hide">
          {Array.from({ length: 20 }).map((_, index) => (
            <div key={index} className="w-36 h-auto flex-shrink-0">
              <div className="w-full h-28 rounded-lg overflow-hidden">
                <img
                  src={category}
                  alt="Product"
                  className="w-full h-full  object-cover"
                />
              </div>
              <p className="text-sm font-light mt-2">Scorpio Melange Shirt</p>
              <p className="text-sm font-light text-gray-600">
                Brown / 5 / Regular x 1
              </p>
              <p className="text-sm font-semibold text-gray-800 mt-1">$4,590</p>
            </div>
          ))}
        </div>
      </div> */}
    </div>
    {/* <NewArrivalSlice text={"New Arrivals" } items={categories} count={3}/> */}
    </>
  );
};

export default Dashboard;
