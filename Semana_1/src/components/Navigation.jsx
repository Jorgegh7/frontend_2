import { NavLink } from 'react-router-dom'

function Navigation() {
    return (
        <nav className="navbar navbar-expand navbar-dark navbar-san-esteban">
            <div className="container">
                <NavLink className="navbar-brand" to="/" end>San Esteban</NavLink>
                <ul className="navbar-nav">
                    <NavLink className="nav-link" to="/">Inicio</NavLink>
                    <NavLink className="nav-link" to="/nuestras-tiendas">Nuestras Tiendas</NavLink>
                    <NavLink className="nav-link" to="/quienes-somos">Quienes Somos</NavLink>
                    <NavLink className="nav-link" to="/contactanos">Contactanos</NavLink>
                </ul>
            </div>
        </nav>

    )
}

export default Navigation