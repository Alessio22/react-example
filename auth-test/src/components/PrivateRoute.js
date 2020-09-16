import React, { useContext } from 'react';
import { Route, Redirect } from "react-router-dom";
import { UserContext } from '../App';

function PrivateRoute({ children, ...rest }) {
    const { user } = useContext(UserContext)
    console.log("PrivateRoute", user);
    return (
        <Route {...rest} render={({ location }) =>
            user.isAuthenticated
                ? (
                    children
                )
                : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
        }
        />
    );
}

export default PrivateRoute