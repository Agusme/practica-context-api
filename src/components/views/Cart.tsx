import { useContext } from "react";
import CardComponent from "../CardComponent";
import { CartContext } from "../../context/CartContext";
import { TrashIcon } from "@heroicons/react/16/solid";

export default function Cart() {
  const{cart, total, removeProduct, clearCart}=useContext(CartContext)
  return (
  
<div className="container mx-auto ">
<CardComponent/>

<div className="m-10">
<ul>
      <h2 className="text-3xl font-semibold">Carrito</h2>

   {cart.map((product)=>(
     <li key={product.cartId} className="flex flex-wrap  my-5">
      <p className="w-1/3">{product.nombre} </p>
     <p className="w-1/3"> $ {product.precio}</p>
<div className="flex w-1/3">
       <button       className="btn btn-primary w-1/2 lg:w-1/3 text-white" onClick={()=>removeProduct(product.cartId)}   >

<TrashIcon className="h-6 w-6 "/>
     </button>
</div>

     </li>
     
    ))}
     </ul>
     {cart.length !== 0 ?     <div className=" flex flex-wrap justify-between items-center font-semibold "><p className="w-1/3"> Total a pagar:</p><p className="w-1/3">$ {total} </p> <div className="flex w-1/3">
      <button  className="btn btn-error text-white  px-5 lg:px-6 lg:text-xl" onClick={clearCart}>Eliminar todo</button></div></div>
:
<div>
  <h2 className="text-xl mt-5">El carrito está vacio</h2>
</div>}

</div>
</div>

  )
}
