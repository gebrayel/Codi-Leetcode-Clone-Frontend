import React from "react";
import { Button, Icon } from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    button: {
        color: "#282A36",
        backgroundColor: "white",
        fontWeight: "700",
        height: "30px",
        width: "170px",
        borderRadius: "30px",
        "&:hover": {
            backgroundColor: "#282A36",
            color: "white",
        },
        [theme.breakpoints.down("xs")]: {
            fontSize: "10px",
        },
    },
    circle: {
        width: "25px",
        height: "25px",
        borderRadius: "200%",
        backgroundColor: "#282A36",
    },
    arrow: {
        color: "white",
    },
}));

const ContinueButton = () => {
    const classes = useStyles();

    return (
        <Button
            variant="contained"
            color="primary"
            className={classes.button}
            endIcon={
                <div className={classes.circle}>
                    <ArrowForwardIcon className={classes.arrow} />
                </div>
            }
        >
            Continuar
        </Button>
    );
};

export default ContinueButton;
