import React, { useState } from 'react'
import './index.css'
import Categories from './Categories'
import Menu from './Menu'
import items from './data'

const allCategories = [
  'all',
  ...new Set(
    items.map((item) => {
      return item.category
    })
  ),
]

console.log(allCategories)
const App = () => {
  const [menuItems, setMenuItems] = useState(items)
  const [categories, setCategories] = useState(allCategories)

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items)
      return
    }
    const newItems = items.filter((item) => item.category === category)
    setMenuItems(newItems)
  }
  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>our menu</h2>
          <div className='title-underline'></div>
        </div>
        <Categories filterItems={filterItems} categories={categories} />
        <Menu items={menuItems} />
      </section>
    </main>
  )
}

export default App
