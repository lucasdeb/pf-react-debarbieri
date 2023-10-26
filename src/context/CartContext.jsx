import { createContext, useState } from "react";

export const CartContext = createContext({cart:[]})

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const addItem = (item, quantity) => {
        if(!isInCart(item.id)) {
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

    return (
        <CartContext.Provider value={{cart, addItem, removeItem, clearCart, cartTotal}}>{children}</CartContext.Provider>
    )
}