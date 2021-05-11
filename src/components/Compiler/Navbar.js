import React, { Component,Fragment } from 'react'
import Button from '@material-ui/core/Button';
import fb from '../../config/firebase/firebaseAuth';
import p from '../../api/payments/payments';
export const Navbar = () =>{

    const createP=()=>{
        const payment={
            date:'2001-02-14 19:10:25-07',
            amount:70,
            pm_id:1,
            user_id:1,
            active:true,
            sub_type:1
        }    
        p.createPayment(payment);
    }

    return(
        <Fragment>
            <h1>Navbar</h1>
            <Button onClick={()=>createP()}>Create Payment</Button>
             
        </Fragment>
    )
}

export default Navbar;