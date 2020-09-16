import React, { Component } from 'react'
import ClickCounter from './ClickCounter'
import HoverCounter from './HoverCounter'
import User from './User'

class Parent extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <>
                <ClickCounter name="Alessio" />
                <HoverCounter />
                <User render={(isLogged) => isLogged ? "Alessio" : "Guest"} />
            </>
        )
    }
}

export default Parent
