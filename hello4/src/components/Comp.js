import React, { Component } from 'react'

class Comp extends Component {
    render() {
        console.log("render Comp");
        return (
            <div>
                Component: {this.props.count}
            </div>
        )
    }
}

export default Comp
