import { createContext, useState } from "react";

export const CartContext = createContext({cart:[]})

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const addItem = (item, quantity) => {
        if(!isInCart(item.id) & quantity!==0) {
            setCart(prev => [...prev, {...item, quantity}])
        }
        else {
            console.log('El producto ya fue agregado')
        }
    }

    const removeItem = (ItemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== ItemId)
        setCart(cartUpdated)
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (ItemId) => {
        return cart.some(prod => prod.id === ItemId)
    }

    const cartTotal = () => {
        return cart.reduce((total, item) => total + (item.quantity * item.precio), 0)
    }

    const totalQuantity = () => {
        return cart.reduce((totalQuant, item) => totalQuant + item.quantity, 0)
    }

    return (
        <CartContext.Provider value={{cart, addItem, removeItem, clearCart, cartTotal, totalQuantity}}>{children}</CartContext.Provider>
    )
}