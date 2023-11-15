import { useContext, useState } from 'react'
import CheckoutForm from '../CheckoutForm/CheckoutForm'
import { CartContext } from '../../context/CartContext'
import { writeBatch, addDoc, collection, serverTimestamp, doc, getDoc } from 'firebase/firestore'
import { db } from '../../service/Firebase/firebaseConfig'
import { Link } from 'react-router-dom'

const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState('')

    const { cart, cartTotal, clearCart } = useContext(CartContext)

    const createOrder = async ({ name, phone, email }) => {
        setLoading(true);
    
        try {
            const objOrder = {
                product: cart,
                total: cartTotal(),
                time: serverTimestamp(),
                user: {email, name, phone}
            }
            
            const batch = writeBatch(db);
            const outOfStock = [];
        
            for (const item of cart) {
                const docRef = doc(collection(db, 'items'), item.id);
                const docSnap = await getDoc(docRef);
                const prodMan = docSnap.data();
                console.log(prodMan.stock)
        
                if (prodMan.stock - item.quantity < 0) {
                    outOfStock.push(prodMan.name);
                } else {
                    batch.update(docRef, {
                        stock: prodMan.stock - item.quantity
                    });
                }
            }
        
            if (outOfStock.length > 0) {
                throw new Error(`Hay productos sin stock: ${outOfStock.join(', ')}`);
            }

            await batch.commit();
        
            const orderRef = await addDoc(collection(db, 'orders'), objOrder);
            setOrderId(orderRef.id);
            clearCart();
        
        } catch (error) {
            console.error('Error creando pedido:', error);
        } finally {
            setLoading(false);
        }
    }        
    

    if(loading){
        return <h1>Se esta generando tu orden</h1>
    }

    if(orderId!==''){
        return <div style={{textAlign: 'center'}}><h1>Tu orden fue creado con exito! 🎉</h1><p>ID: {orderId}</p><Link to='/' className="counter-button">Seguir Comprando</Link></div>
    }

    return (
        <div style={{textAlign: 'center'}}>
            <h1>CHECKOUT</h1>
            <CheckoutForm onConfirm={createOrder} />
        </div>
    )
}

export default Checkout

