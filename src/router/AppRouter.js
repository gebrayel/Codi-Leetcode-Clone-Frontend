import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomeScreen from "../screens/Home/HomeScreen.js";
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
                <UserRoutes />
            </Switch>
        </Router>
    );
};

export default AppRouter;
