import React from 'react'
import Decoration2 from '../../../assets/electronic(poster).png'
import Mixer from '../../../assets/mixer.png'
import Blender from '../../../assets/blender.png'
import { Card2 } from '../../../components/card2'
import Watch from '../../../assets/watch.png'
import Laptop from '../../../assets/laptop.png'
import Camera from '../../../assets/camera.png'
import Headphone from '../../../assets/headphone.png'
import Phone from '../../../assets/phone.png'

const Electronic = () => {
    return (
        <div className='container mx-auto bg-white'>
            <div className=' flex flex-row border border-1 mt-6 rounded-md'>
                <div className='relative'>
                    <img src={Decoration2} alt="" width={360} className='h-full' />
                    <div className='absolute top-6 left-5'>
                        <h4 className='font-semibold text-gray-800 text-2xl'>Consumer <br />electronics and <br /> gadgets</h4>
                        <button className='font-medium text-sm text-gray-800 bg-white px-6 py-2 rounded-md mt-3'>Soure now</button>
                    </div>
                </div>
                <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 w-full'>
                    <div className=''>
                        <Card2 title="Soft chairs" desc='From' price='USD 19' img={Watch} />
                    </div>
                    <div className=''>
                        <Card2 title="Soft chairs" desc='From' price='USD 19' img={Camera} />
                    </div>
                    <div className=''>
                        <Card2 title="Soft chairs" desc='From' price='USD 19' img={Headphone} />
                    </div>
                    <div className=''>
                        <Card2 title="Soft chairs" desc='From' price='USD 19' img={Laptop} />
                    </div>
                    <div className=''>
                        <Card2 title="Soft chairs" desc='From' price='USD 19' img={Mixer} />
                    </div>
                    <div className=''>
                        <Card2 title="Soft chairs" desc='From' price='USD 19' img={Blender} />
                    </div>
                    <div className=''>
                        <Card2 title="Soft chairs" desc='From' price='USD 19' img={Headphone} />
                    </div>
                    <div className=''>
                        <Card2 title="Soft chairs" desc='From' price='USD 19' img={Phone} />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Electronic
