import React, { useState } from "react";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { Grid, Modal, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CreditCard from "./CreditCard";

const useStyles = makeStyles((theme) => ({
    modal: {
        width: "100vw",
        height: "100vh",
        backgroundColor: "#282A3650",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        outline: "none",
        "&:focus": {
            outline: "none",
        },
    },
    container: {
        backgroundColor: "#282A36",
        borderRadius: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
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
    },
    subscriptionSelection: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        borderBottom: "solid 1px white",
    },
    subscriptionInformation: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
}));

const PaymentModal = () => {
    const classes = useStyles();

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    const body = (
        <Box className={classes.container}>
            <Box className={classes.shoppingConfirmation}>
                <ShoppingCartOutlinedIcon className={classes.icon} />
                <p>Confirmación de compra</p>
            </Box>
            <Box className={classes.subscriptionSelection}>
                <ShoppingCartOutlinedIcon className={classes.icon} />
                <Box className={classes.subscriptionInformation}>
                    <p>{"<Semanal>"} </p>
                    <p>15$</p>
                </Box>
            </Box>
            <Box>
                <ShoppingCartOutlinedIcon className={classes.icon} />
                <p>Datos de Pago</p>
            </Box>
            <Box>
                <CreditCard />
            </Box>
            <Box>
                <ShoppingCartOutlinedIcon className={classes.icon} />
                <p>Confirmación de Pago</p>
            </Box>
            <Box>
                <Box className={classes.subscriptionInformation}>
                    <p>{"<Semanal>"} </p>
                    <p>15$</p>
                </Box>
                <ShoppingCartOutlinedIcon className={classes.icon} />
            </Box>
        </Box>
    );

    return (
        <>
            <button onClick={() => toggleModal()}>Abrir Modal</button>
            <Modal className={classes.modal} open={modal} onClose={toggleModal}>
                <Grid md={4}>{body}</Grid>
            </Modal>
        </>
    );
};

export default PaymentModal;
