import InfoCard from '../components/InfoCard'

function Contactanos() {
    return (
        <div className="container py-8">
            <h1 className="mb-2 text-3xl font-bold text-verde-oscuro">Contáctanos</h1>
            <p className="mb-8">
                Estamos para ayudarte. Escríbenos o visítanos en San Esteban.
            </p>

            <h2 className="mb-4 text-xl font-bold">Nuestras sucursales</h2>
            <div className="mb-8 grid gap-6 md:grid-cols-2">
                <InfoCard
                    titulo="Casa central"
                    lineas={[
                        'Av. Principal 1234, Santiago',
                        '+56 2 2345 6789',
                        'Lun a Sáb: 8:00 a 21:00',
                    ]}
                />
                <InfoCard
                    titulo="Sucursal Viña del Mar"
                    lineas={[
                        'Calle Valparaíso 567, Viña del Mar',
                        '+56 32 234 5678',
                        'Lun a Dom: 9:00 a 22:00',
                    ]}
                />
            </div>

            <h2 className="mb-4 text-xl font-bold">Otros canales</h2>
            <div className="grid gap-6 md:grid-cols-2">
                <InfoCard
                    titulo="Call center"
                    lineas={['600 123 4567', 'Lun a Dom: 8:00 a 22:00']}
                />
                <InfoCard
                    titulo="Correo electrónico"
                    lineas={['contacto@sanesteban.cl', 'Respondemos en 24 horas hábiles']}
                />
            </div>
        </div>
    )
}

export default Contactanos