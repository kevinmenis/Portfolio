import { Routes, Route } from 'react-router-dom'
import Navbar from './components/partials/Navbar'
import Footer from './components/partials/Footer'
import AboutMe from './components/AboutMe'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Proyects from './components/Proyects'
import Error404 from './components/Error404'

function App() {
  return (
    <div className='flex flex-col min-h-screen relative antialiased overflow-x-hidden bg-slate-900'>
      <Navbar />
      <div className="flex-grow mx-auto px-20 flex flex-col">
        <div className="flex-1">
          <Routes>
            <Route path='/' element={<AboutMe />} />
            <Route path='/experiencia' element={<Experience />} />
            <Route path='/contacto' element={<Contact />} />
            <Route path='/proyectos' element={<Proyects />} />
            <Route path='*' element={<Error404 />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div >
  )
}

export default App
