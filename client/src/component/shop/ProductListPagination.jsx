// import React, { useState } from "react";
// import { Pagination } from "flowbite-react";

// const ProductListPagination = () => {
//   const [currentPage, setCurrentPage] = useState(1);

//   const onPageChange = (page) => setCurrentPage(page);
//   return (
//     <>
//       <div className="flex overflow-x-auto sm:justify-center">
//         <Pagination
//           currentPage={currentPage}
//           totalPages={10}
//           previousLabel=""
//           nextLabel=""
//           onPageChange={onPageChange}
      
//           showIcons
//         />
//       </div>
//     </>
//   );
// };

// export default ProductListPagination;



import React from "react";
import { Pagination } from "flowbite-react";
import { useSearchParams } from "react-router-dom";

const ProductListPagination = ({ totalPages }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get("page")) || 1;

  const onPageChange = (page) => {
    searchParams.set("page", page);
    setSearchParams(searchParams);
  };

  return (
    <div className="flex overflow-x-auto sm:justify-center">
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
        showIcons
      />
    </div>
  );
};

export default ProductListPagination;
