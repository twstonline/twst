import React, { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useFormik } from "formik";
import axiosInstance from "../../axios";
import * as Yup from "yup";
import { toast } from "react-hot-toast";
import { setCart } from '../../redux/actions/storeActions';
import { useDispatch } from "react-redux";


const AddNewAddressForm = ({ onClose, editData }) => {
  const dispatch = useDispatch()
  const [phoneNumber, setPhoneNumber] = useState(editData?.mobile || "");
  const [loding,setLodig] = useState(false)

  const validationSchema = Yup.object({
    firstname: Yup.string().required("First Name is required"),
    lastname: Yup.string().required("Last Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    country: Yup.string().required("Country is required"),
    address_line_1: Yup.string().required("Address Line 1 is required"),
    city: Yup.string().required("City is required"),
    state: Yup.string().required("State is required"),
    zip: Yup.string().required("Zip Code is required"),
  });

  const formik = useFormik({
    initialValues: {
      firstname: editData?.firstname || "",
      lastname: editData?.lastname || "",
      email: editData?.email || "",
      country: editData?.country || "",
      address_line_1: editData?.address_line_1 || "",
      address_line_2: editData?.address_line_2 || "",
      city: editData?.city || "",
      state: editData?.state || "",
      zip: editData?.zip || "",
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        if(!phoneNumber){
          toast.error('Mobile is required')
          return
        }
        setLodig(true)
        if (editData) {
          await axiosInstance.patch("/address", {
            ...values,
            mobile: phoneNumber,
            _id: editData._id,
          });
          dispatch(setCart(true))
          toast.success("Address updated successfully");
        } else {
          await axiosInstance.post("/address", {
            ...values,
            mobile: phoneNumber,
          });
          dispatch(setCart(true))
          toast.success("Address added successfully");
        }
        onClose();
        setLodig(false)
      } catch (error) {
        console.error(error);
        setLodig(false)
        toast.error("Error submitting the form");
      }
    },
  });

  const handleCancel = () => {
    formik.resetForm();
    onClose();
    setLodig(false)

  };

  return (
    <div className="max-w-4xl mx-auto p-4 border rounded">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        {editData ? "Edit Address" : "Add New Address"}
      </h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="firstname" className="block text-sm font-medium mb-1">First Name*</label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              placeholder="First Name"
              className={`w-full px-3 py-2 border ${formik.touched.firstname && formik.errors.firstname ? 'border-red-500' : 'border-gray-300'}`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstname}
            />
            {formik.touched.firstname && formik.errors.firstname && (
              <div className="text-red-500 text-sm mt-1">{formik.errors.firstname}</div>
            )}
          </div>

          <div>
            <label htmlFor="lastname" className="block text-sm font-medium mb-1">Last Name*</label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              placeholder="Last Name"
              className={`w-full px-3 py-2 border ${formik.touched.lastname && formik.errors.lastname ? 'border-red-500' : 'border-gray-300'}`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastname}
            />
            {formik.touched.lastname && formik.errors.lastname && (
              <div className="text-red-500 text-sm mt-1">{formik.errors.lastname}</div>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">Email*</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className={`w-full px-3 py-2 border ${formik.touched.email && formik.errors.email ? 'border-red-500' : 'border-gray-300'}`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email && (
              <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>
            )}
          </div>

          <div>
            <label htmlFor="country" className="block text-sm font-medium mb-1">Country*</label>
            <input
              type="text"
              id="country"
              name="country"
              placeholder="Country"
              className={`w-full px-3 py-2 border ${formik.touched.country && formik.errors.country ? 'border-red-500' : 'border-gray-300'}`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.country}
            />
            {formik.touched.country && formik.errors.country && (
              <div className="text-red-500 text-sm mt-1">{formik.errors.country}</div>
            )}
          </div>

          <div>
            <label htmlFor="address_line_1" className="block text-sm font-medium mb-1">Address Line 1*</label>
            <input
              type="text"
              id="address_line_1"
              name="address_line_1"
              placeholder="Address Line 1"
              className={`w-full px-3 py-2 border ${formik.touched.address_line_1 && formik.errors.address_line_1 ? 'border-red-500' : 'border-gray-300'}`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.address_line_1}
            />
            {formik.touched.address_line_1 && formik.errors.address_line_1 && (
              <div className="text-red-500 text-sm mt-1">{formik.errors.address_line_1}</div>
            )}
          </div>

          <div>
            <label htmlFor="address_line_2" className="block text-sm font-medium mb-1">Address Line 2 (Optional)</label>
            <input
              type="text"
              id="address_line_2"
              name="address_line_2"
              placeholder="Address Line 2"
              className={`w-full px-3 py-2 border ${formik.touched.address_line_2 && formik.errors.address_line_2 ? 'border-red-500' : 'border-gray-300'}`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.address_line_2}
            />
          </div>

          <div>
            <label htmlFor="city" className="block text-sm font-medium mb-1">City*</label>
            <input
              type="text"
              id="city"
              name="city"
              placeholder="City"
              className={`w-full px-3 py-2 border ${formik.touched.city && formik.errors.city ? 'border-red-500' : 'border-gray-300'}`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.city}
            />
            {formik.touched.city && formik.errors.city && (
              <div className="text-red-500 text-sm mt-1">{formik.errors.city}</div>
            )}
          </div>

          <div>
            <label htmlFor="state" className="block text-sm font-medium mb-1">State*</label>
            <input
              type="text"
              id="state"
              name="state"
              placeholder="State"
              className={`w-full px-3 py-2 border ${formik.touched.state && formik.errors.state ? 'border-red-500' : 'border-gray-300'}`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.state}
            />
            {formik.touched.state && formik.errors.state && (
              <div className="text-red-500 text-sm mt-1">{formik.errors.state}</div>
            )}
          </div>

          <div>
            <label htmlFor="zip" className="block text-sm font-medium mb-1">Zip Code*</label>
            <input
              type="text"
              id="zip"
              name="zip"
              placeholder="Zip Code"
              className={`w-full px-3 py-2 border ${formik.touched.zip && formik.errors.zip ? 'border-red-500' : 'border-gray-300'}`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.zip}
            />
            {formik.touched.zip && formik.errors.zip && (
              <div className="text-red-500 text-sm mt-1">{formik.errors.zip}</div>
            )}
          </div>

          <div>
            <label htmlFor="mobile" className="block text-sm font-medium mb-1">Mobile*</label>
            <PhoneInput
              international
              defaultCountry="IN"
              value={phoneNumber}
              required
              onChange={setPhoneNumber}
              className={`w-full border ${phoneNumber ? 'border-gray-300' : 'border-red-500'} py-2 px-3 rounded`}
            />
            {!phoneNumber && <div className="text-red-500 text-sm mt-1">Mobile is required</div>}
          </div>
        </div>
        <div className="flex justify-end mt-6">
          <button
            type="button"
            className="px-6 py-3 border border-black text-gray-700 hover:bg-gray-200 mr-4"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-3 bg-blue-500 text-white hover:bg-blue-600"
            disabled={loding}
          >
            {editData ? "Update" : "Save"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNewAddressForm;
