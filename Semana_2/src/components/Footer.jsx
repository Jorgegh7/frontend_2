import { Link } from 'react-router-dom'

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
                            <li><Link to="/" className="hover:underline">Inicio</Link></li>
                            <li><Link to="/productos" className='hover:underline'>Productos</Link></li>
                            <li><Link to="/agregar-producto" className='hover:underline'>Agregar Producto</Link></li>
                            <li><Link to="/nuestras-tiendas" className="hover:underline">Nuestras tiendas</Link></li>
                            <li><Link to="/quienes-somos" className="hover:underline">Quiénes somos</Link></li>
                            <li><Link to="/contactanos" className="hover:underline">Contáctanos</Link></li>
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