import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount'
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const ItemDetail = ({id, name, img, categoria, descripcion, precio, stock}) => {

    const [quantityAdded, setQuantityAdded] = useState(0)

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {id, name, precio}

        addItem(item, quantity)
    }

    return(
        <article className="item-article">
            <header className="item-header">
                <h2 className="item-title">{name}</h2>
            </header>
            <picture className="item-picture">
                <img src={img} alt={name} className="item-image"/>
            </picture>
            <section className="item-section">
                <p className="item-categoria">Categoria: {categoria}</p>
                <p className="item-precio">Precio: ${precio}</p>
                <p className="item-precio">Stock Disponible: {stock}</p>
                <p className="item-descripcion">Descripcion: {descripcion}</p>
            </section>
            <footer className="item-footer">
                <div>
                {
                    quantityAdded > 0 ? (<Link to='/cart' style={{textDecoration: 'none'}}>Carrito</Link>) : (<ItemCount inicial={1} stock={stock} onAdd={handleOnAdd} className="item-count"/>)
                }
                </div>
            </footer>
        </article>
    )
}

export default ItemDetail;