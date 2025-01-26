import React from 'react'
import { Link } from 'react-router-dom'
import { IoMdStar } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";


const MobileCard = ({ img, title, price, discount, order, Fship ,para, details, className = '', imgWidth = '', imgHeight = '' }) => {
    return (
        <div className={`bg-white ${className}`} >
            <div className=''>
                <img src={img} alt="" className={`${imgWidth} ${imgHeight}`} />
            </div>
            <div className='flex'>
            <div >
                <h4 className='font-medium text-base text-Primary'>{title} </h4>
                <h2 className='font-semibold text-xl text-Primary mt-3'>{price} <del className='text-customGray text-base'>{discount} </del> </h2>
                <div className='flex gap-6'>
                    <div className='flex items-center gap-0'>
                        <IoMdStar className='text-orange-500 w-4 h-4' />
                        <IoMdStar className='text-orange-500 w-4 h-4' />
                        <IoMdStar className='text-orange-500 w-4 h-4' />
                        <IoMdStar className='text-orange-500 w-4 h-4' />
                        <IoMdStar className='text-background3 w-4 h-4' />
                        <p className='font-regular text-base text-orange-500 ml-1'>7.5</p>
                    </div>
                    <ul className='list-disc flex gap-6'>
                        <li className='marker:text-customborder font-regular text-base text-customGray'>
                            {order}
                        </li>
                        <li className='marker:text-customborder font-regular text-base text-green-600'>
                            {Fship}
                        </li>
                    </ul>
                </div>
                <p className='font-regular text-base text-customGray2 mt-2'>{para} </p>
                <button className='flex justify-start font-medium text-base text-customLblue'>{details} </button>
            </div>
            <div className='border border-customborder h-fit p-2 rounded-md'>
                <FaRegHeart className='text-customLblue' />
            </div>
            </div>
        </div>
    )
}

export default MobileCard