import React, { useState, useEffect } from 'react'

function UseEffectFive() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log("setInterval");
        const interval = setInterval(tick, 1000);
        return () => {
            clearInterval(interval); 
        }
    }, [])
    // 1. non mantiene aggiornato il contatore, possiamo aggiungere [count]

    const tick = () => {
        // setCount(count + 1)
        // 2. oppure (notate il log setInterval)
        setCount((prevCount) => prevCount + 1)
    }

    return (
        <div>
            {count}
        </div>
    )
}

// import React, { Component } from 'react'

// export class UseEffectFive extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             count: 0
//         }
//     }

//     componentDidMount() {
//         this.interval = setInterval(this.tick, 1000);
//     }

//     componentWillUnmount() {
//         clearInterval(this.interval);
//     }

//     tick = () => {
//         this.setState({count: this.state.count + 1});
//     }

//     render() {
//         return (
//             <div>
//                 {this.state.count}
//             </div>
//         )
//     }
// }

export default UseEffectFive
