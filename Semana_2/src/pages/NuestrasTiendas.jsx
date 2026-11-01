import InfoCard from "../components/InfoCard"
import casaCentral from "../assets/sucursal_casa_central.png"
import sucursalvina from "../assets/sucursal_viña_del_mar.png"

function NuestrasTiendas() {
    return (
        <div className="container py-8">
            <h1 className="mb-2 text-4xl font-bold text-verde-oscuro">Nuestras Tiendas</h1>
            <p className="mb-8">
                San Esteban nació en un barrio y sigue siendo parte de uno. Hoy te esperamos
                en dos locales, la casa central en Santiago y la sucursal de Viña del Mar,
                con la misma atención cercana de siempre y productos frescos todos los días.
                Visítanos y conoce tu supermercado de barrio.
            </p>
            <h2 className="mb-4 text-xl font-bold">Dónde encontrarnos</h2>
            <div className="grid gap-6 md:grid-cols-2">
                <InfoCard
                    titulo="Casa central"
                    imagen={casaCentral}
                    lineas={['Av. Principal 1234, Santiago', 'Lun a Sáb: 8:00 a 21:00']}
                />
                <InfoCard
                    titulo="Sucursal Viña del Mar"
                    imagen={sucursalvina}
                    lineas={['Calle Valparaíso 567, Viña del Mar', 'Lun a Dom: 9:00 a 22:00']}
                />
            </div>


        </div >
    )
}

export default NuestrasTiendas
