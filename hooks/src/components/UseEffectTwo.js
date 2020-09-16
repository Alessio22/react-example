import React, { useState, useEffect } from 'react'

function UseEffectTwo() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState("")

    useEffect(() => {
        console.log("set document.title");
        document.title = `Count ${count}`
    }, [count]) 
    // il secondo parametro è un array di elementi su cui stare in ascolto per effettuare il render
    // solo se cambio il count useEffect viene eseguita

    return (
        <div>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={() => setCount(count + 1)}>Count {count}</button>
        </div>
    )
}

// import React, { Component } from 'react'

// export class UseEffectTwo extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             name: "",
//             count: 0
//         }
//     }

//     componentDidMount() {
//         document.title = `Count ${this.state.count}`
//     }
    
//     componentDidUpdate(prevProps, prevState) {
//         if(prevState.count !== this.state.count) {
//             console.log("set document.title");
//             document.title = `Count ${this.state.count}`
//         }
//     }

//     render() {
//         return (
//             <div>
//                 <input type="text" value={this.state.name} onChange={(e) => this.setState({name: e.target.value})} />
//                 <button onClick={() => this.setState({count: this.state.count + 1})}>Count {this.state.count}</button>
//             </div>
//         )
//     }
// }

export default UseEffectTwo
