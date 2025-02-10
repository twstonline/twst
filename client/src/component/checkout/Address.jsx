import React, { useState, useEffect } from 'react';
import AddNewAddressForm from '../user_profile/AddNewAddressForm';

const Address = ({ data, dispatch, selected }) => {
    const [addresses, setAddresses] = useState(data);
    const [isEditing, setIsEditing] = useState(false);
    const [newAddress, setNewAddress] = useState(null);

    useEffect(() => {
        setAddresses(data);
    }, [data]);

    const handleEditClick = (address) => {
        setNewAddress(address);
        setIsEditing(true);
    };

    const handleCloseForm = () => {
        setNewAddress(null);
        setIsEditing(false);
    };

    return (
        <div className='py-4'>
            <div className='flex justify-between'>
                <h2 className="text-sm md:text-md font-medium mb-4">Your saved addresses</h2>
                <button onClick={() => {
                    setIsEditing(true);
                }} className="text-blue-400 text-xs md:text-sm px-4">+ Add New Address</button>
            </div>

            {!addresses?.length ||isEditing ? (
                <div className="border rounded-lg p-4">
                    <AddNewAddressForm onClose={handleCloseForm} editData={newAddress} />

                </div>
            ) : (
                <div className="grid xl:grid-cols-2 gap-4">
                    {addresses.map(address => (
                        <div key={address._id} onClick={() => dispatch(address)} className={`flex flex-row gap-2 text-xs md:text-sm border-2 rounded-lg p-4 ${selected._id === address._id && "border-blue-400"}`}>
                            <input id={`checkbox-${address._id}`} type="radio" name='address' className="cursor-pointer w-4 h-4 mt-1" checked={selected._id === address._id} />
                            <div className="relative flex justify-between items-start mb-2 w-full">
                                <div>
                                    <p className="font-bold">{address.firstname} {address.lastname}</p>
                                    <p>{address.address_line_1}, {address.address_line_2}</p>
                                    <p>{address.city}, {address.state}, {address.zip}</p>
                                    <p>Email: {address.email}</p>
                                    <p>Phone: {address.mobile}</p>
                                    <button onClick={() => handleEditClick(address)} className="mt-2 text-blue-500">Edit Address</button>
                                </div>
                            </div>
                        </div>

                    ))}
                </div>
            )}
        </div>
    );
};

export default Address;
