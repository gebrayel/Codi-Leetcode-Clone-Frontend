import React from "react";
import { Switch,Route } from "react-router-dom";

import DifficultiesScreen from "../screens/Difficulties/Difficulties";
import Navbar from "../components/Navbar/Navbar"
import PrivateRoute from "./PrivateRoute";
import SubscriptionScreen from "../screens/Subscription/SubscriptionScreen";
import ProblemsScreen from "../screens/Problems/ProblemsScreen";
import ProfileScreen from "../screens/Profile/ProfileScreen";

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

            <Route 
                path="/profile"
            >
                <ProfileScreen />
            </Route>
        </Switch>
        </>
    );
};

export default UserRoutes;
