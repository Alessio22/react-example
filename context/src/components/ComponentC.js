import React, { Component } from 'react'
import ComponentE from './ComponentE'

class ComponentC extends Component {
    render() {
        return (
            <div className="bordered">
                <p>ComponentC</p>
                <ComponentE />
            </div>
        )
    }
}

export default ComponentC
