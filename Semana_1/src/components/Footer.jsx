import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer className="footer-san-esteban py-4">
            <div className="container">
                <div className="row g-4">
                    <div className="col-md-4 text-md-center">
                        <h5 className="fw-bold">San Esteban</h5>
                        <p className="mb-0">Tu barrio, nuestra prioridad.</p>
                        <p className="text-center mb-0">© 2026 San Esteban. Todos los derechos reservados.</p>
                    </div>
                    <div className="col-md-4 text-md-center">
                        <h6 className="fw-bold">Enlaces</h6>
                        <ul className="list-unstyled mb-0">
                            <li><Link to="/">Inicio</Link></li>
                            <li><Link to="/nuestras-tiendas">Nuestras tiendas</Link></li>
                            <li><Link to="/quienes-somos">Quiénes somos</Link></li>
                            <li><Link to="/contactanos">Contáctanos</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-4 text-md-center">
                        <h6 className="fw-bold">Contacto</h6>
                        <p className="mb-1">+56 2 2345 6789</p>
                        <p className="mb-0">Lun a Sáb: 8:00 a 21:00</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer