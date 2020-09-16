import React, { useEffect, useState } from 'react'
import PostListItemComponent from './PostListItemComponent'
import api from '../../components/api';

function PostListComponent() {
    const [posts, setPosts] = useState([])
    
    useEffect(() => {
        api.fetchPosts()
            .then(res => setPosts(res.data))
            .catch(err => console.error(err))
    }, [])

    return (
        <ul>
            {posts.map(post => <PostListItemComponent key={post.id} post={post} />)}
        </ul>
    )
}

export default PostListComponent
