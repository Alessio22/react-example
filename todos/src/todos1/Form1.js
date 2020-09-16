import React, { Component } from 'react'

class Form1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: ''
        }
        this.handleChangeText = this.handleChangeText.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleChangeText(e) {
        this.setState({ text: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.onSave({
            id: new Date().getTime(),
            text: this.state.text
        });
        this.setState({ text: '' })
    }

    render() {
        console.log("render Form1");
        return (
            <form>
                <input type="text" value={this.state.text} onChange={this.handleChangeText}></input>
                <button onClick={this.onSubmit}>Add</button>
            </form>
        )
    }
}

// export default Form1
export default React.memo(Form1)
