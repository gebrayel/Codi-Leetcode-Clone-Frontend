import React, { Fragment, useContext } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import deleteLater from '../deleteLater'

export const UserRoutes = () => {

    return(
        <>
            {/*Navbar*/}
            <div>
                <Switch>

                    <Route exact path = "/" component = {deleteLater} />

                    <Redirect to = "/"/>
                </Switch>
            </div>
            {/*Footer*/}
        </>
    )
}

export default UserRoutes;