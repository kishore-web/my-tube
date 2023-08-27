import React from 'react'
import "../Styles/leftnavbarexp.css";
import {FaHome} from "react-icons/fa"
import {MdVideoLibrary, MdOutlineSubscriptions, MdOutlineAppShortcut,MdOutlineHistory} from "react-icons/md"

const LeftNavbarExp = () => {
  return (
    <div className='left-bar'>
      <ul className='leftbar-container'>
        <li> <div className='nav-icons'><FaHome /> </div> Home</li>
        <li> <div className='nav-icons'><MdOutlineAppShortcut /> </div> Shorts</li>
        <li> <div className='nav-icons'><MdOutlineSubscriptions /> </div> Subscriptions</li>
        <li> <div className='nav-icons'><MdVideoLibrary /> </div> Library</li>
        <li> <div className='nav-icons'><MdOutlineHistory /> </div> History</li>
      
      </ul>
    </div>
  )
}

export default LeftNavbarExp