
import React, { Component,useContext } from 'react';
import {useHistory} from 'react-router-dom';

import {LogOut} from '../../helpers/LogOut/LogOut';

import AppContext from '../../helpers/context/context'

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


const ModalComponent = ({props}) => {
  
  /** ===> El componente modal se le estableceran 6 parametros en un objeto, donde los valores de los keys:
   *      variant Establece el variant desing del boton que abrira el Componente Modal.
   *      btnDesing Establece el color del boton que abrira el Componente Modal.
   *      btnText Establece el el Texto del boton que abrira el Componente Modal.
   *      modalDescription Establece el dialog-description del Componente Modal.
   *      modalBtnAcept Establece el texto con primary desing (afirmacion==>Aceptar) del boton del Componente Modal.
   *      modalBtnCancel Establece el texto con secondary desing (negacion==>Cancelar) del boton del Componente Modal.
   * {props} 
   */
  
  const [open, setOpen] = React.useState(false);
  const {setUser} = useContext(AppContext);
  let history = useHistory();
  const {variant,btnDesing,btnText,modalDescription,modalBtnAcept,modalBtnCancel}= props
  console.log(btnDesing)  

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose=()=>{
    setOpen(false);
  }
  const handleCloseLogOut = () => {
    setOpen(false);
    LogOut();
    setUser(null);
    history.push('/');
    
  };


    return ( 
        
        
        <div>
          {variant.trim()===''
           ?
            <Button color={btnDesing} onClick={handleClickOpen}>
            {btnText}
          </Button>
           :
            <Button variant={variant} color={btnDesing} onClick={handleClickOpen}>
            {btnText}
          </Button>
           }
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">{"<Codi/>"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                {modalDescription}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
              {modalBtnAcept}
              </Button>
              <Button onClick={handleCloseLogOut} color="secondary" autoFocus>
                {modalBtnCancel}
              </Button>
            </DialogActions>
          </Dialog>
    </div>

     );
}
 
export default ModalComponent;