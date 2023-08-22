import { useState } from 'react'
import './App.css'
import Alert from './Alert'
import List from './List'

function App() {


  const [groceryName, setGroceryName] = useState('')
  const [list, setList] = useState([])
  const [isEditing, setIsEditing] = useState(false)
  const [editID, setEditID] = useState(null)

  const [alert, setAlert] = useState(
    {
      show: false,
      msg: '',
      type:''
    }
  )

  function handleSubmit(event) {
    event.preventDefault()
    if(!groceryName) {
      showAlert(true, 'please enter the grocery', 'danger')
    } else if(groceryName && isEditing) {
      //deal with edit
      setList(list.map((item) => {
        if(item.id === editID) {
          return { ...item, title:groceryName}
        } 
        return item
      }))
      setGroceryName('')
      setEditID(null)
      setIsEditing(false)
    }else {
      showAlert(true, `'${groceryName}' added to the list`, 'success')
      const groceryNameWithID = {id: new Date().getTime().toString(), title:groceryName}
      setList([...list, groceryNameWithID])
      setGroceryName('')
    }
  }

  function showAlert(show=false, msg='', type='') {
    setAlert({show, msg, type}) 
  }
  function clearItems() {
    showAlert(true, 'empty list', 'danger')
    setList([])
  }

  function editItem(id) {
    const specificItem = list.find((item) => {
      return item.id === id 
    })
    console.log(specificItem)
    setIsEditing(true)
    //have to save this id somewhere to use it for editing
    setEditID(id)
    setGroceryName(specificItem.title)
  }

  return (
    <section className='container'>
      <h3 className='text-center mt-4'>Grocery Bud</h3>
      {alert.show && <Alert {...alert} list={list} showAlert={showAlert} />} 
      <form onSubmit={handleSubmit}>
        <input type="text" className='form-control' 
          value={groceryName}
          placeholder='Enter grocery'
          onChange={(e) => setGroceryName(e.target.value)} 
        />
        <div className='text-end mt-2'>
          <button className='btn btn-sm btn-outline-primary'>{isEditing ? 'edit' : 'submit'}</button>
        </div>
      </form>
      <main className='container'>
        <List list={list} setList={setList} showAlert={showAlert} editItem={editItem} />
        <div className='text-center'>
          <button className='btn btn-sm btn-outline-danger'
            onClick={clearItems}
          >clear items</button>
        </div>
      </main>
    </section>
  )
}

export default App
