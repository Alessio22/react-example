import React, { useState, useEffect } from 'react'

function UseEffectThree() {
    const [position, setPosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        console.log('addEventListener')
        window.addEventListener('mousemove', logMousePosition);
        // punto 4!
        return () => {
            console.log('removeEventListener')
            window.removeEventListener('mousemove', logMousePosition);
        }
    }, [])
    // con array vuoto useEffect verrà invocato una sola volta

    const logMousePosition = (e) => {
        setPosition({ x: e.clientX, y: e.clientY })
    }

    return (
        <div>
            {JSON.stringify(position)}
        </div>
    )
}

// import React, { Component } from 'react'

// export class UseEffectThree extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             x: 0,
//             y: 0
//         }
//     }

//     componentDidMount() {
//         console.log('addEventListener')
//         window.addEventListener('mousemove', this.logMousePosition);
//     }

//     componentWillUnmount() {
//         console.log('removeEventListener')
//         window.removeEventListener('mousemove', this.logMousePosition);
//     }

//     logMousePosition = (e) => {
//         this.setState({ x: e.clientX, y: e.clientY })
//     }

//     render() {
//         return (
//             <div>
//                 {JSON.stringify(this.state)}
//             </div>
//         )
//     }
// }

export default UseEffectThree

