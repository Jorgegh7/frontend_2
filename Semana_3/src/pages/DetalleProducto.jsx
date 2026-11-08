import { useState } from "react"
import { Link, useParams } from 'react-router'
import useProductos from "../hooks/useProductos"
import NotificacionesModal from '../components/NotificacionesModal'
import { formatearPrecio } from '../util/formatearPrecio.js'

function DetalleProducto() {
    const { id } = useParams()
    const { productos, agregarAlCarrito } = useProductos()
    const [aviso, setAviso] = useState('')
    const [cantidad, setCantidad] = useState(1)

    const producto = productos.find((item) => item.id === id)

    if (!producto) {
        return (
            <div className="container py-16 text-center">
                <h1 className="text-3xl font-bold text-verde-oscuro">Producto no encontrado</h1>
                <p className="mt-2">El producto que buscas no existe o ya no está disponible.</p>
                <Link to="/" className="mt-6 inline-block font-bold text-verde-oscuro hover:underline">
                    Volver al inicio
                </Link>
            </div>
        )
    }

    const manejarAgregar = () => {
        const unidades = Number(cantidad)

        if (!Number.isInteger(unidades) || unidades < 1 || unidades > producto.stock) {
            setAviso('Ingresa una cantidad válida.')
            return
        }

        agregarAlCarrito(producto.id, unidades)
        setAviso(`Se agregaron ${unidades} unidad(es) al carrito.`)
    }

    return (
        <div className="container py-8">
            <Link to="/" className="mb-4 inline-block font-bold text-verde-oscuro hover:underline">
                ← Volver al catálogo
            </Link>

            <div className="grid gap-8 rounded-lg bg-white p-6 shadow-lg md:grid-cols-2">
                <img
                    src={producto.img}
                    alt={producto.nombre}
                    className="h-80 w-full object-contain"
                />

                <div>
                    <p className="text-sm text-gray-500">{producto.marca} · {producto.categoria}</p>
                    <h1 className="mb-4 text-3xl font-bold text-verde-oscuro">{producto.nombre}</h1>
                    <p className="mb-6">{producto.descripcion}</p>

                    {producto.precioOferta > 0 ? (
                        <p className="mb-2">
                            <span className="mr-3 text-xl text-gray-500 line-through">{formatearPrecio(producto.precio)}</span>
                            <span className="text-3xl font-bold text-rojo">{formatearPrecio(producto.precioOferta)}</span>
                        </p>
                    ) : (
                        <p className="mb-2 text-3xl font-bold">{formatearPrecio(producto.precio)}</p>
                    )}

                    <p className="text-sm text-gray-500">Stock disponible: {producto.stock}</p>
                    <label htmlFor="cantidad" className="mt-4 block font-bold">Cantidad</label>
                    <div className="mt-2 flex items-center gap-3">
                        <input
                            id="cantidad"
                            type="number"
                            min="1"
                            max={producto.stock}
                            value={cantidad}
                            onChange={(evento) => setCantidad(evento.target.value)}
                            className="w-24 rounded-md border border-gray-300 px-3 py-2"
                        />
                        <button
                            type="button"
                            onClick={manejarAgregar}
                            disabled={producto.stock <= 0}
                            className="rounded-lg bg-verde-oscuro px-6 py-3 font-bold text-white hover:bg-verde disabled:cursor-not-allowed disabled:bg-gray-400"
                        >
                            {producto.stock <= 0 ? 'Sin stock' : 'Agregar al carrito'}
                        </button>
                    </div>
                    <NotificacionesModal texto={aviso} onCerrar={() => setAviso('')} />
                </div>
            </div>
        </div>
    )
}

export default DetalleProducto