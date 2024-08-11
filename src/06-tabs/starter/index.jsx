import { useState, useEffect } from 'react'
import './index.css'
import { FaAngleDoubleRight } from 'react-icons/fa'

const url = 'https://www.course-api.com/react-tabs-project'

const App = () => {
  const [loading, setLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [jobs, setJobs] = useState([])
  const [value, setValue] = useState(0)

  const fetchJobs = async () => {
    setLoading(true)

    try {
      const response = await fetch(url)
      const newJobs = await response.json()

      setJobs(newJobs)
      setLoading(false)
    } catch (error) {
      setIsError(true)
      setLoading(false)
      console.error(error)
    }
  }

  useEffect(() => {
    fetchJobs()
  }, [])

  if (loading) {
    return (
      <section className='container'>
        <div className='loading'></div>
        <h2>Loading...</h2>
      </section>
    )
  }
  /*  if (isError) {
    return (
      <section className='section container'>
        <h2>An Error Occurred</h2>
      </section>
    )
  } */

  const { company, dates, duties, title } = jobs[value]
  return (
    <section>
      <div className='title'>
        <h2>experience</h2>
        <div className='title-underline'></div>
      </div>
      <div className='jobs-center'>
        {/* btn Container */}
        <div className='btn-container'>
          {jobs.map((item, index) => {
            return (
              <button
                className={`job-btn ${index === value && 'active-btn'}`}
                onClick={() => setValue(index)}
                key={index}
              >
                {item.company}
              </button>
            )
          })}
        </div>
        <article className='job-info'>
          <h3>{title}</h3>
          <h4 className='job-company'>{company}</h4>
          <p className='job-date'>{dates}</p>
          {duties.map((duty, index) => {
            return (
              <div key={index} className='job-desc'>
                <FaAngleDoubleRight className='job-icon'></FaAngleDoubleRight>
                <p>{duty}</p>
              </div>
            )
          })}
        </article>
      </div>
    </section>
  )
}
export default App
