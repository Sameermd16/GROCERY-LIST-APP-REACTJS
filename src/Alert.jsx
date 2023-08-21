import React from 'react'


export default function({show, msg, type, list}) {


    return (
       <p className={`text-${type}`}>{msg}</p>
    )
}