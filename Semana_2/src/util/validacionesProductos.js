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

export function validarProductos(valores) {
    const datos = normalizarProducto(valores);
    const errores = {};

    if (!datos.nombre) {
        errores.nombre = "El nombre es obligatorio."
    } else if (datos.nombre.length < 4 || datos.nombre.length > 40) {
        errores.nombre = "El nombre debe tener entre 5 y 40 caracteres"
    }

    if (!datos.marca) {
        errores.marca = "La marca es obligatoria."
    } else if (datos.marca.length < 2 || datos.marca.length > 25) {
        errores.marca = "La marca debe tener entre 2 y 25 caracteres"
    }

    if (!datos.categoria) {
        errores.categoria = "La categoria es obligatoria."
    } else if (datos.categoria.length < 4 || datos.categoria.length > 25) {
        errores.categoria = "La categoria debe tener entre 5 y 25 caracteres"
    }

    if (!datos.descripcion) {
        errores.descripcion = "La descripción es obligatoria."
    } else if (datos.descripcion.length < 10 || datos.descripcion.length > 200) {
        errores.descripcion = "La descripción debe tener entre 10 y 200 caracteres"
    }

    if (!datos.precio) {
        errores.precio = "El precio es obligatorio."
    } else if (datos.precio <= 0) {
        errores.precio = "El precio debe tener un valor mayor a 0"
    }

    if (Number.isNaN(datos.precioOferta)) {
        errores.precioOferta = "Precio oferta debe ser un número válido"
    } else if (datos.precioOferta < 0 && datos.precioOferta >= datos.precio) {
        errores.precioOferta = "El precio oferta debe ser mayor o igual a 0"
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
    }

    return {
        esValido: Object.keys(errores).length === 0,
        errores,
        datos
    }

}
