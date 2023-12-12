import { Routes, Route } from 'react-router-dom'
import Inicio from './paginas/Inicio'
import Navegacion from './components/Navegacion'
import Footer from './components/Footer'
import PaginaServicio from './paginas/PaginaServicio'
import Contacto from './paginas/Contacto'
import SobreMi from './paginas/SobreMi'

function App() {
  return (
    <>
      <Navegacion />
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='servicio/:nro' element={<PaginaServicio />} />
        <Route path='contacto' element={<Contacto />} />
        <Route path='sobremi' element={<SobreMi />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App