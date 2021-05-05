import React, { Fragment, useContext } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import deleteLater from '../deleteLater'

export const SupportRoutes = () => {

    return(
        <>
            {/*Navbar*/}
            <div>
                <Switch>

                    <Route exact path = "/support/index" component = {deleteLater} />

                    <Redirect to = "/support/index"/>
                </Switch>
            </div>
            {/*Footer*/}
        </>
    )
}

export default SupportRoutes;