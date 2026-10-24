function InfoCard({ titulo, lineas, imagen }) {
    return (
        <div className="card h-100 text-center shadow border-0">
            {imagen && (
                <img src={imagen} className="card-img-top" alt={titulo} />
            )}
            <div className="card-body">
                <h5 className="card-title">{titulo}</h5>
                {lineas.map((linea, indice) => (
                    <p key={indice} className="card-text mb-1">{linea}</p>
                ))}
            </div>
        </div>
    )
}

export default InfoCard