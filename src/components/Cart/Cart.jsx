import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import './Cart.css';

const Cart = () => {

    const {cart, clearCart, totalQuantity, cartTotal} = useContext(CartContext)

    if(totalQuantity() === 0){
        return(
            <div className="empty-cart-container">
                <p className="empty-cart-message">Carrito vacio... A compraaar</p>
                <Link to='/' className="counter-button">Productos</Link>
            </div>
        )
    }
    else{
        return (
            <div className="cart-container">
            <div className="cart-items-list">
                { cart.map(item => <CartItem key={item.id} item={item} />)}
            </div>
            <h3 className="cart-total">Total: ${cartTotal()}</h3>
            <button className="clear-cart-btn" onClick={() => clearCart()}>Borrar Items</button>
            <Link to='/checkout' className="checkout-link">Checkout</Link>
        </div>
    )
    }
}

export default Cart;
