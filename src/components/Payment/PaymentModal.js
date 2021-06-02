import React, { useState } from "react";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import yellowCodi from "../../assets/yellow_codi.png";
import {
    Box,
    CardMedia,
    Collapse,
    IconButton,
    Grid,
    Modal,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import LottieF from "../LottieFile/LottieFile";
import clsx from "clsx";
import CreditCard from "./CreditCard";
import ContinueButton from "../ContinueButton/ContinueButton";
import { CallReceived } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
    modal: {
        width: "100vw",
        height: "100vh",
        color: "white",
        backgroundColor: "#282A3650",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    container: {
        backgroundColor: "#282A36",
        borderRadius: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        [theme.breakpoints.down("xs")]: {
            fontSize: "13px",
        },
    },
    grid: {
        outline: "none",
        [theme.breakpoints.up("sm")]: {
            maxWidth: "540px",
        },
    },
    shoppingConfirmation: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        borderBottom: "solid 1px white",
    },
    icon: {
        color: "white",
        padding: "0 10px 0 20px",
    },
    subscriptionSelection: {
        width: "calc(100% - 35px)",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        borderBottom: "solid 1px white",
        padding: "5px 20px 5px 15px",
    },
    subscriptionInformation: {
        width: "calc(100% - 10px)",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    image: {
        width: "auto",
        height: "52px",
        [theme.breakpoints.down("xs")]: {
            height: "40px",
        },
    },
    package: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: "10px",
        justifyContent: "space-between",
    },
    paymentInformation: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        borderBottom: "solid 1px white",
    },
    circle: {
        width: "25px",
        height: "25px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: "100%",
        color: "#282A36",
        margin: "0 10px 0 20px",
        [theme.breakpoints.down("xs")]: {
            width: "20px",
            height: "20px",
        },
    },
    paymentConfirmation: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        borderBottom: "solid 1px white",
    },
    cardContainer: {
        borderBottom: "solid 1px white",
        "& .MuiCollapse-wrapperInner": {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },
    },
    bottomContainer: {
        width: "calc(100% - 40px)",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 20px",
    },
    AmountInformation: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingRight: "40px",
    },
    expand: {
        transform: "rotate(0deg)",
        marginLeft: "auto",
        transition: theme.transitions.create("transform", {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: "rotate(180deg)",
    },
    expandIcon: {
        color: "white",
    },
}));

const PaymentModal = ({ modal, setModal, price, subscription }) => {
    const classes = useStyles();

    const toggleModal = () => {
        setModal(!modal);
    };

    const [cardInfo, setCardInfo] = useState({
        number: "",
        name: "",
        expiry: "",
        cvc: "",
        focused: "",
    });

    const [expanded, setExpanded] = useState(true);

    const toggleExpanded = () => {
        setExpanded(!expanded);
    };

    const body = (
        <Box className={classes.container}>
            <Box className={classes.shoppingConfirmation}>
                <ShoppingCartOutlinedIcon className={classes.icon} />
                <p>Confirmación de compra</p>
            </Box>
            <Box className={classes.subscriptionSelection}>
                <CardMedia
                    className={classes.media}
                    image="../"
                    title="Contemplative Reptile"
                />
                <Box className={classes.subscriptionInformation}>
                    <img className={classes.image} src={yellowCodi} />
                    <Box className={classes.package}>
                        <p> {subscription} </p>
                        <p> {price} </p>
                    </Box>
                </Box>
            </Box>
            <Box className={classes.paymentInformation}>
                <Box className={classes.circle}>1</Box>
                <p>Datos de Pago</p>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={toggleExpanded}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon className={classes.expandIcon} />
                </IconButton>
            </Box>
            <Box className={classes.cardContainer}>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CreditCard
                        editable={true}
                        cardInfo={cardInfo}
                        setCardInfo={setCardInfo}
                    />
                </Collapse>
            </Box>
            <Box className={classes.paymentConfirmation}>
                <Box className={classes.circle}>2</Box>
                <p>Confirmación de Pago</p>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: !expanded,
                    })}
                    onClick={toggleExpanded}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon className={classes.expandIcon} />
                </IconButton>
            </Box>

            <Box className={classes.cardContainer}>
                <Collapse in={!expanded} timeout="auto" unmountOnExit>
                    <CreditCard
                        editable={false}
                        cardInfo={cardInfo}
                        setCardInfo={setCardInfo}
                    />
                </Collapse>
            </Box>
            <Box className={classes.bottomContainer}>
                <Box className={classes.AmountInformation}>
                    <p>Total de Compra: </p>
                    <p> {price} </p>
                </Box>
                <ContinueButton />
            </Box>
        </Box>
    );

    return (
        <>
            <Modal
                className={classes.modal}
                open={modal}
                onClose={toggleModal}
                disableAutoFocus={true}
            >
                <Grid
                    xs={11}
                    sm={10}
                    md={7}
                    lg={5}
                    xl={3}
                    className={classes.grid}
                >
                    {body}
                </Grid>
            </Modal>
        </>
    );
};

export default PaymentModal;
