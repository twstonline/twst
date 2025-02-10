
import React, { useEffect, useState } from 'react';
import "react-multi-carousel/lib/styles.css";
import ProductSlide from "../carousel/ProductSlide";
// import { categories } from "../../utils/constant/categories";
import axiosInstance from "../../axios"

const Categories = () => {
const [categorie, setCategories] = useState([{}]);
  const fetchCategories = async () => {
    try {
      const { data } = await axiosInstance.get(`/category/getHomeCategory`);
      
      setCategories(data?.data);
    } catch (error) {
      console.error('Error fetching products:', error.message);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <>
      <ProductSlide text={"Shop By Categories"} items={categorie} slider="Categories" />
    </>
  );
};

export default Categories;
