import React from 'react'

function Item2(props) {
    return (
        <li>
            {props.item.text}
            <button onClick={() => props.onRemove(props.item)}>Remove</button>
        </li>
    )
}

export default Item2
