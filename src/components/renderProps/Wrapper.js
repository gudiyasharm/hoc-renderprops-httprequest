import React, { useState } from 'react'

const Wrapper = (props) => {
    const [count, setCount] = useState(0)

    const handleAdd = () => {
        setCount(pre => pre + 1)
    }

    const handleRemove = () => {
        setCount(pre => pre - 1)
    }

    return (
        
            props.count(count, handleAdd, handleRemove)
       
    )
}

export default Wrapper