import React from 'react';
import './Description.css';
import group1 from '../assets/Group 1.png';
import group2 from '../assets/Group 2.png';
import group3 from '../assets/Group 3.png';
import group4 from '../assets/Group 4.png';
import group5 from '../assets/Group 5.png';

const Description = ({description}) => {
  return (
    <div className="container">
      <div className="description-section">
        <h2 className='title'>Description</h2>
        <p>{description}</p>
      </div>
      <div className="feature-section">
        <h2 className='title'>Feature</h2>
        <ul>
          <li><img src={group1} alt="Warranty" />Free 1 Year Warranty</li>
          <li><img src={group2} alt="Shipping" />Shipping 7DT & Fasted Delivery</li>
          <li><img src={group3} alt="Money-back" />100% Money-back guarantee</li>
          <li><img src={group4} alt="Support" />24/7 Customer support</li>
          <li><img src={group5} alt="Secure payment" />Secure payment method</li>
        </ul>
      </div>
      <div className="shipping-section">
        <h2 className='title'>Shipping Information</h2>
        <ul>
          <li>Courier:<span className='light'> 2-4 days, free shipping</span></li>
          <li>Local Shipping: <span className='light'>up to one week, 2DT</span></li>
          <li>UPS Ground Shipping:<span className='light'> 4-6 days, 7DT</span></li>
        </ul>
      </div>
    </div>
  );
}

export default Description;
