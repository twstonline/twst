import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axiosInstance from "../axios";
import { useNavigate } from "react-router-dom";
import Login from "../component/auth/Login";
import CardDatas from "../component/cardData/CardDatas";



const Wishlist = () => {
    const navigate = useNavigate();
    const userData = useSelector((state) => state.userDetails);
    const [openModal, setOpenModal] = useState(false);


    const [products, setProducts] = useState([]);
    const [wishlistItems, setWishlistItems] = useState([]);

    const fetchWishlist = async () => {
        try {
            const response = await axiosInstance.get("/user/getwishlist");
            setProducts(response?.data?.data || []);
            setWishlistItems(response?.data?.data || []);
        } catch (error) {
            console.error("Error fetching wishlist:", error);
        }
    };

    useEffect(() => {
        fetchWishlist();
    }, [userData]);


    return (
        <>
            <div className="max-w-7xl mx-auto p-4" style={{display:'flex',justifyContent:'center'}}>
                {wishlistItems?.length === 0 ? (
                    <div>
                        <p className="text-xs sm:text-sm text-gray-600 mt-8">
                            Your wishlist is empty.
                        </p>
                        <button
                            className="bg-gray-200 px-3 py-2 sm:px-4 sm:py-2 rounded text-xs sm:text-sm mt-2"
                            onClick={() => navigate("/shop")}
                        >
                            <i className="fas fa-plus me-2"></i>Add Items
                        </button>
                    </div>
                ) : (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                    <div className="lg:col-span-8">
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                            {products?.map((product) => (
                                <CardDatas key={product._id} product={product} />
                            ))}
                        </div>
                    </div>
                </div>
                )}
            </div>
            {openModal && <Login openModal={openModal} setOpenModal={setOpenModal} />}
        </>

    );
};

export default Wishlist;
