import useProductos from "../hooks/useProductos"
import ProductCard from '../components/ProductCard'
import FiltroCategoria from "./FiltroCategoria"
import { VALOR_TODOS, filtrarProductosPorCategoria } from "../util/filtroProductos"
import { useState } from "react"

function CatalogoProductos() {
    const { productos } = useProductos()
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(VALOR_TODOS)

    const productosVisibles = filtrarProductosPorCategoria(
        productos,
        categoriaSeleccionada,
    )

    const manejarCambioFiltro = (evento) => {
        setCategoriaSeleccionada(evento.target.value)
    }

    return (
        <div>
            <FiltroCategoria valor={categoriaSeleccionada} onChange={manejarCambioFiltro} />

            {productos.length === 0 ? (
                <p className="text-gray-500">
                    Aún no hay productos disponibles.
                </p>
            ) : productosVisibles.length === 0 ? (
                <p className="text-gray-500">
                    No hay productos en la categoría seleccionada.
                </p>
            ) : (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {productosVisibles.map(producto => (
                        <ProductCard key={producto.id} producto={producto} />
                    ))}
                </div>
            )}
        </div>
    )
}

export default CatalogoProductos