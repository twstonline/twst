import React, { useState } from "react";
import { Button, Modal } from "flowbite-react";
import fashion from "../../asset/fashion.png";
import { toast } from "react-hot-toast";
import axiosInstance from '../../axios';
import { useDispatch } from "react-redux";
import { setUserDetails } from '../../redux/actions/userActions.js';
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { FaWhatsapp } from "react-icons/fa";
import { ButtonPreloader } from '../common/Preloader';

const Login = ({ openModal, setOpenModal }) => {
    const dispatch = useDispatch()
    const [phoneNumber, setPhoneNumber] = useState("");
    const [otp, setOtp] = useState(Array(6).fill(""));
    const [showOtpInput, setShowOtpInput] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleContinue = async () => {
        setIsLoading(true);
        if (phoneNumber) {
            try {
                await axiosInstance.post("/auth/send-whatsapp-otp", { number: phoneNumber });
                setShowOtpInput(true); 
                toast.success("OTP sent via WhatsApp successfully!");
            } catch (error) {
                console.error(error);
                toast.error("Failed to send OTP via WhatsApp.");
            }
        } else {
            toast.error("Please enter a valid phone number.");
        }
        setIsLoading(false);
    };

    const handleOtpChange = (value, index) => {
        const newOtp = [...otp];
        newOtp[index] = value.substr(value.length - 1);
        setOtp(newOtp);

        if (value && index < otp.length - 1) {
            document.getElementById(`otp-input-${index + 1}`).focus();
        }
        
        if (value === "") {
            if (index > 0) {
                document.getElementById(`otp-input-${index - 1}`).focus();
            }
        }
    };

    const handleOtpSubmit = async () => {
        const otpValue = otp.join(""); 
        try {
            const response = await axiosInstance.post("/auth/verify-otp", { number: phoneNumber, otp: otpValue });
            localStorage.setItem(
              "Tokens",
              JSON.stringify({ access: response.data.data.token.accessToken, refresh: response.data.data.token.refreshToken })
            );
            dispatch(setUserDetails(response.data.data));
            toast.success("Login successful!");
            setOpenModal(false);
        } catch (error) {
            console.error(error);
            toast.error("Invalid OTP. Please try again.");
        }
    };

    return (
        <>
            <Modal
                dismissible
                show={openModal}
                onClose={() => setOpenModal(false)}
                size="md"
                className="backdrop-blur-sm fixed inset-0 flex items-center justify-center rounded-none mt-[60px]"
            >
                <Modal.Body className="w-full p-6 max-w-md mx-auto">
                    <div className="flex flex-col items-center space-y-6">
                        <div className="bg-amber-100 p-4 rounded-full">
                            <FaWhatsapp className="text-amber-600 text-3xl" />
                        </div>
                        
                        <h3 className="text-xl font-semibold text-center text-gray-800">
                            {showOtpInput ? "Verify OTP" : "Login with WhatsApp"}
                        </h3>

                        {!showOtpInput ? (
                            <>
                                <div className="w-full space-y-4">
                                    <p className="text-sm text-gray-600 text-center">
                                        Enter your WhatsApp number to receive OTP
                                    </p>
                                    <PhoneInput
                                        international
                                        defaultCountry="IN"
                                        value={phoneNumber}
                                        onChange={setPhoneNumber}
                                        className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm p-2.5 focus:ring-amber-500 focus:border-amber-500"
                                    />
                                    <button 
                                        onClick={handleContinue} 
                                        disabled={isLoading}
                                        className="w-full mt-6 bg-amber-500 bg-opacity-90 backdrop-blur-sm px-6 py-3 shadow-md text-white hover:bg-amber-600 transition-colors flex justify-center items-center"
                                    >
                                        {isLoading ? <ButtonPreloader /> : "Send OTP via WhatsApp"}
                                    </button>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="w-full space-y-4">
                                    <p className="text-sm text-gray-600 text-center">
                                        We've sent a 6-digit OTP to your WhatsApp number {phoneNumber}
                                    </p>
                                    <div className="flex justify-center space-x-2">
                                        {otp.map((digit, index) => (
                                            <input
                                                key={index}
                                                id={`otp-input-${index}`}
                                                type="text"
                                                maxLength="1"
                                                className="w-10 h-10 border border-gray-300 text-center focus:ring-amber-500 focus:border-amber-500"
                                                value={digit}
                                                onChange={(e) => handleOtpChange(e.target.value, index)}
                                                onFocus={(e) => e.target.select()} 
                                            />
                                        ))}
                                    </div>
                                    <button
                                        onClick={handleOtpSubmit}
                                        className="w-full mt-6 bg-amber-500 bg-opacity-90 backdrop-blur-sm px-6 py-3 shadow-md text-white hover:bg-amber-600 transition-colors"
                                    >
                                        Verify OTP
                                    </button>
                                    <p className="text-sm text-gray-5 00 text-center">
                                        Didn't receive OTP? <button 
                                            onClick={handleContinue}
                                            className="text-amber-600 hover:underline"
                                        >
                                            Resend
                                        </button>
                                    </p>
                                </div>
                            </>
                        )}
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default Login;
