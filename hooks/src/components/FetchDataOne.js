import React, { useState, useEffect } from 'react'
import axios from 'axios'

function FetchDataOne() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => setPosts(response.data))
            .catch((error) => console.error(error))
    }, [])

    return (
        <div>
            <ul>
                {posts.map(post => <li key={post.id}>{post.title}</li>)}
            </ul>
        </div>
    )
}

export default FetchDataOne
