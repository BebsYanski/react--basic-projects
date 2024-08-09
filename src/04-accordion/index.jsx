import React, { useState } from 'react'
import SingleQuestion from './Questions'
import data from './data'
import './index.css'

const App = () => {
  const [questions, setQuestions] = useState(data);
  return (
    <main>
      <div className='container'>
        <h1>Questions and answers about login</h1>
        {/* <Questions/> */}
      <section className="info">
        {
          questions.map((question) => {
            return <SingleQuestion key={question.id} {...question}/>
          })
        }
      </section>
      </div>

      
    </main>
  )
}

export default App
