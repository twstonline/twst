import React, { useState } from "react";
import AddNewAddressForm from "./AddNewAddressForm";
import AddressListing from "./AddressListing";

const Address = () => {
  const [openForm, setOpenForm] = useState(false);
  const [editData, setEditData] = useState(null);

  const handleAddOrEditClick = (address = null) => {
    setEditData(address);
    setOpenForm(true);
  };

  const handleCloseForm = () => {
    setEditData(null);
    setOpenForm(false);
  };

  return (
    <div className="w-full h-auto p-4">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl">ADDRESS</h1>
        {openForm ? (
          <button
            className="p-3 lg:px-6 lg:py-3 border border-black"
            onClick={handleCloseForm}
          >
            Back
          </button>
        ) : (
          <button
            className="p-3 lg:px-6 lg:py-3 border border-black"
            onClick={() => setOpenForm(true)}
          >
            ADD NEW
          </button>
        )}
      </div>
      {openForm ? (
        <AddNewAddressForm
          onClose={handleCloseForm}
          editData={editData}
        />
      ) : (
        <AddressListing onEdit={handleAddOrEditClick} />
      )}
    </div>
  );
};

export default Address;
