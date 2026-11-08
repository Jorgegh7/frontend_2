import { useState } from 'react'
import FiltroCategoria from '../components/FiltroCategoria.jsx'
import { VALOR_TODOS } from '../util/filtroProductos.js'
import { filtrarProductosPorCategoria } from '../util/filtroProductos.js'
import useProductos from '../hooks/useProductos'
import { Link } from 'react-router'
import { formatearPrecio } from '../util/formatearPrecio.js'

function ListaProductos() {
    const { productos } = useProductos()
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(VALOR_TODOS)
    const productosVisibles = filtrarProductosPorCategoria(productos, categoriaSeleccionada)

    return (

        <div className="container py-8">
            <h1 className="mb-2 text-3xl font-bold text-verde-oscuro">Productos</h1>
            <p className="mb-6">Hay {productos.length} productos en el inventario.</p>

            <FiltroCategoria
                valor={categoriaSeleccionada}
                onChange={(evento) => setCategoriaSeleccionada(evento.target.value)}
            />

            <div className="overflow-x-auto rounded-lg bg-white shadow-lg">
                <table className="w-full text-left">
                    <thead className="bg-verde-oscuro text-white">
                        <tr>
                            <th className="px-4 py-3">Imagen</th>
                            <th className="px-4 py-3">Nombre</th>
                            <th className="px-4 py-3">Marca</th>
                            <th className="px-4 py-3">Categoría</th>
                            <th className="px-4 py-3">Descripción</th>
                            <th className="px-4 py-3">Precio</th>
                            <th className="px-4 py-3">Oferta</th>
                            <th className="px-4 py-3">Stock</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productosVisibles.map(producto => (
                            <tr key={producto.id} className="border-b border-gray-200">
                                <td className="px-4 py-3">
                                    <img src={producto.img} alt={producto.nombre} className="h-16 w-16 object-contain" />
                                </td>
                                <td className="px-4 py-3">
                                    <Link
                                        to={`/productos/${producto.id}`}
                                        className="font-bold text-verde-oscuro hover:underline"
                                    >
                                        {producto.nombre}
                                    </Link>
                                </td>
                                <td className="px-4 py-3">{producto.marca}</td>
                                <td className="px-4 py-3">{producto.categoria}</td>
                                <td className="px-4 py-3">{producto.descripcion}</td>
                                <td className="px-4 py-3">{formatearPrecio(producto.precio)}</td>
                                <td className="px-4 py-3">
                                    {producto.precioOferta > 0 ? `${formatearPrecio(producto.precioOferta)}` : '—'}
                                </td>
                                <td className="px-4 py-3">{producto.stock}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ListaProductos