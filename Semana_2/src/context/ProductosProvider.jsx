import { useState } from "react";
import ProductosContext from "./ProductosContext";
import productosIniciales from "../data/productos.json";
import { validarProductos } from "../util/validacionesProductos";

function construirEstadoInicial() {
    return productosIniciales.map((producto => ({ ...producto })))
}

function ProductosProvider({ children }) {
    const [productos, setProductos] = useState(construirEstadoInicial)

    const agregarProducto = (valores) => {
        const { esValido, errores, datos } = validarProductos(valores)

        if (!esValido) {
            return { exito: false, errores }
        }

        const nuevoProducto = {
            id: crypto.randomUUID(),
            ...datos,
        }

        setProductos((productos) => [...productos, nuevoProducto])
        return { exito: true }
    }

    return (
        <ProductosContext.Provider value={{ productos, agregarProducto }}>
            {children}
        </ProductosContext.Provider>
    )
}

export default ProductosProvider