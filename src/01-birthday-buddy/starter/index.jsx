import './index.css'
import data from './data'
import List from './List'
import { useState } from 'react'

// TODO: Add a text input which would add more persons to the list.
// TODO: Try doing everything from the list component

const App = () => {
  const [people, setPeople] = useState(data)

  return (
    <main>
      <section className='container'>
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button
          className='btn btn-block'
          type='button'
          onClick={() => setPeople([])}
        >
          clear all
        </button>
      </section>
    </main>
  )
}
export default App
