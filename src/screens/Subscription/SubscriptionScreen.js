import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid } from '@material-ui/core';
import colors from "../../config/colors/colors";
import lock from '../../assets/animations/lockSubscription.json'
import SubscriptionBox from '../../components/SubscriptionBox/SubscriptionBox';
import SubscriptionText from '../../components/SubscriptionText/SubscriptionText'
import checkM from '../../assets/animations/checkMarkSubscription.json'
import prem from '../../assets/animations/premiumSubscription.json'
import yellowCodi from '../../assets/yellow_codi.png'

export default function SubscriptionScreen(props) {
    const classes = useStyles(props);

    return (
        <Box className={classes.containerSubs}>
            <Box className={classes.box1}>
                <Box className={classes.boxContainer1}>
                    <SubscriptionText type='0' anim = {yellowCodi} color = "#FFFFFF" 
                        children='¡Llegó la hora de unirte al 
                        GOLDEN CUBE 
                        de la programación!' textAlign='center' subColor='#E8FB76' />
                </Box>
            </Box>
            <Box className={classes.box2}>
                <Grid container className={classes.boxContainer2}>
                    <SubscriptionBox title="<Semanal>" amount="$8/Se" time="7 DÍAS" before="Antes: $1" after="Ahorro: 0,0%" ideal="Ideal para:" prac="Practicantes Dummies" buttonText="Subscribirse" color1="#CBCBCD" color2="#E75656" color3="#FB2121"/>
                    <SubscriptionBox title="{Mensual}" amount="$25/Me" time="30 DÍAS" before="Antes: $35" after="Ahorro: 28,71%" ideal="Ideal para:" prac="Practicantes Not so Dummies" buttonText="Subscribirse" color1="#CBCBCD" color2="#6983FF" color3="#254BFF"/>
                    <SubscriptionBox title="#Anual" amount="$150/An" time="365 DÍAS" before="Antes: $420" after="Ahorro: 64,29%" ideal="Ideal para:" prac="Practicantes Increibles" buttonText="Subscribirse" color1="#CBCBCD" color2="#FBDA56" color3="#FFD220"/>
                </Grid>
            </Box>
            <Box className={classes.box3}>
                <SubscriptionText type='1' anim = {lock} color = "#FDF1BF" children='Desbloquea acceso a ejercicios Premium' textAlign='left' />
                <SubscriptionText type='1' anim = {checkM} color = "#93E078" children='Accede a respuestas correctas a los ejercicios' textAlign='left'/>
                <SubscriptionText type='1' anim = {prem} color = "#F6E27D" children='Ten el privilegio de pertenecer al grupo mas cool de programadores de toda la Internet' textAlign='left' />
            </Box>
         </Box>
    );
}

const useStyles = makeStyles(theme => ({
    containerSubs: {
        height: "100vh",
        backgroundColor: colors.background,
        justifyContent: "center"
    },
    box1: {
        justifyContent: "center",
        display: "flex",
        padding: 30,
        paddingTop: 20,
        paddingBottom: 0,
        [theme.breakpoints.down('xs')]: {
            
        },
    },
    boxContainer1: {
        width: "100%",
        [theme.breakpoints.down('sm')]: {
        },
        [theme.breakpoints.down('xs')]: {
        },
    },
    box2: {
        justifyContent: "center",
        display: "flex"
    },
    boxContainer2: {
        marginTop: 50,
        marginBottom: 50,
        paddingLeft: 100,
        paddingRight: 100,
        width: "85%",
        [theme.breakpoints.down('md')]: {
            width: "100%",
        },
        [theme.breakpoints.down('sm')]: {
            width: "100%",
        },
        [theme.breakpoints.down('xs')]: {
            width: "100%",
            paddingLeft: 40,
            paddingRight: 40,
        },
    },
    box3: {
        paddingTop: 50,
        paddingBottom: 50,
        width: "100%",

    },
    
}));