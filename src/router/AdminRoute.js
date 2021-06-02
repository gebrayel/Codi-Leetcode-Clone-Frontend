import React from 'react';
import { Redirect, Route } from 'react-router';

export default function AdminRoute({
    children,
    ...rest
}) {
    const user = localStorage.getItem('user');
    const userObject= JSON.parse(user);
    
    return (
        <Route 
            {...rest}
            render={({ location }) => 
                user && userObject.is_admin ? children : 
                    (
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
