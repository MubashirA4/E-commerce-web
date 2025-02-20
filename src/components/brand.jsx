import React from 'react'

const Brand = ({image, title, desc, className=''}) => {
  return (
    <div className={`border border-customborder h-full rounded-md bg-white shadow-sm ${className}`}>
      <div className="flex flex-col items-center"> 
        <img src={image} alt="" className="w-32 " />
      </div>
      <div className='pl-4 mt-4'>
        <h4 className="font-medium text-Primary text-lg">$ {title}</h4>
        <p className='font-regular text-[#8B96A5]'>{desc} </p>
      </div>
    </div>
  )
}
export default Brand