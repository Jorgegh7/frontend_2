function ProductCard({ producto }) {
    const { nombre, marca, descripcion, precio, precioOferta, stock, img } = producto
    const enOferta = precioOferta > 0

    return (
        <div className="card h-100 shadow border-0">
            <img src={img} className="card-image-top producto-img" alt={descripcion} />
            <div className="card-body">
                <small className="text-muted">{marca}</small>
                <h5 className="card-title">{nombre}</h5>
                <p className="card-text">{descripcion}</p>
                {enOferta ? (
                    <p className="mb-1">
                        <span className="text-decoration-line-through text-muted me-2">${precio}</span>
                        <span className="fw-bold text-danger">${precioOferta}</span>
                    </p>
                ) : (
                    <p className="fw-bold mb-1">${precio}</p>
                )}
                <small className="muted-text">Stock: {stock}</small>

            </div>


        </div >

    )
}

export default ProductCard