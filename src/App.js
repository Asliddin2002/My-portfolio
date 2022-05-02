import React,{useState, useEffect} from 'react'
import './App.css';
import Header from './components/header/Header';
import Navbar from './Navbar';
import About from './components/About/About';
import Qualification from './components/Qualifications/Qualification';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './Contact/Contact';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

function App() {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(()=> {
      setLoading(false)
    }, 5000)
  }, [])

  return (
    <div className="App">
      {
        loading ? 
        <div className='loader' >
          <ClimbingBoxLoader
        className = "loader" 
        color={"#fff"} 
        loading={loading} 
        size={30} />
        </div>
        
        :
        <div className="components">
          <Navbar/>
          <Header/>
          <About/>
          <Qualification/>
          <Portfolio/>
          <Contact/>
        </div>
        
      }
      
    </div>
  );
}

export default App;
