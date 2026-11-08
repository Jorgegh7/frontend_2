import { useReducer } from 'react'
import ProductosContext from './ProductosContext.js'
import productosIniciales from '../data/productos.json'
import { validarProductos } from '../util/validacionesProductos.js'
import {
    crearEstadoInicial,
    productosReducer,
    TIPOS_ACCION,
} from './ProductosReducer.js'

function ProductosProvider({ children }) {
    const [estado, dispatch] = useReducer(
        productosReducer,
        productosIniciales,
        crearEstadoInicial,
    )

    const agregarProducto = (valores) => {
        const { esValido, errores, datos } = validarProductos(valores)

        if (!esValido) {
            return { exito: false, errores }
        }

        const nuevoProducto = { id: crypto.randomUUID(), ...datos }

        dispatch({ type: TIPOS_ACCION.AGREGAR_PRODUCTO, producto: nuevoProducto })

        return { exito: true }
    }

    const agregarAlCarrito = (productoId, cantidad = 1) => {
        dispatch({ type: TIPOS_ACCION.AGREGAR_AL_CARRITO, productoId, cantidad })
    }

    const disminuirCantidadCarrito = (productoId) => {
        dispatch({ type: TIPOS_ACCION.DISMINUIR_CANTIDAD_CARRITO, productoId })
    }

    const pagarCarrito = () => {
        dispatch({ type: TIPOS_ACCION.PAGAR_CARRITO })
    }

    const valor = {
        productos: estado.productos,
        carrito: estado.carrito,
        agregarProducto,
        agregarAlCarrito,
        disminuirCantidadCarrito,
        pagarCarrito,
    }

    return <ProductosContext.Provider value={valor}>{children}</ProductosContext.Provider>
}

export default ProductosProvider