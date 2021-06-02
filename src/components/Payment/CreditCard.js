import React from "react";
import Card from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, TextField } from "@material-ui/core";

import colors from "../../config/colors/colors";

const CreditCard = ({ cardInfo, setCardInfo, editable }) => {
    const classes = useStyles();

    const handlerInputChange = (e) => {
        setCardInfo({
            ...cardInfo,
            [e.target.name]: e.target.value,
        });
    };

    const validateNumber = (e) => {
        const val = e.target.value;
        if (val.length > 0 && !(val.charCodeAt(val.length - 1) > 47 && val.charCodeAt(val.length - 1) < 58)) {
            e.target.value = val.slice(0, -1);
        }
    };

    const handlerNumberInputChange = (e) => {
        validateNumber(e);
        handlerInputChange(e);
    };

    const handlerFocusChange = (e) => {
        setCardInfo({
            ...cardInfo,
            focused: e.target.name,
        });
    };

    return (
        <Grid
            className={classes.root}
            direction="row"
            justify="center"
            alignItems="center"
            container
            md={11}
        >
            <Grid
                container
                className={classes.cardContainer}
                xs={12}
                md={12}
                lg={12}
                xl={12}
            >
                <Card
                    number={cardInfo.number}
                    name={cardInfo.name}
                    expiry={cardInfo.expiry}
                    cvc={cardInfo.cvc}
                    focused={cardInfo.focused}
                />
            </Grid>
            <form>
                <Grid container xs={12} md={12} lg={12} xl={12}>
                    <Grid container xs={12} md={12} lg={12} xl={12}>
                        <TextField
                            name="number"
                            label="Número de Tarjeta"
                            variant="outlined"
                            defaultValue={cardInfo.number}
                            className={`${classes.whiteTheme} ${classes.numberInput}`}
                            inputProps={{
                                maxLength: 16,
                                readOnly: !editable,
                            }}
                            InputProps={{ style: { color: colors.white } }}
                            InputLabelProps={{ style: { color: colors.white } }}
                            onChange={handlerNumberInputChange}
                            onFocus={handlerFocusChange}
                            autoComplete="off"
                        />
                    </Grid>

                    <Grid container xs={12} md={12} lg={12} xl={12}>
                        <TextField
                            name="name"
                            label="Nombre"
                            type="text"
                            variant="outlined"
                            defaultValue={cardInfo.name}
                            className={`${classes.whiteTheme} ${classes.nameInput}`}
                            inputProps={{
                                maxLength: 20,
                                readOnly: !editable,
                            }}
                            InputProps={{
                                style: { color: colors.white },
                            }}
                            InputLabelProps={{ style: { color: colors.white } }}
                            onChange={handlerInputChange}
                            onFocus={handlerFocusChange}
                            autoComplete="off"
                        />
                        <TextField
                            name="expiry"
                            label="Expiración"
                            variant="outlined"
                            defaultValue={cardInfo.expiry}
                            className={`${classes.whiteTheme} ${classes.otherInputs}`}
                            inputProps={{
                                maxLength: 4,
                                readOnly: !editable,
                            }}
                            InputProps={{ style: { color: colors.white } }}
                            InputLabelProps={{ style: { color: colors.white } }}
                            onChange={handlerNumberInputChange}
                            onFocus={handlerFocusChange}
                            autoComplete="off"
                        />
                        <TextField
                            name="cvc"
                            label="CVC"
                            variant="outlined"
                            defaultValue={cardInfo.cvc}
                            className={`${classes.whiteTheme} ${classes.otherInputs}`}
                            inputProps={{
                                maxLength: 3,
                                readOnly: !editable,
                            }}
                            InputProps={{ style: { color: colors.white } }}
                            InputLabelProps={{ style: { color: colors.white } }}
                            onChange={handlerNumberInputChange}
                            onFocus={handlerFocusChange}
                            autoComplete="off"
                        />
                    </Grid>
                </Grid>
            </form>
        </Grid>
    );
};

const useStyles = makeStyles((theme) => ({
    root: {
        alignContent: "center",
        padding: "15px 0",
    },
    cardContainer: {
        width: "80%",
        height: "30vh",
        marginBottom: "10px",
        [theme.breakpoints.down("xs")]: {
            height: "22.5vh",
            padding: "0 13%",
        },
    },
    whiteTheme: {
        margin: "5px",
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: colors.white,
            borderWidth: "2px",
            borderRadius: "10px",
        },
        "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: colors.white,
            borderWidth: "2px",
            borderRadius: "10px",
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
            {
                borderColor: colors.white,
                borderWidth: "2px",
                borderRadius: "10px",
            },
    },
    numberInput: {
        width: "100%",
    },
    nameInput: {
        width: "calc(50% - 10px)",
        "& .MuiOutlinedInput-input": {
            textTransform: "uppercase",
        },
        [theme.breakpoints.down("xs")]: {
            width: "calc(100% - 10px)",
        },
    },
    otherInputs: {
        width: "calc(25% - 10px)",
        [theme.breakpoints.down("xs")]: {
            width: "calc(50% - 10px)",
        },
    },
}));

export default CreditCard;
