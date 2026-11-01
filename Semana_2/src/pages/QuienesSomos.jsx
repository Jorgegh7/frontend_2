import InfoCard from '../components/InfoCard'
import fachada from '../assets/sucursal_casa_central.png'

function QuienesSomos() {
    return (
        <>
            <section
                className="relative flex min-h-96 items-center justify-center bg-cover bg-center text-center text-white"
                style={{ backgroundImage: `url(${fachada})` }}
            >
                <div className="absolute inset-0 bg-black/65"></div>
                <div className="relative px-6">
                    <h1 className="text-4xl font-bold md:text-5xl">Quiénes somos</h1>
                    <p className="mt-2 text-xl">Una familia, una historia, un supermercado.</p>
                </div>
            </section>

            <div className="container py-10">
                <h2 className="mb-4 text-2xl font-bold text-verde-oscuro">Nuestra historia</h2>
                <div className="space-y-4">
                    <p>
                        En 1987, don Manuel Rojas y doña Carmen Soto abrieron un pequeño almacén
                        en la esquina de la calle San Esteban, con un mostrador, tres estantes y
                        la convicción de que a los vecinos había que tratarlos como a la familia.
                        De ahí viene el nombre que seguimos llevando.
                    </p>
                    <p>
                        Sus hijos, Andrea y Felipe, crecieron entre cajas de fruta y listas de
                        pedidos. Con los años se sumaron al negocio y, en 2005, la familia dio el
                        paso de convertir el almacén en un supermercado, sin perder la costumbre
                        de saludar a cada cliente por su nombre.
                    </p>
                    <p>
                        Hoy San Esteban tiene dos locales, la casa central y la sucursal de Viña
                        del Mar, y una promesa que no ha cambiado: productos frescos, de calidad,
                        siempre. Para cumplirla usamos tecnología que nos permite saber qué hay
                        en cada góndola y reponer a tiempo.
                    </p>
                </div>

                <h2 className="mb-4 mt-10 text-2xl font-bold text-verde-oscuro">Nuestros valores</h2>
                <div className="grid gap-6 md:grid-cols-3">
                    <InfoCard titulo="Frescura" lineas={['Productos frescos, todos los días.']} />
                    <InfoCard titulo="Calidad" lineas={['Seleccionamos lo mejor para tu mesa.']} />
                    <InfoCard titulo="Siempre" lineas={['Tu barrio, nuestra prioridad.']} />
                </div>
            </div>
        </>
    )
}

export default QuienesSomos