import React from 'react'
import MyCart from './components/mycart'
import SaveForLatter from './components/savforlatter'

const WebCart= () => {
  return (
    <>
    <div className='container mx-auto'>
        <MyCart/>
        <SaveForLatter/>
    </div>
    </>
  )
}

export default WebCart