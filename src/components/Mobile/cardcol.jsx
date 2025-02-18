import React from 'react'
import { IoMdStar } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";


const CardCol = ({ img, title, price, discount, para, details }) => {
    return (
        <div className="bg-white border border-customborder" >
            <div className='flex items-center justify-center p-6'>
                <div>
                <img src={img} alt="" className="lg:w-64 " />
                </div>
            </div>
            <hr className='border border-customborder w-full'/>
            <section className='flex p-4'>
                <section>
                    <div>
                        <h4 className='font-medium text-base text-Primary'>{title} </h4>
                        <h2 className='font-semibold text-xl text-Primary '>{price} <del className='text-customGray text-base'>{discount} </del> </h2>
                    </div>
                    <div className='flex items-center'>
                        <IoMdStar className='text-customorange w-4 h-4' />
                        <IoMdStar className='text-customorange w-4 h-4' />
                        <IoMdStar className='text-customorange w-4 h-4' />
                        <IoMdStar className='text-customorange w-4 h-4' />
                        <IoMdStar className='text-background3 w-4 h-4' />
                        <p className='font-regular text-base text-orange-500 ml-1'>7.5</p>
                    </div>
                    <p className='font-regular text-base text-customGray2 mt-2'>{para} </p>
                    <button className='flex justify-start font-medium text-base text-customLblue'>{details} </button>
                </section>
                <section className='mt-1 border border-customborder h-fit p-2 rounded-md'>
                    <FaRegHeart className='text-customLblue' />
                </section>
            </section>
        </div>
    )
}

export default CardCol