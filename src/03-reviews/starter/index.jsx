import React from 'react'
import './index.css'
import Review from './Review'

const App = () => {
  return (
    <main>
      <section className='container'>
        <div className='title'>
          <h2>Our Reviews</h2>
          <div className='title-underline'></div>
        </div>
        <Review />
      </section>
    </main>
  )
}

export default App
