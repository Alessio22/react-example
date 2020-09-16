import React, { Component } from 'react'
import ComponentD from './ComponentD'

class ComponentB extends Component {
    render() {
        return (
            <div className="bordered">
                <p>ComponentB</p>
                <ComponentD />
            </div>
        )
    }
}

export default ComponentB
