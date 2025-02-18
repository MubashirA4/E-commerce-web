import React, { useState } from 'react'
import { MdOutlineMail } from "react-icons/md";

export const Newsletter = () => {

    const [email, setEmail] = useState("")

    const handleChange = (e) => {
      setEmail(e.target.value)
    } 

    const handleSubmbit = (e) => {
      e.preventDefault();
      console.log(email)
      setEmail("")
    }

  return (
    <div className='bg-background2 py-8 mt-8'>
      <div className='container mx-auto text-center'>
        <h4 className='font-semibold text-Primary text-lg'>Subscribe on our newsletter</h4>
        <p className='font-regular text-customGray'>Get daily news on upcoming offers from many suppliers all over the world</p>
        <form onSubmit={handleSubmbit} className='flex justify-center gap-2 mt-4'>
          <div className='flex items-center gap-2 bg-white px-2 py-1 border w-64 border-customborder rounded-md'>
            <div>
              <MdOutlineMail className='text-customGray' size={20} />
            </div>
            <div>
              <input 
              type="email" 
              value={email} 
              onChange={handleChange}
              placeholder='Email' 
              className='h-fit focus:outline-none placeholder:font-regular bg-white placeholder:text-customGray placeholder:text-lg' />
            </div>
          </div>
          <button type='submit' className="bg-gradient-to-r from-[#127FFF] to-[#0067FF] text-white font-semibold px-3 py-1 rounded shadow-lg hover:opacity-90">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  )
}
