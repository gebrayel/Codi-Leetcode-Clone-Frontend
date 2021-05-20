import React from "react";
import { Switch } from "react-router-dom";

import DifficultiesScreen from "../screens/Difficulties/Difficulties";
import Navbar from "../components/Navbar/Navbar"
import PrivateRoute from "./PrivateRoute";
import SubscriptionScreen from "../screens/Subscription/SubscriptionScreen";
import ProblemsScreen from "../screens/Problems/ProblemsScreen";

export const UserRoutes = () => {
    return (
        <>
        <Navbar/>
        <Switch>
            <PrivateRoute
                path="/difficulties"
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

            <PrivateRoute 
                path="/problems"
            >
                <ProblemsScreen />
            </PrivateRoute>
        </Switch>
        </>
    );
};

export default UserRoutes;
