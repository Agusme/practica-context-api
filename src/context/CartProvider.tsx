import { useState, type ReactNode } from "react";
import { CartContext, type CartItem, type Product } from "./CartContext";
import { v4 as uuidv4 } from "uuid";

export function CartProvider({ children }: { children: ReactNode }) {
    const [cart, setCart] = useState<CartItem[]>([])

    const addProduct = (product: Product) => {

const newProduct: CartItem={
    ...product,
    cartId: uuidv4(),
    cantidad:1
}
setCart((prev)=>[...prev, newProduct])
    }

    const removeProduct = (cartId: string) => {
        setCart((prev) => prev.filter((item) => item.cartId !== cartId))
    }

    const clearCart = () => {
        setCart([]);
    }
    const total = cart.reduce((acc, item)=>acc + item.precio * item.cantidad, 0)

    return (
        <CartContext.Provider value={{ cart, removeProduct, addProduct, clearCart , total}}>
            {children}
        </CartContext.Provider>
    )
}