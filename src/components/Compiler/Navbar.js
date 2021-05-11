import React, { Component,Fragment } from 'react'
import Button from '@material-ui/core/Button';
import fb from '../../config/firebase/firebaseAuth';
import p from '../../api/problems/problems';
export const Navbar = () =>{

    const getP=()=>{
        p.getAllProblems();
    }

    return(
        <Fragment>
           
            <h1>Navbar</h1>
             
        </Fragment>
    )
}

export default Navbar;