import React from 'react'

const Categories = ({ filterItems, categories }) => {
  return (
    <section className='btn-container'>
      {categories.map((category) => {
        return (
          <button
            key={category}
            className='filter-btn'
            type='button'
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        )
      })}
    </section>
  )
}

export default Categories
