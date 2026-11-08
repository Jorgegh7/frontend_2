import { useState } from 'react'
import { Link, NavLink } from 'react-router'
import { RUTAS } from '../data/rutas.js'

function estiloLink({ isActive }) {
    return isActive
        ? 'text-sm font-bold text-verde-oscuro'
        : 'text-sm font-medium text-white hover:underline'
}

function Navigation() {
    const [abierto, setAbierto] = useState(false)

    return (
        <nav className="bg-verde-lima">
            <div className="container flex flex-wrap items-center justify-between py-4">
                <Link to="/" className="text-2xl font-bold text-white">
                    San Esteban
                </Link>

                <button
                    type="button"
                    onClick={() => setAbierto(!abierto)}
                    aria-label="Abrir o cerrar el menú"
                    aria-expanded={abierto}
                    className="rounded-md px-3 py-1 text-2xl text-white md:hidden"
                >
                    {abierto ? '✕' : '☰'}
                </button>

                <ul
                    className={`${abierto ? 'flex' : 'hidden'} w-full flex-col gap-3 pt-4 md:flex md:w-auto md:flex-row md:flex-wrap md:gap-5 md:pt-0`}
                >
                    {RUTAS.map((ruta) => (
                        <li key={ruta.to}>
                            <NavLink
                                to={ruta.to}
                                end={ruta.to === '/'}
                                className={estiloLink}
                                onClick={() => setAbierto(false)}
                            >
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