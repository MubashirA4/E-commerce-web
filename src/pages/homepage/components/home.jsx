import React, { useContext } from 'react'
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
import { CartContext } from '../../mycart/components/cartcontext'

const Home = () => {

    const {addItem, setSelectedProduct } = useContext(CartContext)

    const products = [
        {id: 1, image: SoftChair, title: "Soft chair", desc: "from", price: 19, },
        {id: 2, image: Lamp, title: "Soft chair", desc: "from", price: 19, },
        {id: 3, image: Dish, title: "Soft chair", desc: "from", price: 19, },
        {id: 4, image: Swatch, title: "Soft chair", desc: "from", price: 19, },
        {id: 5, image: Mixer, title: "Soft chair", desc: "from", price: 19, },
        {id: 6, image: Blender, title: "Soft chair", desc: "from", price: 19, },
        {id: 7, image: Appliance, title: "Soft chair", desc: "from", price: 19, },
        {id: 8, image: Plant, title: "Soft chair", desc: "from", price: 19, },
        
    ]

    const handleProductClick = (product) => {
        setSelectedProduct({...product, qty:1})
        addItem({...product, qty:1})
    }

    return (
        <div className='container mx-auto bg-white flex flex-row border border-1 mt-6 rounded-md'>
            <div className='relative'>
                <img src={Decoration1} alt="" width={360} />
                <div className='absolute top-6 left-5'>
                    <h4 className='font-semibold text-gray-800 text-2xl'>Home and <br /> outdoor</h4>
                    <button className='font-medium text-sm text-gray-800 bg-white px-6 py-2 rounded-md mt-3'>Source now</button>
                </div>
            </div>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 w-full'>
                {products.map((product) => (
                <div key={product.id}>
                    <Link to='/orders' onClick={() => handleProductClick(product)}>
                        <Card2 title={product.title} desc={product.desc} price={product.price} img={product.image}  />
                    </Link>
                </div>
                ))}
            </div>
        </div>
    )
}
export default Home
