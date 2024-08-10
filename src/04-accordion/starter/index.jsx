import React, { useState } from 'react'
import SingleQuestion from './Questions'
import data from './data'
import './index.css'

const App = () => {
  const [questions, setQuestions] = useState(data)
  return (
    <main>
      <div className='container'>
        <h1>Questions and answers about Login</h1>

        <section>
          {questions.map((question) => {
            const { id, title, info } = question
            return <SingleQuestion key={id} title={title} info={info} />
          })}
        </section>
      </div>
    </main>
  )
}

export default App
