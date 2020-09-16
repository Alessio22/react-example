import React, { Component } from 'react'

class Item1 extends Component {
    render() {
        console.log("render Item1", this.props.item.text);
        return (
            <li>
                {this.props.item.text}
                <button onClick={() => this.props.onRemove(this.props.item)}>Remove</button>
            </li>
        )
    }
}

// export default Item1
export default React.memo(Item1)
