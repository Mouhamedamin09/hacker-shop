import React from "react";
import './AboutUsSection.css'

function AboutUsSection(){
    return (
        <div className="about-section">
        <img src="/Blue.jpg" alt="Background" className="background-image" />
        <h1>About us</h1>
        <div className="Logo">
            <img src="ruspinaLogo.png" alt="Ruspina"/>
            <div className="logo-text"> <span style={{ color: '#CCA000' }}>AIESEC RUSPINA</span> , A local committee of AIESEC in Tunisia was founded in 2014 and covers the Monastir and Mahdia campuses</div>
        </div>
       
      
    </div>
        )
        }
         export default AboutUsSection