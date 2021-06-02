import React from 'react'
import kitty from '../../assets/animations/robot_playing.json';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid, Button } from '@material-ui/core';

import colors from "../../config/colors/colors";

import DifficultyBox from '../../components/DifficultyBox/DifficultyBox';
import LottieF from '../../components/LottieFile/LottieFile';
import { useHistory } from "react-router-dom"

export default function Difficulties(props) {
    const classes = useStyles(props);
    const history = useHistory();

    return (
        <Box className={classes.container}>
            <Box
                className={classes.lottieContainer}
            >
                <Box className={classes.lottie}>
                    <LottieF animationData={kitty}/>
                </Box>
            </Box>
            <Button className={classes.buttonAll} onClick={() => history.push("/problems?difficulty=")} variant="contained" color="primary">
                /*Todos*/
            </Button>
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
                        difficulty="easy"
                    >
                        Si eres nuevo programando y quieres conocer lo básico de este mundo.
                    </DifficultyBox>
                    <DifficultyBox
                        title="{Intermedio}"
                        titleColor={colors.medium}
                        difficulty="medium"
                    >
                        Si ya llevas un tiempo en este mundo y deseas mejorar tus habilidades.
                    </DifficultyBox>
                    <DifficultyBox
                        title="#Difícil"
                        titleColor={colors.hard}
                        difficulty="hard"
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
        height: "99vh",
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
        width: "18%",
        [theme.breakpoints.down('sm')]: {
            width: "30%"
        },
        [theme.breakpoints.down('xs')]: {
            width: "40%"
        },
    },
    boxContainer: {
        marginTop: 20,
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
    buttonAll: {
        background: 'rgba(126, 132, 167, 0.63)',
        color: '#ECECEC',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        borderRadius: 0,
        position: "absolute",
        right: "4%",
        top: "100px",
        width: "180px",
        height: "70px",
        border: '1px solid rgba(99, 98, 98, 0.26)',
        boxSizing: 'border-box',
        boxShadow: '5px 4px 4px rgba(0, 0, 0, 0.28)',
        borderRadius: '10px',
        fontSize: "160%",
        transition: 'background 1s',
        transition: 'color 1s',
        [theme.breakpoints.down('sm')]: {
            width: "160px",
            height: "50px",
            fontSize: "140%",
            top: "80px",
            right: "25px",
        },
        [theme.breakpoints.down('xs')]: {
            width: "60px",
            height: "30px",
            fontSize: "70%",
            top: "80px",
            right: "15px",
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