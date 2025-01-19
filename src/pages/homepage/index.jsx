import React from 'react'
import Landing from './components/landing'
import Deals from './components/deals'
import Home from './components/home'
import Electronic from './components/electronics'
import Inquiry from './components/Inquiry'
import { Recommended } from './components/recommendedi'
import { Newsletter } from '../../layout/newsletter'

const HomePage = () => {
  return (
    <div>
        <Landing/>
        <Deals/>
        <Home />
        <Electronic />
        <Inquiry />
        <Recommended/>
        <Newsletter/>

    </div>
  )
}

export default HomePage