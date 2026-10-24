import productos from '../data/productos.json'
import ProductCard from '../components/ProductCard'
import logo from '../assets/logo.png'

const categorias = [...new Set(productos.map(producto => producto.categoria))]

function Home() {
    return (
        <>
            <div className="container my-4 p-4 shadow rounded bg-white">
                <h1>Bienvenido a San Esteban</h1>

                <div className="row align-items-center my-4">
                    <div className="col-md-6">
                        <img src={logo} alt="Logo San Esteban Supermercado" className="img-fluid" />
                    </div>
                    <div className="col-md-6">
                        <h2>Tu supermercado de barrio</h2>
                        <p>
                            En San Esteban llevamos más de tres décadas acompañando a las familias
                            con productos frescos y de calidad. Aquí puedes revisar el inventario de
                            nuestras tiendas: precios, ofertas y stock disponible, siempre al día.
                        </p>
                    </div>
                </div>
            </div>

            <div className="container my-4 p-4 shadow rounded bg-white">
                <h2 className="h4 mb-4">Productos</h2>

                {categorias.map(categoria => (
                    <section key={categoria} className="mb-5">
                        <h3 className="h5 mb-3">{categoria}</h3>
                        <div className="row g-4">
                            {productos
                                .filter(producto => producto.categoria === categoria)
                                .map(producto => (
                                    <div key={producto.id} className="col-md-3">
                                        <ProductCard producto={producto} />
                                    </div>
                                ))}
                        </div>
                    </section>
                ))}
            </div>
        </>
    )
}

export default Home