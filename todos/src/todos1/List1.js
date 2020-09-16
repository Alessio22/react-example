import React, { Component } from 'react'
import Item1 from './Item1'

class List1 extends Component {
    render() {
        console.log("render List1");
        return (
            <ul>
                {this.props.items.map(item => <Item1 key={item.id} item={item} onRemove={this.props.onRemove}/>)}
            </ul>
        )
    }
}

export default List1
