import './itemListContainer.css';
import { useEffect, useState } from 'react';
import { getProducts, getProductsByCategoria} from '../../asyncMock';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])

    const { categoriaId } = useParams()

    useEffect(() => {
        const asyncFunc = categoriaId ? getProductsByCategoria : getProducts

        asyncFunc(categoriaId)
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.log(error)
            })
    }, [categoriaId])

    return(
        <div>
            <h1 className="greeting">{greeting}</h1>
            <h1 className="greeting">{categoriaId}</h1>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer;