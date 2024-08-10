import React, { useState } from 'react'
import data from './data'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

const Questions = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false)
  return (
    <article className='question'>
      <header>
        <h4>{title}</h4>
        <button onClick={() => setShowInfo(!showInfo)} className='question-btn'>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showInfo && <p>{info}</p>}
    </article>
  )
}

export default Questions
