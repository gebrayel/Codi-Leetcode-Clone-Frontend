import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid, Typography } from '@material-ui/core';
import LottieF from '../LottieFile/LottieFile';

export default function SubscriptionText ({ type, anim, children, ...props }){
    const classes = useStyles(props);

    return (
        <>
            {type == 1? <Box className={classes.container}>
                <Box className={classes.lottieContainer}>
                    <Box className={classes.lottie}>
                        <LottieF animationData={anim}/>
                    </Box>
                </Box>
                <Box className={classes.children}>
                    <Typography variant="h4" className={classes.typo2}>
                        {children}
                    </Typography>
                </Box>
            </Box> : <Box className={classes.containerTitle}>
                <Box className={classes.lottieContainer}>
                    <Box className={classes.lottie}>
                        <img className={classes.codiImg} src={anim} alt="PremiumCodiIcon" />
                    </Box>
                </Box>
                <Box>
                    <Typography variant="h3" className={classes.typo}>
                    ¡Llegó la hora de unirte al <br/>
                    <span className={classes.subtypo}>GOLDEN CUBE</span> <br/>
                    de la programación!
                    </Typography>
                </Box>
            </Box>} 
            
        </>
    )
}
const useStyles = makeStyles(theme => ({
    container: {
        height: "50px",
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        height: 'auto',
        marginBottom: 20
    },
    containerTitle: {
        height: "50px",
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        height: 'auto',
        marginTop: '5rem'
        
    },
    lottieContainer: {
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        height: 'auto',
        padding: 30,
        paddingTop: 20,
        [theme.breakpoints.down('sm')]: {
            padding: 10,
            width: 160,
        },
        [theme.breakpoints.down('xs')]: {
            paddingBottom:0,
            width: 60,
        },
    },
    lottie: {
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        alignContent: "flex-end",

        width: "125px",
        [theme.breakpoints.down('sm')]: {
            width: "100%"
        },
        [theme.breakpoints.down('xs')]: {
            width: "80%"
        },
    },
    typo: {
        color: (props) => props.color,
        textAlign: (props)=> props.textAlign,
        [theme.breakpoints.down('md')]: {
            fontSize: 30,
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: 18,
        },
        [theme.breakpoints.down('xs')]: {
        },
    },
    typo2: {
        color: (props) => props.color,
        textAlign: (props)=> props.textAlign,
        [theme.breakpoints.down('md')]: {
            
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: 30,
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: 14,
        },
    },
    subtypo: {
        color: (props) => props.subColor,
        fontWeight: 'bold'
    },
    children:{
        maxWidth: '21rem',
        [theme.breakpoints.down('md')]: {
            
        },
        [theme.breakpoints.down('sm')]: {
        },
        [theme.breakpoints.down('xs')]: {
            maxWidth: '10rem',
            marginRight: 30,
        },

    },
    codiImg:{
        width: "200px",
        height: "200px",
        marginRight: 60,
        [theme.breakpoints.down('md')]: {
            marginRight: 10,
        },
        [theme.breakpoints.down('sm')]: {
            marginRight: 0,
            width: "100px",
            height: "100px",
        },
        [theme.breakpoints.down('xs')]: {
        },
    },
}));