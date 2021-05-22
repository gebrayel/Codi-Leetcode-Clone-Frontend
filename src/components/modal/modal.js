
import React, { Component,Fragment,useState,useContext } from 'react';
import AppContext from '../../helpers/context/context'
import {logOut} from '../../helpers/helpersFunctions/helpers';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
  import { useHistory } from "react-router-dom";


const ModalComponent = ({props}) => {
  
  /** ===> El componente modal se le estableceran 6 parametros en un array, donde:
   *      props[0] Establece el variant desing del boton que abrira el Componente Modal.
   *      props[1] Establece el color del boton que abrira el Componente Modal.
   *      props[2] Establece el el Texto del boton que abrira el Componente Modal.
   *      props[3] Establece el dialog-description del Componente Modal.
   *      props[4] Establece el texto con primary desing (afirmacion==>Aceptar) del Componente Modal.
   *      props[5] Establece el texto con secondary desing (negacion==>Cancelar) del Componente Modal.
   * {props} ===> 
   */
  
  const [open, setOpen] = React.useState(false);
  const {user,setUser} = useContext(AppContext);
  let history = useHistory();

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose=()=>{
    setOpen(false);
  }
  const handleCloseLogOut = () => {
    setOpen(false);
    logOut();
    setUser(null);
    history.push('/');
  };
    return ( 
        
        
        <div>
          {props[0].trim()===''
           ?
            <Button color={props[1]} onClick={handleClickOpen}>
            {props[2]}
          </Button>
           :
            <Button variant={props[0]} color={props[1]} onClick={handleClickOpen}>
            {props[2]}
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
                {props[3]}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
              {props[4]}
              </Button>
              <Button onClick={handleCloseLogOut} color="secondary" autoFocus>
                {props[5]}
              </Button>
            </DialogActions>
          </Dialog>
    </div>

     );
}
 
export default ModalComponent;