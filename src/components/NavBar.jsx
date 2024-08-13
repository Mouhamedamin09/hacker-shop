import React, { useState, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import Sidebar from './Sidebar.jsx';
import styles from './NavBar.module.css';
import logo from '../assets/ShOpy.png';
import cart from '../assets/Untitled design 1.png';
import { FaBars } from 'react-icons/fa';
import { CartContext } from './CartContext';

const NavBar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { cartItems } = useContext(CartContext);
  const location = useLocation();
  const isCatalogPage = location.pathname !== '/';

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <nav className={styles.navbar}>
        <button className={styles.menuButton} onClick={toggleSidebar}>
          <FaBars />
        </button>
        <Link to="/"><img src={logo} alt="Logo" className={styles.logo} /></Link>
        <ul className={styles.navLinks}>
          <li>
              <Link to="/catalog" className={styles.navLink}>Catalog</Link>
          </li>
          <li>
            {isCatalogPage ? (
             
              <Link to="/#aboutUs" className={styles.navLink}>About us</Link>
            ) : (
              <ScrollLink
              to="aboutUs"
              smooth={true}
              duration={500}
              offset={-70}
              className={styles.navLink}
            >
              About us
            </ScrollLink>
            )}
          </li>
          <li>
            {isCatalogPage ? (
             <Link to="/#contact" className={styles.navLink}>Contact</Link>
            ) : (
              
              <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              offset={-70}
              className={styles.navLink}
            >
              Contact
            </ScrollLink>
            )}
          </li>
          <li>
            {isCatalogPage ? (
                <Link to="/" className={styles.navLink}>Guide</Link>
            ) : (
            
              <ScrollLink
              to="guide"
              smooth={true}
              duration={500}
              offset={-70}
              className={styles.navLink}
            >
              Guide
            </ScrollLink>
            )}
          </li>
          <li className={styles.cartContainer}>
            <Link to="/cart" className={styles.navLink}>
              <img src={cart} alt="Cart" className={styles.cartIcon} />
              {cartItems.length > 0 && <span className={styles.cartCount}>{cartItems.length}</span>}
            </Link>
          </li>
        </ul>
      </nav>
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
    </>
  );
};

export default NavBar;
