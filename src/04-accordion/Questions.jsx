import React, { useState } from 'react'
import data from './data'

const Questions = ({title, info}) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className='question'>
      <header>
        <h4>{title}</h4>
        <button className='btn' onClick={()=>{setShowInfo(!showInfo)}}>
          {showInfo ? '-' : '+'}
        </button>
      </header>
     {showInfo && <p>{info}</p>}
    </article>
  )
}

export default Questions
