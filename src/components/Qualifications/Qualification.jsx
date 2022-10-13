import React  from 'react'
import './qualification.scss'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';



const Qualification = () => {
  return (
    <div className="container skills  " id='skills'>
        <div className='h4 text-center'>Texnalogiyalar</div>
        <Carousel className='caurosel'>
            <div className="skill">
                <img src={require('./assets/html.jpg')} alt="HTML" />
                <p>HTML</p>
            </div>
            <div className="skill">
                <img src={require('./assets/css.jpg')} alt="CSS" />
                <p>CSS</p>
            </div>
            <div className="skill">
                <img src={require('./assets/sass.png')} alt="Sass" />
                <p>Sass</p>
            </div>
            <div className="skill">
                <img src={require('./assets/tailwind.png')} alt="CSS" />
                <p>Tailwind</p>
            </div>
            <div className="skill">
                <img src={require('./assets/bootstrap.jpg')} alt="Bootstrap" />
                <p>Bootstrap</p>
            </div>
            <div className="skill">
                <img src={require('./assets/JavaScript.png')} alt="Javascript" />
                <p>JavaScript</p>
            </div>
            <div className="skill">
                <img src={require('./assets/ReactJs.jpg')} alt="React JS" />
                <p>React JS</p>
            </div>
            <div className="skill">
                <img src={require('./assets/Redux.png')} alt="Redux Js" />
                <p>Redux JS</p>
            </div>
            <div className="skill">
                <img src={require('./assets/vue.png')} alt="Redux Js" />
                <p>Vue JS</p>
            </div>
            
            </Carousel>


    </div>
  )
}

export default Qualification