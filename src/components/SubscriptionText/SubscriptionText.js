import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid, Typography } from '@material-ui/core';
import LottieF from '../LottieFile/LottieFile';
export default function SubscriptionText ({ type, anim, color, children, textAlign, subColor, ...props }){
    const classes = useStyles(props);

    return (
        <>
            <Box className={classes.container}>
                <Box className={classes.lottieContainer}>
                    <Box className={classes.lottie}>
                        <LottieF animationData={anim}/>
                    </Box>
                </Box>
                <Box>
                    <Typography color={color}>
                        {children}
                    </Typography>
                </Box>
            </Box>
        </>
    )
}
const useStyles = makeStyles(theme => ({
    container: {
        height: "50px",
        justifyContent: "center"
    },
    lottieContainer: {
        display: "flex",
        justifyContent: "center",
        padding: 30,
        paddingTop: 100,
        [theme.breakpoints.down('xs')]: {
            paddingBottom:0,
        },
    },
    lottie: {
        width: "100px",
        [theme.breakpoints.down('sm')]: {
            width: "30%"
        },
        [theme.breakpoints.down('xs')]: {
            width: "40%"
        },
    },
}));