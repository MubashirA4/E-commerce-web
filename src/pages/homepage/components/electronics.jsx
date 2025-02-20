import React, { useContext } from 'react'
import Decoration2 from '../../../assets/electronic(poster).png'
import Mixer from '../../../assets/mixer.png'
import Blender from '../../../assets/blender.png'
import { Card2 } from '../../../components/card2'
import Watch from '../../../assets/watch.png'
import Laptop from '../../../assets/laptop.png'
import Camera from '../../../assets/camera.png'
import Headphone from '../../../assets/headphone.png'
import Phone from '../../../assets/phone.png'
import { Link } from 'react-router-dom'
import { CartContext } from '../../mycart/components/cartcontext'
import { title } from 'framer-motion/client'

const Electronic = () => {
    const {addItem, setSelectedProduct} = useContext(CartContext)

    const product = [
        {id:1, title: "Watch", desc: "From", price:19, image: Watch },
        {id:2, title: "Camera", desc: "From", price:30, image: Camera },
        {id:3, title: "HeadPhones", desc: "From", price:24, image: Headphone },
        {id:4, title: "Laptop", desc: "From", price:40, image: Laptop },
        {id:5, title: "Blender", desc: "From", price:12, image: Mixer },
        {id:6, title: "Juicer", desc: "From", price:14, image: Blender },
        {id:7, title: "HeadPhones", desc: "From", price:24, image: Headphone },
        {id:8, title: "Redmi 13", desc: "From", price:45, image: Phone },
    ]

    const handleProductClick = (product) => {
        // Set the selected product in context
        setSelectedProduct({ ...product, qty: 1 });
        // Optionally add the product to cart
        addItem({ ...product, qty: 1 });
    };



    return (
        <div className='container mx-auto bg-white'>
            <div className=' flex flex-row border border-1 mt-6 rounded-md'>
                <div className='relative'>
                    <img src={Decoration2} alt="" width={360} className='h-full' />
                    <div className='absolute top-6 left-5'>
                        <h4 className='font-semibold text-gray-800 text-2xl'>Consumer <br />electronics and <br /> gadgets</h4>
                        <button className='font-medium text-sm text-gray-800 bg-white px-6 py-2 rounded-md mt-3'>Source now</button>
                    </div>
                </div>
                <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 w-full'>
                    {product.map((product) => (
                    <div key={product.id}>
                        <Link to='/orders' onClick={() => handleProductClick(product)}
                        >
                            <Card2 title={product.title} desc={product.desc} price={product.price} img={product.image} />
                        </Link>
                    </div>
                    ))}
                    
                </div>
            </div>
        </div>

    )
}

export default Electronic
