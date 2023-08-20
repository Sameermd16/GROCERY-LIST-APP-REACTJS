import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'

export default function({list}) {
    return (
        <div className='my-3'>
            {   
                list.map((item) => {
                    const {id, title} = item
                    return (
                        <article className='d-flex justify-content-between'>
                            <p key={id}>{title}</p>
                            <div>
                                < FaEdit color='blue' className='me-2' />
                                <FaTrash color='red' />
                            </div>
                        </article> 
                    )
                })
            }
        </div>
    )
}