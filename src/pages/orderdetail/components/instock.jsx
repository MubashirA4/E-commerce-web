import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../mycart/components/cartcontext';
import Tshirt from '../../../assets/Clothes/Tshirt(gray).png'
import Review from '../../../assets/Vector(review).png'
import Gflag from '../../../assets/flag.png'
// Importing icons from react-icons
import { IoMdCheckmark, IoMdStar } from "react-icons/io";
import { MdOutlineShoppingBasket, MdOutlineVerifiedUser } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import { FaRegHeart } from "react-icons/fa";

const InStock = () => {
    const { selectedProduct } = useContext(CartContext);
    const navigate = useNavigate();

    if (!selectedProduct) {
        return <div>No product selected. Please go back and select a product.</div>;
    }
    // Sample product data
    const product = {
        id: 1,
        name: "Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle",
        price: 98.00,
        image: Tshirt,
        quantity: 1
    };

    // Function to handle adding to cart
    const handleAddToCart = () => {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        
        // Check if product already exists
        const existingItem = cart.find(item => item.id === product.id);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push(product);
        }

        localStorage.setItem("cart", JSON.stringify(cart));
        console.log(cart);
        
        // Redirect to Cart Page
        navigate('/cart');
    };
    return (
        // Main container with flex layout, border, and padding
        <div className='flex xl:justify-between lg:gap-4 border border-customborder p-4 bg-white'>

            {/* Left section: Product Image and Thumbnails */}
            <div className='lg:w-80 xl:w-2/6'>
                {/* Product Image */}
                <div className='flex justify-center items-center bg-white border border-customborder rounded-md'>
                    <img src={selectedProduct.image} alt={selectedProduct.title} className='xl:w-80 py-5 lg:w-64 object-fit' />
                </div>

               {/* Thumbnail Images */}
                <div className='flex gap-2 mt-3'>
                    {[...Array(6)].map((_, index) => ( // Rendering multiple thumbnails dynamically
                        <div key={index} className='border border-customborder rounded-md p-2 w-fit'>
                            <img src={selectedProduct.image || Tshirt} alt="Thumbnail" className='w-12' />
                            </div>
                    ))}
                </div>
                {/* Add tocart Button */}
                <button 
                    className='font-medium text-lg text-white bg-customgreen hover:bg-green-500 w-full py-2 rounded-md mt-4'
                    onClick={handleAddToCart}
                >
                    Add to cart
                </button>
            </div>

            {/* Middle section: Product Details */}
            <section className='xl:w-3/6'>
                <header>
                    {/* Stock availability */}
                    <div className='flex items-center gap-1 text-customgreen'>
                        <IoMdCheckmark />
                        <h4>In stock</h4>
                    </div>

                    {/* Product title */}
                    <h4 className='font-semibold text-Primary text-xl'>
                    {selectedProduct.title}
                    </h4>

                    {/* Rating and Sales Information */}
                    <div className='flex gap-1 my-2'>
                        {/* Star Rating */}
                        <div className='flex items-center '>
                            {[...Array(4)].map((_, index) => (
                                <IoMdStar key={index} className='text-customorange w-4 h-4' />
                            ))}
                            <IoMdStar className='text-background3 w-4 h-4' />
                            <p className='font-regular text-base text-orange-500 ml-1'>9.3</p>
                        </div>

                        {/* Reviews and Sold Count */}
                        <div className="flex  ">
                            <div className="flex items-center gap-2  font-regular text-base text-customGray">
                                <span className="mr-2 text-background3">•</span>
                                <img src={Review} alt="Review" className="w-5" />
                                <span>32 reviews</span>
                            </div>
                            <div className="flex items-center gap-2 font-regular text-base text-customGray">
                                <span className="mx-2 text-background3">•</span>
                                <MdOutlineShoppingBasket size={24} aria-label="Sold" />
                                <span>154 sold</span>
                            </div>
                        </div>
                    </div>

                    {/* Price Section */}
                    <div className='flex justify-between bg-backgroundpink p-3 mt-2'>
                        {[...Array(3)].map((_, index) => (
                            <div key={index} className='border-l border-l-customborder pl-2'>
                                <h4 className='font-semibold text-lg text-Primary hover:text-customred'>${selectedProduct.price}</h4>
                                <p className='font-regular text-xs text-customGray2'>50-100 pcs</p>
                            </div>
                        ))}
                    </div>
                </header>

                <main>
                    {/* Product Attributes (Type, Material, Design) */}
                    <div className="grid grid-cols-2 mt-4">
                        <p className="font-regular text-base text-customGray">Price:</p>
                        <p className='font-regular text-base text-customGray2'>Negotiable</p>
                    </div>
                    <hr className='my-3 border-[1px] border-customborder' />

                    <div className="grid grid-cols-2">
                        <div className='flex flex-col gap-2'>
                            <p className="font-regular text-base text-customGray">Type:</p>
                            <p className="font-regular text-base text-customGray">Material:</p>
                            <p className="font-regular text-base text-customGray">Design:</p>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <p className='font-regular text-base text-customGray2'>Classic shoes</p>
                            <p className='font-regular text-base text-customGray2'>Plastic material</p>
                            <p className='font-regular text-base text-customGray2'>Modern nice</p>
                        </div>
                    </div>
                    <hr className='my-3 border-[1px] border-customborder' />

                    {/* Customization, Protection, Warranty */}
                    <div className="grid grid-cols-2">
                        <div className='flex flex-col gap-2'>
                            <p className="font-regular text-base text-customGray">Customization:</p>
                            <p className="font-regular text-base text-customGray mt-6">Protection:</p>
                            <p className="font-regular text-base text-customGray">Warranty:</p>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <p className='font-regular text-base text-customGray2'>
                                Customized logo and <br /> design custom packages
                            </p>
                            <p className='font-regular text-base text-customGray2'>Refund Policy</p>
                            <p className='font-regular text-base text-customGray2'>2 years full warranty</p>
                        </div>
                    </div>
                    <hr className='my-3 border-[1px] border-customborder mb-4' />
                </main>
            </section>

            {/* Right section: Supplier Details */}
            <section className='xl:w-1/6 lg:w-[280px]'>
                <div className='bg-white border border-customborder p-4 h-fit'>

                    {/* Supplier Logo & Name */}
                    <div className='flex gap-4 pb-5 border-b'>
                        <div className='bg-lightteal px-4 py-2 rounded-md'>
                            <h2 className='font-semibold text-gradteal text-3xl'>R</h2>
                        </div>
                        <h4 className='font-regular text-base text-Primary'>
                            Supplier <br /> Guanjoi Trading LLC
                        </h4>
                    </div>

                    {/* Supplier Information */}
                    <div className='mt-3'>
                        <div className='flex items-center gap-4'>
                            <img src={Gflag} alt="Flag" className='w-5 h-4' />
                            <p className='font-regular text-base text-customGray'>Germany, Berlin</p>
                        </div>
                        <div className='flex items-center gap-4 my-2'>
                            <MdOutlineVerifiedUser className='w-5 h-7 text-customGray' />
                            <p className='font-regular text-base text-customGray'>Verified Seller</p>
                        </div>
                        <div className='flex items-center gap-4'>
                            <TbWorld className='w-5 h-7 text-customGray' />
                            <p className='font-regular text-base text-customGray'>Verified Seller</p>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className='mt-5'>
                        <button className="bg-white border border-customborder text-blue-600 hover:bg-gradient-blue hover:text-white w-full font-medium py-1 px-4 my-2 rounded-md">
                            Send inquiry
                        </button>
                        <button className="bg-white border border-customborder text-blue-600 hover:bg-gradient-blue hover:text-white w-full font-medium py-1 px-4 rounded-md">
                            Seller’s profile
                        </button>
                    </div>
                </div>

                {/* Save for Later */}
                <div className='flex justify-center my-4'>
                    <button className='flex items-center gap-2'>
                        <FaRegHeart className='text-customLblue' />
                        <h4 className='font-medium text-base text-customLblue'>Save for later</h4>
                    </button>
                </div>
            </section>
        </div>
    )
}

export default InStock;
