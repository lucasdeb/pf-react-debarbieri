import cart from './cart.svg';


const CartWidget = () => {
    return (
        <div className='cart-widget'>
            0 
            <img src={cart} alt="cart-widget"/>
        </div>
    )
}

export default CartWidget;