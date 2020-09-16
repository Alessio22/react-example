import React from 'react'
import { useHistory } from "react-router-dom";

function PostListItemComponent(props) {
    const history = useHistory();
    return (
        <li>
            <h3>{props.post.title}</h3>
            <p><small>{props.post.body.substring(0, 50)}...</small></p>
            <button onClick={() => history.push(`/posts/${props.post.id}`)}>Open detail</button>
        </li>
    )
}

export default PostListItemComponent
