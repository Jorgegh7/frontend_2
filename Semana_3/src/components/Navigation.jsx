import { Link, NavLink } from 'react-router'
import { RUTAS } from '../data/rutas.js'

function estiloLink({ isActive }) {
    return isActive
        ? 'text-sm font-bold text-verde-oscuro'
        : 'text-sm font-medium text-white hover:underline'
}

function Navigation() {
    return (
        <nav className="bg-verde-lima">
            <div className="container flex flex-wrap items-center justify-between gap-2 py-4">
                <Link to="/" className="text-2xl font-bold text-white"> San Esteban</Link>
                <ul className="flex flex-wrap gap-4">
                    {RUTAS.map((ruta) => (
                        <li key={ruta.to}>
                            <NavLink to={ruta.to} end={ruta.to === '/'} className={estiloLink}>
                                {ruta.texto}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>

    )
}

export default Navigation