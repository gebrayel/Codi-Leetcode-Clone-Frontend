import React from 'react'
import LottieFile from '../LottieFile/LottieFile'
import robotLoader from "../../assets/animations/robot-loader.json";
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export default function RobotLoader(props) {
    const classes = useStyles(props);
    return (
        <Box
            className={classes.container}
        >
            <LottieFile 
                animationData={robotLoader}
            />
        </Box>
    )
}

const useStyles = makeStyles(theme => ({
    container: {
        width: "30%",
        paddingTop: 30,
        [theme.breakpoints.down('sm')]: {
            width: "50%"
        },
    }
}))
