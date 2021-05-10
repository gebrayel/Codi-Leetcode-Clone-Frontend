import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import colors from "../../config/colors/colors";

export default function DifficultyBox({
    title,
    children,
    ...props
}) {
    const classes = useStyles(props);

    return (
        <div className={classes.box}>
            <h1 className={classes.title}>{title}</h1>
            <p className={classes.text}>{children}</p>
        </div>
    )
}

const useStyles = makeStyles({
    box: {
        backgroundColor: colors.boxBackground,
        width: "20vw",
        height: "35vh",
        borderRadius: 10,
        cursor: "pointer",
        transitionDuration: "0.3s",
        padding: 10,
        marginLeft: 30,
        marginRight: 30,
        '&:hover': {
            backgroundColor: colors.boxBackgroundHover,
        }
    },
    title: {
        textAlign: "center",
        marginTop: 10,
        fontSize: "2.5vw",
        fontWeight: "bold",
        color: props => props.titleColor
    },
    text: {
        color: "rgba(255, 255, 255, 0.63)",
        textAlign: "center",
        fontSize: "1.8vw",
        padding: 25,
    }
});


