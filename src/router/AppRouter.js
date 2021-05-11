import React from 'react';
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";


import PublicRoute from './PublicRoute.js';
import PrivateRoute from './PrivateRoute.js';
import UserRoutes from './UserRoutes.js';
import SupportRoutes from './SupportRoutes.js';

export const AppRouter = () => {

    const isLoggedIn = true;

    return(
        <Router>
            <Switch>
                <PrivateRoute
                    path = "/support"
                    component = {SupportRoutes}
                    isAuthenticated = {isLoggedIn}
                />

                <PublicRoute
                    path = "/"
                    component = {UserRoutes}
                    isAuthenticated = {isLoggedIn}
                />

                <Redirect to = "/"/>
            </Switch>
        </Router>
    )
}

export default AppRouter;