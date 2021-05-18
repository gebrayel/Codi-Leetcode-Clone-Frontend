import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid, Typography } from '@material-ui/core';
import LottieF from '../LottieFile/LottieFile';
import yellowCodi from '../../assets/yellow_codi.png'
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
                    <Typography className={classes.typo}>
                        {children}
                    </Typography>
                </Box>
            </Box> : <Box className={classes.container}>
                <Box className={classes.lottieContainer}>
                    <Box className={classes.lottie}>
                        <img src={yellowCodi} alt="PremiumCodiIcon" />
                    </Box>
                </Box>
                <Box>
                    <Typography variant="h1" className={classes.typo}>
                    ¡Llegó la hora de unirte al <span className={classes.subtypo}>GOLDEN CUBE</span> 
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
        marginBottom: '0px'
    },
    lottieContainer: {
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        height: 'auto',
        padding: 30,
        paddingTop: 20,
        [theme.breakpoints.down('xs')]: {
            paddingBottom:0,
        },
    },
    lottie: {
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        alignContent: "flex-end",

        width: "125px",
        [theme.breakpoints.down('sm')]: {
            width: "30%"
        },
        [theme.breakpoints.down('xs')]: {
            width: "40%"
        },
    },
    typo: {
        color: (props) => props.color,
        fontSize: '25px',
        textAlign: (props)=> props.textAlign
    },
    subtypo: {
        color: (props) => props.subColor
    },
    children:{
        maxWidth: '21rem'
    }
}));