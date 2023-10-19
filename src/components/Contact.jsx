import linkedin from '../assets/icons/linkedin.svg'
import gmail from '../assets/icons/gmail.svg'
import github from '../assets/icons/github.png'

function Contact() {
  document.title = 'Portfolio - Kevin Menis';
  return (
    <div className="mt-8 tracking-wider">
      <h2 className="text-2xl font-semibold text-white">¡Contáctame!</h2>
      <div className="mt-4 space-y-4">
        <div className="flex items-center space-x-2">
          <img src={linkedin} alt="Linkedin Logo" className="logo-svg h-8 w-7" />
          <a href="https://www.linkedin.com/in/kevinmenis/" target="_blank" rel="noreferrer"
            className="text-white hover:text-sky-600">Linkedin</a>
        </div>
        <div className="flex items-center space-x-2">
          <img src={gmail} alt="Gmail Logo" className="logo-svg h-8 w-7" />
          <a href="mailto:kevinmenis@gmail.com" className="text-white hover:text-sky-600">kevinmenis@gmail.com</a>
        </div>
        <div className="flex items-center space-x-2">
          <img src={github} alt="Github Logo" className="logo-svg h-8 w-7" />
          <a href="https://github.com/kevinmenis" target="_blank" rel="noreferrer" className="text-white hover:text-sky-600">Github</a>
        </div>
      </div>
    </div>
  )
}

export default Contact