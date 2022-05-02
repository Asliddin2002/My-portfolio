import React from 'react'
import './about.scss'

const About = () => {
  return (
    <div className='container about ' id="about">
        <div className="title">
            <div className='h4'>Men haqimda</div>
            <p>Mening ismim Xolto`rayev Asliddin. Yoshim 20 da. Front-End React JS  dasturchisiman. Kasbim - Westminster universitetining 2-kurs talabasiman. Yashash joyim - Toshkent shahar Uchtepa Tumani.</p>
            <div className="btnGroup d-flex align-items-center justify-content-between  ">
                <a href={require("../assets/Asliddin_Kholturaev_CV (6).pdf")} download="Resume" className='btns pinks me-5'>CV</a>
                <a href="#contact" className='btns blues '>Bog`lanish</a>
            </div>
        </div>
    </div>
  )
}

export default About