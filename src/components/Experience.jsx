import work from '../assets/icons/work.png'
import company from '../assets/icons/company.png'
import computer from '../assets/icons/computer.png'
import calendar from '../assets/icons/calendar.png'
import study from '../assets/icons/study.png'
import experienceList from '../mocks/experience.json'
import education from '../mocks/education.json'

export function ExperienceWorkCard({ experienceList }) {
  return (
    <>
      {experienceList.results.map((experience) => (
        <div key={experience.id} className="bg-slate-900 shadow-md p-4 rounded-lg mb-4 border-2 border-slate-800 tracking-wider">
          <div className="flex items-center">
            <img src={company} alt="Company Logo" className="color-white h-5 mx-2" />
            <h2 className="text-2xl font-semibold text-sky-600">{experience.title}</h2>
          </div>
          <div className="flex items-center">
            <img src={computer} alt="Computer Logo" className="color-white h-5 mx-2" />
            <p className="text-xl text-slate-400">{experience.rol}</p>
          </div>
          <div className="flex items-center">
            <img src={calendar} alt="Calendar Logo" className="color-white h-5 mx-2" />
            <p className="text-slate-400">{experience.time}</p>
          </div>
          {experience.description.map((item, index) => (
            <li key={index} className="mt-2 ml-2 text-white">
              {item}
            </li>
          ))}
        </div>
      ))}
    </>
  )
}

export function EducationCard({ education }) {
  return (
    <div className="bg-slate-900 shadow-md p-4 rounded-lg mb-4 border-2 border-slate-800 tracking-wider">
      <div className="flex items-center">
        <img src={company} alt="Company Logo" className="color-white h-5 mx-2" />
        <p className="text-2xl font-semibold text-sky-600">{education.university}</p>
      </div>
      <div className="flex items-center">
        <img src={computer} alt="Computer Logo" className="color-white h-5 mx-2" />
        <p className="text-xl text-slate-400">{education.study}</p>
      </div>
      <div className="flex items-center">
        <img src={calendar} alt="Calendar Logo" className="color-white h-5 mx-2" />
        <p className="text-slate-400">{education.time}</p>
      </div>
      <li className="mt-2 ml-2 text-white">
        {education.description}
      </li>
    </div>
  )
}

function Experience() {
  document.title = 'Portfolio - Kevin Menis';
  return (
    <>
      <div className="container mx-auto px-4">
        <div className="flex items-center">
          <img src={work} alt="Work Logo" className="color-white h-8 mx-2" />
          <h1 className="text-4xl font-semibold my-4 text-sky-600">Experiencia Laboral</h1>
        </div>
        <ExperienceWorkCard experienceList={experienceList} />
      </div>
      <br />

      <div className="container mx-auto px-4">
        <div className="flex items-center">
          <img src={study} alt="Study Logo" className="color-white h-8 mx-2" />
          <h1 className="text-4xl font-semibold my-4 text-sky-600">Educación</h1>
        </div>
        <EducationCard education={education} />
      </div>
    </>
  )
}

export default Experience