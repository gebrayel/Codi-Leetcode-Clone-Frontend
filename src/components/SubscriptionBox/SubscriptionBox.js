import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import colors from "../../config/colors/colors";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Clock from "../../assets/time.png";
import PaymentModal from "../Payment/PaymentModal";

export default function SubscriptionBox({
    title,
    amount,
    time,
    before,
    after,
    ideal,
    prac,
    buttonText,
    ...props
}) {
    const classes = useStyles(props);

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    return (
        <>
            <Grid item xs={12} md={6} lg={4}>
                <Card className={classes.root}>
                    <CardContent className={classes.contentS1}>
                        <Typography className={classes.titleS}>
                            {title}
                        </Typography>
                        <Typography className={classes.titleS2}>
                            {amount}
                        </Typography>
                    </CardContent>
                    <CardContent className={classes.contentS2}>
                        <img src={Clock} alt="Time" className={classes.imgS} />
                        <Typography className={classes.subtitleS}>
                            {time}
                        </Typography>
                    </CardContent>
                    <CardContent className={classes.contentS3}>
                        <Typography className={classes.textS}>
                            {before}
                        </Typography>
                        <Typography className={classes.textS}>
                            {after}
                        </Typography>
                        <Typography className={classes.textS2}>
                            {ideal}
                        </Typography>
                        <Typography className={classes.textS3}>
                            {prac}
                        </Typography>
                    </CardContent>
                    <CardActions className={classes.contentS4}>
                        <Button
                            className={classes.buttonS}
                            onClick={() => toggleModal()}
                        >
                            {buttonText}
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
            <PaymentModal
                modal={modal}
                setModal={setModal}
                price={amount.split("/")[0] + ",00"}
                subscription={title}
            />
        </>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: (props) => props.color1,
        borderRadius: "20px",
        margin: 20,
    },
    contentS1: {
        backgroundColor: (props) => props.color2,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    contentS2: {
        backgroundColor: (props) => props.color1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    imgS: {
        maxWidth: "2.5rem",
        maxHeight: "2.5rem",
        marginRight: "0.5%",
        "@media (max-width: 899px)": {
            maxWidth: "1.5rem",
            maxHeight: "1.5rem",
        },
    },
    titleS: {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "2.5rem",
        color: "white",
        marginBottom: "0%",
        [theme.breakpoints.down("xs")]: {
            fontSize: "1.4rem",
        },
    },
    titleS2: {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "1.4rem",
        color: "white",
        [theme.breakpoints.down("xs")]: {
            fontSize: "1rem",
        },
    },
    subtitleS: {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "1.4rem",
        color: "black",
        [theme.breakpoints.down("xs")]: {
            fontSize: "1rem",
        },
    },
    contentS3: {
        paddingTop: "0%",
    },
    textS: {
        textAlign: "center",
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "1.4rem",
        color: "white",
        [theme.breakpoints.down("xs")]: {
            fontSize: "1rem",
        },
    },
    textS2: {
        textAlign: "center",
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "1.4rem",
        color: "black",
        textDecoration: "underline",
        paddingTop: "1rem",
        [theme.breakpoints.down("xs")]: {
            fontSize: "1rem",
        },
    },
    textS3: {
        textAlign: "center",
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "1.4rem",
        color: "black",
        [theme.breakpoints.down("xs")]: {
            fontSize: "1rem",
        },
    },
    contentS4: {
        display: "flex",
        justifyContent: "flex-end",
    },
    buttonS: {
        backgroundColor: (props) => props.color2,
        color: "white",
        textAlign: "center",
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontSize: "1.4rem",
        textTransform: "lowercase",
        textTransform: "capitalize",
        borderRadius: "20px",
        width: "12rem",
        height: "4rem",
        [theme.breakpoints.down("xs")]: {
            fontSize: "1rem",
            width: "8rem",
            height: "4rem",
        },
        "&:hover": {
            backgroundColor: (props) => props.color3,
        },
    },
}));
