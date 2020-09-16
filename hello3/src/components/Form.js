import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "alessio"
        }
    }
    setName = (event) => {
        console.log(event.target.value);
        this.setState({
            name: event.target.value
        })
    }

    save = (event) => {
        event.preventDefault();
        alert(this.state.name);
    }

    render() {
        return (
            <>
                <h1>Form</h1>
                <form>
                    <input value={this.state.name} onChange={this.setName} />
                    <button type="submit" onClick={this.save}>save</button>
                </form>
            </>
        )
    }
}

export default Form
