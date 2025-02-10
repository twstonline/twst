// import React, { useState } from "react";
// import "react-phone-number-input/style.css";
// import PhoneInput from "react-phone-number-input";
// import { useFormik } from "formik";
// import * as Yup from 'yup';

// const UserProfileForm = () => {
//   const [phoneNumber, setPhoneNumber] = useState("");

//   const validationSchema = Yup.object({
//     firstName: Yup.string().required('Required'),
//     lastName: Yup.string().required('Required'),
//     email: Yup.string().email('Invalid email address').required('Required'),
//     password: Yup.string().min(6, 'Must be at least 6 characters'),
//     confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'Passwords must match'),
//     contactNumber: Yup.string().required('Required'), // Required even with PhoneInput
//     dob: Yup.date().nullable(),
//   });

//   const formik = useFormik({
//     initialValues: {
//       firstName: "Abhirami",
//       lastName: "K V",
//       email: "abhiramikv.dev@gmail.com",
//       password: "",
//       confirmPassword: "",
//       contactNumber: "",
//       dob: "",
//     },
//     validationSchema,
//     onSubmit: (values) => {
//       console.log("Form Data:", { ...values, contactNumber: phoneNumber });
//       alert("Form submitted successfully!");
//     },
//   });

//   return (
//     <div className="container mx-auto p-8">
//       <h2 className="text-2xl font-bold mb-6">My Profile</h2>
//       <form onSubmit={formik.handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {/* Profile Details */}
//         <div>
//           <h3 className="text-lg font-medium mb-4">Profile Details</h3>

//           <div className="mb-4">
//             <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2">First Name*</label>
//             <input type="text" id="firstName" name="firstName" placeholder="First Name"
//               className={`w-full px-3 py-2 border rounded-md ${formik.touched.firstName && formik.errors.firstName ? "border-red-500" : "border-gray-300"}`}
//               {...formik.getFieldProps("firstName")} />
//             {formik.touched.firstName && formik.errors.firstName && (<div className="text-red-500 text-sm mt-1">{formik.errors.firstName}</div>)}
//           </div>

//           <div className="mb-4">
//             <label htmlFor="lastName" className="block text-gray-700 font-medium mb-2">Last Name*</label>
//             <input type="text" id="lastName" name="lastName" placeholder="Last Name"
//               className={`w-full px-3 py-2 border rounded-md ${formik.touched.lastName && formik.errors.lastName ? "border-red-500" : "border-gray-300"}`}
//               {...formik.getFieldProps("lastName")} />
//             {formik.touched.lastName && formik.errors.lastName && (<div className="text-red-500 text-sm mt-1">{formik.errors.lastName}</div>)}
//           </div>

//           <div className="mb-4">
//             <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email*</label>
//             <input type="email" id="email" name="email" placeholder="Email"
//               className={`w-full px-3 py-2 border rounded-md ${formik.touched.email && formik.errors.email ? "border-red-500" : "border-gray-300"}`}
//               {...formik.getFieldProps("email")} />
//             {formik.touched.email && formik.errors.email && (<div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>)}
//           </div>

//           <div className="mb-4">
//             <label htmlFor="contactNumber" className="block text-gray-700 font-medium mb-2">Contact Number*</label>
//             <PhoneInput
//               placeholder="Enter phone number"
//               defaultCountry="IN"
//               value={phoneNumber}
//               onChange={(value) => {
//                 setPhoneNumber(value);
//                 formik.setFieldValue("contactNumber", value);
//               }}
//               className={`w-full px-2 py-1 border rounded-md ${formik.touched.contactNumber && formik.errors.contactNumber ? "border-red-500" : "border-gray-300"}`}
//             />
//             {formik.touched.contactNumber && formik.errors.contactNumber && (<div className="text-red-500 text-sm mt-1">{formik.errors.contactNumber}</div>)}
//           </div>

//           <div className="mb-4">
//             <label htmlFor="dob" className="block text-gray-700 font-medium mb-2">Date of Birth</label>
//             <input type="date" id="dob" name="dob"
//               className={`w-full px-3 py-2 border rounded-md ${formik.touched.dob && formik.errors.dob ? "border-red-500" : "border-gray-300"}`}
//               {...formik.getFieldProps("dob")} />
//               {formik.touched.dob && formik.errors.dob && (<div className="text-red-500 text-sm mt-1">{formik.errors.dob}</div>)}
//           </div>
//         </div>

//         {/* Change Password */}
//         <div>
//           <h3 className="text-lg font-medium mb-4">Change Password</h3>

//           <div className="mb-4">
//             <label htmlFor="password" className="block text-gray-700 font-medium mb-2">New Password</label>
//             <input type="password" id="password" name="password" placeholder="New Password"
//               className={`w-full px-3 py-2 border rounded-md ${formik.touched.password && formik.errors.password ? "border-red-500" : "border-gray-300"}`}
//               {...formik.getFieldProps("password")} />
//             {formik.touched.password && formik.errors.password && (<div className="text-red-500 text-sm mt-1">{formik.errors.password}</div>)}
//           </div>

//           <div className="mb-4">
//             <label htmlFor="confirmPassword" className="block text-gray-700 font-medium mb-2">Confirm New Password</label>
//             <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm New Password"
//               className={`w-full px-3 py-2 border rounded-md ${formik.touched.confirmPassword && formik.errors.confirmPassword ? "border-red-500" : "border-gray-300"}`}
//               {...formik.getFieldProps("confirmPassword")} />
//             {formik.touched.confirmPassword && formik.errors.confirmPassword && (<div className="text-red-500 text-sm mt-1">{formik.errors.confirmPassword}</div>)}
//           </div>
//           <button type="button" className="bg-gray-100 border border-gray-300 rounded px-4 py-2 hover:bg-gray-200 focus:outline-none focus:ring focus:ring-gray-300 w-full">UPDATE PASSWORD</button>
//         </div>

//         <div className="md:col-span-2">
//           <button type="submit" className="text-gray-400  hover:bg-gray-800 border border-black font-normal py-2 px-4 rounded focus:outline-none focus:ring focus:ring-black-300  mb-20 lg:mb-0 w-full lg:w-auto">
//             SAVE CHANGES
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default UserProfileForm;




import React, { useState, useEffect } from 'react';
import axiosInstance from '../../axios';
import { FaPencilAlt } from 'react-icons/fa';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from "react-redux";
import Login from "../auth/Login.jsx";
import { setUserDetails } from '../../redux/actions/userActions.js';




const UserProfileForm = () => {
    const dispatch = useDispatch()
    const userData = useSelector(state => state.userDetails);
    const [user, setUser] = useState({ username: '', email: '', phone: '' });
    const [profileImage, setProfileImage] = useState(null);
    const [previewImage, setPreviewImage] = useState('/assets/avatar.png');
    const [openModal, setOpenModal] = useState(false);


    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setProfileImage(file);
            setPreviewImage(URL.createObjectURL(file));
        }
    };

    const handleIconClick = () => {
        document.getElementById('profileImageInput').click();
    };

    const saveUserDetails =async () => {
        if (!userData) {
            setOpenModal(true)
        } else {
            const formData = new FormData();
            formData.append('email', user.email);
            formData.append('username', user.username);
            formData.append('phone', user.phone);
            if (profileImage) {
                formData.append('profile', profileImage);
            }

            const response = await axiosInstance
                .post('/user', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                })
                .then(() =>{ toast.success('User details updated successfully.')
                    
                    // dispatch(setUserDetails(response.data.updatedUser));
                })
                .catch((error) => {
                    console.error('Error updating user details:', error);
                    toast.error('Failed to update user details.');
                });
        }
    };

    useEffect(() => {
        axiosInstance
            .get('/user')
            .then((res) => {
                const userData = res?.data?.data;
                setUser({
                    username: userData?.username || '',
                    email: userData?.email || '',
                    phone: userData?.phone || '',
                });
                setPreviewImage(
                    userData?.profile
                        ? `${process.env.REACT_APP_API_BASE_URL}/uploads/${userData.profile}`
                        : '/assets/avatar.png'
                );
            })
            .catch((error) => console.error('Error fetching user details:', error));
    }, []);

    return (
        <>
            <div className="flex justify-center items-center h-screen bg-gray-100">
                <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md">
                    <div className="flex flex-col items-center">
                        <div className="relative overflow-hidden rounded-full cursor-pointer w-24 h-24 bg-gray-200 mb-4">
                            <img src={previewImage} alt="Profile Picture" className="w-full h-full object-cover" />
                            <div
                                className="absolute inset-0 bg-black bg-opacity-50 rounded-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300"
                                onClick={handleIconClick}
                            >
                                <FaPencilAlt className="text-white text-2xl" />
                            </div>
                            <input
                                id="profileImageInput"
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                className="hidden"
                            />
                        </div>
                        <h2 className="text-xl font-semibold text-gray-700 mb-4">Edit Profile</h2>
                    </div>

                    <div className="space-y-4">
                        <input
                            type="text"
                            className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Username"
                            value={user?.username}
                            onChange={(e) => setUser({ ...user, username: e.target.value })}
                        />
                        <input
                            type="email"
                            className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Email"
                            value={user?.email}
                            onChange={(e) => setUser({ ...user, email: e.target.value })}
                        />
                        <input
                            type="tel"
                            className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Phone"
                            value={user?.phone}
                            onChange={(e) => setUser({ ...user, phone: e.target.value })}
                            disabled={user?.phone}
                        />
                    </div>

                    <button
                        onClick={saveUserDetails}
                        className="mt-6 w-full bg-blue-500 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
                    >
                        Save Changes
                    </button>
                </div>
            </div>
            {openModal && <Login openModal={openModal} setOpenModal={setOpenModal} />}
        </>

    );
};

export default UserProfileForm;
