import { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'
import './index.css'
import Sidebar from './Sidebar'
const App = () => {
  const [showLinks, setShowLinks] = useState(false)
  const linksContainerRef = useRef(null)
  const linksRef = useRef(null)

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height
    console.log(linksHeight)
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`
    } else {
      linksContainerRef.current.style.height = '0px'
    }
  }, [showLinks])
  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} alt='logo' />
          <button
            onClick={() => setShowLinks(!showLinks)}
            className='nav-toggle'
          >
            <FaBars />
          </button>
        </div>

        <div ref={linksContainerRef} className={'links-container'}>
          <ul className='links' ref={linksRef}>
            {links.map((link) => {
              const { text, url, id } = link
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              )
            })}
          </ul>
        </div>

        <ul className='social-icons'>
          {social.map((item) => {
            const { id, icon, url } = item
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            )
          })}
        </ul>
      </div>
      Navbar Starter
    </nav>
  )
}
export default App
