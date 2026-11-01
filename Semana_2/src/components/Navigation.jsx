import { Link, NavLink } from 'react-router-dom'

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
                    <li><NavLink to="/" end className={estiloLink}>Inicio</NavLink></li>
                    <li><NavLink to="/productos" className={estiloLink}>Productos</NavLink></li>
                    <li><NavLink to="/agregar-producto" className={estiloLink}>Agregar Producto</NavLink></li>
                    <li><NavLink to="/nuestras-tiendas" className={estiloLink}>Nuestras tiendas</NavLink></li>
                    <li><NavLink to="/quienes-somos" className={estiloLink}>Quiénes somos</NavLink></li>
                    <li><NavLink to="/contactanos" className={estiloLink}>Contáctanos</NavLink></li>
                </ul>
            </div>
        </nav>

    )
}

export default Navigation