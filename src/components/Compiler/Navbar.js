import React, { Component,Fragment } from 'react'
import Button from '@material-ui/core/Button';
import {
            loginWithGoogle,
            loginWithGithub,
            GeneralLogOut,
            providerGithub,
            providerGoogle,
            GeneralLoginWithRedirect,
            getUserProfileInfo
} from '../../config/firebase/firebaseAuth';


export const Navbar = () =>{

    const loginGoogle=()=>{
        loginWithGoogle()
    }

    const loginGithub=()=>{
        loginWithGithub()
    }
    
    const logOut=()=>{
        getUserProfileInfo()
    }
    const redirectLogin=(provider)=>{
        GeneralLoginWithRedirect(provider)
    }

    return(
        <Fragment>

            <h1>Navbar</h1>
             <Button onClick={() => loginGoogle()} variant="contained" color="primary">
                Login with google
            </Button>
            <Button onClick={() => loginGithub()} variant="contained" color="primary">
                Login with Github
            </Button>
            <Button onClick={() => redirectLogin(providerGoogle)} variant="contained" color="primary">
                Log in with Google redirect
            </Button>
            <Button onClick={() => redirectLogin(providerGithub)} variant="contained" color="primary">
                Log in with Github redirect
            </Button>
            <Button onClick={() => logOut()} variant="contained" color="primary">
                Log Out
            </Button>
        </Fragment>
    )
}

export default Navbar;