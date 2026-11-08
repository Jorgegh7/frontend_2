function CampoFormulario({ nombre, etiqueta, valor, onChange, error, tipo = 'text' }) {
    return (
        <div>
            <label htmlFor={nombre} className="mb-1 block font-bold">{etiqueta}</label>
            <input
                id={nombre}
                type={tipo}
                name={nombre}
                value={valor}
                onChange={onChange}
                className="w-full rounded-md border border-gray-300 px-3 py-2"
            />
            {error && <p className="text-sm text-red-600">{error}</p>}
        </div>
    )
}

export default CampoFormulario