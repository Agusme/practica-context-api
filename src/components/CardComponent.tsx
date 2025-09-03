
import { PlusIcon } from '@heroicons/react/16/solid'
import products from '../../../practica/products.json'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

export default function CardComponent() {

const {addProduct}= useContext(CartContext)

    return (
        <div className='flex justify-center gap-5 my-10'>
            {products.map((product) => (
                <div className="card bg-base-100 w-96 shadow-sm" key={product.id}>
                    <figure className="md:h-80 w-full overflow-hidden">
                        <img
                            src={product.imagen}
                            alt={product.nombre}
                            className="h-full w-full object-cover"
                        />
                 </figure>
                    <div className="card-body">
                        <h2 className="card-title">{product.nombre}</h2>
                        <p>{product.descripcion} </p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary text-white"   onClick={()=>addProduct(product)}
>
                                <PlusIcon className="h-6 w-6" />
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
