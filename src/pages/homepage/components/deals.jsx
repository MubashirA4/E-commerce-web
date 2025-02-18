import React from 'react'
import Card from '../../../components/card1'
import Watch from '../../../assets/watch.png'
import Laptop from '../../../assets/laptop.png'
import Camera from '../../../assets/camera.png'
import Headphone from '../../../assets/headphone.png'
import Phone from '../../../assets/phone.png'
import { Link } from 'react-router-dom'



const Deals = () => {
    return (
        <div className='container mx-auto bg-white'>
            <div className='flex flex-row border border-1 mt-6 rounded-md'>
                <div className='p-4'>
                    <h4 className='font-semibold text-gray-800'>Deals and offers</h4>
                    <p className='text-gray-500'>Hygiene equipments</p>
                    <div className='flex flex-row gap-2 mt-3'>
                        <div className='bg-neutral-600 text-white px-3 py-1 rounded-md w-fit text-center'>
                            <span className='font-bold text-lg'> 04 </span> <br />
                            <span className='font-sans text-sm'> Days</span>
                        </div>
                        <div className='bg-neutral-600 text-white px-3 py-1 rounded-md w-fit text-center'>
                            <span className='font-bold text-lg'> 04 </span> <br />
                            <span className='font-sans text-sm'> Days</span>
                        </div>
                        <div className='bg-neutral-600 text-white px-3 py-1 rounded-md w-fit text-center'>
                            <span className='font-bold text-lg'> 04 </span> <br />
                            <span className='font-sans text-sm'> Days</span>
                        </div>
                        <div className='bg-neutral-600 text-white px-3 py-1 rounded-md w-fit text-center'>
                            <span className='font-bold text-lg'> 04 </span> <br />
                            <span className='font-sans text-sm'> Days</span>
                        </div>
                    </div>
                </div>
                <div className='grid lg:grid-cols-5 lg:w-full'>
                    <div className="">
                        <Link to='orderdetail'>
                            <Card image={Watch} title="Smart Matches" desc='-25%' />
                        </Link>
                    </div>
                    <div className="">
                        <Link to='orderdetail'>
                            <Card image={Laptop} title="Laptops" desc='-15%' />
                        </Link>
                    </div>
                    <div className="">
                        <Link to='orderdetail'>
                            <Card image={Camera} title="GoPro cameras" desc='-40%' />
                        </Link>
                    </div>
                    <div className="">
                        <Link to='orderdetail'>
                            <Card image={Headphone} title="Headphones" desc='-25%' />
                        </Link>
                    </div>
                    <div className="">
                        <Link to='orderdetail'>
                            <Card image={Phone} title="Canon cameras" desc='-25%' />
                        </Link>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Deals