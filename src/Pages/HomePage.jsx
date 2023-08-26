import React from 'react'
import Header from '../Components/Header'
import LeftNavbar from '../Components/LeftNavbar'
import MainContent from '../Components/MainContent'
import '../index.css'

const HomePage = () => {
  return (
    <div className='container'>
      <Header />
      <LeftNavbar />
      <MainContent />
    </div>
  )
}

export default HomePage