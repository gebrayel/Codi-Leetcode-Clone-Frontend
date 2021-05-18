import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid } from '@material-ui/core';
import colors from "../../config/colors/colors";
import lock from '../../assets/animations/lockSubscription.json'
import SubscriptionBox from '../../components/SubscriptionBox/SubscriptionBox';
import SubscriptionText from '../../components/SubscriptionText/SubscriptionText'
import checkM from '../../assets/animations/checkMarkSubscription.json'
import prem from '../../assets/animations/premiumSubscription.json'

export default function SubscriptionScreen(props) {
    const classes = useStyles(props);

    return (
        <div>
            <p>d<br/>d<br/>d<br/>d<br/>d<br/>d<br/>d</p>
        <Box className={classes.container}>
            <SubscriptionBox title="<Semanal>" amount="$8/se" time="7 DIAS" before="Antes: $1" after="Ahorro: 0%" ideal="Ideal para:" prac="Practicantes Dummies" buttonText="Subscribirse" color1="#CBCBCD" color2="#E75656" color3="#FB2121"/>
        </Box>
        <Box className={classes.container}>
            <SubscriptionText type='1' anim = {lock} color = "#CBCBCD" children='hola soy la pajarita' textAlign='center' subColor='red'/>
            <SubscriptionText type='1' anim = {checkM} color = "#CBCBCD" children='hola soy la pajarita' textAlign='center' subColor='red'/>
            <SubscriptionText type='1' anim = {prem} color = "#CBCBCD" children='hola soy la pajarita' textAlign='center' subColor='red'/>

        </Box>
        

        </div>
    );
}

const useStyles = makeStyles(theme => ({
    
    
}));