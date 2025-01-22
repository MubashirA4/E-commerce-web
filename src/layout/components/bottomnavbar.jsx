import React from 'react'
import { FaAngleRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const BottomNavBar = () => {
  return (
    <div className='container mx-auto my-4'>
        <ul className='flex gap-2'>
            <li className='font-regular text-base text-customGray'>
                <Link to='/' className='flex items-baseline gap-1'>
                    <span>Home</span>
                    <FaAngleRight size={12}/>
                </Link>
            </li>
            <li className='font-regular text-base text-customGray'>
                <Link to='/' className='flex items-baseline gap-1'>
                    <span>Clothings</span>
                    <FaAngleRight size={12}/>
                </Link>
            </li>
            <li className='font-regular text-base text-customGray'>
                <Link to='/' className='flex items-baseline gap-1'>
                    <span>Men's wear</span>
                    <FaAngleRight size={12}/>
                </Link>
            </li>
            <li className='font-regular text-base text-customGray'>
                <Link to='/' className='flex items-baseline gap-1'>
                    <span>Summer clothing</span>
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default BottomNavBar