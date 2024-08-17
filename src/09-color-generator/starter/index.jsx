import React, { useState } from 'react'
import SingleColor from './SingleColor'
import Values from 'values.js'
import './index.css'

const App = () => {
  const [color, setColor] = useState('')
  const [error, setError] = useState(false)
  const [list, setList] = useState(new Values('#f15024').all(10))

  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      console.log('Hello')
      let colors = new Values(color).all(10)
      console.log(colors)
      console.log('Done')
      setList(colors)
    } catch (error) {
      setError(true)
      console.log(error)
    }
  }
  return (
    <>
      <section className='container'>
        <h3>Color Generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            name='color'
            id='color'
            // style={{ borderColor: error && 'red' }}
            // style={error && styles.blue}
            // style={error && style}
            value={color}
            // className={error && 'error'}
            className={`${error ? 'error' : null}`}
            onChange={(e) => setColor(e.target.value)}
            placeholder='#f15024'
          />
          <button type='submit' className='btn'>
            submit
          </button>
        </form>
      </section>
      <section className='colors'>
        {list.map((color, index) => {
          console.log(color)
          return (
            <SingleColor
              key={index}
              {...color}
              hexColor={color.hex}
              index={index}
            />
          )
        })}
      </section>
    </>
  )
}
export default App

const style = {
  borderColor: 'red',
}
const styles = {
  red: { borderColor: 'red' },
  green: { borderColor: 'green' },
  blue: { borderColor: 'blue' },
}
