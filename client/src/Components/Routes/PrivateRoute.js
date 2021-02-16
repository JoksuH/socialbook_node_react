import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { LoggedIn } from './../Utils'

const PrivateRoute = ({ component: Component, ...rest }) => {
    console.log('This is private')

    return (
        <Route
            {...rest}
            render={(props) =>
                LoggedIn() ? (
                    <Component {...props} {...rest} />
                ) : (
                    <Redirect to="/login" />
                )
            }
        />
    )
}

export default PrivateRoute
