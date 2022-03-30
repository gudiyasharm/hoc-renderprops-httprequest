import React, { useEffect, useState } from 'react'

const FetchApi = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => {
                console.log("Get Data:", json)
                setData(json)
            }).catch(error => {
                console.log('error is:', error)
            })
    }, [])
    return (
        <div>
            <h1>Fetch API</h1>
            {
                data.map(item => {
                    return (
                        <div>
                            <p>{item.name}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default FetchApi