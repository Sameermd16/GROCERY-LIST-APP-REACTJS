import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'

export default function({list, setList, showAlert, editItem}) {

    function removeItem(id) {
        showAlert(true, 'item removed', 'danger')
        setList(list.filter((item) => {
            return item.id !== id
        }))
    }

    return (
        <div className='my-3'>
            {   
                list.map((item) => {
                    const {id, title} = item
                    return (
                        <article className='d-flex justify-content-between' key={id}>
                            <p>{title}</p>
                            <div>
                                < FaEdit color='blue' className='me-2' onClick={() => editItem(id)} />
                                <FaTrash className='cursor-pointer' color='red' onClick={() => removeItem(id)} />
                            </div>
                        </article> 
                    )
                })
            }
        </div>
    )
}