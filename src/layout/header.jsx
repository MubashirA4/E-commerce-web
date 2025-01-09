import React from 'react'
import Logo from '../assets/logo-colored.svg'
import ProfileIcon from '../assets/Profile.png' 
import MessageIcon from '../assets/Message.png'
import OrdersIcon from '../assets/Orders.png'
import CartIcon from '../assets/Cart.png'
import { Link, Links } from 'react-router-dom'



const Header = () => {
    return (
        <header className='flex flex-row justify-between p-4 mt-2'>
            <div>
                <img src={Logo} alt="" />
            </div>
            <div className='flex flex-row justify-between border-2 border-blue-500 rounded-s-md h-8'>
                <input type="text" className='max-w-xl border-blue-500 focus:outline-none focus:ring-0' />
                <div className='flex flex-row '>
                    <select name="All category" id="1" className='border-x-2 border-blue-500 w-28' >
                        <option value="All category">All category</option>
                    </select>
                    <button className='bg-blue-500 text-white w-20  border-none'>Search</button>
                </div>
            </div>
            <nav >
                <ul className='flex items-center justify-end space-x-4'> 
                    <li><Link to="/profile"><img src={ProfileIcon} alt="Profile" width={40} /></Link></li> 
                    <li><Link to="/messages"><img src={MessageIcon} alt="Messages" width={40} /></Link></li>
                    <li><Link to="/orders"><img src={OrdersIcon} alt="Orders" width={40} /></Link></li>
                    <li><Link to="/cart"><img src={CartIcon} alt="Cart" width={40} /></Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header