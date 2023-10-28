import React from 'react';
import cartImg from './cartImg.svg';
import './cartWidget.css';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    
    const {totalQuantity} = useContext(CartContext);

    console.log(totalQuantity())

    const visibilityClass = totalQuantity() > 0 ? '' : 'hidden';

    return (
        <Link to='/cart' className={`cart-widget ${visibilityClass}`}>
            <img src={cartImg} alt="cart-widget" />
            <p>{totalQuantity()}</p>
        </Link>
    )
}

export default CartWidget;
