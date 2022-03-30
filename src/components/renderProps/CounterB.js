import React from 'react'

const CounterB = ({count, handleAdd, handleRemove}) => {
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={handleAdd}>Increment</button>
        <button onClick={handleRemove}>Decrement</button>

    </div>
  )
}

export default CounterB