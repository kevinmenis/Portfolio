import { NavLink } from "react-router-dom"

function Navbar() {
  return (
    <nav className="w-screen border-b bg-slate-900 lg:px-8 border-slate-300/10 lg:mx-0">
      <div className="px-4 mx-auto max-w-7xl sm:px-16 lg:px-20">
        <div className="relative flex items-center justify-between h-20">
          <div className="flex items-center justify-center flex-1 sm:items-stretch sm:justify-start">
            <div className="mx-auto">
              <div className="flex space-x-24">
                <NavLink to={'/'}
                  className={({ isActive }) => {
                    return isActive
                      ? "text-sky-600 px-3 py-2 text-xl font-medium rounded-md hover:text-sky-800"
                      : "text-white px-3 py-2 text-xl font-medium rounded-md hover:text-sky-600"
                  }}>
                  Sobre mi
                </NavLink>
                <NavLink to={'/experiencia'}
                  className={({ isActive }) => {
                    return isActive
                      ? "text-sky-600 px-3 py-2 text-xl font-medium rounded-md hover:text-sky-800"
                      : "text-white px-3 py-2 text-xl font-medium rounded-md hover:text-sky-600"
                  }}>
                  Experiencias
                </NavLink>
                <NavLink to={'/proyectos'}
                  className={({ isActive }) => {
                    return isActive
                      ? "text-sky-600 px-3 py-2 text-xl font-medium rounded-md hover:text-sky-800"
                      : "text-white px-3 py-2 text-xl font-medium rounded-md hover:text-sky-600"
                  }}>
                  Proyectos
                </NavLink>
                <NavLink to={'/contacto'}
                  className={({ isActive }) => {
                    return isActive
                      ? "text-sky-600 px-3 py-2 text-xl font-medium rounded-md hover:text-sky-800"
                      : "text-white px-3 py-2 text-xl font-medium rounded-md hover:text-sky-600"
                  }}>
                  Contacto
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar