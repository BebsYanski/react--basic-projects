import React from 'react'
import Tour from './Tour'

const Tours = ({ tours, removeTour }) => {
  return (
    <section className='tours'>
      <div className='title'>
        <h2>our tours</h2>
        <div className='title-underline'></div>
      </div>
      <div>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour} />
        })}
      </div>
    </section>
  )
}

export default Tours
