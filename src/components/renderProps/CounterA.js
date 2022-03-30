import React, { useState } from 'react'

const CounterA = ({count, handleAdd, handleRemove}) => {
   
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={handleAdd}>Click To Add</button>
        <button onClick={handleRemove}>Click To Remove</button>

    </div>
  )
}

export default CounterA