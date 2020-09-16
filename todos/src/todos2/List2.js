import React from 'react'
import Item2 from './Item2'

function List2(props) {
    console.log(props);
    return (
        <div>
            <ul>
                {props.items.map(item => <Item2 key={item.id} item={item} onRemove={props.onRemove}/>)}
            </ul>
        </div>
    )
}

export default List2
