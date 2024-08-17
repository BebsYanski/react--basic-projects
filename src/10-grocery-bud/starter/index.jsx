import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'
import './index.css'

const getLocalStorageItem = () => {
  let list = localStorage.getItem('List')
  if (list) {
    return JSON.parse(localStorage.getItem('List'))
  } else {
    return []
  }
}
const App = () => {
  const [name, setName] = useState('')
  const [list, setList] = useState(getLocalStorageItem)
  const [isEditing, setIsEditing] = useState(false)
  const [editID, setEditID] = useState(null)
  const [alert, setAlert] = useState({
    show: false,
    msg: '',
    type: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name) {
      // display Alert
      showAlert(true, 'danger', 'please enter a value')
    } else if (name && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, title: name }
          }
          return item
        })
      )
      setName('')
      setEditID(null)
      setIsEditing(false)
      showAlert(true, 'success', 'Value changed')
    } else {
      showAlert(true, 'success', 'item added to the list')

      const newItem = { id: new Date().getTime().toString(), title: name }
      setList([...list, newItem])
      setName('')
    }
  }

  const showAlert = function (show = false, type = '', msg = '') {
    setAlert({ show, msg, type })
  }
  const clearList = function () {
    showAlert(true, 'danger', 'empty list')
    setList([])
  }
  const removeItem = (id) => {
    showAlert(true, 'danger', 'item removed')
    const filteredItems = list.filter((item) => item.id !== id)
    const foundItems = list.find((item) => item.id !== id)
    console.log('filtered', filteredItems)
    console.log('found', foundItems)
    setList(list.filter((item) => item.id !== id))
  }
  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id)
    const filSpecificItem = list.filter((item) => item.id === id)
    console.log('found', specificItem)
    console.log('filtered', filSpecificItem)

    setIsEditing(true)
    setEditID(id)
    setName(specificItem.title)
  }

  useEffect(() => {
    localStorage.setItem('List', JSON.stringify(list))
  }, [list])
  return (
    <section className='section-center'>
      <form onSubmit={handleSubmit} className='grocery-form'>
        {alert.show && <Alert list={list} {...alert} removeAlert={showAlert} />}
        <h3>Grocery Bud</h3>
        <div className='form-control'>
          <input
            className='form-input'
            type='text'
            name='name'
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='e.g. eggs'
          />
          <button className='btn' type='submit'>
            {isEditing ? 'edit' : 'submit'}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className='grocery-container'>
          <List items={list} removeItem={removeItem} editItem={editItem} />
          <button onClick={clearList} className='btn clear-btn'>
            clear items
          </button>
        </div>
      )}
    </section>
  )
}

export default App
