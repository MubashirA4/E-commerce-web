import React from 'react'
import Card from '../../components/card1'
import Watch from '../../assets/watch.png'
import Laptop from '../../assets/laptop.png'
import Camera from '../../assets/camera.png'
import Headphone from '../../assets/headphone.png'
import Phone from '../../assets/phone.png'
import Decoration1 from '../../assets/decor.png'

const Deals = () => {
    return (
        <>
        {/* Deals and discout */}
        <div className='flex flex-row border border-1 mt-6'>
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
            <div className="w-1/5 flex justify-center"> <Card image={Watch} title="Smart Matches" desc='-25%' /> </div>
            <div className="w-1/5 flex justify-center"> <Card image={Laptop} title="Laptops" desc='-15%' /> </div>
            <div className="w-1/5 flex justify-center"> <Card image={Camera} title="GoPro cameras" desc='-40%' /> </div>
            <div className="w-1/5 flex justify-center"> <Card image={Headphone} title="Headphones" desc='-25%' /> </div>
            <div className="w-1/5 flex justify-center"> <Card image={Phone} title="Canon cameras" desc='-25%' /> </div>
        </div>
        {/* Home and out door */}
        <div className='flex flex-row border border-1 mt-6'>
            <div className='relative'>
                <img src={Decoration1} alt="" width={360} />
                <div className='absolute top-6 left-5'>
                    <h4 className='font-semibold text-gray-800 text-2xl'>Home and <br /> outdoor</h4>
                    <button className='font-medium text-sm text-gray-800 bg-white px-6 py-2 rounded-md mt-3'>Soure now</button>
                </div>
            </div>
            
        </div>
        </>
    )
}

export default Deals