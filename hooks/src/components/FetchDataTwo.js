import React, { useState, useEffect } from 'react'
import axios from 'axios'

function FetchDataTwo() {    
    const [posts, setPosts] = useState({})
    const [id, setId] = useState(1)

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((response) => setPosts(response.data))
            .catch((error) => console.error(error))
    }, [id])

    return (
        <div>
            <input type="number" value={id} onChange={({target}) => setId(target.value)} />
            <p>{posts.title}</p>
        </div>
    )
}

export default FetchDataTwo
