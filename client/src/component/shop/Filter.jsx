import React from "react";
import { GoX } from "react-icons/go";

const Filter = ({ btnText }) => {
  return (
    <>
      <button className="flex items-center text-sm border p-2 rounded-lg gap-2 hover:bg-gray-200">
        {btnText} <GoX />
      </button>
    </>
  );
};

export default Filter;
