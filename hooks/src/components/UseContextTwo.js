import React, {useContext} from 'react'
import {UserTwoContext, ChannelTwoContext} from '../App'

// function UseContextTwo() {
//     return (
//         <div>
//             <UserTwoContext.Consumer>
//                 {
//                     user => {
//                         return (
//                             <ChannelTwoContext.Consumer>
//                                 {
//                                     channel => {
//                                         return <p>{user} - {channel}</p>
//                                     }
//                                 }
//                             </ChannelTwoContext.Consumer>
//                         )
//                     }
//                 }
//             </UserTwoContext.Consumer>
//         </div>
//     )
// }

function UseContextTwo() {
    const user = useContext(UserTwoContext)
    const channel = useContext(ChannelTwoContext)
    return (
        <div>
            <p>{user} - {channel}</p>
        </div>
    )
}

export default UseContextTwo
