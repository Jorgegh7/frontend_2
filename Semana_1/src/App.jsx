import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import Contactanos from './pages/Contactanos'
import QuienesSomos from './pages/QuienesSomos'
import NuestrasTiendas from './pages/NuestrasTiendas'
import Footer from './components/Footer'

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navigation />
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contactanos" element={<Contactanos />} />
          <Route path="/quienes-somos" element={<QuienesSomos />} />
          <Route path="/nuestras-tiendas" element={<NuestrasTiendas />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App