import React, { useState } from 'react'
import CategoryNavbar from '../../../layout/categorynavbar'
import { Link } from 'react-router-dom'
import Banner from '../../../assets/Banner-board.png'
import Profile from '../../../assets/profile(1).png'
import AuthModal from '../../Signin/auth'

const Landing = () => {
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
    const [initialAuthType, setInitialAuthType] = useState('login'); // 'login' or 'register'

    const openModal = (type) => {
        setInitialAuthType(type);
        setIsAuthModalOpen(true);
    };
    return (
        <>
            <CategoryNavbar />
            {/* Sidebar */}
            <main className='bg-background'>
                <section className='container mx-auto bg-white flex flex-row gap-2 justify-between  border p-4 mt-4 border-gray-200 rounded-lg'>
                    <aside className='w-1/5'>
                        <ul className='font-sans text-gray-500 '>
                            <li className='w-full py-1 pl-2 hover:bg-focus rounded-md'>
                                <Link to="/">Automobiles</Link>
                            </li>
                            <li className='w-full py-1 pl-2 hover:bg-focus rounded-md'>
                                <Link to="/">Clothes and wear</Link>
                            </li>
                            <li className='w-full py-1 pl-2 hover:bg-focus rounded-md'>
                                <Link to="/">Home interiors</Link>
                            </li>
                            <li className='w-full py-1 pl-2 hover:bg-focus rounded-md'>
                                <Link to="/">Computer and tech</Link>
                            </li>
                            <li className='w-full py-1 pl-2 hover:bg-focus rounded-md'>
                                <Link to="/">Tools, equipments</Link>
                            </li>
                            <li className='w-full py-1 pl-2 hover:bg-focus rounded-md'>
                                <Link to="/">Sports and outdoor</Link>
                            </li>
                            <li className='w-full py-1 pl-2 hover:bg-focus rounded-md'>
                                <Link to="/">Animal and pets</Link>
                            </li>
                            <li className='w-full py-1 pl-2 hover:bg-focus rounded-md'>
                                <Link to="/">Machinery tools</Link>
                            </li>
                            <li className='w-full py-1 pl-2 hover:bg-focus rounded-md'>
                                <Link to="/">More category</Link>
                            </li>
                        </ul>
                    </aside>
                    {/* Banner */}
                    <main className="w-3/5">
                        <div className="relative">
                            <div className="flex  justify-center items-center">
                                <img src={Banner} alt="" className='w-full lg:h-[360px] object-cover rounded-md' />
                            </div>
                            <div className="absolute top-11 left-8">
                                <h4 className="font-sans text-gray-800 text-2xl">
                                    Latest trending
                                    <br />
                                    <span className="font-bold text-3xl">Electronic items</span>
                                </h4>
                                <button type="button" class="text-Primary bg-white hover:text-white  hover:bg-gradient-blue focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 my-2  dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">Learn more</button>

                            </div>
                        </div>
                    </main>
                    {/* Promo */}
                    <div className='w-1/5 '>
                        <div className="bg-lightBlue px-4 py-2 rounded-md  ">
                            <div className="flex flex-row gap-3 items-center">
                                <div className="bg-blue-300 rounded-full p-2">
                                    <img src={Profile} alt="" width={24} />
                                </div>
                                <p className="font-sans">Hi, user <br /> let’s get stated</p>
                            </div>
                            <div>
                                <div className="hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mt-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">
                                    <button onClick={() => openModal('register')}>
                                        Join now
                                    </button>
                                </div>
                                <div className="hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mt-1 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">
                                    <button onClick={() => openModal('login')}>
                                        Log in
                                    </button>
                                </div>
                                {isAuthModalOpen && (
                                    <AuthModal
                                        isOpen={isAuthModalOpen}
                                        onClose={() => setIsAuthModalOpen(false)}
                                        initialAuthType={initialAuthType}
                                    />
                                )}
                            </div>
                        </div>
                        <div className='bg-orange py-4 px-4 mt-2 rounded-md'>
                            <p className='font-sans text-white line leading-tight'>Get US $10 off <br /> with a new <br /> supplier</p>
                        </div>
                        <div className='bg-tealBlue py-4 px-4 mt-2 rounded-md'>
                            <p className='font-sans text-white line leading-tight'>Get US $10 off <br /> with a new <br /> supplier</p>
                        </div>
                    </div>
                </section>
            </main>

        </>
    )
}

export default Landing