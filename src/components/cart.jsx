import React from 'react';

const Cart = ({ image, title, size, color, material, seller, price, qty, removeItem, addItem, onQtyChange }) => {
    return (
        <div>
            <section className='flex justify-between'>
                <div className='flex gap-3'>
                    <div className={`flex flex-col items-center my-2 h-fit p-1 border border-customborder rounded-sm`}>
                        <img src={image} alt={title} className="w-14" />
                    </div>
                    <div>
                        <h4 className="font-regular text-Primary text-base">{title}</h4>
                        <p className='font-regular text-[#8B96A5] text-base'>
                            Size: {size}, <span>Color: {color}, </span>    
                            <span>Material: {material}, </span><br />   
                            <span>Seller: {seller}</span>    
                        </p>
                        <div className='my-2'>
                            <button className='font-medium text-sm text-customred px-3 py-1 border border-customborder rounded-md mr-2' onClick={removeItem}>
                                Remove
                            </button>
                            <button className='font-medium text-sm text-customLblue px-3 py-1 border border-customborder rounded-md' onClick={addItem}>
                                Save for later
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <h4 className="font-medium text-Primary text-base text-right mb-2">{price}</h4>
                    <select
                        value={qty}
                        onChange={(e) => onQtyChange(parseInt(e.target.value))}
                        className='font-regular text-base text-Primary p-1 w-28 border border-customborder rounded-md'
                    >
                        {[...Array(10)].map((_, index) => (
                            <option key={index + 1} value={index + 1}>Qty: {index + 1}</option>
                        ))}
                    </select>
                </div>
            </section>
        </div>
    );
};

export default Cart;
