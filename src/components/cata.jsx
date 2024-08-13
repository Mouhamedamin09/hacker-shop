
import React, { useState, useEffect } from 'react';
import './cata.css';
import img1 from '../assets/img1.jpeg';
import img2 from '../assets/img2.jpeg';
import img3 from '../assets/img3.jpeg';
import products from "./Data"
import { useNavigate } from 'react-router-dom';


function Product({product}) {
  const navigate = useNavigate();
 
  

  const handleBuyNow = () => {
    console.log("data send to productDetails")
    navigate(`/product/${product.id}`);

  };
  return (
    <div className="product">
      <div className="product-image">
        <img src={product.images[0]} alt={product.name} />
      </div>
      <div className="product-info">
        <div className="product-title">
          <h5>{product.name}</h5>
        </div>
        <div className="product-price">
          <span className="price-original">{product.price} TND</span>
        </div>
        <button onClick={handleBuyNow} className="buy-now-button">
          Buy Now
        </button>
      </div>
    </div>
  );
}

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="scroll-to-top">
      {isVisible && (
        <button onClick={scrollToTop} className="scroll-button">
          ↑
        </button>
      )}
    </div>
  );
}

function Cata() {
  

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;

  // Calculate the products to display on the current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(products.length / productsPerPage);

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="App">
      <div className="container">
        {products.map((product, index) => (
          <Product key={index} product={product} />
        ))}
      </div>
      <div className="pagination">
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
      <ScrollToTop />
    </div>
  );
}

export default Cata;

