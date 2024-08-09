import React, { useState } from 'react'
import './index.css'
import Data from './data'
import List from './List'

const App = () => {
  const [people, setPeople] = useState(Data)
  return (
    <main>
      <section className='container'>
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button className='btn-block btn' onClick={() => setPeople([])}>
          clear all
        </button>
      </section>
    </main>
  )
}

export default App
