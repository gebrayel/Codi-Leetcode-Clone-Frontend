import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button'
import grey from '@material-ui/core/colors/grey'
import {Link as NLink, BrowserRouter as Router, Switch as RSwitch, Route} from 'react-router-dom'
import Codi_Icon from '../../assets/blue_codi.png'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textDecoration: 'none',
    color: 'white',
    marginRight: '5rem',
    marginLeft: '1rem',
  },
  leftpart: {
    display:'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  appbarcolor:{
    backgroundColor: '#191A21',
    color: "white",
    paddingRight: "0.5rem",
    // paddingLeft: "118px",
    "@media (max-width: 900px)": {
      // paddingLeft: 0,
    },
  },
  linkStyle:{
    textDecoration: 'none',
    color: 'white'
  },
  toolbar: {
    paddingTop: "0rem",
    paddingBottom: "0rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: 'center',
  },
  submenus:{
    display: "flex",
    justifyContent: "space-between",
    alignItems: 'center',
  },
  each:{
    marginRight: '30px'
  },
  codilog:{
    maxWidth: '3.5rem',
    maxHeight: '3.5rem'
  },
  logicon:{
    width: '2rem',
    height: '20rem'
  },
}));

export default function Navbar() {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const apcol = grey[900];
  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const preventDefault = (event) => event.preventDefault();

  const title = "<Codi/>"

  const display = () =>{
    return (
      <Toolbar className={classes.toolbar}>
            {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton> */}
            
            <div className={classes.leftpart}>
              
              <NLink to='/'><img src={Codi_Icon} alt="Codi Icon" className={classes.codilog}/></NLink>       

              <Typography variant="h4" >
                <NLink to='/' className={classes.title}>{title}</NLink>
              </Typography>

                
              <div className={classes.submenus}>

                <Typography variant="h6" className={classes.each}>
                    
                    <NLink to = '/actual' className={classes.linkStyle}>Problemas</NLink>
                    
                </Typography>

                <Typography variant="h6" >
                  <NLink to = '#' className={classes.linkStyle}>Premium</NLink>
                </Typography>
              </div>
            </div>
            
            {auth ? (
              <div>
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                  size="medium"
                >
                  <AccountCircle style={{ fontSize: 40 }}/>
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>Perfil</MenuItem>
                  <MenuItem onClick={handleClose}>Cerrar Sesión</MenuItem>
                </Menu>
              </div>
            ): <Button variant="contained" color="primary">
              Iniciar Sesión
            </Button>
            }
          </Toolbar>
    )
  }
  return (
    <div className={classes.root}> 
      {/* <FormGroup>
        <FormControlLabel
          control={<Switch checked={auth} onChange={handleChange} aria-label="login switch" />}
          label={auth ? 'Logout' : 'Login'}
        />
      </FormGroup> */}
      <AppBar position="fixed" color={apcol} classes={{root: classes.appbarcolor}} >
        {display()}
      </AppBar>
    </div>
  );
}