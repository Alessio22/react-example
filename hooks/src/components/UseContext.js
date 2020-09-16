import React from 'react'
import {UserContext, UserTwoContext} from '../App'

function UseContext() {
    return (
        <div>
            <UserContext.Consumer>
                {
                    user => {
                        return <p>{user}</p>
                    }
                }
            </UserContext.Consumer>
        </div>
    )
}

export default UseContext
