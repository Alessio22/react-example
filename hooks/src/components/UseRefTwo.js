import React, { Component, useState, useEffect, useRef } from 'react'

// export class UseRefTwo extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             count: 0
//         }
//     }

//     componentDidMount() {
//         this.interval = setInterval(
//             () => this.setState({ count: this.state.count + 1 }),
//             1000
//         )
//     }

//     render() {
//         return (
//             <div>
//                 {this.state.count}
//                 <button onClick={() => clearInterval(this.interval)}>Stop</button>
//             </div>
//         )
//     }
// }

// function UseRefTwo() {
//     const [timer, setTimer] = useState(0)

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setTimer(prevTimer => prevTimer + 1)
//         }, 1000)
//         return () => {
//             clearInterval(interval)
//         }
//     }, [])

//     return (
//         <div>
//             {timer}
//             <button onClick={() => clearInterval(interval)}>Stop</button>
//         </div>
//     )
// }

function UseRefTwo() {
    const [timer, setTimer] = useState(0)
    const intervalRef = useRef()

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setTimer(prevTimer => prevTimer + 1)
        }, 1000)
        return () => {
            clearInterval(intervalRef.current)
        }
    }, [])

    return (
        <div>
            {timer}
            <button onClick={() => clearInterval(intervalRef.current)}>Stop</button>
        </div>
    )
}

export default UseRefTwo
