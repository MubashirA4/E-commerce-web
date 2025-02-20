import React from 'react'
import { IoCartOutline } from "react-icons/io5";


const MoveToCart = ({ image, titleprice, desc, onAddToCart }) => {
    return (
        <div>
            <div className="flex items-center justify-center border bg-white border-customborder rounded-sm">
                <img src={image} alt="" className="w-48 mb-4" />
            </div>
            <div className="flex flex-col gap-1 mt-2">
                <h4 className="font-semibold text-lg text-Primary">${titleprice}</h4>
                <p className="font-regular text-base text-customGray pr-4">{desc}</p>
                <button className=' border border-customborder rounded-md  text-customLblue'
                >
                </button>
                <button type="button" class="flex items-center justify-evenly w-full h-12 text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
                    onClick={onAddToCart}
                >
                    <IoCartOutline size={20} />
                    <span className='font-medium text-base'>Move to cart</span>
                </button>
            </div>
        </div>
    )
}

export default MoveToCart