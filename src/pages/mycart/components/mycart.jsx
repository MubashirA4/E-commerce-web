import React, { useContext } from 'react';
import { CartContext } from './cartcontext';
import Cart from '../../../components/cart';
import { IoMdArrowBack } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import Billing from '../../../components/carts/billing';

const MyCart = () => {
    const { cartItems, removeItem, updateQuantity } = useContext(CartContext);
    const navigate = useNavigate();

    const taxRate = 0.1;
    const discount = 60.00;

    // Calculate Summary
    const calculateSummary = () => {
        let subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.qty), 0);
        let tax = subtotal * taxRate;
        let effectiveDiscount = cartItems.length > 0 ? discount : 0;
        let total = subtotal - effectiveDiscount + tax;
        return { subtotal, tax, total, effectiveDiscount };
    };

    const { subtotal, tax, total, effectiveDiscount } = calculateSummary();

    return (
        <>
            <h2 className='font-semibold text-2xl text-Primary my-6'>My cart ({cartItems.length})</h2>
            <main className='flex gap-3'>
                <section className='w-9/12'>
                    <div className='bg-white border border-customborder p-3'>
                        {cartItems.map((item) => (
                            <div key={item.id}>
                                <Cart
                                    image={item.image}
                                    title={item.title}
                                    price={`$${item.price.toFixed(2)}`}
                                    qty={item.qty}
                                    removeItem={() => removeItem(item.id)}
                                    onQtyChange={(newQty) => updateQuantity(item.id, newQty)}
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
                <Billing subtotal={subtotal} tax={tax} total={total} discount={effectiveDiscount} cartItems={cartItems} />
            </main>
        </>
    );
};

export default MyCart;
