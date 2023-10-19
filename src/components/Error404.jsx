import vertical from '../assets/icons/vertical.png'

function Error404() {
  document.title = '404: This page could not be found.';
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="text-white flex items-center">
        <span className="text-3xl mr-2">404</span>
        <img src={vertical} alt="Vertical line" className="h-20 w-5 mr-2" />
        <span className="text-l">No se pudo encontrar esta página.</span>
      </div>
    </div>
  )
}


export default Error404