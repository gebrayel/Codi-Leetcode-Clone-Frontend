import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const Modal = ({
    title,
    description,
    acceptText,
    cancelText,
    passedRedFunction,
    passedBlueFunction,
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

    return (
        <div style={{ width: "100%", justifyContent: "flex-start" }}>
            <Dialog
                open={open}
                onClose={toggleModal}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {description}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    {!singleButton ? (
                        <Button
                            onClick={() => {
                                toggleModal();
                                passedRedFunction();
                            }}
                            color="secondary"
                            autoFocus
                        >
                            {cancelText}
                        </Button>
                    ) : null}
                    <Button onClick={passedBlueFunction} color="primary">
                        {acceptText}
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default Modal;
