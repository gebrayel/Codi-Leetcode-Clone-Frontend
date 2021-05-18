import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid } from '@material-ui/core';
import colors from "../../config/colors/colors";
import SubscriptionBox from '../../components/SubscriptionBox/SubscriptionBox';

export default function Difficulties(props) {
    const classes = useStyles(props);

    return (
        <div>
            <p>d<br/>d<br/>d<br/>d<br/>d<br/>d<br/>d</p>
        <Box className={classes.container}>
            <SubscriptionBox title="<Semanal>" amount="$8/se" time="7 DIAS" before="Antes: $1" after="Ahorro: 0%" ideal="Ideal para:" prac="Practicantes Dummies" buttonText="Subscribirse" color1="#CBCBCD" color2="#E75656" color3="#FB2121"/>
        </Box>
        </div>
    );
}

const useStyles = makeStyles(theme => ({
    
    
}));