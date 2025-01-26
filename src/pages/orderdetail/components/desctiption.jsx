import React from 'react'
import { Link } from 'react-router-dom'
import { IoMdCheckmark } from "react-icons/io";
import RelatedProduct from '../../../components/relatedproduct';
import Coat from '../../../assets/Clothes/coat.png'
import TShirt from '../../../assets/Clothes/T-shirt.png'
import Jacket from '../../../assets/Clothes/jacket.png'
import Bag from '../../../assets/Clothes/bag.png'

const Descrtiption = () => {
    return (
        <div className='flex gap-6 my-4'>
            <div className='xl:11/12 lg:w-9/12 bg-white drop-shadow rounded-md '>
                <header>
                    <nav className='border-b'>
                        <ul className='inline-flex gap-10 p-4 mx-4'>
                            <li className='font-medium text-base text-customGray hover:text-customLblue'>
                                <Link to="" className=''>
                                    Description
                                </Link>
                            </li>
                            <li className='font-medium text-base text-customGray hover:text-customLblue '>
                                <Link to="" className=''>
                                    Reviews
                                </Link>
                            </li>
                            <li className='font-medium text-base text-customGray hover:text-customLblue'>
                                <Link to="" className=''>
                                    Shipping
                                </Link>
                            </li>
                            <li className='font-medium text-base text-customGray hover:text-customLblue'>
                                <Link to="" className=''>
                                    About seller
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </header>
                <main className='px-5'>
                    <article className='font-regular text-base text-customGray2 my-4'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </article>
                    <table class="table-auto border border-customborder my-6">
                        <tbody>
                            <tr>
                                <td class="border border-customborder bg-background2 p-2 w-2/12">Model</td>
                                <td class="border border-customborder p-2 w-4/12">#8786867</td>
                            </tr>
                            <tr>
                                <td class="border border-customborder bg-background2 p-2">Style</td>
                                <td class="border border-customborder p-2">Classic style</td>
                            </tr>
                            <tr>
                                <td class="border border-customborder bg-background2 p-2">Certificate</td>
                                <td class="border border-customborder p-2">ISO-898921212</td>
                            </tr>
                            <tr>
                                <td class="border border-customborder bg-background2 p-2">Size</td>
                                <td class="border border-customborder p-2">34mm x 450mm x 19mm</td>
                            </tr>
                            <tr>
                                <td class="border border-customborder bg-background2 p-2">Memory</td>
                                <td class="border border-customborder p-2">36GB RAM</td>
                            </tr>
                        </tbody>
                    </table>
                    <section className='flex flex-col gap-2'>
                        <div className='flex items-center gap-2'>
                            <IoMdCheckmark className='text-customGray' />
                            <h4 className='font-regular text-base text-customGray2'>
                                Some great feature name here
                            </h4>
                        </div>
                        <div className='flex items-center gap-2'>
                            <IoMdCheckmark className='text-customGray' />
                            <h4 className='font-regular text-base text-customGray2'>
                                Lorem ipsum dolor sit amet, consectetur
                            </h4>
                        </div>
                        <div className='flex items-center gap-2'>
                            <IoMdCheckmark className='text-customGray' />
                            <h4 className='font-regular text-base text-customGray2'>
                                Duis aute irure dolor in reprehenderit
                            </h4>
                        </div>
                        <div className='flex items-center gap-2 pb-8'>
                            <IoMdCheckmark className='text-customGray' />
                            <h4 className='font-regular text-base text-customGray2'>
                                Some great feature name here
                            </h4>
                        </div>
                    </section>
                </main>
            </div>
            <aside className='xl:1/12 lg:w-3/12 h-fit p-4 bg-white drop-shadow rounded-md'>
                <h4 className='font-semibold text-base text-Primary pt-2'>You may like</h4>
                <div className='my-2'>
                    <Link to='/'>
                    <RelatedProduct image={Coat} title='Men Blazers Sets Elegant Formal' sprice='$7.00' eprice='$99.50' className='flex gap-3 items-center' imgWidth='xl:w-16 lg:w-16' />
                    </Link>
                </div>
                <div className='my-2'>
                    <Link to='/'>
                    <RelatedProduct image={TShirt} title='Men Blazers Sets Elegant Formal' sprice='$7.00' eprice='$99.50' className='flex gap-3 items-center' imgWidth='xl:w-16 lg:w-16' />
                    </Link>
                </div>
                <div className='my-2'>
                    <Link to='/'>
                    <RelatedProduct image={Jacket} title='Men Blazers Sets Elegant Formal' sprice='$7.00' eprice='$99.50' className='flex gap-3 items-center' imgWidth='xl:w-16 lg:w-16' />
                    </Link>
                </div>
                <div className='my-2'>
                    <Link to='/'>
                    <RelatedProduct image={Bag} title='Men Blazers Sets Elegant Formal' sprice='$7.00' eprice='$99.50' className='flex gap-3 items-center' imgWidth='xl:w-16 lg:w-16' />
                    </Link>
                </div>
                <div className='my-2'>
                    <Link to='/'>
                    <RelatedProduct image={Coat} title='Men Blazers Sets Elegant Formal' sprice='$7.00' eprice='$99.50' className='flex gap-3 items-center' imgWidth='xl:w-16 lg:w-16' />
                    </Link>
                </div>
                <div className='my-2'>
                    <Link to='/'>
                    <RelatedProduct image={Coat} title='Men Blazers Sets Elegant Formal' sprice='$7.00' eprice='$99.50' className='flex gap-3 items-center' imgWidth='xl:w-16 lg:w-16' />
                    </Link>
                </div>
            </aside>
        </div>
    )
}

export default Descrtiption