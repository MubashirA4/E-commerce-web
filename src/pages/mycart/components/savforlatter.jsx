import React from 'react'
import MoveToCart from '../../../components/carts/movetocart';
import { IoMdLock } from "react-icons/io";
import { BsFillChatLeftTextFill } from "react-icons/bs";
import { FaTruck } from "react-icons/fa";
import Mobile from '../../../assets/mobile/2.svg'


const SaveForLatter = () => {
    return (
        <>
            <section className='flex gap-14 my-6'>
                <div className='flex items-center gap-2'>
                    <div className='flex items-center justify-center h-fit bg-customborder2 rounded-full p-3'>
                        <IoMdLock className='w-5 h-5 text-customGray'/>
                    </div>
                    <div>
                        <h4 className='font-regular text-base text-Primary leading-tight'>Secure Payment</h4>
                        <p className='text-customGray leading-tight'>Have you ever finally just</p>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <div className='flex items-center justify-center h-fit bg-customborder2 rounded-full p-3'>
                        <BsFillChatLeftTextFill className='w-5 h-5 text-customGray'/>
                    </div>
                    <div>
                        <h4 className='font-regular text-base text-Primary leading-tight'>Customer Support</h4>
                        <p className='text-customGray leading-tight'>Have you ever finally just</p>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <div className='flex items-center justify-center h-fit bg-customborder2 rounded-full p-3'>
                        <FaTruck className='w-5 h-5 text-customGray'/>
                    </div>
                    <div>
                        <h4 className='font-regular text-base text-Primary leading-tight'>Free delivery</h4>
                        <p className='text-customGray leading-tight'>Have you ever finally just</p>
                    </div>
                </div>
            </section>
            <section className=' p-4 bg-white border border-customborder2'>
                <h4 className='font-semibold text-xl text-Primary'>Saved for later</h4>
                <div className='flex gap-4 mt-4'>
                <div>
                    <MoveToCart 
                    image={Mobile} 
                    titleprice='99.50'
                     desc='GoPro HERO6 4K Action Camera - Black'
                    />
                </div>
                <div>
                    <MoveToCart image={Mobile} titleprice='99.50' desc='GoPro HERO6 4K Action Camera - Black' />
                </div>
                <div>
                    <MoveToCart image={Mobile} titleprice='99.50' desc='GoPro HERO6 4K Action Camera - Black' />
                </div>
                <div>
                    <MoveToCart image={Mobile} titleprice='99.50' desc='GoPro HERO6 4K Action Camera - Black' />
                </div>
                </div>
            </section>
            <section className='flex items-center justify-between bg-gradient-to-r from-[#237CFF] to-[#005ADE] px-4 py-6 rounded-md mt-4 mb-10'>
            <div>
                <h2 className='font-semibold text-2xl text-white'>Super discount on more than 100 USD</h2>
                <p className='font-regular text-base text-white'>Have you ever finally just write dummy info</p>
            </div>
            <div>
                <button className='font-medium text-base text-white py-3 px-5 rounded-md bg-customorange'>
                    Shop now
                </button>
            </div>
        </section>
        </>
    )
}

export default SaveForLatter