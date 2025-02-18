import React from 'react'
import FeatureNav from '../../../layout/components/featuresnav'
import CardRow from '../../../components/Mobile/cardrow';
import Cannon from '../../../assets/mobile/canon EOS 2000.png'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Main = () => {
  return (
    <div className=''>
      <FeatureNav />
      <div className='border bg-white border-customborder mt-4 rounded-md p-4'>
        <CardRow img={Cannon} title='Canon Cmera EOS 2000, Black 10x zoom' price='$998.00' discount='$1128.00'
          order='154 order' Fship='Free Shipping' para='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua' details='View details'
        />
      </div>
      <div className='border bg-white border-customborder mt-4 rounded-md p-4'>
      <CardRow img={Cannon} title='Canon Cmera EOS 2000, Black 10x zoom' price='$998.00' discount='$1128.00'
          order='154 order' Fship='Free Shipping' para='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua' details='View details'
        />
      </div>
      <div className='border bg-white border-customborder mt-4 rounded-md p-4'>
      <CardRow img={Cannon} title='Canon Cmera EOS 2000, Black 10x zoom' price='$998.00' discount='$1128.00'
          order='154 order' Fship='Free Shipping' para='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua' details='View details'
        />
      </div>
      <div className='border bg-white border-customborder mt-4 rounded-md p-4'>
      <CardRow img={Cannon} title='Canon Cmera EOS 2000, Black 10x zoom' price='$998.00' discount='$1128.00'
          order='154 order' Fship='Free Shipping' para='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua' details='View details'
        />
      </div>
      <div className='border bg-white border-customborder mt-4 rounded-md p-4'>
      <CardRow img={Cannon} title='Canon Cmera EOS 2000, Black 10x zoom' price='$998.00' discount='$1128.00'
          order='154 order' Fship='Free Shipping' para='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua' details='View details'
        />
      </div>
      <div className='flex justify-end gap-3 my-6'>
        <div>
          <select name="" id="" className='font-regular text-Primary text-base bg-white border border-customborder rounded-md p-1 w-28'>
            <option value="show" >Show 10</option>
          </select>
        </div>
        <div>
          <div className='flex bg-white' >
            <button className='flex border px-3 border-customborder rounded-l-md items-center hover:bg-background2'>
              <IoIosArrowBack className='text-Primary' size={20} />
            </button>
            <button className='flex border px-3 border-customborder items-center hover:bg-background2'>
              1
            </button>
            <button className='flex border px-3 border-customborder  items-center hover:bg-background2'>
                2
            </button>
            <button className='flex border px-3 border-customborder  items-center hover:bg-background2'>
              3
            </button>
            <button className='flex border px-3 py-1.5 border-customborder rounded-r-md items-center hover:bg-background2'>
              <IoIosArrowForward className='text-Primary' size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main