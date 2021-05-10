import React, { Fragment, useContext } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import deleteLater from '../deleteLater'
import actual from '../components/LottieFile/LottieFile'

export const UserRoutes = () => {

    return(
        <>
            {/*Navbar*/}
            <div>
                <Switch>

                    <Route exact path = "/" component = {deleteLater} />

                    <Route exact path = "/actual" component = {actual} />

                    <Redirect to = "/"/>
                </Switch>
            </div>
            {/*Footer*/}
        </>
    )
}

export default UserRoutes;