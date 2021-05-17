import React,{ useState, useEffect } from 'react';
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
  drawerContainer: {
    padding: "20px 30px",
  },
  menuButton: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
    size: "18px",
    marginLeft: "38px",
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

  //Internet stuff que me vole para hacerla responsive
  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });
  const { mobileView, drawerOpen } = state;
  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());
  }, []);


  const headersData = [
    {
      label: "Listings",
      href: "/listings",
    },
    {
      label: "Mentors",
      href: "/mentors",
    },
    {
      label: "My Account",
      href: "/account",
    },
    {
      label: "Log Out",
      href: "/logout",
    },
  ];
  const handleClose = () => {
    setAnchorEl(null);
  };
  const preventDefault = (event) => event.preventDefault();

  const title = "<Codi/>"

  const displayDesktop = () =>{
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
            
            
          </Toolbar>
    )
  }

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar className={classes.toolbar}>
        

        <Drawer
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          {/* <div className={drawerContainer}>{getDrawerChoices()}</div> */}
        </Drawer>
        <div className={classes.leftpart}>
          <NLink to='/'><img src={Codi_Icon} alt="Codi Icon" className={classes.codilog}/></NLink>       

              <Typography variant="h4" >
                <NLink to='/' className={classes.title}>{title}</NLink>
              </Typography>

        </div>
              <IconButton
          {...{
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

    );
  };

  //  Internet stuff que me vole para hacerla responsive//


  return (
    <div className={classes.root}> 
      {/* <FormGroup>
        <FormControlLabel
          control={<Switch checked={auth} onChange={handleChange} aria-label="login switch" />}
          label={auth ? 'Logout' : 'Login'}
        />
      </FormGroup> */}
      <AppBar position="fixed" color={apcol} classes={{root: classes.appbarcolor}} >
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </div>
  );
}