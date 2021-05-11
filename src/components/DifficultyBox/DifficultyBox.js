import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

import colors from "../../config/colors/colors";

export default function DifficultyBox({
    title,
    children,
    ...props
}) {
    const classes = useStyles(props);

    return (
        <Grid 
            item
            xs={12}
            md={4}
        >
            <div
                className={classes.box}
            >
                <h1 className={classes.title}>{title}</h1>
                <p className={classes.text}>{children}</p>
            </div>
        </Grid>
    )
}

const useStyles = makeStyles(theme => ({
    box: {
        backgroundColor: colors.boxBackground,
        borderRadius: 10,
        cursor: "pointer",
        transitionDuration: "0.3s",
        padding: 10,
        margin: 20,
        '&:hover': {
            backgroundColor: colors.boxBackgroundHover,
        }
    },
    title: {
        textAlign: "center",
        marginTop: 10,
        fontSize: "2.5vw",
        fontWeight: "bold",
        color: props => props.titleColor,
        [theme.breakpoints.down('sm')]: {
            fontSize: "5.0vw"
        }

    },
    text: {
        color: "rgba(255, 255, 255, 0.63)",
        textAlign: "center",
        fontSize: "2.0vw",
        padding: 25,
        [theme.breakpoints.down('md')]: {
            fontSize: "2.0vw"
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: "4.0vw"
        },
    }
}));


