import { Link } from 'react-router'
import { formatearPrecio } from '../util/formatearPrecio.js'

function ProductCard({ producto }) {
    const { id, nombre, marca, descripcion, precio, precioOferta, stock, img } = producto
    const enOferta = precioOferta > 0

    return (
        <div className="flex h-full flex-col overflow-hidden rounded-lg bg-white shadow-lg">
            <img src={img} alt={nombre} className="h-48 w-full object-contain p-4" />
            <div className="flex grow flex-col p-4">
                <p className="text-sm text-gray-500">{marca}</p>
                <h4 className="text-lg font-bold">
                    <Link to={`/productos/${id}`} className="hover:underline">{nombre}</Link>
                </h4>
                <p className="mb-3 grow">{descripcion}</p>
                {enOferta ? (
                    <p>
                        <span className="mr-2 text-gray-500 line-through">{formatearPrecio(precio)}</span>
                        <span className="font-bold text-rojo">{formatearPrecio(precioOferta)}</span>
                    </p>
                ) : (
                    <p className="font-bold">{formatearPrecio(precio)}</p>
                )}
                <p className="text-sm text-gray-500">Stock: {stock}</p>
            </div>
        </div>
    )
}

export default ProductCard