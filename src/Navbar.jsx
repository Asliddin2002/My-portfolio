import React from 'react'
import './App.css'
import {FaUser} from 'react-icons/fa'
import {FaHome} from 'react-icons/fa'
import {FaBookmark} from 'react-icons/fa'
import {FaBriefcase} from 'react-icons/fa'
import {FaRegCommentAlt} from 'react-icons/fa'


const Navbar = () => {
  return (
    <div className='nav-wraper'>
        <div className="icon">
        <a  href="#header"><FaHome/></a>
        
        </div>
        <div className="icon">
          <a href="#about">
        <FaUser/>

          </a>
        </div>
        <div className="icon">
          <a href="#skills">

        <FaBookmark/>
          </a>
        </div>
        <div className="icon">
          <a href="#portfolio">
          <FaBriefcase/>

          </a>
        </div>
        <div className="icon">
          <a href="#contact">
        <FaRegCommentAlt/>
          </a>
        </div>
    </div>
  )
}

export default Navbar