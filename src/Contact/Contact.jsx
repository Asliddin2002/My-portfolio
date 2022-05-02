import React from 'react'
import './contact.scss'
import {FaTelegramPlane} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaPhone} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {FaCode} from 'react-icons/fa'

const Contact = () => {
  return (
    <div className='container contact' id='contact'>
        <div className='h4 text-center'>Contact</div>
        <div className="row">
            <div className="col-sm-6 col-md-4 col-lg-4 shadow">
                <div className="box">
                    <a href="https://t.me/Kholturaev_A">
                    <FaTelegramPlane/>
                    </a>
                </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-4 shadow">
                <div className="box">
                    <a href="http://instagram.com/kholturaev_asliddin_/">
                    <FaInstagram/>
                    </a>
                </div>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4 shadow ">
                <div className="box">
                    <FaPhone/>
                    <p>+998 99 556 58 67</p>
                </div>
            </div>
        </div>
        <div className="row mt-3">
            <div className="extra col-4 shadow">
                <a href="https://github.com/Asliddin2002">
                <FaGithub/>

                </a>
            </div>
            <div className="extra col-4 shadow">
                <a href="https://www.linkedin.com/in/asliddin-kholturaev-264517235">
                <FaLinkedin/>
                </a>
            </div>
            <div className="extra col-4 shadow">
                <a href="https://www.codewars.com/users/Asliddin2002">

                <FaCode/>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Contact