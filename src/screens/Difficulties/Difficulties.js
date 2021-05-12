import React from 'react'
import kitty from '../../assets/animations/robot_playing.json';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid } from '@material-ui/core';

import colors from "../../config/colors/colors";

import DifficultyBox from '../../components/DifficultyBox/DifficultyBox';
import LottieF from '../../components/LottieFile/LottieFile'

export default function Difficulties(props) {
    const classes = useStyles(props);

    return (
        <Box className={classes.container}>
            <Box
                className={classes.lottieContainer}
            >
                <Box className={classes.lottie}>
                    <LottieF animationData={kitty}/>
                </Box>
            </Box>
            <Box
                className={classes.box}
            >
                <Grid 
                    container
                    className={classes.boxContainer}
                >
                    <DifficultyBox
                        title="<Fácil>"
                        titleColor={colors.easy}
                    >
                        Si eres nuevo programando y quieres conocer lo básico de este mundo.
                    </DifficultyBox>
                    <DifficultyBox
                        title="{Intermedio}"
                        titleColor={colors.medium}
                    >
                        Si ya llevas un tiempo en este mundo y deseas mejorar tus habilidades.
                    </DifficultyBox>
                    <DifficultyBox
                        title="#Difícil"
                        titleColor={colors.hard}
                    >
                        ¿Te consideras un programador experto? Entonces vamos a ponerte a prueba.
                    </DifficultyBox>
                </Grid>
            </Box>
         </Box>
    );
}

const useStyles = makeStyles(theme => ({
    container: {
        height: "100vh",
        backgroundColor: colors.background,
        justifyContent: "center"
    },
    lottieContainer: {
        justifyContent: "center",
        display: "flex",
        padding: 30,
        paddingTop: 100,
        [theme.breakpoints.down('xs')]: {
            paddingBottom:0,
        },
    },
    lottie: {
        width: "20%",
        [theme.breakpoints.down('sm')]: {
            width: "30%"
        },
        [theme.breakpoints.down('xs')]: {
            width: "40%"
        },
    },
    boxContainer: {
        marginTop: 30,
        paddingLeft: 100,
        paddingRight: 100,
        width: "85%",
        [theme.breakpoints.down('sm')]: {
            width: "100%",
        },
        [theme.breakpoints.down('xs')]: {
            width: "100%",
            paddingLeft: 40,
            paddingRight: 40,
        },
    },
    box: {
        justifyContent: "center",
        display: "flex"
    },
    
}));