import React, { Component } from 'react'

class Child extends Component {
    constructor(props) {
        super(props)
        console.log(props);
    }
    
    render() {
        return <button onClick={this.props.increment}>button child</button>
                
    }
}

export default Child
