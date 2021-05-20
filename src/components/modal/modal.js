
import React, { Component,Fragment,useState } from 'react';

import {logOut} from '../../helpers/helpers';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const ModalComponent = () => {
    const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    logOut();
  };
    return ( 
        
        
        <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Cerrar Sesión.
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            ¿Estas seguro seguro de que deseas cerrar sesión?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Volver a Codi.
          </Button>
          <Button onClick={handleClose} color="secondary" autoFocus>
            Cerrar sesión.
          </Button>
        </DialogActions>
      </Dialog>
    </div>

     );
}
 
export default ModalComponent;