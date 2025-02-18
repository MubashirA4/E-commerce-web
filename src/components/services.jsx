import React from 'react'

export const Services = ({ Icon, image, desc1, desc2 }) => {
  return (
    <div className='bg-white border rounded-md'>
      <div className='relative'>
        <img src={image} alt="" className='w-full h-auto object-cover' />
        <div className='absolute lg:top-20 lg:right-4 xl:top-28'>
          <div className="bg-customZinc border-2 border-white w-12 h-12 rounded-full flex items-center justify-center">
            <img src={Icon} alt="" className="w-4 h-4" />
          </div>
        </div>
      </div>
      <div className='px-4 pt-3 pb-6'>
        <p className='font-semibold text-Primary text-sm'>{desc1} </p>
        <p className='font-semibold text-Primary text-sm'>{desc2} </p>
      </div>
    </div>
  )
}
