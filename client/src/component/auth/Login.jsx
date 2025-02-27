// import React, { useState } from "react";
// import { Button, Modal } from "flowbite-react";
// import OtpInput from "react-otp-input";
// import fashion from "../../asset/fashion.png";
// import { FaGoogle, FaApple, FaFacebookF } from "react-icons/fa";
// import { toast } from "react-toastify";
// import axiosInstance from '../../axios';

// const Login = ({ openModal, setOpenModal }) => {
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [otp, setOtp] = useState("");
//   const [showOtpInput, setShowOtpInput] = useState(false);

//   const handleContinue = async() => {
//     if (phoneNumber) {
//       setShowOtpInput(true);
//       console.log("Sending OTP to:", phoneNumber);
//     } else {
//       toast.error("Please enter a valid phone number.");
//       return;
//       // alert("Please enter a phone number.");
//     }
//     try {
//       await axiosInstance.post("/auth/send-whatsapp-otp", { number: phoneNumber });
//       setShowOtpInput(true);
//       toast.success("OTP sent via WhatsApp successfully!");
//     } catch (error) {
//       console.error(error);
//       toast.error("Failed to send OTP via WhatsApp.");
//     }
//   };
  
//     // const handleOtpSubmit = () => {
//     //   console.log("OTP submitted:", otp);
//     //   setOpenModal(false);
//     // };
//     const handleOtpSubmit = async () => {
//       try {
//         const response = await axiosInstance.post("/auth/verify-otp", {
//           number: phoneNumber,
//           otp,
//         });
//         toast.success("Login successful!");
//         console.log(response.data);
//         setOpenModal(false);
//       } catch (error) {
//         console.error(error);
//         toast.error("Invalid OTP. Please try again.");
//       }
//     };
//     console.log('otp',otp);
    
//     return (
//       <>
//         <Modal
//           dismissible
//           show={openModal}
//           onClose={() => setOpenModal(false)}
//           size="xl"
//           className="backdrop-blur-sm"
//         >
//           <Modal.Body className="w-full p-0 relative overflow-hidden">
//             <div
//               className="absolute inset-0 w-full h-full"
//               style={{
//                 backgroundImage: `url(${fashion})`,
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//                 width: "100%"
//               }}
//             ></div>
//             <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 h-full gap-8">
//               <div className="bg-white/30 backdrop-blur-lg p-6 md:p-12 h-full flex flex-col justify-center">
//                 <h2 className="text-2xl font-bold mb-4">Shop</h2>
//                 <ul>
//                   <li className="mb-2">New Arrivals</li>
//                   <li className="mb-2">Winters</li>
//                   <li className="mb-2">Women's</li>
//                   <li>Men's</li>
//                 </ul>
//               </div>

//               <div className="bg-white/30 backdrop-blur-lg p-6 md:p-12 h-full flex flex-col justify-center items-center">
//                 <h3 className="mb-6 text-xl font-medium text-gray-900 dark:text-white">
//                   LOGIN/SIGNUP
//                 </h3>
//                 {!showOtpInput ? (
//                   <>
//                     <div className="mb-6 w-full max-w-md">
//                       <input
//                         type="tel"
//                         id="phone"
//                         className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
//                         placeholder="Enter Whatsapp Number"
//                         value={phoneNumber}
//                         onChange={(e) => setPhoneNumber(e.target.value)}
//                       />
//                     </div>
//                     <Button
//                       color="blue"
//                       onClick={handleContinue}
//                       className="w-full max-w-md mb-4"
//                     >
//                       Continue
//                     </Button>
//                   </>
//                 ) : (
//                   <>
//                     <p className="mb-4">Enter OTP sent to {phoneNumber}</p>
//                     <div className="mb-6">
//                       <OtpInput
//                         value={otp}
//                         onChange={setOtp}
//                         numInputs={6}
//                         renderSeparator={<span>-</span>}
//                         renderInput={(props) => (
//                           <input
//                             {...props}
//                             className="w-10 h-10 border border-gray-300 rounded text-center mx-1 focus:ring-blue-500 focus:border-blue-500"
//                           />
//                         )}
//                         inputStyle="w-10 h-10 border border-gray-300 rounded text-center mx-1 focus:ring-blue-500 focus:border-blue-500"
//                         containerStyle="flex justify-center"
//                       />
//                     </div>
//                     <Button
//                       color="blue"
//                       onClick={handleOtpSubmit}
//                       className="w-full max-w-md"
//                     >
//                       Submit OTP
//                     </Button>
//                   </>
//                 )}
//                 <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
//                   OR
//                 </p>
//                 <div className="flex space-x-4 mt-4">
//                   {" "}
//                   <Button
//                     color="gray"
//                     className="w-12 h-12 rounded-full flex items-center justify-center"
//                   >
//                     <FaGoogle />
//                   </Button>
//                   <Button
//                     color="gray"
//                     className="w-12 h-12 rounded-full flex items-center justify-center"
//                   >
//                     <FaApple />
//                   </Button>
//                   <Button
//                     color="gray"
//                     className="w-12 h-12 rounded-full flex items-center justify-center"
//                   >
//                     <FaFacebookF />
//                   </Button>
//                 </div>
//                 <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
//                   Don't have an account?{" "}
//                   <a
//                     href="/"
//                     className="text-blue-600 dark:text-blue-500 hover:underline"
//                   >
//                     Register Now
//                   </a>
//                 </p>
//               </div>
//             </div>
//           </Modal.Body>
//         </Modal>
//       </>
//     );
//   };

//   export default Login;



// // import React, { useState } from "react";
// // import { Button, Modal } from "flowbite-react";
// // import OtpInput from "react-otp-input";
// // import { toast } from "react-toastify";
// // import axiosInstance from '../../axios';

// // const Login = ({ openModal, setOpenModal }) => {
// //   const [phoneNumber, setPhoneNumber] = useState("");
// //   const [otp, setOtp] = useState("");
// //   const [showOtpInput, setShowOtpInput] = useState(false);

// //   const handleSendWhatsAppOtp = async () => {
// //     if (!phoneNumber) {
// //       toast.error("Please enter a valid phone number.");
// //       return;
// //     }

// //     try {
// //       await axiosInstance.post("/auth/send-whatsapp-otp", { number: phoneNumber });
// //       setShowOtpInput(true);
// //       toast.success("OTP sent via WhatsApp successfully!");
// //     } catch (error) {
// //       console.error(error);
// //       toast.error("Failed to send OTP via WhatsApp.");
// //     }
// //   };

// //   const handleOtpSubmit = async () => {
// //     try {
// //       const response = await axiosInstance.post("/auth/verify-otp", {
// //         number: phoneNumber,
// //         otp,
// //       });
// //       toast.success("Login successful!");
// //       console.log(response.data);
// //       setOpenModal(false);
// //     } catch (error) {
// //       console.error(error);
// //       toast.error("Invalid OTP. Please try again.");
// //     }
// //   };

// //   return (
// //     <Modal show={openModal} onClose={() => setOpenModal(false)} size="xl">
// //       <Modal.Body>
// //         <div className="p-6">
// //           <h3 className="text-xl font-medium mb-6">Login via WhatsApp OTP</h3>
// //           {!showOtpInput ? (
// //             <>
// //               <input
// //                 type="tel"
// //                 placeholder="Enter Mobile Number with Country Code"
// //                 value={phoneNumber}
// //                 onChange={(e) => setPhoneNumber(e.target.value)}
// //                 className="block w-full p-2 mb-4 border rounded"
// //               />
// //               <Button onClick={handleSendWhatsAppOtp}>Send WhatsApp OTP</Button>
// //             </>
// //           ) : (
// //             <>
// //               <p className="mb-4">Enter OTP sent to WhatsApp: {phoneNumber}</p>
// //               <OtpInput
// //                 value={otp}
// //                 onChange={setOtp}
// //                 numInputs={6}
// //                 className="mb-4"
// //               />
// //               <Button onClick={handleOtpSubmit}>Submit OTP</Button>
// //             </>
// //           )}
// //         </div>
// //       </Modal.Body>
// //     </Modal>
// //   );
// // };

// // export default Login;


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

const Login = ({ openModal, setOpenModal }) => {
    const dispatch = useDispatch()
    const [phoneNumber, setPhoneNumber] = useState("");
    const [otp, setOtp] = useState(Array(6).fill(""));
    const [showOtpInput, setShowOtpInput] = useState(false);

    const handleContinue = async () => {
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
                className="backdrop-blur-sm fixed inset-0 flex items-center justify-center"
            >
                <Modal.Body className="w-full p-6 bg-yellow-50">
                    <div className="flex flex-col items-center space-y-6">
                        <div className="bg-yellow-100 p-4 rounded-full">
                            <FaWhatsapp className="text-yellow-600 text-3xl" />
                        </div>
                        
                        <h3 className="text-xl font-semibold text-center text-yellow-800">
                            {showOtpInput ? "Verify OTP" : "Login with WhatsApp"}
                        </h3>

                        {!showOtpInput ? (
                            <>
                                <div className="w-full space-y-4">
                                    <p className="text-sm text-yellow-700 text-center">
                                        Enter your WhatsApp number to receive OTP
                                    </p>
                                    <PhoneInput
                                        international
                                        defaultCountry="IN"
                                        value={phoneNumber}
                                        onChange={setPhoneNumber}
                                        className="w-full bg-yellow-50 border border-yellow-300 text-yellow-900 text-sm rounded-lg p-2.5 focus:ring-yellow-500 focus:border-yellow-500"
                                    />
                                    <button 
                                        onClick={handleContinue} 
                                        className="mt-6 bg-yellow-400 bg-opacity-20 backdrop-blur-sm px-6 py-3 rounded-md shadow-md w-full text-yellow-800 hover:bg-yellow-500 hover:text-white transition-colors"
                                    >
                                        Send OTP via WhatsApp
                                    </button>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="w-full space-y-4">
                                    <p className="text-sm text-yellow-700 text-center">
                                        We've sent a 6-digit OTP to your WhatsApp number {phoneNumber}
                                    </p>
                                    <div className="flex justify-center space-x-2">
                                        {otp.map((digit, index) => (
                                            <input
                                                key={index}
                                                id={`otp-input-${index}`}
                                                type="text"
                                                maxLength="1"
                                                className="w-10 h-10 border border-yellow-300 rounded text-center focus:ring-yellow-500 focus:border-yellow-500 bg-yellow-50"
                                                value={digit}
                                                onChange={(e) => handleOtpChange(e.target.value, index)}
                                                onFocus={(e) => e.target.select()} 
                                            />
                                        ))}
                                    </div>
                                    <button
                                        onClick={handleOtpSubmit}
                                        className="mt-6 bg-yellow-400 bg-opacity-20 backdrop-blur-sm px-6 py-3 rounded-md shadow-md w-full text-yellow-800 hover:bg-yellow-500 hover:text-white transition-colors"
                                    >
                                        Verify OTP
                                    </button>
                                    <p className="text-sm text-yellow-600 text-center">
                                        Didn't receive OTP? <button 
                                            onClick={handleContinue}
                                            className="text-yellow-700 hover:underline"
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
