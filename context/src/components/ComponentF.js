import React, { Component } from 'react'

class ComponentF extends Component {
    render() {
        return (
            <div className="bordered">
                <p>ComponentF</p>
            </div>
        )
    }
}

// import UserContext from './userContext'

// class ComponentF extends Component {
//     // Modo 2
//     // static contextType = UserContext
//     render() {
//         return (
//             <div className="bordered">
//                 <p>ComponentF {this.context}</p>
//             </div>
//         )
//     }
// }

// // Modo 1
// ComponentF.contextType = UserContext

export default ComponentF
