import { NavLink, Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import './nav.css';

const navBar = () => {
    return (
        <nav>
            <Link to='/' className='nombre-ecommerce'>NOVA</Link>
            <ul>
                <NavLink to={`/categoria/remeras`} className='nav-categoria-links'>Remeras</NavLink>
                <NavLink to={`/categoria/buzos`} className='nav-categoria-links'>Buzos</NavLink>
                <NavLink to={`/categoria/pantalones`} className='nav-categoria-links'>Pantalones</NavLink>
                <NavLink to={`/categoria/gafas`} className='nav-categoria-links'>Gafas</NavLink>
                <NavLink to={`/cart`} className='nav-categoria-links-cart'><CartWidget /></NavLink>
            </ul>
        </nav>
    )
}

export default navBar;