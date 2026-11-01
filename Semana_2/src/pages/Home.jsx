import useProductos from '../hooks/useProductos'
import ProductCard from '../components/ProductCard'
import logo from '../assets/logo.png'



function Home() {
    const { productos } = useProductos()
    const categorias = [...new Set(productos.map(producto => producto.categoria))]

    return (
        <div className="container space-y-8 py-8">
            <section className="rounded-lg bg-white p-6 shadow-lg">


                <div className="grid items-center gap-6 md:grid-cols-2">
                    <img src={logo} alt="Logo San Esteban Supermercado" className="w-full" />
                    <div>
                        <h1 className="mb-6 text-3xl font-bold text-verde-oscuro">Supermercado San Esteban</h1>
                        <h2 className="mb-2 text-xl font-bold">Tu supermercado de barrio</h2>
                        <p>
                            Más de tres décadas acompañando a las familias con productos
                            frescos y de calidad. Revisa precios, ofertas y stock
                            disponible, siempre al día.
                        </p>
                    </div>
                </div>
            </section>

            <section className="rounded-lg bg-white p-6 shadow-lg">
                <h2 className="mb-6 text-xl font-bold">Productos</h2>

                {categorias.map(categoria => (
                    <div key={categoria} className="mb-10 last:mb-0">
                        <h3 className="mb-4 text-lg font-bold text-verde-oscuro">{categoria}</h3>
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                            {productos
                                .filter(producto => producto.categoria === categoria)
                                .map(producto => (
                                    <ProductCard key={producto.id} producto={producto} />
                                ))}
                        </div>
                    </div>
                ))}
            </section>
        </div>
    )
}

export default Home