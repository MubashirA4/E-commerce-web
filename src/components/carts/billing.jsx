import React from "react";
import { useNavigate } from "react-router-dom";
import AmericanEx from '../../assets/webcart/american express.png';
import Misc from '../../assets/webcart/Misc(circle).png';
import Path from '../../assets/webcart/path.png';
import VisaCard from '../../assets/webcart/visa.png';
import Paycard from '../../assets/webcart/pay.png';

const Billing = ({ subtotal, tax, total, discount, cartItems }) => {
    const navigate = useNavigate();

    return (
        <section className='w-3/12'>
            <div className='px-3 py-3 border border-customborder bg-white rounded-md'>
                <p>Have a coupon?</p>
                <div className='flex border border-customborder rounded-md my-3'>
                    <input type="text" placeholder='Add coupon' className='pl-2 w-40 border-none' />
                    <button className='flex border-l px-4 text-customLblue py-1'>Apply</button>
                </div>
            </div>
            {/* Checkout */}
            <div className='px-3 py-5 mt-4 border border-customborder bg-white rounded-md'>
                <div className='flex justify-between'>
                    <h4 className='font-regular text-base text-customGray2'>Subtotal:</h4>
                    <p className='font-regular text-base text-customGray2'>${subtotal.toFixed(2)}</p>
                </div>
                <div className='flex justify-between py-2'>
                    <h4 className='font-regular text-base text-customGray2'>Discount:</h4>
                    <p className='font-regular text-base text-customred'>- ${discount.toFixed(2)}</p>
                </div>
                <div className='flex justify-between'>
                    <h4 className='font-regular text-base text-customGray2'>Tax:</h4>
                    <p className='font-regular text-base text-customgreen'>+ ${tax.toFixed(2)}</p>
                </div>
                <hr className='border border-customborder my-4' />
                <div className='flex justify-between'>
                    <h4 className='font-semibold text-base text-Primary'>Total:</h4>
                    <p className='font-semibold text-xl text-Primary'>${total.toFixed(2)}</p>
                </div>
                <button
                    className={`font-medium text-lg w-full py-2 rounded-md mt-4 
                    ${cartItems.length === 0 ? "bg-gray-400 cursor-not-allowed" : "bg-customgreen text-white"}`}
                    disabled={cartItems.length === 0}
                    onClick={() => navigate('/checkout')}
                >
                    Proceed to Checkout
                </button>
                {/* Payment Icons */}
                <div className='flex justify-center items-center gap-1 mt-3'>
                    {[AmericanEx, Misc, Path, VisaCard, Paycard].map((img, index) => (
                        <div key={index} className='border border-customborder rounded-md w-fit px-1 py-2'>
                            <img src={img} alt="Payment Method" className='w-8' />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Billing;
