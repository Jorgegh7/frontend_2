import { Link, useNavigate } from 'react-router'
import useProductos from '../hooks/useProductos'
import NotificacionesModal from '../components/NotificacionesModal'
import { useState } from 'react'


function Carrito() {
    const { productos, carrito, agregarAlCarrito, disminuirCantidadCarrito, pagarCarrito } = useProductos()
    const navigate = useNavigate()

    const items = carrito.map((entrada) => ({
        ...entrada,
        producto: productos.find((producto) => producto.id === entrada.productoId),
    }))

    const precioUnitario = (producto) =>
        producto.precioOferta > 0 ? producto.precioOferta : producto.precio

    const total = items.reduce(
        (suma, { cantidad, producto }) => suma + precioUnitario(producto) * cantidad,
        0,
    )

    const [aviso, setAviso] = useState('')

    const manejarPago = () => {
        const resumen = `Compraste ${items.length} producto(s) por un total de $${total}.`
        pagarCarrito()
        setAviso(resumen)
    }

    if (items.length === 0) {
        return (
            <div className="container py-16 text-center">
                <NotificacionesModal
                    texto={aviso}
                    onCerrar={() => {
                        setAviso('')
                        navigate('/')
                    }}
                />
                <h1 className="text-3xl font-bold text-verde-oscuro">Tu carrito está vacío</h1>
                <p className="mt-2">Agrega productos desde el catálogo.</p>
                <Link to="/" className="mt-6 inline-block font-bold text-verde-oscuro hover:underline">
                    Ir al catálogo
                </Link>
            </div>
        )
    }

    return (
        <div className="container py-8">
            <h1 className="mb-6 text-3xl font-bold text-verde-oscuro">Carrito</h1>

            <ul className="space-y-4">
                {items.map(({ productoId, cantidad, producto }) => (
                    <li
                        key={productoId}
                        className="flex flex-wrap items-center justify-between gap-4 rounded-lg bg-white p-4 shadow-lg"
                    >

                        <div className="flex items-center gap-4">
                            <img
                                src={producto.img}
                                alt={producto.nombre}
                                className="h-20 w-20 object-contain"
                            />
                            <div>
                                <p className="font-bold">{producto.nombre}</p>
                                <p className="text-sm text-gray-500">{producto.marca}</p>
                                <p className="text-sm text-gray-500">
                                    Precio unitario: ${precioUnitario(producto)}
                                </p>
                                <p className="font-bold text-verde-oscuro">
                                    Subtotal: ${precioUnitario(producto) * cantidad}
                                </p>

                            </div>

                        </div>

                        <div className="flex items-center gap-3">
                            <button
                                type="button"
                                onClick={() => disminuirCantidadCarrito(productoId)}
                                className="rounded-lg bg-verde-oscuro px-3 py-1 font-bold text-white hover:bg-verde"
                            >
                                −
                            </button>
                            <span className="w-8 text-center font-bold">{cantidad}</span>
                            <button
                                type="button"
                                onClick={() => agregarAlCarrito(productoId)}
                                disabled={producto.stock <= 0}
                                className="rounded-lg bg-verde-oscuro px-3 py-1 font-bold text-white hover:bg-verde disabled:cursor-not-allowed disabled:bg-gray-400"
                            >
                                +
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
            <p className="mt-6 text-right text-2xl font-bold text-verde-oscuro">
                Total: ${total}
            </p>
            <div className="mt-4 text-right">
                <button
                    type="button"
                    onClick={manejarPago}
                    className="rounded-lg bg-verde-oscuro px-8 py-3 font-bold text-white hover:bg-verde"
                >
                    Pagar
                </button>
            </div>
            <NotificacionesModal texto={aviso} onCerrar={() => setAviso('')} />
        </div>
    )
}

export default Carrito