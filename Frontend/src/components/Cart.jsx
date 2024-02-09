import React, { useContext, useEffect, useState, } from "react";
import { useNavigate } from "react-router-dom";
import contextAuth from "../ContextAPI/ContextAuth";

const Cart = () => {
    const navigate = useNavigate();

    const cartItem = [
        {
            id: 1,
            serviceName: "Text Resume Service",
            serviceDescription: "Delivery for 1st Draft in 8 working days",
            price: 2399,
        },
        {
            id: 2,
            serviceName: "Visual Resume Service",
            serviceDescription: "Delivery for 1st Draft in 8 working days",
            price: 2799,
        },
    ];

    const [totalAmount, setTotalAmount] = useState(0);
    const { setCart } = useContext(contextAuth);
    useEffect(() => {
        setTotalAmount(cartItem.reduce((acc, curr) => acc + curr.price, 0));
        setCart(cartItem.length);
    }, []);

    const [cpnCode, setCpnCode] = useState("")



    return (
        <div
            className="w-[85%] md:w-[90%] lg:w-[70%] max-w-[1500px] mx-auto flex flex-col gap-y-5 my-3"
            style={{ fontFamily: "inter" }}
        >
            <h1 className="text-left text-xl font-bold">My Cart</h1>
            <div className="flex flex-col md:flex-row justify-between gap-x-5 gap-y-5">
                {/* left part */}
                <div className="md:w-[57%] xl:w-[70%]">
                    {/* cart item */}
                    <div className="flex flex-col gap-y-5">
                        {cartItem?.map((item) => (
                            <div
                                key={item.id}
                                className="flex justify-between shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-sm py-4 px-4"
                            >
                                <div className="flex flex-col gap-y-3 max-sm:w-[75%]">
                                    <h2 className="text-left font-bold text-lg">
                                        {item.serviceName}
                                    </h2>
                                    <p className="text-left text-sm">{item.serviceDescription}</p>
                                    <div className="flex justify-between max-sm:flex-col max-sm:items-start max-sm:gap-y-1">
                                        <button className="text-sm text-blue-600">
                                            Change delivery option
                                        </button>
                                        <button className="text-sm text-red-500">Delete</button>
                                    </div>
                                </div>
                                <div className="max-sm:w-[25%]">
                                    <b> ₹ {item.price}*</b>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* payment box - right part*/}
                <div className="md:w-[40%] xl:w-[30%] flex flex-col gap-y-3">
                    <div className="flex flex-col justify-between shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-sm py-4 px-4 gap-y-8">
                        <div className="flex flex-col gap-y-3">
                            <b className="text-lg text-left">Price Details</b>
                            <div className="flex flex-col gap-y-3">
                                <div className="flex justify-between">
                                    <p>Total</p>
                                    <p>₹ {totalAmount}</p>
                                </div>
                                <div className="flex justify-between">
                                    <p>Estimated GST</p>
                                    <p>₹ 858</p>
                                </div>
                            </div>
                        </div>
                        {/* <hr /> */}
                        <div className="flex flex-col gap-y-8 border-t-2 pt-3">
                            <div className="flex justify-between font-bold">
                                <p>Total Payable Amount</p>
                                <p>₹ {totalAmount}</p>
                            </div>
                            <button className="bg-orange-500 text-white font-semibold px-3 py-2 rounded-lg flex justify-center items-center">CONTINUE</button>
                        </div>
                    </div>
                    <div className="flex justify-between gap-x-2 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-sm py-3 px-3 text-sm">
                        <input type="text" value={cpnCode} onChange={e => setCpnCode(e.target.value)} placeholder="Enter Your Coupon Code" className="outline-none border-b-2 text-gray-700 grow" />
                        <button className="text-orange-500 border-2 border-orange-500 px-3 py-1 rounded-md" onClick={() => console.log("cpnCode", cpnCode)}>
                            Apply
                        </button>
                    </div>
                </div>
            </div>
            <button onClick={() => navigate('/')} className="mt-5 self-center md:self-start border-2 border-orange-500 text-orange-500 text-sm font-semibold px-3 py-2 flex justify-center items-center">
                CONTINUE SHOPPING
            </button>
            <div className="h-40" />
        </div>
    );
};

export default Cart;
