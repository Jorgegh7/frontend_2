import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './pages/Home'
import Contactanos from './pages/Contactanos'
import QuienesSomos from './pages/QuienesSomos'
import NuestrasTiendas from './pages/NuestrasTiendas'
import ProductosProvider from './context/ProductosProvider'
import ListaProductos from './pages/ListaProductos'
import AgregarProducto from './pages/AgregarProducto'

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
            <Route path="/contactanos" element={<Contactanos />} />
            <Route path="/quienes-somos" element={<QuienesSomos />} />
            <Route path="/nuestras-tiendas" element={<NuestrasTiendas />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </ProductosProvider>
  )
}

export default App