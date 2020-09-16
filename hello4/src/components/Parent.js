import React, { Component } from 'react'
import PureComp from './PureComp'
import Comp from './Comp'

class Parent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0             
        }
    }
    
    componentDidMount() {
        setInterval(()=>{
            console.log("setState");
            this.setState({count: 0})
        }, 2000);
    }

    render() {
        console.log("render Parent");
        return (
            <div>
                <Comp count={this.state.count}></Comp>
                <PureComp count={this.state.count}></PureComp>
            </div>
        )
    }
}

export default Parent
