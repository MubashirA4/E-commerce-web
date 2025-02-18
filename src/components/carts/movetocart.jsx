import React from 'react'
import { IoCartOutline } from "react-icons/io5";


const MoveToCart = ({ image, titleprice, desc }) => {
    return (
        <div className="">
            <div className="flex items-center justify-center border border-customborder rounded-sm">
                <img src={image} alt="" className="w-48 mb-4" />
            </div>
            <div className="flex flex-col gap-1 mt-2">
                <h4 className="font-semibold text-lg text-Primary">${titleprice}</h4>
                <p className="font-regular text-base text-customGray pr-4">{desc}</p>
                <button className='flex items-center justify-evenly w-32 h-8 border border-customborder rounded-md  text-customLblue'>
                    <IoCartOutline size={20} />
                    <span className='font-medium text-base'>Move to cart</span>
                </button>
            </div>
        </div>
    )
}

export default MoveToCart