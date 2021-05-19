import React, { Fragment, useContext } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import deleteLater from "../deleteLater";
import Subscription from "../screens/Subscription/SubscriptionScreen";
import Difficulties from "../screens/Difficulties/Difficulties";
import HomeScreen from "../screens/Home/HomeScreen";
import Navbar from "../components/Navbar/Navbar"

export const UserRoutes = () => {
    console.log("Publico");
    return (
        <>
            
            <Navbar/>
            <div>
                <Switch>
                    <Route exact path="/" component={HomeScreen} />

                    <Route exact path="/delete" component={deleteLater} />

                    <Route exact path="/premium" component={Subscription} />

                    <Route exact path="/problems" component={Difficulties} />

                    <Redirect to="/" />
                </Switch>
            </div>
            {/*Footer*/}
        </>
    );
};

export default UserRoutes;
