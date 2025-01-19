import React from 'react'

export const Brand = ({image, title, desc}) => {
  return (
    <div className="flex flex-col justify-between py-4 border border-customborder rounded-md bg-white shadow-sm ">
      <div className="flex flex-col items-center"> 
        <img src={image} alt="" className="w-32 " />
      </div>
      <div className='pl-4 mt-4'>
        <h4 className="font-medium text-Primary text-lg">{title}</h4>
        <p className='font-regular text-[#8B96A5]'>{desc} </p>
      </div>
    </div>
  )
}
