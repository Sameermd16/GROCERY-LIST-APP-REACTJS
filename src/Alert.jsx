import React, { useEffect } from 'react'


export default function({msg, type, list, showAlert}) {

    useEffect(() => {
        const timeout = setTimeout(() => {
            showAlert()
        }, 3000);
        return () => clearTimeout(timeout)
    }, [list])

    return (
       <small className={`text-${type}`}>{msg}</small>
    )
}