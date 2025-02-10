// import React, { useState } from 'react';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import PhoneInput from 'react-phone-number-input'; // Make sure you have this package installed

// const AddressForm = ({ data, dispatch, isEditing, addAddress }) => {
//   const [phoneNumber, setPhoneNumber] = useState(data.mobile || '');

//   const validationSchema = Yup.object({
//     firstname: Yup.string().required('First Name is required'),
//     lastname: Yup.string().required('Last Name is required'),
//     email: Yup.string().email('Invalid email address').required('Email is required'),
//     address_line_1: Yup.string().required('Address Line 1 is required'),
//     city: Yup.string().required('City is required'),
//     state: Yup.string().required('State is required'),
//     zip: Yup.string().required('Zip Code is required'),
//     mobile: Yup.string().required('Mobile number is required'),
//   });

//   const formik = useFormik({
//     initialValues: {
//       firstname: data.firstname || '',
//       lastname: data.lastname || '',
//       email: data.email || '',
//       address_line_1: data.address_line_1 || '',
//       address_line_2: data.address_line_2 || '',
//       city: data.city || '',
//       state: data.state || '',
//       zip: data.zip || '',
//       mobile: phoneNumber
//     },
//     validationSchema,
//     onSubmit: values => {
//       if (isEditing) {
//         // Handle update logic here
//       } else {
//         addAddress();
//       }
//     },
//   });

//   return (
//     <form onSubmit={formik.handleSubmit}>
//       <div className="mb-4">
//         <label htmlFor="firstname" className="block text-sm font-medium mb-1">First Name*</label>
//         <input
//           type="text"
//           id="firstname"
//           name="firstname"
//           className={`w-full px-3 py-2 border ${formik.touched.firstname && formik.errors.firstname ? 'border-red-500' : 'border-gray-300'}`}
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           value={formik.values.firstname}
//         />
//         {formik.touched.firstname && formik.errors.firstname && (
//           <div className="text-red-500 text-sm mt-1">{formik.errors.firstname}</div>
//         )}
//       </div>

//       {/* Add similar fields for lastname, email, address_line_1, address_line_2, city, state, zip */}

//       <div className="mb-4">
//         <label htmlFor="mobile" className="block text-sm font-medium mb-1">Mobile*</label>
//         <PhoneInput
//           international
//           defaultCountry="IN"
//           value={phoneNumber}
//           onChange={(value) => {
//             setPhoneNumber(value);
//             formik.setFieldValue('mobile', value);
//           }}
//           className={`w-full border ${phoneNumber ? 'border-gray-300' : 'border-red-500'} py-2 px-3 rounded`}
//         />
//         {!phoneNumber && <div className="text-red-500 text-sm mt-1">Mobile is required</div>}
//       </div>

//       <div>
//         <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">{isEditing ? 'Update Address' : 'Add Address'}</button>
//       </div>
//     </form>
//   );
// };

// export default AddressForm;
