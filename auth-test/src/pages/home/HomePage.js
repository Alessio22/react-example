import React, { useContext } from 'react'
import { useHistory } from "react-router-dom";
import { UserContext } from '../../App';

function HomePage() {
    const { user } = useContext(UserContext)
    const history = useHistory();

    const goToPosts = () => {
        history.push("/posts");
    }

    const goToLogin = () => {
        history.push("/login");
    }

    return (
        <>
            {
                user.isAuthenticated
                    ? (
                        <div>
                        <h1>Welcome {user.username}!</h1>
                            <button onClick={goToPosts}>Posts</button>
                        </div>
                    )
                    : (
                        <div>
                        <h1>Welcome guest!</h1>
                            <button onClick={goToLogin}>Login</button>
                        </div>
                    )
            }
        </>
    )
}

export default HomePage
