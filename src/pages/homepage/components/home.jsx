import React from 'react'
import { Card2 } from '../../../components/card2'
import Decoration1 from '../../../assets/decor.png'
import SoftChair from '../../../assets/Soft chair.png'
import Lamp from '../../../assets/lamp.png'
import Dish from '../../../assets/dish.png'
import Swatch from '../../../assets/Image.png'
import Mixer from '../../../assets/mixer.png'
import Blender from '../../../assets/blender.png'
import Appliance from '../../../assets/appliances.png'
import Plant from '../../../assets/plant.png'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='container mx-auto bg-white flex flex-row border border-1 mt-6 rounded-md'>
            <div className='relative'>
                <img src={Decoration1} alt="" width={360} />
                <div className='absolute top-6 left-5'>
                    <h4 className='font-semibold text-gray-800 text-2xl'>Home and <br /> outdoor</h4>
                    <button className='font-medium text-sm text-gray-800 bg-white px-6 py-2 rounded-md mt-3'>Soure now</button>
                </div>
            </div>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 w-full'>
                <div className=''>
                    <Link to='/orderdetail'>
                    <Card2 title="Soft chairs" desc='From' price='USD 19' img={SoftChair} />
                    </Link>
                </div>
                <div className=''>
                    <Link to='/orderdetail'>
                    <Card2 title="Soft chairs" desc='From' price='USD 19' img={Lamp} />
                    </Link>
                </div>
                <div className=''>
                    <Link to='/orderdetail'>
                    <Card2 title="Soft chairs" desc='From' price='USD 19' img={Dish} />
                    </Link>
                </div>
                <div className=''>
                    <Link to='/orderdetail'>
                    <Card2 title="Soft chairs" desc='From' price='USD 19' img={Swatch} />
                    </Link>
                </div>
                <div className=''>
                    <Link to='/orderdetail'>
                    <Card2 title="Soft chairs" desc='From' price='USD 19' img={Mixer} />
                    </Link>
                </div>
                <div className=''>
                    <Link to='/orderdetail'>
                    <Card2 title="Soft chairs" desc='From' price='USD 19' img={Blender} />
                    </Link>
                </div>
                <div className=''>
                    <Link to='/orderdetail'>
                    <Card2 title="Soft chairs" desc='From' price='USD 19' img={Appliance} />
                    </Link>
                </div>
                <div className=''>
                    <Link to='/orderdetail'>
                    <Card2 title="Soft chairs" desc='From' price='USD 19' img={Plant} />
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default Home
