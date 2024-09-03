import React from 'react'
import { useGlobalContext } from './context'
import { FaBars } from 'react-icons/fa'

const Home = () => {
  const { openModal, openSidebar } = useGlobalContext()
  return (
    <main>
      <button onClick={openSidebar} type='button' className='sidebar-toggle'>
        <FaBars />
      </button>

      <button onClick={openModal} className='btn'>
        show modal
      </button>
    </main>
  )
}

export default Home
