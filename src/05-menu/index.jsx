import React, {useState} from 'react'
import './index.css'
import Categories from './Categories'
import Menu from './Menu';
import items from './data'

const App = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [categogies, setCategories] = useState([]);
  return (
    <main>
      <section className='menu section'>
        <div className="title">
          <h2>our menu</h2>
          <div className="title-underline"></div>
        </div>
        <Categories/>
        <Menu items={menuItems} />
      </section>
      
    </main>
  )
}

export default App
