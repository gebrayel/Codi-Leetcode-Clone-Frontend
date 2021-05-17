import React from 'react';
import { Redirect, Route } from 'react-router';

export default function PrivateRoute({
    children,
    ...rest
}) {
    const user = localStorage.getItem('user');

    return (
        <Route 
            {...rest}
            render={({ location }) => 
                user ? (
                    children
                ) : (
                    <Redirect 
                        to={{
                            pathname: "/",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    )
}
