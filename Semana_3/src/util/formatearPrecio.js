const formato = new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
})

export function formatearPrecio(valor) {
    return formato.format(valor)
}