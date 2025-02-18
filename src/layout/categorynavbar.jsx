import React from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa";
import Flag2 from '../assets/flag.png'

const CategoryNavbar = () => {
    return (
        <div className='bg-white border-y'>
            <nav className='container mx-auto flex flex-row justify-between py-3  border-gray-200 font-medium text-gray-700'>
               {/* Left side navigation */}
                <ul className='flex flex-row items-center gap-3'>
                    <li><Link to="/"><FaBars /></Link></li>
                    <li><Link to="/">All category</Link></li>
                    <li><Link to="/">Hot Offers</Link></li>
                    <li><Link to="/">Gift boxes</Link></li>
                    <li><Link to="/">Projects</Link></li>
                    <li><Link to="/">Menu item</Link></li>
                    <li><Link to="/">Help</Link></li>
                </ul>
                {/* Right side navigation */}
                <ul className='flex flex-row gap-5'>
                    <li>
                        <select>
                            <option value="English, USD">English, USD</option>
                        </select>
                    </li>
                    <li>
                        <select className='w-28'>
                            <option value="Ship to">Ship to
                                {/* <img src={Flag2} alt="jjk" width="20" /> */}
                            </option>
                        </select>
                    </li>
                </ul>
            </nav>
        </div>

    )
}

export default CategoryNavbar