import React, { useState } from 'react'
import Logo from '../assets/logo-colored.svg'
import ProfileIcon from '../assets/Profile.png'
import MessageIcon from '../assets/Message.png'
import OrdersIcon from '../assets/Orders.png'
import CartIcon from '../assets/Cart.png'
import { Link, Links } from 'react-router-dom'



const Header = () => {
    const [value, setValue] = useState("")

    const options = ["electronics", "fashion", "toys", "furniture"]

    const handleSelectChange = (e) => {
        setValue(e.target.value) // Update state when select changes
    }
    const handleInputChange = (e) => {
        setValue(e.target.value) // Update state when Input changes
    }

    return (
        <header className='bg-white '>
            <section className='container mx-auto flex flex-row items-center justify-between py-2  mt-1'>
                <div>
                    <Link to='/'>
                        <img src={Logo} alt="" />
                    </Link>
                </div>
                <div className='flex flex-row justify-between border-2 border-customLblue rounded-md h-8'>
                    <div className='flex items-center px-2'>
                        <input
                            type="text"
                            placeholder='Search'
                            onChange={handleInputChange}
                            value={value}
                            id='1'
                            className=' w-96 h-6  focus:outline-none  ' />
                    </div>
                    <form className='flex flex-row '>
                        <select name="All category"
                            value={value}
                            onChange={handleSelectChange}
                            id="1" className='focus:outline-none border-l-2 border-customLblue w-28' >
                            <option value="All category" >
                                All category
                            </option>
                            {options.map((option, index) => (
                                <option key={index} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                        <button className='bg-gradient-blue text-white w-20 '>Search</button>
                    </form>
                </div>
                <nav >
                    <ul className='flex items-center justify-end space-x-4'>
                        <li><Link to="/profile"><img src={ProfileIcon} alt="Profile" width={40} /></Link></li>
                        <li><Link to="/messages"><img src={MessageIcon} alt="Messages" width={50} /></Link></li>
                        <li><Link to="/orders"><img src={OrdersIcon} alt="Orders" width={40} /></Link></li>
                        <li><Link to="/cart"><img src={CartIcon} alt="Cart" width={40} /></Link></li>
                    </ul>
                </nav>
            </section>
        </header>

    )
}

export default Header