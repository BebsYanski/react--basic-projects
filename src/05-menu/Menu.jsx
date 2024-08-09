import React from 'react'

const Menu = ({items}) => {
  return (
    <div className='section-center'>
      {items.map((menuItem) => {
        const {id, title, img, desc, price} = menuItem;
        return (
          <article key={id} className='menu-item' >
            <img src={img} alt={title} className='img' />
            <div className="item-info">
              <header>
                <h5>{title}</h5>
                <h5 className='item-price'>{price}</h5>
              </header>
              <p className="item-text">{desc}</p>
            </div>

          </article>
        )
      })}
    </div>
  )
}

export default Menu
