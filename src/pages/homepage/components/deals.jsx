import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Card from '../../../components/card1';
import { CartContext } from '../../mycart/components/cartcontext';
import Watch from '../../../assets/watch.png';
import Laptop from '../../../assets/laptop.png';
import Camera from '../../../assets/camera.png';
import Headphone from '../../../assets/headphone.png';
import Phone from '../../../assets/phone.png';

const Deals = () => {
    const { addItem, setSelectedProduct } = useContext(CartContext); // Get addItem function from context

    // Define product data
    const products = [
        { id: 1, image: Watch, title: "Smart Watch", price: 50, discount: -25},
        { id: 2, image: Laptop, title: "Laptop", price: 700, discount: -15 },
        { id: 3, image: Camera, title: "GoPro Camera", price: 250, discount: -40 },
        { id: 4, image: Headphone, title: "Headphones", price: 100, discount: -25 },
        { id: 5, image: Phone, title: "Canon Camera", price: 500, discount: -25 },
    ];

    const handleProductClick = (product) => {
        // Set the selected product in context
        setSelectedProduct({ ...product, qty: 1 });
        // Optionally add the product to cart
        addItem({ ...product, qty: 1 });
    };

     return (
        <div className='container mx-auto bg-white'>
            <div className='flex flex-row border border-1 mt-6 rounded-md'>
                <div className='p-4'>
                    <h4 className='font-semibold text-gray-800'>Deals and offers</h4>
                    <p className='text-gray-500'>Hygiene equipments</p>
                    <div className='flex flex-row gap-2 mt-3'>
                        {[...Array(4)].map((_, i) => (
                            <div key={i} className='bg-neutral-600 text-white px-3 py-1 rounded-md w-fit text-center'>
                                <span className='font-bold text-lg'> 04 </span> <br />
                                <span className='font-sans text-sm'> Days</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='grid lg:grid-cols-5 lg:w-full'>
                    {products.map((product) => (
                        <div key={product.id}>
                            <Link 
                                to='/orders'
                                onClick={() => handleProductClick(product)}
                            >
                                <Card image={product.image} title={product.title} desc={product.discount} />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Deals;
