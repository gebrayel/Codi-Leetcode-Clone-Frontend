import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import LottieF from '../../components/LottieFile/LottieFile';
import { Box } from '@material-ui/core';
import kitty404 from '../../assets/animations/cat404.json';

export default function ProfileScreen({ x, ...props }) {
    const classes = useStyles(props);

    return (
        <Box className={classes.container404}>
            <Box className={classes.lottie404}>
                    <LottieF animationData={kitty404}/>
            </Box>
            <button className={classes.button404}>
                Regresar
            </button>
        </Box>
    );
}

const useStyles = makeStyles((theme) => ({
    container404: {
        height:"100vh",
        width:"100vw",
        backgroundColor:"#282A36",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    lottie404: {
        width: "40%",
        [theme.breakpoints.down('sm')]: {
            width: "40%"
        },
        [theme.breakpoints.down('xs')]: {
            width: "50%"
        },
    },
    button404: {
        background: 'rgba(126, 132, 167, 0.63)',
        color: '#ECECEC',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        borderRadius: 0,
        position: "absolute",
        right: "5%",
        bottom: "5%",
        width: "15%",
        height: "8%",
        border: '1px solid rgba(99, 98, 98, 0.26)',
        boxSizing: 'border-box',
        boxShadow: '5px 4px 4px rgba(0, 0, 0, 0.28)',
        borderRadius: '10px',
        fontSize: "160%",
        transition: 'background 1s',
        transition: 'color 1s',
        [theme.breakpoints.down('sm')]: {
            width: "20%",
            fontSize: "100%",
        },
        [theme.breakpoints.down('xs')]: {
            width: "20%",
            fontSize: "80%",
        },
        "&:hover": {
            transition: 'background 1s',
            transition: 'color 1s',
            background: '#FFFFFF',
            color: '#474747',
            cursor: "pointer",
        }
    },

}));