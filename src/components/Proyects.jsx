import proyectIcon from '../assets/icons/proyect.png'
import proyectsList from '../mocks/proyects.json'

export function ProyectsCard({ proyectsList }) {
  return (
    <>
      {
        proyectsList.results.map((proyect) => (
          <div key={proyect.id} className="bg-slate-900 shadow-md p-4 rounded-lg mb-4 border-2 border-slate-800">
            <h2 className="text-2xl font-semibold text-sky-600 mb-3">{proyect.title}</h2>
            <div className="flex items-start">
              <div className="w-60 h-auto mx-2">
                <img src={proyect.imageApp} alt={proyect.imageDesc} className="w-full h-auto" />
              </div>
              <div className="flex-grow">
                <p className="text-white text-l mb-3">
                  {proyect.description}
                </p>
                <p className="text-white text-l">
                  Tecnologías usadas:
                  <br />
                  {proyect.stacks}
                </p>
                <br /><br />
                <div>
                  <a href={proyect.github} target="_blank" rel="noreferrer" className="inline-block bg-slate-900 hover:bg-slate-950 text-white font-semibold py-2 px-3 rounded-md border border-slate-600 mr-2">
                    <span className="mr-1">Github</span>
                  </a>
                  <a href={proyect.urlApp} target="_blank" rel="noreferrer" className="inline-block bg-slate-900 hover:bg-slate-950 text-white font-semibold py-2 px-3 rounded-md border border-slate-600">
                    <span className="mr-1">Visitar</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))
      }
    </>
  )
}

function Proyects() {
  document.title = 'Portfolio - Kevin Menis';
  return (
    <div className="container mx-auto px-4 tracking-wider">
      <div className="flex items-center">
        <img src={proyectIcon} alt="Proyect Logo" className="color-white h-8 mx-2" />
        <h1 className="text-4xl font-semibold my-4 text-sky-600">Proyectos</h1>
      </div>
      <ProyectsCard proyectsList={proyectsList} />
    </div>
  )
}

export default Proyects