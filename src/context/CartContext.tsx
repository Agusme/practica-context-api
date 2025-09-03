import { createContext } from "react";

export type CartItem = {
    cartId:string,
    id: string,
    nombre: string,
    precio: number,
    descripcion:string,
    imagen: string,
    cantidad: number
}

export type Product = Omit<CartItem,"cartId"| "cantidad">

export type CartTypeContext = {
    cart: CartItem[];
    addProduct: (product: Product) => void;
    removeProduct: (id: string) => void;
    clearCart: () => void;
    total: number,
}

export const CartContext = createContext<CartTypeContext>({
    cart: [],
    addProduct: () => { },
    removeProduct: () => { },
    clearCart: () => { },
    total:0
});