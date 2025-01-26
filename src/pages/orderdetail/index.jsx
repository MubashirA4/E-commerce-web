import React from 'react'
import CategoryNavbar from '../../layout/categorynavbar'
import BottomNavBar from '../../layout/components/bottomnavbar'
import InStock from './components/instock'
import Descrtiption from './components/desctiption'
import Products from './components/products'

const OrderDetail = () => {
  return (
    <>
    <CategoryNavbar/>
    <BottomNavBar/>
    <div className='container mx-auto'>
      <InStock/>
      <Descrtiption/>
      <Products/>
    </div>
    </>
  )
}

export default OrderDetail