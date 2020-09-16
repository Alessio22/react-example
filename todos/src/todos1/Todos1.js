import React, { Component } from 'react'
import Form1 from './Form1'
import List1 from './List1'

class Todos1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [
                { id: 1, text: "primo" },
                { id: 2, text: "secondo" },
                { id: 3, text: "terzo" },
            ]
        }
        this.onSave = this.onSave.bind(this);
        this.onRemove = this.onRemove.bind(this);
    }

    onSave(itemToAdd) {
        console.log("onSave", itemToAdd);
        this.setState({
            items: [...this.state.items, itemToAdd]
        });
    }

    onRemove(itemToRemove) {
        console.log("onRemove", itemToRemove);
        const index = this.state.items.findIndex(item => item.id === itemToRemove.id)
        const newList = [...this.state.items]
        newList.splice(index, 1)
        this.setState({
            items: newList
        });
    }

    render() {
        console.log("render todos1");
        return (
            <div>
                <Form1 onSave={this.onSave} />
                <List1 items={this.state.items} onRemove={this.onRemove} />
            </div>
        )
    }
}

export default Todos1
