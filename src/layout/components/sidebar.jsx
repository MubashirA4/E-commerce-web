import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { IoMdStar } from "react-icons/io";


const Sidebar = () => {
    const [isOpen, setIsOpen] = useState({
        category: false,
        brands: false,
        features: false,
        range: false,
        condition: false,
        ratings: false,
    });

    const toggleDown = (menu) => {
        setIsOpen((prev) => ({
            ...prev, [menu]: !prev[menu],
        }));
    }
    return (
        <div className='container mx-auto '>
            <aside>
                <ul className="">
                    {/* Category */}
                    <li className=" ">
                        <div className="flex items-center justify-between cursor-pointer border-t"
                            onClick={() => toggleDown("category")} >
                            <span className='font-semibold text-Primary text-base mt-2'>Category</span>
                            <svg
                                className={`w-4 h-4 transform transition-transform ${isOpen.category ? "rotate-180" : ""
                                    }`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                        {isOpen.category && (
                            <ul className=" mt-4 space-y-2">
                                <li className="font-regular text-base text-customGray2"><Link to='/'> Mobile accessory</Link></li>
                                <li className="font-regular text-base text-customGray2"><Link to='/'> Electronics</Link></li>
                                <li className="font-regular text-base text-customGray2"><Link to='/'> Smartphones</Link></li>
                                <li className="font-regular text-base text-customGray2"><Link to='/'> Modern tech</Link></li>
                                <li className='font-regular text-base text-customLblue'><Link to='/'>See all</Link> </li>
                            </ul>
                        )}
                    </li>
                    {/* Brands */}
                    <li className=" py-2">
                        <div className="flex items-center justify-between cursor-pointer border-t"
                            onClick={() => toggleDown("brands")} >
                            <span className='font-semibold text-Primary text-base mt-2'>Brands</span>
                            <svg
                                className={`w-4 h-4 transform transition-transform ${isOpen.brands ? "rotate-180" : ""
                                    }`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                        {isOpen.brands && (
                            <ul className=" mt-4 space-y-2">
                                <li className="flex items-center font-regular text-base text-customGray2">
                                    <input type="checkbox" name="" id="" className="w-4 h-4" />
                                    <span className='ml-3'>Samsung</span>
                                </li>
                                <li className="flex items-center font-regular text-base text-customGray2">
                                    <input type="checkbox" name="" id="" className="w-4 h-4" />
                                    <span className='ml-3'>Apple</span>
                                </li>
                                <li className="flex items-center font-regular text-base text-customGray2">
                                    <input type="checkbox" name="" id="" className="w-4 h-4" />
                                    <span className='ml-3'>Huawei</span>
                                </li>
                                <li className="flex items-center font-regular text-base text-customGray2">
                                    <input type="checkbox" name="" id="" className="w-4 h-4" />
                                    <span className='ml-3'>Pocco</span>
                                </li>
                                <li className="flex items-center font-regular text-base text-customGray2">
                                    <input type="checkbox" name="" id="" className="w-4 h-4" />
                                    <span className='ml-3'>Lenovo</span>
                                </li>
                                <li className='font-regular text-base text-customLblue'><Link to='/'>See all</Link> </li>

                            </ul>
                        )}
                    </li>
                    {/* features */}
                    <li className=" py-2">
                        <div className="flex items-center justify-between cursor-pointer border-t"
                            onClick={() => toggleDown("features")} >
                            <span className='font-semibold text-Primary text-base mt-2'>Features</span>
                            <svg
                                className={`w-4 h-4 transform transition-transform ${isOpen.features ? "rotate-180" : ""
                                    }`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                        {isOpen.features && (
                            <ul className=" mt-4 space-y-2">
                                <li className="flex items-center font-regular text-base text-customGray2">
                                    <input type="checkbox" name="" id="" className="w-4 h-4" />
                                    <span className='ml-3'>Metallic</span>
                                </li>
                                <li className="flex items-center font-regular text-base text-customGray2">
                                    <input type="checkbox" name="" id="" className="w-4 h-4" />
                                    <span className='ml-3'>Plastic cover</span>
                                </li>
                                <li className="flex items-center font-regular text-base text-customGray2">
                                    <input type="checkbox" name="" id="" className="w-4 h-4" />
                                    <span className='ml-3'>8GB Ram</span>
                                </li>
                                <li className="flex items-center font-regular text-base text-customGray2">
                                    <input type="checkbox" name="" id="" className="w-4 h-4" />
                                    <span className='ml-3'>Super power</span>
                                </li>
                                <li className="flex items-center font-regular text-base text-customGray2">
                                    <input type="checkbox" name="" id="" className="w-4 h-4" />
                                    <span className='ml-3'>Large Memory</span>
                                </li>
                                <li className='font-regular text-base text-customLblue'><Link to='/'>See all</Link> </li>
                            </ul>
                        )}
                    </li>
                    {/* Price Range */}
                    <li className=" py-2">
                        <div className="flex items-center justify-between cursor-pointer border-t"
                            onClick={() => toggleDown("range")} >
                            <span className='font-semibold text-Primary text-base mt-2'>Price Range</span>
                            <svg
                                className={`w-4 h-4 transform transition-transform ${isOpen.range ? "rotate-180" : ""
                                    }`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                        {isOpen.range && (
                            <ul className=" mt-4 space-y-2">
                                <input type="range" name="" id="" />
                            </ul>
                        )}
                    </li>
                    {/* Condition */}
                    <li className=" py-2">
                        <div className="flex items-center justify-between cursor-pointer border-t"
                            onClick={() => toggleDown("condition")} >
                            <span className='font-semibold text-Primary text-base mt-2'>Condition</span>
                            <svg
                                className={`w-4 h-4 transform transition-transform ${isOpen.condition ? "rotate-180" : ""
                                    }`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                        {isOpen.condition && (
                            <ul className=" mt-4 space-y-2">
                                <li className="flex items-center font-regular text-base text-customGray2">
                                    <input type="radio" name="" id="" className="w-4 h-4" />
                                    <span className='ml-3'>Any</span>
                                </li>
                                <li className="flex items-center font-regular text-base text-customGray2">
                                    <input type="radio" name="" id="" className="w-4 h-4" />
                                    <span className='ml-3'>Refurbished</span>
                                </li>
                                <li className="flex items-center font-regular text-base text-customGray2">
                                    <input type="radio" name="" id="" className="w-4 h-4" />
                                    <span className='ml-3'>Brand new</span>
                                </li>
                                <li className="flex items-center font-regular text-base text-customGray2">
                                    <input type="radio" name="" id="" className="w-4 h-4" />
                                    <span className='ml-3'>Old items</span>
                                </li>
                            </ul>
                        )}
                    </li>
                    {/* Ratings */}
                    <li className=" py-2">
                        <div className="flex items-center justify-between cursor-pointer border-t"
                            onClick={() => toggleDown("ratings")} >
                            <span className='font-semibold text-Primary text-base mt-2'>Features</span>
                            <svg
                                className={`w-4 h-4 transform transition-transform ${isOpen.ratings ? "rotate-180" : ""
                                    }`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                        {isOpen.ratings && (
                            <ul className=" mt-4 space-y-2">
                                <li className="flex items-center font-regular text-base text-customGray2">
                                    <input type="checkbox" name="" id="" className="w-4 h-4" />
                                    <div className='flex ml-2 gap-0'>
                                        <IoMdStar className='text-orange-500 w-5 h-5'/>
                                        <IoMdStar className='text-orange-500 w-5 h-5'/>
                                        <IoMdStar className='text-orange-500 w-5 h-5'/>
                                        <IoMdStar className='text-orange-500 w-5 h-5'/>
                                        <IoMdStar className='text-orange-500 w-5 h-5'/>
                                    </div>
                                </li>
                                <li className="flex items-center font-regular text-base text-customGray2">
                                    <input type="checkbox" name="" id="" className="w-4 h-4" />
                                    <div className='flex ml-2 gap-0'>
                                        <IoMdStar className='text-orange-500 w-5 h-5'/>
                                        <IoMdStar className='text-orange-500 w-5 h-5'/>
                                        <IoMdStar className='text-orange-500 w-5 h-5'/>
                                        <IoMdStar className='text-orange-500 w-5 h-5'/>
                                        <IoMdStar className='text-background3 w-5 h-5'/>
                                    </div>
                                </li>
                                <li className="flex items-center font-regular text-base text-customGray2">
                                    <input type="checkbox" name="" id="" className="w-4 h-4" />
                                    <div className='flex ml-2 gap-0'>
                                        <IoMdStar className='text-orange-500 w-5 h-5'/>
                                        <IoMdStar className='text-orange-500 w-5 h-5'/>
                                        <IoMdStar className='text-orange-500 w-5 h-5'/>
                                        <IoMdStar className='text-background3 w-5 h-5'/>
                                        <IoMdStar className='text-background3 w-5 h-5'/>
                                    </div>
                                </li>
                                <li className="flex items-center font-regular text-base text-customGray2">
                                    <input type="checkbox" name="" id="" className="w-4 h-4" />
                                    <div className='flex ml-2 gap-0'>
                                        <IoMdStar className='text-orange-500 w-5 h-5'/>
                                        <IoMdStar className='text-orange-500 w-5 h-5'/>
                                        <IoMdStar className='text-background3 w-5 h-5'/>
                                        <IoMdStar className='text-background3 w-5 h-5'/>
                                        <IoMdStar className='text-background3 w-5 h-5'/>
                                    </div>
                                </li>
                            </ul>
                        )}
                    </li>
                </ul>
            </aside>
        </div>
    )
}
export default Sidebar