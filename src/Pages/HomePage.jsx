import React from 'react'
import Header from '../Components/Header'
import LeftNavbarExp from '../Components/LeftNavbarExp'
import MainContent from '../Components/MainContent'
import {Outlet} from 'react-router-dom'
import '../index.css'

const HomePage = () => {
  return (
    <div className='container'>
      <LeftNavbarExp />
      <Outlet />
    </div>
  )
}

export default HomePage