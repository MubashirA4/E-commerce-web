import React from 'react'
import { PiSquaresFourFill } from "react-icons/pi";
import { VscThreeBars } from "react-icons/vsc";


const FeatureNav = () => {
    return (
        <div className='flex bg-white justify-between items-center py-2 px-2 border border-customborder rounded-md'>
            <div className=''>
                <p className='font-regular text-base text-Primary  '>12,911 items in
                    <span className='font-bold'> Mobile accessory</span>
                </p>
            </div>
            <div className='flex gap-2'>
                <div class="flex items-center">
                    <input id="red-checkbox"
                        type="checkbox"
                        class="w-4 h-4 accent-blue-500" />
                    <label for="red-checkbox"
                        class="ml-2 font-regular text-base text-Primary">
                        Verified only
                    </label>

                </div>
                <div>
                    <select name="" id="" className='font-regular text-Primary text-base bg-white border border-customborder rounded-md focus:outline-none p-1 w-32'>
                        <option value="Featured" >Featured</option>
                    </select>
                </div>
                <div className='flex'>
                    <div className='flex border p-1 border-customborder rounded-l-md items-center hover:bg-background2'>
                        <PiSquaresFourFill className='text-Primary' size={20}/>
                    </div>
                    <div className='flex items-center p-1 border border-customborder rounded-r-md hover:bg-background2'>
                        <VscThreeBars size={20} />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default FeatureNav