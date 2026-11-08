function InfoCard({ titulo, lineas, imagen }) {
    return (
        <div className="flex h-full flex-col overflow-hidden rounded-lg bg-white text-center shadow-lg">
            {imagen && (
                <img src={imagen} alt={titulo} className="h-48 w-full object-cover" />
            )}
            <div className="p-4">
                <h3 className="mb-2 text-lg font-bold text-verde-oscuro">{titulo}</h3>
                {lineas.map((linea, indice) => (
                    <p key={indice}>{linea}</p>
                ))}
            </div>
        </div>
    )
}

export default InfoCard