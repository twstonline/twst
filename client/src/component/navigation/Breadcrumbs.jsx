import React from "react";
import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";

const Breadcrumbs = () => {
  return (
    <>
      <Breadcrumb aria-label="Default breadcrumb example " >
        <Breadcrumb.Item href="/" icon={HiHome}>
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item href="/shop" >Shop</Breadcrumb.Item>
        <Breadcrumb.Item >Product Details</Breadcrumb.Item>
      </Breadcrumb>
    </>
  );
};

export default Breadcrumbs;
