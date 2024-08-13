import React from "react";
import './HeroSection.css'
import { useNavigate } from 'react-router-dom';
import circle from '../assets/circles.png'


function HeroSection(){

   const navigate = useNavigate(); // Initialize useNavigate
 return (
    <div className="hero-section" >
     <h1>Discover signature <span style={{ display: 'block' }}>style</span></h1>
     <h1><span className="line"></span>with <span style={{ color: '#CCA000', display: 'block' }}>AIESEC RUSPINA's</span> <span style={{ fontSize: "40px"}}> Exclusive products</span></h1>
     <div className="Donut">
     <img src={circle} alt="circles"/>
    </div>
    <div>
    <button className="yellow-button" onClick={() => navigate('/catalog')}>
          Start Shopping <span className="arrow">↗</span>
         </button>
         </div>
    
    </div>
 )
}
export default HeroSection