import { CATEGORIAS } from "../data/categorias"

export function normalizarProducto(valores) {

    const textoPrecio = String(valores.precio).trim()
    const precio = textoPrecio === "" ? NaN : Number(textoPrecio)

    const textoPrecioOferta = String(valores.precioOferta).trim()
    const precioOferta = textoPrecioOferta === "" ? 0 : Number(textoPrecioOferta)

    const textoStock = String(valores.stock).trim()
    const stock = textoStock === "" ? NaN : Number(textoStock)

    return {
        nombre: typeof valores.nombre === "string" ? valores.nombre.trim() : "",
        marca: typeof valores.marca === "string" ? valores.marca.trim() : "",
        categoria: typeof valores.categoria === "string" ? valores.categoria.trim() : "",
        descripcion: typeof valores.descripcion === "string" ? valores.descripcion.trim() : "",
        precio: precio,
        precioOferta: precioOferta,
        stock: stock,
        img: typeof valores.img === "string" ? valores.img.trim() : "",
    }
}

function esUrlImagenValida(valor) {
    if (!valor) return false;

    try {
        const url = new URL(valor);
        return url.protocol === "http:" || url.protocol === "https:";
    } catch {
        return false;
    }
}

const LIMITES = {
    nombre: { min: 3, max: 50 },
    marca: { min: 2, max: 25 },
    categoria: { min: 2, max: 25 },
    descripcion: { min: 10, max: 200 },
}

const REGEX_TEXTO = /^[\p{L}\p{N} %.\-°]+$/u
const REGEX_DESCRIPCION = /^[\p{L}\p{N}\s.,:!?¿¡%()/\-°+]+$/u
const REGEX_URL = /^https?:\/\/[\w.~:/?#&=%,+@-]+$/

function cumpleFormato(valor, regex) {
    return regex.test(valor)
}

export function validarProductos(valores) {
    const datos = normalizarProducto(valores);
    const errores = {};

    if (!datos.nombre) {
        errores.nombre = "El nombre es obligatorio."
    } else if (datos.nombre.length < LIMITES.nombre.min || datos.nombre.length > LIMITES.nombre.max) {
        errores.nombre = "El nombre debe tener entre 5 y 40 caracteres"
    } else if (!cumpleFormato(datos.nombre, REGEX_TEXTO)) {
        errores.nombre = "El nombre contiene caracteres no permitidos."
    }

    if (!datos.marca) {
        errores.marca = "La marca es obligatoria."
    } else if (datos.marca.length < LIMITES.marca.min || datos.marca.length > LIMITES.marca.max) {
        errores.marca = "La marca debe tener entre 2 y 25 caracteres"
    }

    if (!datos.categoria) {
        errores.categoria = "La categoría es obligatoria."
    } else if (!CATEGORIAS.includes(datos.categoria)) {
        errores.categoria = "Selecciona una categoría válida."
    }

    if (!datos.descripcion) {
        errores.descripcion = "La descripción es obligatoria."
    } else if (datos.descripcion.length < LIMITES.descripcion.min || datos.descripcion.length > LIMITES.descripcion.max) {
        errores.descripcion = "La descripción debe tener entre 10 y 200 caracteres"
    } else if (!cumpleFormato(datos.descripcion, REGEX_DESCRIPCION)) {
        errores.descripcion = "La descripción contiene caracteres no permitidos."
    }

    if (!datos.precio) {
        errores.precio = "El precio es obligatorio."
    } else if (datos.precio <= 0) {
        errores.precio = "El precio debe tener un valor mayor a 0"
    }

    if (Number.isNaN(datos.precioOferta)) {
        errores.precioOferta = "El precio oferta debe ser un número válido."
    } else if (datos.precioOferta < 0) {
        errores.precioOferta = "El precio oferta no puede ser negativo."
    } else if (datos.precioOferta > 0 && datos.precioOferta >= datos.precio) {
        errores.precioOferta = "El precio oferta debe ser menor al precio."
    }

    if (Number.isNaN(datos.stock)) {
        errores.stock = "El Stock es obligatorio"
    } else if (datos.stock < 0) {
        errores.stock = "El Stock debe ser mayor o igual a 0"
    } else if (!Number.isInteger(datos.stock)) {
        errores.stock = "El Stock debe ser un número entero"
    }

    if (!datos.img) {
        errores.img = "La URL de la imagen es requerida"
    } else if (!esUrlImagenValida(datos.img)) {
        errores.img = "La URL no cumple con el formato requerido"
    } else if (!cumpleFormato(datos.img, REGEX_URL)) {
        errores.img = "La URL contiene caracteres no permitidos."
    }

    return {
        esValido: Object.keys(errores).length === 0,
        errores,
        datos
    }

}
