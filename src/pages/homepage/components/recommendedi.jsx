import React, { useContext } from 'react'
import Brand from '../../../components/brand'
import { Services } from '../../../components/services'
import Region from '../../../components/region'
import Tshirt from '../../../assets/Clothes/T-shirt.png'
import Jacket from '../../../assets/Clothes/jacket.png'
import Coat from '../../../assets/Clothes/coat.png'
import Purse from '../../../assets/Clothes/purse.png'
import Bag from '../../../assets/Clothes/bag.png'
import Shorts from '../../../assets/Clothes/short jeans.png'
import Headphone from '../../../assets/headphone.png'
import Watch from '../../../assets/watch.png'
import Phone from '../../../assets/phone.png'
import Camera from '../../../assets/Image.png'
import Sourehub from '../../../assets/services/source.svg'
import Colors from '../../../assets/services/image 2.png'
import Aeroplane from '../../../assets/services/Aeroplane.png'
import Man from '../../../assets/services/Man.png'
import SearchIcon from '../../../assets/services/Search icon.png'
import InventoryIcon from '../../../assets/services/Vector.png'
import ArrowIcon from '../../../assets/services/Vector2.png'
import DefenceIcon from '../../../assets/services/security2.png'
import UAE from '../../../assets/region/UAE flag.png'
import { Link } from 'react-router-dom'
import { CartContext } from '../../mycart/components/cartcontext'
import { desc, image, title } from 'framer-motion/client'


export const Recommended = () => {
    const {addItem, setSelectedProduct} = useContext(CartContext)

    const Product = [
        {id:1, image: Tshirt, price: 10.30, desc:'T-shirts with multiple colors, for men' },
        {id:2, image: Jacket, price: 10.30, desc:'T-shirts with multiple colors, for men' },
        {id:3, image: Purse, price: 10.30, desc:'T-shirts with multiple colors, for men' },
        {id:3, image: Bag, price: 10.30, desc:'T-shirts with multiple colors, for men' },
        {id:3, image: Coat, price: 10.30, desc:'T-shirts with multiple colors, for men' },
        {id:3, image: Shorts, price: 10.30, desc:'T-shirts with multiple colors, for men' },
        {id:3, image: Headphone, price: 10.30, desc:'T-shirts with multiple colors, for men' },
        {id:3, image: Watch, price: 10.30, desc:'T-shirts with multiple colors, for men' },
        {id:3, image: Phone, price: 10.30, desc:'T-shirts with multiple colors, for men' },
        {id:3, image: Camera, price: 10.30, desc:'T-shirts with multiple colors, for men' },
    ]
    const handleProductClick = (product) => {
        // Set the selected product in context
        setSelectedProduct({...product, qty: 1});
        // Optionally add the product to cart
        addItem({...product, qty: 1});
    }

    return (
        <div className='container mx-auto'>
            <div className='mt-3'>
                <h4 className='font-semibold text-xl text-Primary'>Recommended items</h4>
                <div className='grid lg:grid-cols-5 gap-5 mt-4'>
                    {Product.map((product) => (
                    <div key={product.id}>
                        <Link to='/orders' onClick={() => handleProductClick(product)}>
                        <Brand image={product.image} title={product.price} desc={product.desc}  className='flex flex-col justify-between py-4' />
                    </Link>
                    </div>
                    ))}
                    
                </div>
            </div>
            <div className='mt-3'>
                <h4 className='font-semibold text-xl text-Primary my-5'>Our extra services</h4>
                <div className='grid grid-cols-4 gap-4'>
                    <Services Icon={SearchIcon} image={Sourehub} desc1='Source from' desc2='Industry Hub' />
                    <Services Icon={InventoryIcon} image={Colors} desc1='Customize Your' desc2='Products' />
                    <Services Icon={ArrowIcon} image={Aeroplane} desc1='Fast, reliable shipping by ocean or air' />
                    <Services Icon={DefenceIcon} image={Man} desc1='Product monitoring and inspection' />
                </div>
            </div>
            <div>
                <h4 className='font-semibold text-xl text-Primary my-5'>Suppliers by region</h4>
                <div className='grid grid-cols-5 gap-4'>
                    <Region img={UAE} title='Arabic Emirates' desc='shopname.ae' />
                    <Region img={UAE} title='Arabic Emirates' desc='shopname.ae' />
                    <Region img={UAE} title='Arabic Emirates' desc='shopname.ae' />
                    <Region img={UAE} title='Arabic Emirates' desc='shopname.ae' />
                    <Region img={UAE} title='Arabic Emirates' desc='shopname.ae' />
                    <Region img={UAE} title='Arabic Emirates' desc='shopname.ae' />
                    <Region img={UAE} title='Arabic Emirates' desc='shopname.ae' />
                    <Region img={UAE} title='Arabic Emirates' desc='shopname.ae' />
                    <Region img={UAE} title='Arabic Emirates' desc='shopname.ae' />
                    <Region img={UAE} title='Arabic Emirates' desc='shopname.ae' />
                </div>
            </div>
        </div>
    )
}
