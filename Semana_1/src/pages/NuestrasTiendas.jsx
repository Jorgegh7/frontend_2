import InfoCard from "../components/InfoCard"
import casaCentral from "../assets/sucursal_casa_central.png"
import sucursalvina from "../assets/sucursal_viña_del_mar.png"

function NuestrasTiendas() {
    return (
        <div className="container my-4 p-4 shadow rounded bg-white">
            <h1>Nuestras Tiendas</h1>
            <p>
                San Esteban nació en un barrio y sigue siendo parte de uno. Hoy te esperamos
                en dos locales, la casa central en Santiago y la sucursal de Viña del Mar,
                con la misma atención cercana de siempre y productos frescos todos los días.
                Visítanos y conoce tu supermercado de barrio.
            </p>
            <div className="row g-4">
                <div className="col-md-6 p-4">
                    <InfoCard
                        titulo="Casa Central"
                        imagen={casaCentral}
                        lineas={["Av. Principal 1234, Santiago", "Lun a Sáb: 8:00 a 21:00"]}
                    />
                </div>
                <div className="col-md-6 p-4">
                    <InfoCard
                        titulo="Sucursal Viña del Mar"
                        imagen={sucursalvina}
                        lineas={["Calle Valparaíso 567, Viña del Mar", "Lun a Dom: 9:00 a 22:00"]}
                    />
                </div>
            </div>


        </div>
    )
}

export default NuestrasTiendas
