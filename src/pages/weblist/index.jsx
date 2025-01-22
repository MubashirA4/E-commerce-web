import React from 'react'
import Sidebar from './components/sidebar'
import CategoryNavbar from '../../layout/categorynavbar'
import BottomNavBar from '../../layout/components/bottomnavbar'
import Main from './components/main'

const ProductList = () => {
  return (
    <>
        <CategoryNavbar/>
        <BottomNavBar/>
        <div>
          <Sidebar />
          <Main />
        </div>
    </>
  )
}

export default ProductList