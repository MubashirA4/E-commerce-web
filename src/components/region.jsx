import React from 'react'

const Region = ({img, title, desc}) => {
  return (
    <div className='flex flex-row'>
        <div className='flex justify-center align-middle items-center'>
        <img src={img} alt="flag" />
        </div>
        <div className=' ml-2'>
            <h4 className='font-semibold text-sm text-Primary leading-none'>{title}</h4>
            <p className='font-regular text-sm text-customGray leading-none'>{desc} </p>
        </div>
    </div>
  )
}

export default Region