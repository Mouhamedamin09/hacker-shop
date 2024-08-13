import React, { useState, useEffect, useContext } from 'react';
import { FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './ShoppingCart.css';
import arrow from '../assets/ArrowRight.png';
import casque from '../assets/1.jpg';
import { CartContext } from './CartContext';

const ShoppingCart = () => {
  const { cartItems, setCartItems } = useContext(CartContext);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleRemove = (id) => {
    const updatedItems = cartItems.filter(item => item.id !== id);
    setCartItems(updatedItems);
    localStorage.setItem('cart', JSON.stringify(updatedItems));
  };

  const handleQuantityChange = (id, delta) => {
    const updatedItems = cartItems.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + delta } : item
    );
    setCartItems(updatedItems);
    localStorage.setItem('cart', JSON.stringify(updatedItems));
  };

  // Calculate subtotal
  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const discount = 24;
  const total = subtotal - discount;

  return (
    <div className="shopping-cart">
      <div className="cart-items">
        <h2>Shopping Cart</h2>
        <div className="scroll-view">
          <table className="cart-item-table">
            <thead>
              <tr>
                <th>PRODUCTS</th>
                <th>PRICE</th>
                <th>QUANTITY</th>
                <th>SUB-TOTAL</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map(item => (
                <tr key={item.id}>
                  <td className="item-product">
                    <img src={item.mainImage || casque} alt={item.name} />
                    <p>{item.name}</p>
                  </td>
                  <td className="item-price">
                    <p>${item.price}</p>
                  </td>
                  <td className="item-quantity">
                    <div className="quantity-control">
                      <button onClick={() => handleQuantityChange(item.id, -1)} disabled={item.quantity === 1}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
                    </div>
                  </td>
                  <td className="item-subtotal">
                    <p>${item.price * item.quantity}</p>
                  </td>
                  <td className="remove-item">
                    <button onClick={() => handleRemove(item.id)}>
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <hr className='hr-b' />
        <button className="return-shop" onClick={() => navigate('/catalog')}>RETURN TO SHOP</button> {/* Updated button */}
      </div>
      <div>
        <div className="cart-totals">
          <h2>Cart Totals</h2>
          <div className="totals">
            <p><span className='graytext'>Sub-total:</span> <span>${subtotal}</span></p>
            <p><span className='graytext'>Shipping:</span> <span>Free</span></p>
            <p><span className='graytext'>Discount:</span> <span>${discount}</span></p>
            <hr className="red-border"></hr>
            <p>Total: <span>${total}</span></p>
          </div>
          <div className="checkOutBtn">
            <button className="checkout" onClick={() => navigate('/Form')}>PROCEED TO CHECKOUT</button>
            <img src={arrow} width={20} height={20} alt="Arrow" />
          </div>
        </div>
        <div className="ruspina-points">
          <input type="email" placeholder="Email address" />
          <button className="apply-coupon">APPLY COUPON</button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
