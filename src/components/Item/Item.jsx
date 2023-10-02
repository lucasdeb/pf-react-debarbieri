import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({id, name, img, precio, stock}) => {
    return(
        <article className='item-article'>
            <header className='item-header'>
                <h2 className='item-title'>{name}</h2>
            </header>
            <picture className='item-picture'>
                <img src={img} alt={name} className='item-image'/>
            </picture>
            <section className='item-section'>
                <p className='item-precio'>Precio: ${precio}</p>
                <p className='item-precio'>Stock: {stock}</p>
            </section>
            <footer className="item-footer">
                <Link to={`/item/${id}`} className='counter-button'>Detalles</Link>
            </footer>
        </article>
    )
}

export default Item;