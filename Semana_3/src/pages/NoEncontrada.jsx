import { Link } from 'react-router'

function NoEncontrada() {
    return (
        <div className="container py-16 text-center">
            <p className="text-6xl font-bold text-verde-lima">404</p>
            <h1 className="mt-4 text-3xl font-bold text-verde-oscuro">Página no encontrada</h1>
            <p className="mt-2">La dirección que buscas no existe o fue cambiada de lugar.</p>
            <Link
                to="/"
                className="mt-6 inline-block rounded-lg bg-verde-oscuro px-6 py-3 font-bold text-white hover:bg-verde"
            >
                Volver al inicio
            </Link>
        </div>
    )
}

export default NoEncontrada