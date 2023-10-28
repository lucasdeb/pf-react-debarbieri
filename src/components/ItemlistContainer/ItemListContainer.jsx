import './itemListContainer.css';
import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import {getDocs, collection, query, where} from 'firebase/firestore';
import {db} from '../../service/Firebase/firebaseConfig';

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoriaId } = useParams()

    useEffect(() => {
        setLoading(true)
        const collectionRef = categoriaId ? 
        query(collection(db, 'items'), where('categoria', '==', categoriaId))
        : collection(db, 'items')

        getDocs(collectionRef)
            .then(response => {
                const productsAdapted = response.docs.map(doc => {
                    const data = doc.data()
                    return {id: doc.id, ...data}
                })
                setProducts(productsAdapted)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
        },[categoriaId])

    return(
        <div>
            { 
            loading ? <p>cargando...</p> 
            : <div><h1 className="greeting">{greeting}</h1>
                <h1 className="greeting">{categoriaId}</h1>
                <ItemList products={products} />
                </div>
            }
        </div>
    )
}

export default ItemListContainer;