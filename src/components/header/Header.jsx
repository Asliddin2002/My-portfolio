import React from 'react'
import './header.scss'
import {FaMouse} from 'react-icons/fa'
import {FaRegWindowMinimize} from 'react-icons/fa'



const Header = () => {
  return (
    <div className='header' id='header'>
        <div className="title text-center">
            <p >Men</p>
            <h5>Asliddin Xolto`rayev</h5>
            <div className="sub">FRONT-END WEB DEVELOPER</div>
        </div>
        <div className="img-wraper">
            <img src={require('../assets/Kholturaev.jpg')} alt="img" />
        </div>
        <div className="scroll">
            <p> <FaRegWindowMinimize/> Scroll Down <FaMouse className='mouse'/> <FaRegWindowMinimize/></p>
        </div>
    </div>
  )
}

export default Header