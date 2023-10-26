import React from 'react';
import cartImg from './cartImg.svg';
import './cartWidget.css';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    
    const { cart } = useContext(CartContext);

    const totalQuantity = Array.isArray(cart) ? cart.reduce((total, item) => total + (item?.quantity || 0), 0) : 0;

    // Use a CSS class to control the visibility of the widget rather than inline styles
    const visibilityClass = totalQuantity > 0 ? '' : 'hidden';

    return (
        <Link to='/cart' className={`cart-widget ${visibilityClass}`}>
            <img src={cartImg} alt="cart-widget" />
            <p>{totalQuantity}</p>
        </Link>
    )
}

export default CartWidget;
