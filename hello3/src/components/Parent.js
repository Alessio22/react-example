import React from 'react'

function Parent(props) {
    return (
        <div>
            Parent {props.name}
            <p>{props.children}</p>
        </div>
    )
}

export default Parent