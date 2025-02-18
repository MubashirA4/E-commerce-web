import React, { useState, useEffect } from 'react';
import Cart from '../../../components/cart';
import Tshirt from '../../../assets/Clothes/Tshirt(gray).png';
import { IoMdArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom';
import AmericanEx from '../../../assets/webcart/american express.png';
import Misc from '../../../assets/webcart/Misc(circle).png';
import Path from '../../../assets/webcart/path.png';
import VisaCard from '../../../assets/webcart/visa.png';
import Paycard from '../../../assets/webcart/pay.png';

const MyCart = () => {

    const [cartItems, setCartItems] = useState([
        {
            image: Tshirt,
            title: 'T-shirts with multiple colors, for men and lady',
            size: 'medium',
            color: 'blue',
            material: 'plastic',
            seller: 'Artel Market',
            price: 70.99,
            qty: 9
        },
        {
            image: Tshirt,
            title: 'Cotton Short Sleeve T-shirt',
            size: 'large',
            color: 'black',
            material: 'cotton',
            seller: 'Fashion Hub',
            price: 65.99,
            qty: 5
        },
        {
            image: Tshirt,
            title: 'Casual Summer T-shirt',
            size: 'small',
            color: 'white',
            material: 'polyester',
            seller: 'Trendy Wear',
            price: 45.50,
            qty: 2
        }
    ]);

    const [discount, setDiscount] = useState(60.00);
    const taxRate = 0.1; // 10% tax rate

    // Function to calculate Subtotal, Discount, Tax, and Total
    const calculateSummary = () => {
        // Check if any item has qty 0, if yes, reset discount to 0
        let subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.qty), 0);
        let tax = subtotal * taxRate;
        
        // Check for any zero quantity item and reset discount to 0 if found
        let effectiveDiscount = cartItems.some(item => item.qty === 0) ? 0 : discount;
        
        let total = subtotal - effectiveDiscount + tax;
        return { subtotal, tax, total, effectiveDiscount };
    };

    const { subtotal, tax, total, effectiveDiscount } = calculateSummary();

    // Handle quantity change for a specific item
    const handleQtyChange = (index, newQty) => {
        const updatedItems = [...cartItems];
        updatedItems[index].qty = newQty;
        setCartItems(updatedItems);  // Update the state with the new qty
    };

    // Function to remove an item from the cart
    const removeItem = (index) => {
        const updatedItems = cartItems.filter((_, i) => i !== index);
        setCartItems(updatedItems);
    };

    return (
        <>
            <h2 className='font-semibold text-2xl text-Primary my-6'>My cart ({cartItems.length})</h2>
            <main className='flex gap-3'>
                <section className='w-9/12'>
                    <div className='bg-white border border-customborder p-3'>
                        {cartItems.map((item, index) => (
                            <div key={index}>
                                <Cart
                                    image={item.image}
                                    title={item.title}
                                    size={item.size}
                                    color={item.color}
                                    material={item.material}
                                    seller={item.seller}
                                    price={`$${item.price.toFixed(2)}`}
                                    qty={item.qty}
                                    removeItem={() => removeItem(index)}
                                    onQtyChange={(newQty) => handleQtyChange(index, newQty)}  // Pass qty change handler
                                />
                                <hr className='border border-customborder my-4' />
                            </div>
                        ))}
                        <div className='flex justify-between'>
                            <Link to="/" className='flex items-center gap-3 border border-customborder text-customLblue w-fit px-3 py-1 rounded-md hover:bg-gradient-to-r hover:from-[#127FFF] hover:to-[#0067FF] hover:text-white'>
                                <IoMdArrowBack />
                                <span>Back to shop</span>
                            </Link>
                        </div>
                    </div>
                </section>
                <section className='w-3/12'>
                    <div className='px-3 py-3 border border-customborder bg-white rounded-md'>
                        <p>Have a coupon?</p>
                        <div className='flex border border-customborder rounded-md my-3'>
                            <input type="text" placeholder='Add coupon' className='pl-2 w-40 border-none' />
                            <button className='flex border-l px-4 text-customLblue py-1'>Apply</button>
                        </div>
                    </div>
                    {/* Checkout */}
                    <div>
                        <div className='px-3 py-5 mt-4 border border-customborder bg-white rounded-md'>
                            <div className='flex justify-between'>
                                <h4 className='font-regular text-base text-customGray2'>Subtotal:</h4>
                                <p className='font-regular text-base text-customGray2'>${subtotal.toFixed(2)}</p>
                            </div>
                            <div className='flex justify-between py-2'>
                                <h4 className='font-regular text-base text-customGray2'>Discount:</h4>
                                <p className='font-regular text-base text-customred'>- ${effectiveDiscount.toFixed(2)}</p>
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
                            <button className='font-medium text-lg text-white bg-customgreen w-full py-2 rounded-md mt-4'>Checkout</button>
                            <div className='flex justify-center items-center gap-1 mt-3'>
                                <div className='border border-customborder rounded-md w-fit px-1 py-2'>
                                    <img src={AmericanEx} alt="" className='w-8' />
                                </div>
                                <div className='border border-customborder rounded-md w-fit px-2 py-1'>
                                    <img src={Misc} alt="" className='w-7' />
                                </div>
                                <div className='border border-customborder rounded-md w-fit px-3 py-1'>
                                    <img src={Path} alt="" className='w-4' />
                                </div>
                                <div className='border border-customborder rounded-md w-fit px-1 py-2'>
                                    <img src={VisaCard} alt="" className='w-8' />
                                </div>
                                <div className='border border-customborder rounded-md w-fit px-1 py-2'>
                                    <img src={Paycard} alt="" className='w-8' />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default MyCart;
