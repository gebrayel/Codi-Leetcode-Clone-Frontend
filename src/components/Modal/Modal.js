import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import ListItemIcon from "@material-ui/core/ListItemIcon";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ListItem from "@material-ui/core/ListItem";

const Modal = ({
    modalDesing,
    modalTitle,
    variant,
    color,
    text,
    title,
    description,
    acceptText,
    cancelText,
    passedFunction,
    handleClickOpen,
    handleClickClose,
    open,
    setOpen,
    renderButton,
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

    //const [open, setOpen] = React.useState(false);

    /*
    const handleClickOpen = () => {
      setOpen(true);
  };

  const handleClickClose = () => {
      setOpen(false);
  };
    */

    const modalButtonDesing = (modalTitle, text) => {
        if (modalDesing === "mobile" && modalTitle === "Cerrar Sesion")
            return (
                <ListItem style={{ paddingLeft: "12px" }}>
                    <ListItemIcon>
                        <ExitToAppIcon />
                    </ListItemIcon>
                    {text}
                </ListItem>
            );

        return text;
    };

    return (
        <div style={{ width: "100%", justifyContent: "flex-start" }}>
            {renderButton ? (
                variant.trim() === "" ? (
                    <Button
                        color={color}
                        onClick={handleClickOpen}
                        style={{
                            width: "100%",
                            paddingLeft: "15px",
                            justifyContent: "flex-start",
                        }}
                    >
                        {modalButtonDesing(modalTitle, text)}
                    </Button>
                ) : (
                    <Button
                        variant={variant}
                        color={color}
                        onClick={handleClickOpen}
                        style={{
                            width: "100%",
                            paddingLeft: "15px",
                            justifyContent: "flex-start",
                        }}
                    >
                        {modalButtonDesing(modalTitle, text)}
                    </Button>
                )
            ) : null}
            <Dialog
                open={open}
                onClose={handleClickClose}
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
                    <Button onClick={handleClickClose} color="primary">
                        {acceptText}
                    </Button>
                    {!singleButton ? (
                        <Button
                            onClick={() => {
                                handleClickClose();
                                passedFunction();
                            }}
                            color="secondary"
                            autoFocus
                        >
                            {cancelText}
                        </Button>
                    ) : null}
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default Modal;
