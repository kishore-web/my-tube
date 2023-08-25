import React from 'react'
import '../Styles/header.css'


const Header = () => {
  return (
    <nav className='header flexBox'>
      <div className="header-left">left</div>
      <div className="header-middle">middle</div>
      <div className="header-right">right</div>
    </nav>
  )
}

export default Header