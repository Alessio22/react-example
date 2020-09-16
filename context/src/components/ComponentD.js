import React, { Component } from 'react'

// class ComponentD extends Component {
//     render() {
//         return (
//             <div className="bordered">
//                 <p>ComponentD</p>
//             </div>
//         )
//     }
// }

import UserContext from './userContext'

class ComponentD extends Component {
    render() {
        return (
            <div className="bordered">
                <UserContext.Consumer>
                    {
                        (username) => {
                            return <p>ComponentD {username}</p>
                        }
                    }
                </UserContext.Consumer>
            </div>
        )
    }
}

export default ComponentD
