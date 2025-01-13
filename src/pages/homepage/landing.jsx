import React from 'react'
import NavBar from '../../components/navbar'
import { Link } from 'react-router-dom'
import Banner from '../../assets/Banner-board.png'
import Profile from '../../assets/profile(1).png'

const Landing = () => {
    return (
        <>
            <NavBar />
            <section className='flex flex-row border p-4  border-gray-200'>
                <aside className='w-1/5'>
                    <ul className='font-sans text-gray-500 '>
                        <li className='w-full py-1 pl-2 focus-within:bg-teal-50 rounded-md'>
                            <Link to="/">Automobiles</Link>
                        </li>
                        <li className='w-full py-1 pl-2 focus-within:bg-teal-50 rounded-md'>
                            <Link to="/">Clothes and wear</Link>
                        </li>
                        <li className='w-full py-1 pl-2 focus-within:bg-teal-50 rounded-md'>
                            <Link to="/">Home interiors</Link>
                        </li>
                        <li className='w-full py-1 pl-2 focus-within:bg-teal-50 rounded-md'>
                            <Link to="/">Computer and tech</Link>
                        </li>
                        <li className='w-full py-1 pl-2 focus-within:bg-teal-50 rounded-md'>
                            <Link to="/">Tools, equipments</Link>
                        </li>
                        <li className='w-full py-1 pl-2 focus-within:bg-teal-50 rounded-md'>
                            <Link to="/">Sports and outdoor</Link>
                        </li>
                        <li className='w-full py-1 pl-2 focus-within:bg-teal-50 rounded-md'>
                            <Link to="/">Animal and pets</Link>
                        </li>
                        <li className='w-full py-1 pl-2 focus-within:bg-teal-50 rounded-md'>
                            <Link to="/">Machinery tools</Link>
                        </li>
                        <li className='w-full py-1 pl-2 focus-within:bg-teal-50 rounded-md'>
                            <Link to="/">More category</Link>
                        </li>
                    </ul>
                </aside>
                <main className="w-3/5">
                    <div className="relative">
                        <div className="">
                            <img src={Banner} alt="" className='w-full ' />
                        </div>
                        <div className="absolute top-11 left-8">
                            <h4 className="font-sans text-gray-800 text-2xl">
                                Latest trending
                                <br />
                                <span className="font-bold text-3xl">Electronic items</span>
                            </h4>
                            <div className="bg-white mt-3 py-1 px-3 rounded-md w-fit items-center">
                                <Link to='/' className="font-medium text-sm">Learn more</Link>
                            </div>
                        </div>
                    </div>
                </main>
                    <div className='w-1/5 ml-9'>
                        <div className="bg-teal-100 p-4 rounded-md  ">
                            <div className="flex flex-row gap-3 items-center">
                                <div className="bg-blue-300 rounded-full p-2">
                                    <img src={Profile} alt="" width={24} />
                                </div>
                                <p className="font-sans">Hi, user <br /> let’s get stated</p>
                            </div>
                            <button className="bg-white text-blue-600 hover:bg-blue-700 hover:text-white w-full font-medium py-1 px-4 my-2 rounded-md">
                                Join Now
                            </button>
                            <button className="bg-white text-blue-600 hover:bg-blue-700 hover:text-white w-full font-medium py-1 px-4 rounded-md">
                                Log in
                            </button>
                        </div>
                        <div className='bg-orange-400 py-4 px-4 mt-2 rounded-md'>
                            <p className='font-sans text-white line leading-tight'>Get US $10 off <br /> with a new <br /> supplier</p>
                        </div>
                        <div className='bg-sky-300 py-4 px-4 mt-2 rounded-md'>
                            <p className='font-sans text-white line leading-tight'>Get US $10 off <br /> with a new <br /> supplier</p>
                        </div>
                    </div>
            </section>
        </>
    )
}

export default Landing