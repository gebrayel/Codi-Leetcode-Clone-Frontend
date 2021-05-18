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
            <SubscriptionText type='1' anim = {lock} color = "#FDF1BF" children='Desbloquea acceso a ejercicios Premium' textAlign='left' />
            <SubscriptionText type='1' anim = {checkM} color = "#93E078" children='Accede a respuestas correctas a los ejercicios' textAlign='left'/>
            <SubscriptionText type='1' anim = {prem} color = "#F6E27D" children='Ten el privilegio de pertenecer al grupo mas cool de programadores de toda la Internet' textAlign='left' />

        </Box>
        

        </div>
    );
}

const useStyles = makeStyles(theme => ({
    
    
}));