import React, { Component } from 'react'
import ChildOne from './ChildOne';
import ChildTwo from './ChildTwo';

export class ParentTwo extends Component {
    constructor(props) {
        super(props)
        this.inputRefOne = React.createRef();
        this.inputRefTwo = React.createRef();
    }

    componentDidMount() {
        console.log(this.inputRefOne);
        console.log(this.inputRefTwo);
    }
    
    render() {
        return (
            <div>
                <ChildOne ref={this.inputRefOne}/>
                <ChildTwo ref={this.inputRefTwo}/>
            </div>
        )
    }
}

export default ParentTwo
