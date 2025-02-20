import React, { useState } from 'react'
import { Listbox } from "@headlessui/react";
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa";
import Flag2 from '../assets/flag.png'
import { MdKeyboardArrowDown } from "react-icons/md";


const countries = [
    { name: "Ship to", image: Flag2 }
  ];
const CategoryNavbar = () => {
    const [selected, setSelected] = useState(countries[0]);

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
                    <li className='flex align-middle'>
                        <select>
                            <option value="English, USD">English, USD</option>
                        </select>
                    </li>
                    <li>
                        <Listbox value={selected} onChange={setSelected}>
                            <div className="relative w-28">
                                <Listbox.Button className="flex items-center gap-2  px-1 py-2 w-full rounded bg-white">
                                    <span className='font-medium text-Primary text-sm'>{selected.name}</span>
                                    <img src={selected.image} alt={selected.name} className="w-3 h-3" />
                                    <MdKeyboardArrowDown />
                                </Listbox.Button>
                                <Listbox.Options className="absolute mt-1 w-full bg-white border rounded shadow-md">
                                    {countries.map((country, index) => (
                                        <Listbox.Option key={index} value={country} className="cursor-pointer flex items-center gap-2 p-2 hover:bg-gray-100">
                                            <span>{country.name}</span>
                                            <img src={country.image} alt={country.name} className="w-5 h-5" />
                                        </Listbox.Option>
                                    ))}
                                </Listbox.Options>
                            </div>
                        </Listbox>
                    </li>
                </ul>
            </nav>
        </div>

    )
}

export default CategoryNavbar