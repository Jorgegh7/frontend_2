import { Link } from 'react-router'
import { RUTAS } from '../data/rutas'

function Footer() {
    return (
        <footer className="bg-verde-oscuro py-8 text-white">
            <div className="container">
                <div className="grid gap-8 md:grid-cols-3">
                    <div>
                        <h2 className="text-lg font-bold">San Esteban</h2>
                        <p>Tu barrio, nuestra prioridad.</p>
                        <p>© 2026 San Esteban. Todos los derechos reservados.</p>
                    </div>
                    <div className="md:text-center">
                        <h2 className="font-bold">Enlaces</h2>
                        <ul>
                            {RUTAS.map((ruta) => (
                                <li key={ruta.to}>
                                    <Link to={ruta.to} className="hover:underline">{ruta.texto}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="md:text-right">
                        <h2 className="font-bold">Contacto</h2>
                        <p>+56 2 2345 6789</p>
                        <p>Lun a Sáb: 8:00 a 21:00</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer