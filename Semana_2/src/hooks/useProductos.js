import { useContext } from "react";
import ProductosContext from "../context/ProductosContext";

function useProductos() {
    const contexto = useContext(ProductosContext)
    if (!contexto) {
        throw new Error('useProductos debe utilizarse dentro de un ProductosProvider')
    }

    return contexto
}

export default useProductos