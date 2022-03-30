import React, { useState } from 'react'

const PostApi = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('')

    const handleSubmit = () =>{
        // e.preventDefault();
        console.log({name, email})
        let data = {name, job: email}
        fetch('https://reqres.in/api/users', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
            },
            // body:JSON.stringify(data)
            body: data
        }).then((result)=>{
            console.log('The result is:', result)
        })
    }

  return (
    <div>
        <h1>POST API METHOD</h1>
        <input type="text" name='name' placeholder='Enter Name' value={name} onChange={(e) =>{setName(e.target.value)}} />
        <input type="text" name='email' placeholder='Enter Email'value={email} onChange={(e) =>{setEmail(e.target.value)}}/>
        <button type='button' onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default PostApi