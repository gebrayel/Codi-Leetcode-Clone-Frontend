import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import PrivateRoute from "./PrivateRoute.js";
import HomeScreen from "../screens/Home/HomeScreen.js";

import DifficultiesScreen from "../screens/Difficulties/Difficulties.js";
import Navbar from "../components/Navbar/Navbar.js";
import SubscriptionScreen from "../screens/Subscription/SubscriptionScreen.js";

export const AppRouter = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route 
                    path="/"
                    exact
                >
                    <HomeScreen />
                </Route>
                
                <PrivateRoute
                    path="/problems"
                    exact
                >
                    <DifficultiesScreen />
                </PrivateRoute>

                <PrivateRoute
                    path="/premium"
                    exact
                >
                    <SubscriptionScreen />
                </PrivateRoute>
            </Switch>
        </Router>
    );
};

export default AppRouter;
