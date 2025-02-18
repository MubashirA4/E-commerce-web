import React from 'react'

export const Card2 = ({ img, title, desc, price }) => {
  return (
    <div className='font-sans pt-4 pl-4 pr-2 pb-2 border h-full'>
      <h4 className='text-gray-800 '>{title} </h4>
      <div className='grid grid-cols-2 justify-between mt-2'>
        <p className='text-xs text-gray-500'>{desc} <br /> {price} </p>
        <div className='flex justify-end items-end align-bottom bottom-0'>
        <img src={img} alt="" className='max-w-20 ' />
        </div>
      </div>
    </div>
  )
}
