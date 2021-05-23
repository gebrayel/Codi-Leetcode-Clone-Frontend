import React, { Fragment, useContext } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import deleteLater from "../deleteLater";
import ProblemsScreen from "../screens/Problems/ProblemsScreen";

export const SupportRoutes = () => {
    console.log("Priv");
    return (
        <>
            {/*Navbar*/}
            <div>
                <Switch>
                    <Route
                        exact
                        path="/support/index"
                        component={ProblemsScreen}
                    />

                    <Redirect to="/support/index" />
                </Switch>
            </div>
            {/*Footer*/}
        </>
    );
};

export default SupportRoutes;
