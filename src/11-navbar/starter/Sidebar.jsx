import React from 'react'
import { links, social } from './data'

const Sidebar = () => {
  return (
    <>
      {links.map((link) => {
        const { text, url, id } = link
        return (
          <li key={id}>
            <a href={url}>{text}</a>
          </li>
        )
      })}
    </>
  )
}

export const icons = () => {
  return (
    <>
      {social.map((item) => {
        const { id, icon, url } = item
        return (
          <li key={id}>
            <a href={url}>{icon}</a>
          </li>
        )
      })}
    </>
  )
}

export default Sidebar
