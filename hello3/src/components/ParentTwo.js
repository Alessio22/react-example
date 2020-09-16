import React, { Component } from 'react'
import Child from './Child';

class ParentTwo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            persons: ["alessio", "claudio", "marco", "marco"]
        }
    }

    increment = () => {
        console.log("increment");
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        });
    }

    render() {
        return (
            <div>
                {this.state.count}
                {this.state.count % 2 === 0 && <p>even</p>}
                {this.state.count % 2 !== 0 && <p>odd</p>}
                <Child increment={this.increment} />
                <ul>
                    {this.state.persons.map((person, i) => <li key={i}>{person}</li>)}
                </ul>
            </div>
        )
    }
}

export default ParentTwo
