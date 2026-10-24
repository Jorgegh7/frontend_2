import InfoCard from "../components/InfoCard"

function QuienesSomos() {
    return (
        <>
            <section className="hero-quienes d-flex align-items-center justify-content-center text-center text-white">
                <div>
                    <h1 className="display-4 fw-bold">Quiénes somos</h1>
                    <p className="lead">Una familia, una historia, un supermercado.</p>
                </div>
            </section>

            <div className="container my-5">
                <h2 className="mb-4">Nuestra historia</h2>
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

                <h2 className="mt-5 mb-4">Nuestros valores</h2>
                <div className="row g-4">
                    <div className="col-md-4">
                        <InfoCard titulo="Frescura" lineas={["Productos frescos, todos los días."]} />
                    </div>
                    <div className="col-md-4">
                        <InfoCard titulo="Calidad" lineas={["Seleccionamos lo mejor para tu mesa."]} />
                    </div>
                    <div className="col-md-4">
                        <InfoCard titulo="Siempre" lineas={["Tu barrio, nuestra prioridad."]} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default QuienesSomos