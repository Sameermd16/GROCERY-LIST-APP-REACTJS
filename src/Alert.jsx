import React, { useEffect } from 'react'


export default function({show, msg, type, list, showAlert}) {

    useEffect(() => {
        setTimeout(() => {
            showAlert()
        }, 2000);
    }, [list])

    return (
       <p className={`text-${type}`}>{msg}</p>
    )
}