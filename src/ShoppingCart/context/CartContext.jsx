import { createContext, useContext, useState } from "react";

const CartContext = createContext()

export function CartProvider({ children }) {
    const [cart, setCart] = useState([])

    // Add Product to Cart
    const addToCart = (product) => {
        setCart((previousProdcuts) => {
            const existingProduct = previousProdcuts.find(item => item.id === product.id)
            if (existingProduct) {
                return previousProdcuts.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            } else {
                return [...previousProdcuts, { ...product, quantity: 1 }]
            }
        })
    }

    // Remove Product from Cart
    const removeFromCart = (productId) => {
        setCart((previousProdcuts) =>
            previousProdcuts.filter(item => item.id !== productId)
        )
    }

    // Upadate Product Quantity
    const updateQuantity = (productId, quantity) => {
        setCart((previousProdcuts) =>
            previousProdcuts.map(item =>
                item.id === productId
                    ? { ...item, quantity: quantity }
                    : item
            )
        )
    }

    // Total Price
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)



    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, total  }}>
            {children}
        </CartContext.Provider>
    )
}


// Custom Hook
export function useCart() {
    return useContext(CartContext)
}