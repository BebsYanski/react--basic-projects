import React, { useEffect, useState } from 'react'
import rgbToHex from './rgbToHex'

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false)
  const bcg = rgb.join(',')
  const hex = rgbToHex(...rgb)
  const hexValue = `#${hexColor}`
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false)
    }, 3000)
    return () => clearTimeout(timeout)
  }, [alert])

  return (
    <article
      className={index > 10 ? 'color-light' : 'color'}
      onClick={() => {
        setAlert(true)
        navigator.clipboard.writeText(hexValue)
      }}
      style={{ backgroundColor: `rgb(${bcg})` }}
    >
      <p className='percent-value'>{`${weight}%`}</p>
      <p className='color-value'>#{hexColor}</p>
      {/* <p className='color-value'>{hex}</p> */}
      {alert && <p className=''>copied to clipboard</p>}
    </article>
  )
}

export default SingleColor
