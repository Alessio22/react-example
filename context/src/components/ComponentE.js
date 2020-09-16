import React, { Component } from 'react'
import ComponentF from './ComponentF'

class ComponentE extends Component {
    render() {
        return (
            <div className="bordered">
                <p>ComponentE</p>
                <ComponentF />
            </div>
        )
    }
}

export default ComponentE
