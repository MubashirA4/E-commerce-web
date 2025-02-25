import React from 'react'
import Sidebar from '../../layout/components/sidebar'
import CategoryNavbar from '../../layout/categorynavbar'
import BottomNavBar from '../../layout/components/bottomnavbar'
import Main from './components/main'
import { Newsletter } from '../../layout/newsletter'

const ProductList = () => {
  return (
    <>
      <CategoryNavbar />
      <BottomNavBar />
      <div className="container mx-auto flex gap-2">
        <div className="w-1/5">
          <Sidebar />
        </div>
        <div className="w-4/5 ml-6">
          <Main />
        </div>
      </div>
      <Newsletter/>
    </>
  )
}

export default ProductList