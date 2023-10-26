import React, { useContext } from 'react';
import { CartContext } from "../../context/CartContext";
import './CartItem.css';

const CartItem = ({ item }) => {
    const { id, name, precio, quantity } = item;
    const { removeItem } = useContext(CartContext);

    const handleRemove = () => {
        removeItem(id);
    };

    return (
        <div className="cart-item-container">
            <article className="cart-item-article">
                <header className="cart-item-header">
                    <h2 className="cart-item-name">{name}</h2>
                </header>
                <section className="cart-item-details">
                    <p className="cart-item-price">Precio: ${precio}</p>
                </section>
                <section className="cart-item-details">
                    <p className="cart-item-quantity">Cantidad: {quantity}</p>
                </section>
                <footer className="cart-item-footer">
                    <button className="cart-item-remove-btn" onClick={handleRemove}>
                        X
                    </button>
                </footer>
            </article>
        </div>
    );
};

export default CartItem;
