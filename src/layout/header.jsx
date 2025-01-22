import React from 'react'
import Logo from '../assets/logo-colored.svg'
import ProfileIcon from '../assets/Profile.png' 
import MessageIcon from '../assets/Message.png'
import OrdersIcon from '../assets/Orders.png'
import CartIcon from '../assets/Cart.png'
import { Link, Links } from 'react-router-dom'



const Header = () => {
    return (
        <header className='bg-white '>
            <div className='container mx-auto flex flex-row items-center justify-between py-2  mt-1'>
            <div>
                <img src={Logo} alt="" />
            </div>
            <div className='flex flex-row justify-between border-blue-500 h-8'>
                <input type="text" className='w-96 px-1 border-2 border-blue-500 focus:outline-none focus:ring-0' />
                <div className='flex flex-row '>
                    <select name="All category" id="1" className='border-y-2 border-blue-500 focus:outline-none  w-28' >
                        <option value="All category">All category</option>
                    </select>
                    <button className='bg-blue-500 text-white w-20  rounded-r-md'>Search</button>
                </div>
            </div>
            <nav >
                <ul className='flex items-center justify-end space-x-4'> 
                    <li><Link to="/profile"><img src={ProfileIcon} alt="Profile" width={40} /></Link></li> 
                    <li><Link to="/messages"><img src={MessageIcon} alt="Messages" width={50} /></Link></li>
                    <li><Link to="/orders"><img src={OrdersIcon} alt="Orders" width={40} /></Link></li>
                    <li><Link to="/cart"><img src={CartIcon} alt="Cart" width={40} /></Link></li>
                </ul>
            </nav>
        </div>
        </header>
        
    )
}

export default Header