import React from 'react'
import Tshirt from '../../../assets/Clothes/Tshirt(gray).png'
import { IoMdCheckmark, IoMdStar } from "react-icons/io";
import { MdOutlineShoppingBasket, MdOutlineVerifiedUser } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import { FaRegHeart } from "react-icons/fa";
import Review from '../../../assets/Vector(review).png'
import Gflag from '../../../assets/flag.png'

const InStock = () => {
    return (
        <div className='flex xl:justify-between lg:gap-8 border border-customborder p-4 bg-white'>
            <div className='lg:w-80 xl:w-1/5'>
                <div className='flex justify-center items-center  bg-white border border-customborder rounded-md'>
                    <img src={Tshirt} alt="" className='xl:w-80 py-5 lg:w-64 object-fit' />
                </div>
                <div className='flex gap-2 mt-3'>
                    <div className='border border-customborder rounded-md p-2 w-fit'>
                        <img src={Tshirt} alt="" className='w-12' />
                    </div>
                    <div className='border border-customborder rounded-md p-2 w-fit'>
                        <img src={Tshirt} alt="" className='w-12' />
                    </div>
                    <div className='border border-customborder rounded-md p-2 w-fit'>
                        <img src={Tshirt} alt="" className='w-12' />
                    </div>
                    <div className='border border-customborder rounded-md p-2 w-fit'>
                        <img src={Tshirt} alt="" className='w-12' />
                    </div>
                    <div className='border border-customborder rounded-md p-2 w-fit'>
                        <img src={Tshirt} alt="" className='w-12' />
                    </div>
                    <div className='border border-customborder rounded-md p-2 w-fit'>
                        <img src={Tshirt} alt="" className='w-12' />
                    </div>
                </div>
            </div>
            <section className='xl:w-3/5' >
                <header>
                    <div className='flex items-center gap-1 text-customgreen'>
                        <IoMdCheckmark />
                        <h4>
                            In stock
                        </h4>
                    </div>
                    <h4 className='font-semibold text-Primary text-xl'>Mens Long Sleeve T-shirt Cotton Base <br /> Layer Slim Muscle</h4>
                    <div className='flex gap-6 my-2'>
                        <div className='flex items-center gap-0'>
                            <IoMdStar className='text-orange-500 w-4 h-4' />
                            <IoMdStar className='text-orange-500 w-4 h-4' />
                            <IoMdStar className='text-orange-500 w-4 h-4' />
                            <IoMdStar className='text-orange-500 w-4 h-4' />
                            <IoMdStar className='text-background3 w-4 h-4' />
                            <p className='font-regular text-base text-orange-500 ml-1'>9.3</p>
                        </div>
                        <div className="flex justify-between">
                            <div className="flex items-center gap-2 font-regular text-base text-customGray">
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
                    <div className='flex justify-between bg-backgroundpink p-3 mt-2'>
                        <div className=''>
                            <h4 className='font-semibold text-lg text-Primary hover:text-customred'>$98.00</h4>
                            <p className='font-regular text-xs text-customGray2'>50-100 pcs</p>
                        </div>
                        <div className='border-l border-l-customborder pl-2'>
                            <h4 className='font-semibold text-lg text-Primary hover:text-customred'>$98.00</h4>
                            <p className='font-regular text-xs text-customGray2'>50-100 pcs</p>
                        </div>
                        <div className='border-l border-l-customborder pl-2'>
                            <h4 className='font-semibold text-lg text-Primary hover:text-customred'>$98.00</h4>
                            <p className='font-regular text-xs text-customGray2'>50-100 pcs</p>
                        </div>
                    </div>
                </header>
                <main>
                    <div class="grid grid-cols-2 mt-4 ">
                        <div>
                            <p class="font-regular text-base text-customGray">Price:</p>
                        </div>

                        <div>
                            <p className='font-regular text-base text-customGray2'>Negotiable</p>
                        </div>
                    </div>
                    <hr className='my-3 border-[1px] border-customborder'/>
                    <div class="grid grid-cols-2">
                        <div className='flex flex-col gap-2'>
                            <p class="font-regular text-base text-customGray">Type:</p>
                            <p class="font-regular text-base text-customGray">Material:</p>
                            <p class="font-regular text-base text-customGray">Design:</p>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <p className='font-regular text-base text-customGray2'>Classic shoes</p>
                            <p className='font-regular text-base text-customGray2'>Plastic material</p>
                            <p className='font-regular text-base text-customGray2'>Modern nice</p>
                        </div>
                    </div>
                    <hr className='my-3 border-[1px] border-customborder'/>
                    <div class="grid grid-cols-2">
                        <div className='flex flex-col gap-2'>
                            <p class="font-regular text-base text-customGray">Customization:</p>
                            <p class="font-regular text-base text-customGray mt-6">Protection:</p>
                            <p class="font-regular text-base text-customGray">Warranty:</p>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <p className='font-regular text-base text-customGray2'>Customized logo and <br /> design custom packages</p>
                            <p className='font-regular text-base text-customGray2'>Refund Policy</p>
                            <p className='font-regular text-base text-customGray2'>2 years full warranty</p>
                        </div>

                    </div>
                        <hr className='my-3 border-[1px] border-customborder mb-4'/>
                </main>
            </section>
            <section className='xl:w-1/5 lg:w-[280px]'>
                <div className='bg-white border border-customborder p-4 h-fit'>
                    <div className='flex gap-4 pb-5 border-b'>
                        <div className='bg-lightteal px-4 py-2 rounded-md'>
                            <h2 className='font-semibold text-gradteal text-3xl'>R</h2>
                        </div>
                        <h4 className='font-regular text-base text-Primary'>
                            Supplier <br />Guanjoi Trading LLC
                        </h4>
                    </div>
                    <div className='mt-3'>
                        <div className='flex items-center gap-4'>
                            <img src={Gflag} alt="" className='w-5 h-4' />
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
                    <div className='mt-5'>
                        <button className="bg-white border border-customborder text-blue-600 hover:bg-gradient-blue hover:text-white w-full font-medium py-1 px-4 my-2 rounded-md">
                            Send inquiry
                        </button>
                        <button className="bg-white border border-customborder text-blue-600 hover:bg-gradient-blue hover:text-white w-full font-medium py-1 px-4  rounded-md">
                            Seller’s profile
                        </button>
                    </div>
                </div>
                <div className='flex justify-center my-4'>
                    <button className='flex items-center gap-2 '>
                        <FaRegHeart className='text-customLblue' />
                        <h4 className='font-medium text-base text-customLblue'>Save for later</h4>
                    </button>
                </div>
            </section>
        </div>
    )
}

export default InStock