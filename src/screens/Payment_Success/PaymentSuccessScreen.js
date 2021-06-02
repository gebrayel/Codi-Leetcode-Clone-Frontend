import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from '@material-ui/core';
import LottieF from '../../components/LottieFile/LottieFile';
import payment from '../../assets/animations/payment.json';
import colors from "../../config/colors/colors";

export default function ProfileScreen({ x, ...props }) {
    const classes = useStyles(props);

    return (
        <Box className={classes.container}>
            <Box className={classes.lottieContainer}>
                <Box className={classes.lottie}>
                    <LottieF animationData={payment}/>
                </Box>
            </Box>
            <Box className={classes.titleContainer}>
                <h1 className={classes.title}>¡Pago realizado con exito!</h1>
            </Box>
            <Box className={classes.textContainer}>
                <p className={classes.text}>Bienvenido al <b>Golden Cube</b> programador, ya puedes disfrutar de todos los beneficios de un premium.</p>
            </Box>
        </Box>
    );
}

const useStyles = makeStyles((theme) => ({
    container: {
        height: "100vh",
        width: "98vw",
        backgroundColor: colors.background,
        justifyContent: "center",
        
    },
    lottieContainer: {
        justifyContent: "center",
        display: "flex",
        paddingTop: 100,
        [theme.breakpoints.down('xs')]: {
            paddingBottom:0,
        },
    },
    lottie: {
        width: "28%",
        [theme.breakpoints.down('sm')]: {
            width: "46%"
        },
        [theme.breakpoints.down('xs')]: {
            width: "40%"
        },
        [theme.breakpoints.down('md')]: {
            width: "38%"
        },
    },
    titleContainer: {
        justifyContent: "center",
        display: "flex",
        [theme.breakpoints.down('xs')]: {
        },
    },
    title: {
        justifyContent: "center",
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '2.8vw',
        textAlign: 'center',
        color: '#FFFFFF',
        marginTop: 0,
        [theme.breakpoints.down('xs')]: {
            fontSize: '6vw',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '6vw',
        },
        [theme.breakpoints.down('md')]: {
            fontSize: '4vw',
        },
    },
    textContainer: {
        justifyContent: "center",
        display: "flex",
        [theme.breakpoints.down('xs')]: {
        },
    },
    text: {
        width: "40%",
        justifyContent: "center",
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '2vw',
        textAlign: 'center',
        color: '#9B9B9B',
        marginTop: 0,
        [theme.breakpoints.down('xs')]: {
            fontSize: '4vw',
            width: "80%",
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '4vw',
            width: "80%",
        },
        [theme.breakpoints.down('md')]: {
            fontSize: '3vw',
            width: "60%",
        },
    },

}));