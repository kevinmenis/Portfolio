import kevinImg from '../assets/kev.jpg'
import laravel from '../assets/icons/laravel.svg'
import php from '../assets/icons/php.svg'
import javascript from '../assets/icons/javascript.svg'
import react from '../assets/icons/react.png'
import git from '../assets/icons/git.png'
import mysql from '../assets/icons/mysql.svg'
import html from '../assets/icons/html.png'
import css from '../assets/icons/css.png'
import bootstrap from '../assets/icons/bootstrap.png'
import tailwind from '../assets/icons/tailwind.svg'
import download from '../assets/icons/download.png'

function AboutMe() {
  document.title = 'Portfolio - Kevin Menis';
  return (
    <>
      <div className="mt-20 flex justify-between">
        <img src={kevinImg} alt="Kevin Menis" className="w-1/3 rounded-full" />
        <div className="flex-grow ml-4 tracking-wider">
          <h1 className="my-4 font-serif text-5xl text-start text-sky-600">Desarrollador Fullstack</h1>
          <p className="text-base text-justify text-white">
            Soy Kevin Menis, un desarrollador web fullstack, mi experiencia abarca desde la creación de interfaces atractivas en el frontend hasta la implementación de sólidas lógicas en el backend.
            <br /><br />
            En mis habilidades cuento con conocimientos y experiencia en:
            <br /><br />
            <img src={php} alt="PHP Logo" className="inline-block h-8 logo-svg mx-2" />
            <img src={laravel} alt="Laravel Logo" className="inline-block h-8 logo-svg mx-2" />
            <img src={javascript} alt="JavaScript Logo" className="inline-block h-8 logo-svg mx-2" />
            <img src={react} alt="React Logo" className="inline-block h-8 logo-svg mx-2" />
            <img src={git} alt="Git Logo" className="inline-block h-8  logo-svg mx-2" />
            <img src={mysql} alt="MySQL Logo" className="inline-block h-8 logo-svg mx-2" />
            <img src={html} alt="html Logo" className="inline-block h-8 logo-svg mx-2" />
            <img src={css} alt="css Logo" className="inline-block h-8 logo-svg mx-2" />
            <img src={bootstrap} alt="Bootrap Logo" className="inline-block h-8 logo-svg mx-2" />
            <img src={tailwind} alt="Tailwind css Logo" className="inline-block h-8 logo-svg mx-2" />
            <br /><br />
            <a href="/cv-KevinMenis.pdf" target="_blank" className="inline-block bg-slate-900 hover:bg-slate-950 text-white font-semibold py-2 px-3 rounded-md border border-slate-600">
              <span className="mr-1">Descargar CV</span>
              <img src={download} alt="download Logo" className="inline-block h-4" />
            </a>
          </p>
        </div>
      </div>
      <br /><br /><br />
    </>
  )
}

export default AboutMe