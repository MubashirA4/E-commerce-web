import React from 'react'

export const Card2 = ({ img, title, desc, price }) => {
  return (
    <div className='font-sans p-4 border h-full'>
      <h4 className='text-gray-800 '>{title} </h4>
      <div className='grid grid-cols-2 justify-between mt-2'>
        <p className='text-xs text-gray-500'>{desc} <br /> {price} </p>
        <img src={img} alt="" className='max-w-20' />
      </div>
    </div>
  )
}
