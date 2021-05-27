
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import AppContext from '../../helpers/context/context'
import LogOut from '../../helpers/LogOut/Logout';

const Modal = ({
  variant,
  color,
  text, 
  description,
  acceptText,
  cancelText
}) => {
  
  /** ===> El componente modal se le estableceran 6 parametros en un objeto, donde los valores de los keys:
   *      variant Establece el variant desing del boton que abrira el Componente Modal.
   *      btnDesing Establece el color del boton que abrira el Componente Modal.
   *      btnText Establece el el Texto del boton que abrira el Componente Modal.
   *      modalDescription Establece el dialog-description del Componente Modal.
   *      modalBtnAcept Establece el texto con primary desing (afirmacion==>Aceptar) del boton del Componente Modal.
   *      modalBtnCancel Establece el texto con secondary desing (negacion==>Cancelar) del boton del Componente Modal.
   */
  
  const [open, setOpen] = React.useState(false);
  const { setUser } = useContext(AppContext);
  let history = useHistory();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose=()=>{
    setOpen(false);
  };

  const handleCloseLogOut = () => {
    setOpen(false);
    LogOut.LogOut();
    setUser(null);
    history.push('/');
  };


    return ( 
        <div>
          {variant.trim()==='' ?       
            <Button color={color} onClick={handleClickOpen}>
              {text}
            </Button> :
            <Button variant={variant} color={color} onClick={handleClickOpen}>
              {text}
            </Button>
          }
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"<Codi/>"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                {description}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                {acceptText}
              </Button>
              <Button onClick={handleCloseLogOut} color="secondary" autoFocus>
                {cancelText}
              </Button>
            </DialogActions>
          </Dialog>
    </div>
  );
}
 
export default Modal;