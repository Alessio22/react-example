import React, { Component } from 'react'

// class ComponentA extends Component {
//     render() {
//         return (
//             <div className="bordered">
//                 <p>ComponentA</p>
//             </div>
//         )
//     }
// }

import UserContext from './userContext'

class ComponentA extends Component {
    render() {
        return (
            <div className="bordered">
                <UserContext.Consumer>
                    {
                        (username) => {
                            return <p>ComponentA {username}</p>
                        }
                    }
                </UserContext.Consumer>
            </div>
        )
    }
}

export default ComponentA
