function ProductCard({ producto }) {
    const { nombre, marca, descripcion, precio, precioOferta, stock, img } = producto
    const enOferta = precioOferta > 0

    return (
        <div className="flex h-full flex-col overflow-hidden rounded-lg bg-white shadow-lg">
            <img src={img} className="h-48 w-full object-contain p-4" alt={descripcion} />
            <div className="flex grow flex-col p-4">
                <p className="text-sm text-gray-500">{marca}</p>
                <h4 className="text-lg font-bold">{nombre}</h4>
                <p className="mb-3 grow">{descripcion}</p>
                {enOferta ? (
                    <p className="mb-1">
                        <span className="mr-2 text-gray-500 line-through">${precio}</span>
                        <span className="font-bold text-rojo">${precioOferta}</span>
                    </p>
                ) : (
                    <p className="font-bold">${precio}</p>
                )}
                <small className="text-sm text-gray-500">Stock: {stock}</small>

            </div>


        </div >

    )
}

export default ProductCard