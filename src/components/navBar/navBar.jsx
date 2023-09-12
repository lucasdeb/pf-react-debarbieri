import CartWidget from '../CartWidget/CartWidget';

const navBar = () => {
    return (
        <nav>
            <a href='/' className='nombre-ecommerce'>NOVA</a>
            <ul>
                <li><a href='/'>Items</a></li>
                <li><a href='/'>About</a></li>
                <li><a href='/'>Contact</a></li>
                <li><CartWidget /></li>
            </ul>
        </nav>
    )
}

export default navBar;