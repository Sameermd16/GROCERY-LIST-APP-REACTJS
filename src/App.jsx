import { useState } from 'react'
import './App.css'
import Alert from './Alert'
import List from './List'

function App() {


  const [groceryName, setGroceryName] = useState('')
  const [list, setList] = useState([])
  const [isEditing, setIsEditing] = useState(false)

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
      setAlert({
        show: true,
        msg: 'please enter the grocery name',
        type:'danger'
      })
    } else if(groceryName && isEditing) {
      //deal with edit
    }else {
      const groceryNameWithID = {id: new Date().getTime().toString(), title:groceryName}
      setList([...list, groceryNameWithID])
      setGroceryName('')
    }
  }

  return (
    <section className='container'>
      <h3 className='text-center mt-4'>Grocery Bud</h3>
      {alert.show && <Alert {...alert} list={list} />} 
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
        <List list={list} />
        <div className='text-center'>
          <button className='btn btn-sm btn-outline-danger'>clear items</button>
        </div>
      </main>
    </section>
  )
}

export default App
