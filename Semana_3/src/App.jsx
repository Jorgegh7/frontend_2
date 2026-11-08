import { Routes, Route } from 'react-router'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import ProductosProvider from './context/ProductosProvider'
import Home from './pages/Home'
import ListaProductos from './pages/ListaProductos'
import AgregarProducto from './pages/AgregarProducto'
import NuestrasTiendas from './pages/NuestrasTiendas'
import QuienesSomos from './pages/QuienesSomos'
import Contactanos from './pages/Contactanos'
import NoEncontrada from './pages/NoEncontrada'
import DetalleProducto from './pages/DetalleProducto'
import Carrito from './pages/Carrito'


function App() {
  return (
    <ProductosProvider>
      <div className="flex min-h-screen flex-col">
        <Navigation />
        <main className="grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productos" element={<ListaProductos />} />
            <Route path="/agregar-producto" element={<AgregarProducto />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/nuestras-tiendas" element={<NuestrasTiendas />} />
            <Route path="/quienes-somos" element={<QuienesSomos />} />
            <Route path="/contactanos" element={<Contactanos />} />
            <Route path="*" element={<NoEncontrada />} />
            <Route path="/productos/:id" element={<DetalleProducto />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </ProductosProvider>
  )
}

export default App