import useProductos from '../hooks/useProductos'

function ListaProductos() {
    const { productos } = useProductos()

    return (
        <div className="container py-8">
            <h1 className="mb-2 text-3xl font-bold text-verde-oscuro">Productos</h1>
            <p className="mb-6">Hay {productos.length} productos en el inventario.</p>

            <div className="overflow-x-auto rounded-lg bg-white shadow-lg">
                <table className="w-full text-left">
                    <thead className="bg-verde-oscuro text-white">
                        <tr>
                            <th className="px-4 py-3">Nombre</th>
                            <th className="px-4 py-3">Marca</th>
                            <th className="px-4 py-3">Categoría</th>
                            <th className="px-4 py-3">Precio</th>
                            <th className="px-4 py-3">Oferta</th>
                            <th className="px-4 py-3">Stock</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productos.map(producto => (
                            <tr key={producto.id} className="border-b border-gray-200">
                                <td className="px-4 py-3">{producto.nombre}</td>
                                <td className="px-4 py-3">{producto.marca}</td>
                                <td className="px-4 py-3">{producto.categoria}</td>
                                <td className="px-4 py-3">${producto.precio}</td>
                                <td className="px-4 py-3">
                                    {producto.precioOferta > 0 ? `$${producto.precioOferta}` : '—'}
                                </td>
                                <td className="px-4 py-3">{producto.stock}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ListaProductos