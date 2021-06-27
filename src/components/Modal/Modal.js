import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core/styles";

const Modal = ({
    title,
    description,
    closeText,
    functionText,
    passedFunction,
    toggleModal,
    open,
    singleButton,
}) => {
    /** ===> El componente modal se le estableceran 6 parametros en un objeto, donde los valores de los keys:
     *      variant Establece el variant desing del boton que abrira el Componente Modal.
     *      btnDesing Establece el color del boton que abrira el Componente Modal.
     *      btnText Establece el el Texto del boton que abrira el Componente Modal.
     *      modalDescription Establece el dialog-description del Componente Modal.
     *      modalBtnAcept Establece el texto con primary desing (afirmacion==>Aceptar) del boton del Componente Modal.
     *      modalBtnCancel Establece el texto con secondary desing (negacion==>Cancelar) del boton del Componente Modal.
     */
    const classes = useStyles();

    return (
        <div style={{ width: "100%", justifyContent: "flex-start" }}>
            <Dialog
                open={open}
                onClose={toggleModal}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <div className={classes.root}>
                    <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
                    <DialogContent>
                        <DialogContentText
                            id="alert-dialog-description"
                            className={classes.whiteTheme}
                        >
                            {description}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        {!singleButton ? (
                            <Button
                                onClick={toggleModal}
                                color="secondary"
                                autoFocus
                            >
                                {closeText}
                            </Button>
                        ) : null}
                        <Button
                            onClick={() => {
                                if (!singleButton) {
                                    passedFunction();
                                }
                                toggleModal();
                            }}
                            color="primary"
                        >
                            {singleButton ? closeText : functionText}
                        </Button>
                    </DialogActions>
                </div>
            </Dialog>
        </div>
    );
};

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#60626C",
        color: "white",
        "& .MuiButton-textPrimary": {
            color: "#8393FF",
            fontSize: "15px",
            fontWeight: 500,
        },
        "& .MuiButton-textSecondary": {
            color: "#E3516E",
            fontSize: "15.5px",
            fontWeight: 500,
        },
        "& .MuiTypography-body1": {
            fontSize: "1.2rem",
        },
    },
    whiteTheme: {
        color: "white",
        whiteSpace: "pre-line",
    },
}));

export default Modal;
