import React from 'react'
import FeatureNav from '../../../layout/components/featuresnav'
import CardCol from '../../../components/Mobile/cardcol'
import Phone from '../../../assets/mobile/canon EOS 2000.png'

const Main = () => {
  return (
    <>
      <FeatureNav />
      <div className='grid grid-cols-3 gap-4 mt-4'>
        <div>
          <CardCol img={Phone} price='$99.50' discount='$1128.00' para='GoPro HERO6 4K Action Camera - Black'
           />
        </div>
        <div >
          <CardCol img={Phone} 
             price='$99.50' discount='$1128.00' para='GoPro HERO6 4K Action Camera - Black'  />
        </div>
        <div>
          <CardCol img={Phone} 
             price='$99.50' discount='$1128.00' para='GoPro HERO6 4K Action Camera - Black' />
        </div>
        <div>
          <CardCol img={Phone} 
             price='$99.50' discount='$1128.00' para='GoPro HERO6 4K Action Camera - Black' />
        </div>
        <div>
          <CardCol img={Phone} 
             price='$99.50' discount='$1128.00' para='GoPro HERO6 4K Action Camera - Black' />
        </div>
        <div>
          <CardCol img={Phone} 
             price='$99.50' discount='$1128.00' para='GoPro HERO6 4K Action Camera - Black' />
        </div>
        <div>
          <CardCol img={Phone} 
             price='$99.50' discount='$1128.00' para='GoPro HERO6 4K Action Camera - Black' />
        </div>
        <div>
          <CardCol img={Phone} 
             price='$99.50' discount='$1128.00' para='GoPro HERO6 4K Action Camera - Black' />
        </div>
        <div>
          <CardCol img={Phone} 
             price='$99.50' discount='$1128.00' para='GoPro HERO6 4K Action Camera - Black' />
        </div>
      </div>
    </>
  )
}

export default Main