import React from 'react'
import Header from '../Components/Header'
import LeftNavbarExp from '../Components/LeftNavbarExp'
import MainContent from '../Components/MainContent'
import '../index.css'

const HomePage = () => {
  return (
    <div className='container'>
      <Header />
      <LeftNavbarExp />
      <MainContent />
    </div>
  )
}

export default HomePage