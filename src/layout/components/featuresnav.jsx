import React from 'react'
import { PiSquaresFourFill } from "react-icons/pi";
import { VscThreeBars } from "react-icons/vsc";


const FeatureNav = () => {
  return (
    <div className='flex bg-white justify-between'>
        <div>
            <p className='font-regular text-base text-Primary  '>12,911 items in 
                <span className='font-semibold'> Mobile accessory</span>
            </p>
        </div>
        <div className='flex'>
            <div>
                <input type="checkbox" name="verified" id="" />
                <label htmlFor="verified"> Verified only</label>
            </div>
            <div>
                <select name="" id="" className='bg-white border border-customborder p-1 w-32'>
                    <option value="Featured" >Featured</option>
                </select>
            </div>
            <div className='flex border border-customborder w-fit'>
                <div className=''>
                    <PiSquaresFourFill className='text-Primary'/>
                </div>
                <div className='bg-background2'>
                    <VscThreeBars />
                </div>

            </div>
        </div>
    </div>
  )
}

export default FeatureNav