import React, { useContext } from 'react'
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { UserContext } from '../../App';
import api from '../../components/api';

function LoginPage() {
    const { userDispatch } = useContext(UserContext)
    let history = useHistory();

    const { handleSubmit, register, errors } = useForm();

    const doLogin = (values) => {
        console.log(values)
        api.login(values.email, values.password)
            .then(res => {
                console.log(res)
                userDispatch({ type: 'login', payload: { username: "Alessio" } })
                history.replace({ pathname: "/" })
            })
            .catch(err => console.error(err))
    }

    return (
        <>
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit(doLogin)}>
                <div>
                    <input
                        name="username"
                        ref={register({
                            required: "Username Required",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "invalid email address"
                            }
                        })}
                    />
                    {errors.username && errors.username.message}
                </div>
                <div>
                    <input
                        type="password"
                        name="password"
                        ref={register({
                            required: "Password Required",
                            minLength: {
                                value: 3,
                                message: 'Password min length 3'
                            }
                        })}
                    />
                    {errors.password && errors.password.message}
                </div>

                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default LoginPage
