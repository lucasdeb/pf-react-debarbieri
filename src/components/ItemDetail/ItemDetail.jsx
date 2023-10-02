import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({id, name, img, categoria, descripcion, precio, stock}) => {
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
                <p className="item-precio">Stock Disponible: ${stock}</p>
                <p className="item-descripcion">Descripcion: {descripcion}</p>
            </section>
            <footer className="item-footer">
                <ItemCount 
                    inicial={0} 
                    stock={stock} 
                    onAdd={(quantity) => console.log('Cantidad Agregada', quantity)} 
                    className="item-count"
                />
            </footer>
        </article>
    )
}

export default ItemDetail;