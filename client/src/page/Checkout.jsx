import React, { useEffect, useState, useRef } from 'react';
import Address from '../component/checkout/Address';
import PaymentMode from '../component/checkout/PaymentMode';
import axiosInstance from '../axios';
import { useSelector, useDispatch } from 'react-redux';
import { setUserDetails } from '../redux/actions/userActions';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";

function Checkout() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const storeData = useSelector(state => state.storeDetails);
    const userDetails = useSelector(state => state.userDetails);
    const checkoutProduct = storeData?.checkoutProduct
    const [DeliveryInstruction, setDeliveryInstruction] = useState(false)
    // const [deliveryAddress, setDeliveryAddress] = useState('');
    const [DeliveryAddress, setDeliveryAddress] = useState('')
    const [addresses, setAddresses] = useState([]);
    const [coupon, setCoupon] = useState(null);
    const [addCoupon, setAddCoupon] = useState(false);
    const inputRef = useRef()
    const [coupons, setCoupons] = useState([]);

    const [loadingCoupons, setLoadingCoupons] = useState(true);
    const [loadingState, setLoadingState] = useState(false);

    const [appliedCoupon, setAppliedCoupon] = useState('');
    const [appliedCouponDetails, setAppliedCouponDetails] = useState('');
    const [discount, setDiscount] = useState(0);
    const [step, setStep] = useState(0);

    

    const fetchCoupons = async () => {
        try {
            const { data } = await axiosInstance.get('/coupons/client');
            setCoupons(data.data);
        } catch (error) {
            console.error('Failed to fetch coupons', error);
        } finally {
            setLoadingCoupons(false);
        }
    };

    useEffect(() => {
        fetchCoupons();
    }, []);

    const fetchAddresses = async () => {
        try {
            const res = await axiosInstance.get('/address');
            setAddresses(res?.data?.data);
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        fetchAddresses();
    }, [storeData]);

    const [cartData, setCartData] = useState([])
    const [salePriceTotal, setSalePriceTotal] = useState(0)
    const [proPriceTotal, setProPriceTotal] = useState(0)
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("COD");

    const calculateTotalSalePrice = (items) => {
        let totalSalePrice = 0;
        items.forEach((item) => {
            totalSalePrice += item?.productId?.sale_rate * item?.qty;
        });
        return totalSalePrice;
    };
    const calculateTotalProPrice = (items) => {
        let totalSalePrice = 0;
        items.forEach((item) => {
            totalSalePrice += item?.productId?.price * item?.qty;
        });
        return totalSalePrice;
    };
    const fetchData = async () => {
        try {
            const response = await axiosInstance.get(`/user/getcarts`);
            setCartData(response?.data?.data)
            const items = response?.data?.data?.item;
            const filteredItems = items.filter((obj) => {
                return obj.productId.isAvailable !== false
            })
            const totalSalePrice = calculateTotalSalePrice(filteredItems);
            setSalePriceTotal(totalSalePrice)
            const totalProPrice = calculateTotalProPrice(filteredItems);
            setProPriceTotal(totalProPrice)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        setAppliedCoupon('')
        setAppliedCouponDetails('')
        setDiscount(0)
        setCoupon(null)
        setAddCoupon(false)
        setDeliveryAddress('')
        if (checkoutProduct) {
            const newCartItem = {
                item: [{
                    productId: checkoutProduct?.product,
                    size: checkoutProduct?.selectedSize,
                    price: checkoutProduct?.product?.price,
                    coupon: checkoutProduct?.coupon,
                    qty: 1,
                }]
            };
            setCartData(newCartItem);
            const items = newCartItem?.item;
            const filteredItems = items.filter((obj) => {
                return obj.productId.isAvailable !== false
            })
            const totalSalePrice = calculateTotalSalePrice(filteredItems);
            setSalePriceTotal(totalSalePrice)
            const totalProPrice = calculateTotalProPrice(filteredItems);
            setProPriceTotal(totalProPrice)
        } else {
            setCartData([])
            fetchData()
        }
    }, [storeData])

    const handleCoupon = async (couponCode) => {
        try {
            setDiscount(0)
            let useCoupon;
            if (couponCode) {
                useCoupon = coupons?.filter((coupon) => {
                    if (coupon.code === couponCode) {
                        setAppliedCoupon(coupon?.code);
                        setCoupon(coupon?.code)
                        setAppliedCouponDetails(coupon);
                        return coupon
                    }
                })
                // useCoupon[0] ? '' : toast.error('your coupon code not exists')
            }
            if (useCoupon) {
                const couponId = useCoupon[0]?._id;
                const { data } = await axiosInstance.post('/coupons/validate-coupon', {
                    couponId,
                    userDetails,
                    salePriceIncludingDeliveryCharge,
                });

                if (data.valid) {
                    setDiscount(data.discount);
                } else {
                    toast.error(data.message);
                }
            }
        } catch (error) {
            console.error('Failed to apply coupon', error);
        }
    };

    const handleDeliveryAddress = (details) => {
        setStep(0)
        setDeliveryAddress(details);
    }


    const handleDeliveryInstruction = () => setDeliveryInstruction(!DeliveryInstruction)

    const includedDeliveryCharge = salePriceTotal < 500 ? 40 : 0;
    const salePriceIncludingDeliveryCharge = (includedDeliveryCharge + salePriceTotal).toFixed(2)
    const maximumDiscountPrice = ((appliedCouponDetails?.maxValue < ((salePriceIncludingDeliveryCharge * discount) / 100)) ? appliedCouponDetails?.maxValue : ((salePriceIncludingDeliveryCharge * discount) / 100)).toFixed(2)
    const lastTotal = discount > 0
        ? salePriceIncludingDeliveryCharge - maximumDiscountPrice : salePriceIncludingDeliveryCharge;

    const handlePaymentMethodChange = (e) => {
        setSelectedPaymentMethod(e.target.value);
        if (step > 1) setStep(1)
    };
    const handlePaymentSuccess = async () => {
        setLoadingState(true)
        const mappedItems = await cartData?.item?.map((item) => ({
            product_id: item.productId._id,
            qty: item.qty,
            price: item.productId.sale_rate,
            size: item?.size
        }));

        const totalPrice = mappedItems.reduce(
            (total, item) => total + item.qty * item.price,
            0
        );

        const productsOrderData = {
            item: mappedItems,
            totalPrice,
        };

        const response = await axiosInstance.post(`/orders`, {
            payment_mode: selectedPaymentMethod,
            amount: lastTotal,
            address: DeliveryAddress,
            products: productsOrderData,
            couponId: appliedCouponDetails._id,
        });

        dispatch(setUserDetails(response.data.user));
        setLoadingState(false)
        Swal.fire({
            title: "Success",
            text: "Your order has been placed!",
            icon: "success",
            showConfirmButton: false,
            timer: 3000,
          });
          navigate("/");
    };

    const handleOnlinePayment = async () => {
        try {
            const { data } = await axiosInstance.post("/payment/create-order", {
                amount: lastTotal, 
                currency: "INR",
            });
            console.log('this is data',data);
            
    
            const options = {
                key: process.env.REACT_APP_RAZORPAY_KEY_ID,   
                amount: data.amount,
                currency: data.currency,
                order_id: data.orderId,
                name: "TWST",
                description: "Order Payment",
                handler: async function (response) {
                    const paymentData = {
                        razorpay_order_id: response.razorpay_order_id,
                        razorpay_payment_id: response.razorpay_payment_id,
                        razorpay_signature: response.razorpay_signature,
                    };
    
                    const verifyResponse = await axiosInstance.post("/payment/verify-payment", paymentData);
    
                    if (verifyResponse.data.success) {
                        toast.success("Payment successful!");
                        handlePaymentSuccess();
                    } else {
                        toast.error("Payment verification failed!");
                    }
                },
                prefill: {
                    name: userDetails?.name,
                    email: userDetails?.email,
                    contact: userDetails?.phone,
                },
                theme: {
                    color: "#F37254",
                },
            };
    
            const razorpay = new window.Razorpay(options);
            razorpay.open();
        } catch (error) {
            console.error("Error initiating payment:", error);
            toast.error("Payment failed. Please try again.");
        }
    };    

    const CheckoutButton = () => {
        const data = [
            {
                text: "Deliver to this address",
                desc: "Review the address carefully, by proceeding will set this as your delivery address"
            },
            {
                text: "Use this payment method",
                desc: "Review your payment mode carefully, by proceeding will set this as your payment mode"
            },
            {
                text: "Place your Order",
                desc: "By placing your order, you agree to Nilaa's privacy notice and conditions of use"
            },
            {
                text: "Proceed To Payment",
                desc: "Review the order carefully, by proceeding will redirect to secure payment gateway page."
            },
        ]

        const handleClick = () => {
            if (step === 0) {
                if (!DeliveryAddress) {
                    toast.error("Please select a delivery address.");
                    return;
                }
                setStep(1);
                return;
            }
            if (step === 1) {
                if (!selectedPaymentMethod) {
                    toast.error("Please select a payment method.");
                    return;
                }
                setStep(selectedPaymentMethod === "COD" ? 2 : 3);
                return;
            }
            if (step === 2) {
                handlePaymentSuccess();
                return;
            }
            if (step === 3) {
                // orderStoredInlocalStorage();
                handleOnlinePayment();
                return;
            }
            setStep(0);
        };

        return (
            <div>
                <div className="flex py-2">
                    <p className=" w-full text-xs font-medium">{data?.[step]?.desc}</p>
                </div>
                <button onClick={handleClick} disabled={loadingState} className='bg-[#1F1F1F] text-white py-2 gap-2 rounded-lg w-full flex justify-center items-center'>
                    {/* {!!loadingState && <CircularProgress size={16} color='inherit' />} */}
                    {data?.[step]?.text}
                </button>
            </div>
        )
    }

    return (
        <div className='max-w-7xl mx-auto flex flex-col gap-3 p-4 md:p-8 mb-28 md:mb-1 text-sm md:text-sm'>
            <h2 className='font-bold text-lg md:pt-1'>Secure Checkout</h2>
            <hr />
            <div className='flex flex-col md:flex-row gap-8'>
                <div className='w-full flex flex-col gap-8 md:w-2/3'>

                    <div>
                        {!step ? <Address data={addresses} dispatch={handleDeliveryAddress} selected={DeliveryAddress} /> :
                            <div>
                                <h2 className="text-sm md:text-md font-bold mb-4">Delivery address</h2>
                                <div key={DeliveryAddress._id} onClick={() => dispatch(DeliveryAddress)} className="flex flex-row gap-2 text-xs md:text-sm border rounded-lg p-4">
                                    <div className="relative flex justify-between items-start mb-2 w-full">
                                        <div>
                                            <p className="font-bold">{DeliveryAddress.firstname} {DeliveryAddress.lastname}</p>
                                            <p className="text-gray-600">{DeliveryAddress?.address_line_1}, {DeliveryAddress?.address_line_2}, {DeliveryAddress?.area}, {DeliveryAddress?.emirate}</p>
                                            <p className="text-gray-600">Email: {DeliveryAddress?.email}</p>
                                            <p className="text-gray-600">Phone: {DeliveryAddress?.code} {DeliveryAddress?.mobile}</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <button onClick={() => setStep(1)} className="font-medium text-blue-400">Change</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                        {step === 0 && <CheckoutButton />}
                    </div>

                    {/* Payment Method Section */}
                    <div className='border p-4 flex gap-5 flex-col'>
                        <h2 className="text-sm md:text-md font-bold">Payment Method</h2>
                        <PaymentMode data={selectedPaymentMethod} dispatch={handlePaymentMethodChange} expand={step < 2} change={() => setStep(1)} />
                        <div className='flex flex-col gap-2'>
                            <p className='text-sm font-medium'>have a coupon code ? Apply your coupon code for a discount</p>
                            <div className="flex flex-row flex-wrap">
                                <div onClick={() => setAddCoupon(!addCoupon)} className="bg-gray-100 border-dashed rounded-full border-2 border-gray-300 cursor-pointer">
                                    {/* <p className='text-center text-sm px-5'> Add coupon <span>{addCoupon ? <CloseOutlined /> : <PlusOutlined />}</span></p> */}
                                    <p className='text-center text-sm px-5'> Add coupon <span>{addCoupon ? '-' : '+'}</span></p>
                                </div>
                            </div>
                            {addCoupon && (
                                <div className='flex mt-1 bg-black rounded-lg'>
                                    <input ref={inputRef} onChange={(e) => setAppliedCoupon(e.target.value)} className="w-full px-3 border rounded-lg h-8 outline-none" value={appliedCoupon} placeholder="Add a Coupon Code" />
                                    <button onClick={() => handleCoupon(appliedCoupon)} className='bg-[#1F1F1F] text-white rounded-md px-3'>apply</button>
                                </div>)}
                            {discount > 0 && <div className='flex gap-2'>
                                <div
                                    onClick={handleDeliveryInstruction}
                                    className="bg-[#FBFFFF] bg-gradient-to-tr to-[#FBFFFF] from-[#EAC4A2] border-dashed rounded-full border-2 border-gray-300 px-2 w-1/3"
                                >
                                    <p className="text-center text-sm">{coupon}</p>
                                </div>
                                {/* <span className='text-green-500 text-xs md:text-sm'>coupon applied <CheckOutlined /></span> */}
                                <span className='text-green-500 text-xs md:text-sm'>coupon applied</span>
                            </div>}
                        </div>
                        {step === 1 && <CheckoutButton />}
                    </div>
                </div>

                {/* Order Summary Section */}
                <div className='w-full relative md:w-1/3'>
                    <div className="space-y-4 md:sticky md:mr-8 max-w-96">
                        <h3 className='font-bold text-sm'>Order Summary</h3>
                        <div className="flex flex-col gap-1.5 justify-between px-5 py-2 border rounded-md overflow-y-auto max-h-32">
                            {cartData?.item?.slice().reverse().map((item) => (
                                <div key={item?._id} className="flex items-center justify-between space-x-4">
                                    <img
                                        src={`${process.env.REACT_APP_API_BASE_URL}/uploads/${item?.productId?.image[0]}`}
                                        alt="Product"
                                        className="w-16 h-16 object-cover rounded-lg"
                                    />
                                    <div className="flex-grow text-left">
                                        <h4 className="font-semibold text-sm">{item?.productId?.name}</h4>
                                        {item?.size && <p className="text-gray-500 text-xs">Size • {item?.size}</p>}
                                        <p className="text-gray-500 text-xs">Quantity  • {item?.qty}</p>
                                        <p className="text-gray-500 text-xs">₹ {item?.productId?.sale_rate}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <hr className='border-dashed ' />
                        <div className="flex flex-col gap-1">
                            <div className="flex flex-row justify-between"> <p>Subtotal</p><p className='font-mono'>₹ <span>{(salePriceTotal).toFixed(2)}</span></p>  </div>
                            <div className="flex flex-row justify-between"> <p>Delivery Charge</p><p className='font-mono'>₹ <span>{includedDeliveryCharge ? 40 : 'Free'}</span></p> </div>
                            {coupon && <div className="flex flex-row justify-between"> <p>Coupon discount</p><p className='font-mono'>₹ <span>{maximumDiscountPrice}</span></p> </div>}
                            <hr className='border-dashed ' />
                            <div className="flex flex-row justify-between"> <p>Grand Total</p><p className='font-mono'>₹ <span>{lastTotal}</span></p> </div>
                        </div>
                        <CheckoutButton />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Checkout