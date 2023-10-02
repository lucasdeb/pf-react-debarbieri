import cart from './cart.svg';
import './cartWidget.css';


const CartWidget = () => {
    return (
        <div className='cart-widget'>
            0 
            <img src={cart} alt="cart-widget"/>
        </div>
    )
}

export default CartWidget;