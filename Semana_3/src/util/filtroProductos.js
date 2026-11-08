export const VALOR_TODOS = 'todos'

export function filtrarProductosPorCategoria(productos, categoriaSeleccionada) {
    if (categoriaSeleccionada === VALOR_TODOS) {
        return productos
    }

    return productos.filter((producto) => producto.categoria === categoriaSeleccionada)
}