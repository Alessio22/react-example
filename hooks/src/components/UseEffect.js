import React, { useState, useEffect } from 'react'

function UseEffect() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = `Count ${count}`
    })

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Count {count}</button>
        </div>
    )
}

// import React, { Component } from 'react'

// export class UseEffect extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             count: 0
//         }
//     }

//     componentDidMount() {
//         document.title = `Count ${this.state.count}`
//     }
    
//     componentDidUpdate() {
//         document.title = `Count ${this.state.count}`
//     }

//     render() {
//         return (
//             <div>
//                 <button onClick={() => this.setState({count: this.state.count + 1})}>Count {this.state.count}</button>
//             </div>
//         )
//     }
// }

export default UseEffect
