import React from 'react'
import RelatedProduct from '../../../components/relatedproduct'
import Purse from '../../../assets/Clothes/purse.png'

const Products = () => {
  return (
    <>
        <section className='drop-shadow rounded-md bg-white px-4'>
        <h4 className='font-semibold text-base text-Primary pt-2'>Related Products</h4>
        <div className='grid grid-cols-6 gap-4 pb-6'>
        <RelatedProduct image={Purse} className='flex flex-col gap-3' imgWidth='w-32' title='Xiaomi Redmi 8 Original ' sprice='$32.00' eprice='$40.00'/>
        <RelatedProduct image={Purse} className='flex flex-col gap-3' imgWidth='w-32' title='Xiaomi Redmi 8 Original ' sprice='$32.00' eprice='$40.00'/>
        <RelatedProduct image={Purse} className='flex flex-col gap-3' imgWidth='w-32' title='Xiaomi Redmi 8 Original ' sprice='$32.00' eprice='$40.00'/>
        <RelatedProduct image={Purse} className='flex flex-col gap-3' imgWidth='w-32' title='Xiaomi Redmi 8 Original ' sprice='$32.00' eprice='$40.00'/>
        <RelatedProduct image={Purse} className='flex flex-col gap-3' imgWidth='w-32' title='Xiaomi Redmi 8 Original ' sprice='$32.00' eprice='$40.00'/>
        <RelatedProduct image={Purse} className='flex flex-col gap-3' imgWidth='w-32' title='Xiaomi Redmi 8 Original ' sprice='$32.00' eprice='$40.00'/>
        </div>
        </section>
        <section className='flex items-center justify-between bg-gradient-to-r from-[#237CFF] to-[#005ADE] px-4 py-6 rounded-md mt-4 mb-10'>
            <div>
                <h2 className='font-semibold text-2xl text-white'>Super discount on more than 100 USD</h2>
                <p className='font-regular text-base text-white'>Have you ever finally just write dummy info</p>
            </div>
            <div>
                <button className='font-medium text-base text-white py-3 px-5 rounded-md bg-customorange'>
                    Shop now
                </button>
            </div>
        </section>
    </>
  )
}

export default Products