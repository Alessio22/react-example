import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";
import api from '../../components/api';

function PostDetailComponent() {
    const { id } = useParams();
    const [post, setPost] = useState({})

    useEffect(() => {
        api.fetchPost(id)
            .then(res => setPost(res.data))
            .catch(err => console.error(err))
    }, [])

    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </div>
    )
}

export default PostDetailComponent
