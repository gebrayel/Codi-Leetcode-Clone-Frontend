import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import PrivateRoute from "./PrivateRoute.js";
import HomeScreen from "../screens/Home/HomeScreen.js";

import DifficultiesScreen from "../screens/Difficulties/Difficulties.js";

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
                
                <PrivateRoute
                    path="/support"
                    exact
                >
                    <DifficultiesScreen />
                </PrivateRoute>
            </Switch>
        </Router>
    );
};

export default AppRouter;
