import { useState, useEffect } from 'react'
import './index.css'

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
  if (isError) {
    return (
      <section className='section container'>
        <h2>An Error Occurred</h2>
      </section>
    )
  }
  return <h2>Tabs Starter</h2>
}
export default App
