import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import { UserContext } from '../App';

function MenuComponent() {
    const { user, userDispatch } = useContext(UserContext)

    const doLogout = () => {
        console.log("logoutSuccess");
        userDispatch({ type: 'logout' })
    }
    
    return (
        <nav className="menu">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/posts">Posts</Link>
                </li>
                {
                    user.isAuthenticated && (
                        <li>
                            <strong>{user.username}</strong>
                            <button onClick={doLogout}>Logout</button>
                        </li>
                    )
                }
            </ul>
        </nav>
    )
}

export default MenuComponent
