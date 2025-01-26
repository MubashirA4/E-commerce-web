import React from 'react'
import FeatureNav from '../../../layout/components/featuresnav'
import MobileCard from '../../../components/mobilecard'
import Phone from '../../../assets/mobile/canon EOS 2000.png'

const Main = () => {
  return (
    <>
      <FeatureNav />
      <div className='grid grid-cols-3 gap-4'>
        <div className='border bg-white border-customborder mt-4 rounded-md p-4'>
          <MobileCard img={Phone} imgWidth="w-52" imgHeight="h-48" className='flex flex-col' price='$99.50' discount='$1128.00' para='GoPro HERO6 4K Action Camera - Black'
           />
        </div>
        <div className='border bg-white border-customborder mt-4 rounded-md p-4'>
          <MobileCard img={Phone} imgWidth="w-52"
            imgHeight="h-48" price='$99.50' discount='$1128.00' para='GoPro HERO6 4K Action Camera - Black' className='flex flex-col' />
        </div>
        <div className='border bg-white border-customborder mt-4 rounded-md p-4'>
          <MobileCard img={Phone} imgWidth="w-52"
            imgHeight="h-48" price='$99.50' discount='$1128.00' para='GoPro HERO6 4K Action Camera - Black' className='flex flex-col' />
        </div>
      </div>
    </>
  )
}

export default Main