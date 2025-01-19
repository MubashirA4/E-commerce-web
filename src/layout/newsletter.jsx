import React from 'react'
import { MdOutlineMail } from "react-icons/md";

export const Newsletter = () => {
  return (
    <div className='bg-background2 py-8 mt-8'>
      <div className='container mx-auto text-center'>
        <h4 className='font-semibold text-Primary text-lg'>Subscribe on our newsletter</h4>
        <p className='font-regular text-customGray'>Get daily news on upcoming offers from many suppliers all over the world</p>
        <div className='flex justify-center gap-2 mt-4'>
          <div className='flex gap-2 bg-white px-2 py-1 border w-64 border-customborder rounded-md'>
            <div className='flex items-center'>
              <MdOutlineMail className='text-customGray' size={20} />
            </div>
            <div className='flex items-center'>
              <input type="email" name="" id="" placeholder='Email' className='h-fit placeholder:font-regular placeholder:text-customGray placeholder:text-lg' />
            </div>
          </div>
          <button className="bg-gradient-to-r from-[#127FFF] to-[#0067FF] text-white font-semibold px-3 py-1 rounded shadow-lg hover:opacity-90">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  )
}
