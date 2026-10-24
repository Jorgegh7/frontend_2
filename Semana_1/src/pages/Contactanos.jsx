import InfoCard from "../components/InfoCard"

function Contactanos() {
    return (
        <div className="container my-4 p-4 shadow rounded bg-white">
            <h1>Contáctanos</h1>
            <p>Estamos para ayudarte. Escríbenos o visítanos en San Esteban.</p>
            <div className="row g-4">
                <div className="col-md-6">
                    <InfoCard
                        titulo="Casa central"
                        lineas={[
                            "Av. Principal 1234, Santiago",
                            "+56 2 2345 6789",
                            "Lun a Sáb: 8:00 a 21:00",
                        ]}
                    />
                </div>

                <div className="col-md-6">
                    <InfoCard
                        titulo="Sucursal Viña del Mar"
                        lineas={[
                            "Calle Valparaíso 567, Viña del Mar",
                            "+56 32 234 5678",
                            "Lun a Dom: 9:00 a 22:00",
                        ]}
                    />
                </div>
                <div className="col-md-6">
                    <InfoCard
                        titulo="Call center"
                        lineas={["600 123 4567", "Lun a Dom: 8:00 a 22:00"]}
                    />
                </div>
                <div className="col-md-6">
                    <InfoCard
                        titulo="Correo electrónico"
                        lineas={["contacto@sanesteban.cl", "Respondemos en 24 horas hábiles"]}
                    />
                </div>
            </div>
        </div>


    )
}

export default Contactanos
