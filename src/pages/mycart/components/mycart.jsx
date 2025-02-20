import React, { useContext } from 'react';
import { CartContext } from './cartcontext';
import { WishlistContext } from '../../../contexts/wishlistcontext';
import Cart from '../../../components/cart';
import { IoMdArrowBack } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import Billing from '../../../components/carts/billing';

const MyCart = () => {
    const { cartItems, removeItem, updateQuantity } = useContext(CartContext);
    const { addToWishlist } = useContext(WishlistContext);
    const navigate = useNavigate();

    const taxRate = 0.1;

    // Calculate Summary using discountPercent for each product
    const calculateSummary = () => {
        let subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.qty), 0);
        
        let totalDiscount = cartItems.reduce((acc, item) => {
            let discountPercent = 0;
            if (typeof item.discount === "string") {
              discountPercent = Math.abs(parseFloat(item.discount.replace(/[^0-9.]/g, "")));
            } else if (typeof item.discount === "number") {
              discountPercent = item.discount;
            }
            discountPercent = discountPercent / 100;
            const discountForItem = item.price * discountPercent * item.qty;
            return acc + discountForItem;
        }, 0);
        
        let tax = (subtotal - totalDiscount) * taxRate;
        let total = subtotal - totalDiscount + tax;
        return { subtotal, tax, total, effectiveDiscount: totalDiscount };
    };

    const { subtotal, tax, total, effectiveDiscount } = calculateSummary();

    // Handler for adding an item to the wishlist.
    const handleSaveForLater = (item) => {
        console.log("Saving item to wishlist:", item);

        addToWishlist(item);
        // Optionally remove item from cart:
        navigate("/wishlist");
        removeItem(item.id);
    };

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
                                    addItem={() => handleSaveForLater(item)}
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
                <Billing 
                  subtotal={subtotal} 
                  tax={tax} 
                  total={total} 
                  discount={effectiveDiscount} 
                  cartItems={cartItems} 
                />
            </main>
        </>
    );
};

export default MyCart;
