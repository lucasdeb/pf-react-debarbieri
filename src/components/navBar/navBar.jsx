import { NavLink, Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import './nav.css';

const navBar = () => {
    return (
        <nav>
            <Link to='/' className='nombre-ecommerce'>NOVA</Link>
            <ul>
                <NavLink to={`/categoria/remeras`}>Remeras</NavLink>
                <NavLink to={`/categoria/buzos`}>Buzos</NavLink>
                <NavLink to={`/categoria/pantalones`}>Pantalones</NavLink>
                <NavLink to={`/categoria/gafas`}>Gafas</NavLink>
                <li><CartWidget /></li>
            </ul>
        </nav>
    )
}

export default navBar;