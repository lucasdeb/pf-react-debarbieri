import './ItemCount.css';
import { useState } from 'react';

const ItemCount = ({stock, inicial, onAdd}) => {
    const [quantity, setQuantity] = useState(inicial);
    
    const increment = () => {
        if (quantity < stock){
            setQuantity(quantity+1);
        }
    }

    const decrement = () => {
        if (quantity > 1){
            setQuantity(quantity-1);
        }
    }

    return(
        <div className="item-count-container">
            <div className="counter-container">
                <button onClick={decrement} className="counter-button">-</button>
                <h3 className="counter-quantity">{quantity}</h3>
                <button onClick={increment} className="counter-button">+</button>
            </div>
            <div className="add-container">
                <button onClick={()=> onAdd(quantity)} className="add-button" disabled={!stock}>Agregar</button>
            </div>
        </div>
    )
} 

export default ItemCount;