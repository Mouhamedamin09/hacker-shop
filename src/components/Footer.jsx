import React from 'react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h3>About Us</h3>
          <p>Your E-Shop is a leading online store providing a wide range of products at competitive prices.</p>
        </div>
        <div className="footer-section links">
          <h3>Customer Service</h3>
          <ul>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#shipping">Shipping & Returns</a></li>
            <li><a href="#policy">Privacy Policy</a></li>
            <li><a href="#terms">Terms & Conditions</a></li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>Email: support@youreshop.com</p>
          <p>Phone: +123 456 7890</p>
          <div className="social-icons">
            <a href="https://dribbble.com" aria-label="Dribbble" target="_blank" rel="noopener noreferrer">
              <BsDribbble />
            </a>
            <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <BsFacebook />
            </a>
            <a href="https://github.com" aria-label="Github" target="_blank" rel="noopener noreferrer">
              <BsGithub />
            </a>
            <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <BsInstagram />
            </a>
            <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
              <BsTwitter />
            </a>
          </div>
        </div>
        <div className="footer-section newsletter">
          <h3>Newsletter</h3>
          <p>Subscribe to our newsletter to get the latest updates and offers.</p>
          <form>
            <input type="email" placeholder="Your email address" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Your E-Shop. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
