import React, { useEffect, useState } from 'react';
// import { categories } from '../../utils/constant/categories'
import ProductSlide from '../carousel/ProductSlide'
import axiosInstance from '../../axios';

const BestSeller = () => {

  const [products, setProducts] = useState([{}]);

  const fetchProducts = async () => {
    try {
      const { data } = await axiosInstance.get(`/section/store`);
      setProducts(data?.data);
    } catch (error) {
      console.error('Error fetching products:', error.message);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  console.log('products122',products);
  
  return (
    <>
      { products?.map(val => 
        // console.log('565454',val?.title , val?.product);
        
        <ProductSlide text={val?.title} items={val?.product} slider={val?.title} />

      )}
    </>
  )
}

export default BestSeller
