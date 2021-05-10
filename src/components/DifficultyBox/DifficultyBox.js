import React from 'react';
import { makeStyles } from '@material-ui/core/styles'

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
        backgroundColor: "#7e84a7",
        width: "20vw",
        height: "35vh",
        borderRadius: 10,
        cursor: "pointer",
        transitionDuration: "1s",
        padding: 10,
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
        fontSize: 35,
        padding: 25,
    }
});


