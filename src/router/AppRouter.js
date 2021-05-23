import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomeScreen from "../screens/Home/HomeScreen.js";
import Page404 from "../screens/404/404";
import UserRoutes from "./UserRoutes.js";

export const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route 
                    path="/"
                    exact
                >
                    <HomeScreen />
                </Route>
                <Route
                    path="*"
                    exact
                >
                    <Page404 />
                </Route>
                <UserRoutes />
            </Switch>
        </Router>
    );
};

export default AppRouter;
