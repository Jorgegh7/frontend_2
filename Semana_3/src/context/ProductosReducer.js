export const TIPOS_ACCION = {
    AGREGAR_PRODUCTO: 'AGREGAR_PRODUCTO',
    AGREGAR_AL_CARRITO: 'AGREGAR_AL_CARRITO',
    DISMINUIR_CANTIDAD_CARRITO: 'DISMINUIR_CANTIDAD_CARRITO',
    PAGAR_CARRITO: 'PAGAR_CARRITO',
}

export function crearEstadoInicial(productosIniciales) {
    return {
        productos: productosIniciales.map((producto) => ({ ...producto })),
        carrito: [],
    }
}

export function productosReducer(estado, accion) {
    switch (accion.type) {
        case TIPOS_ACCION.AGREGAR_PRODUCTO: {
            return {
                ...estado,
                productos: [...estado.productos, accion.producto],
            }
        }

        case TIPOS_ACCION.AGREGAR_AL_CARRITO: {
            const unidades = accion.cantidad ?? 1

            const producto = estado.productos.find(
                (item) => item.id === accion.productoId,
            )

            if (!producto || unidades < 1 || unidades > producto.stock) {
                return estado
            }

            const entradaExistente = estado.carrito.find(
                (entrada) => entrada.productoId === accion.productoId,
            )

            const productos = estado.productos.map((item) =>
                item.id === accion.productoId
                    ? { ...item, stock: item.stock - unidades }
                    : item,
            )

            const carrito = entradaExistente
                ? estado.carrito.map((entrada) =>
                    entrada.productoId === accion.productoId
                        ? { ...entrada, cantidad: entrada.cantidad + unidades }
                        : entrada,
                )
                : [...estado.carrito, { productoId: accion.productoId, cantidad: unidades }]

            return { ...estado, productos, carrito }
        }

        case TIPOS_ACCION.DISMINUIR_CANTIDAD_CARRITO: {
            const entrada = estado.carrito.find(
                (item) => item.productoId === accion.productoId,
            )

            if (!entrada) {
                return estado
            }

            const nuevaCantidad = entrada.cantidad - 1

            const productos = estado.productos.map((item) =>
                item.id === accion.productoId
                    ? { ...item, stock: item.stock + 1 }
                    : item,
            )

            const carrito =
                nuevaCantidad === 0
                    ? estado.carrito.filter(
                        (item) => item.productoId !== accion.productoId,
                    )
                    : estado.carrito.map((item) =>
                        item.productoId === accion.productoId
                            ? { ...item, cantidad: nuevaCantidad }
                            : item,
                    )

            return { ...estado, productos, carrito }
        }
        case TIPOS_ACCION.PAGAR_CARRITO: {
            return { ...estado, carrito: [] }
        }

        default:
            return estado
    }
}