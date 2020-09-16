import React, { Component } from 'react'

class Hero extends Component {
    render() {
        if(this.props.name === "joker") {
            throw new Error("not a hero")
        }
        return (
            <div>{this.props.name}</div>
        )
    }
}

export default Hero
