import React from 'react'
import Cart from '../../../components/cart'
import Tshirt from '../../../assets/Clothes/Tshirt(gray).png'
import { IoMdArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom';
import AmericanEx from '../../../assets/webcart/american express.png'
import Misc from '../../../assets/webcart/Misc(circle).png'
import Path from '../../../assets/webcart/path.png'
import VisaCard from '../../../assets/webcart/visa.png'
import Paycard from '../../../assets/webcart/pay.png'


const MyCart = () => {
    return (
        <>
            <h2 className='font-semibold text-2xl text-Primary my-6'>My cart (3)</h2>
            <main className='flex gap-3'>
                <section className='w-9/12'>
                    <div className='bg-white border border-customborder p-3'>
                        <Cart image={Tshirt} title='T-shirts with multiple colors, for men and lady' size='medium' color='blue'
                            material='plastic' seller='Artel Market' price='$78.99' qty='9' />
                        <hr className='border border-customborder my-4' />
                        <Cart image={Tshirt} title='T-shirts with multiple colors, for men and lady' size='medium' color='blue'
                            material='plastic' seller='Artel Market' price='$78.99' qty='9' />
                        <hr className='border border-customborder my-4' />
                        <Cart image={Tshirt} title='T-shirts with multiple colors, for men and lady' size='medium' color='blue'
                            material='plastic' seller='Artel Market' price='$78.99' qty='9' />
                        <hr className='border border-customborder my-4' />
                        <div className='flex justify-between'>
                            <Link to="/" className='flex items-center gap-3 border border-customborder text-customLblue w-fit px-3 py-1 rounded-md hover:bg-gradient-to-r hover:from-[#127FFF] hover:to-[#0067FF] hover:text-white'>
                                <IoMdArrowBack />
                                <span>Back to shop</span>
                            </Link>
                            <button className='flex items-center gap-3 border border-customborder text-customLblue w-fit px-3 py-1 rounded-md hover:bg-gradient-to-r hover:from-[#127FFF] hover:to-[#0067FF] hover:text-white'>
                                Remove all
                            </button>
                        </div>
                    </div>
                </section>
                <section className='w-3/12'>
                    <div className='px-3 py-3 border border-customborder bg-white rounded-md'>
                        <p>Have a coupon?</p>
                        <div className='flex border border-customborder rounded-md my-3'>
                            <input type="text" placeholder='Add coupon' className='pl-2 w-40 border-none' />
                            <button className='flex border-l px-4 text-customLblue py-1'>Apply</button>
                        </div>
                    </div>
                    {/* Checkout */}
                    <div>
                        <div className='px-3 py-5 mt-4 border border-customborder bg-white rounded-md'>
                            <div className='flex justify-between'>
                                <h4 className='font-regular text-base text-customGray2'>Subtotal:</h4>
                                <p className='font-regular text-base text-customGray2'>$1402.97</p>
                            </div>
                            <div className='flex justify-between py-2'>
                                <h4 className='font-regular text-base text-customGray2'>Discount:</h4>
                                <p className='font-regular text-base text-customred'>- $60.00</p>
                            </div>
                            <div className='flex justify-between'>
                                <h4 className='font-regular text-base text-customGray2'>Tax:</h4>
                                <p className='font-regular text-base text-customgreen'>+ $14.00</p>
                            </div>
                            <hr className='border border-customborder my-4' />
                            <div className='flex justify-between'>
                                <h4 className='font-semibold text-base text-Primary'>Total:</h4>
                                <p className='font-semibold text-xl text-Primary'>$1357.97</p>
                            </div>
                            <button className='font-medium text-lg text-white bg-customgreen w-full py-2 rounded-md mt-4'>Checkout</button>
                            <div className='flex justify-center items-center gap-1 mt-3'>
                                <div className='border border-customborder rounded-md w-fit px-1 py-2'>
                                    <img src={AmericanEx} alt="" className='w-8'/>
                                </div>
                                <div className='border border-customborder rounded-md w-fit px-2 py-1'>
                                    <img src={Misc} alt="" className='w-7'/>
                                </div>
                                <div className='border border-customborder rounded-md w-fit px-3 py-1'>
                                    <img src={Path} alt="" className='w-4'/>
                                </div>
                                <div className='border border-customborder rounded-md w-fit px-1 py-2'>
                                    <img src={VisaCard} alt="" className='w-8'/>
                                </div>
                                <div className='border border-customborder rounded-md w-fit px-1 py-2'>
                                    <img src={Paycard} alt="" className='w-8'/>
                                </div>
                                 
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default MyCart