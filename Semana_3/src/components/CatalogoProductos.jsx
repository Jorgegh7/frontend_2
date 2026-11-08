import useProductos from "../hooks/useProductos"
import ProductCard from '../components/ProductCard'
import { CATEGORIAS } from "../data/categorias"
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
            <div className="mb-6">
                <label
                    htmlFor="filtro-categoria"
                    className="mb-1 block font-semibold text-verde-oscuro"
                >
                    Filtrar por categoría
                </label>
                <select
                    id="filtro-categoria"
                    value={categoriaSeleccionada}
                    onChange={manejarCambioFiltro}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-base focus:border-verde-oscuro focus:outline-none sm:w-auto"
                >
                    <option value={VALOR_TODOS}>Todas</option>
                    {CATEGORIAS.map((categoria) => (
                        <option key={categoria} value={categoria}>
                            {categoria}
                        </option>
                    ))}
                </select>
            </div>

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