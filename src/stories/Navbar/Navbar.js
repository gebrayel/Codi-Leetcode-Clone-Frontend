import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Drawer from "@material-ui/core/Drawer";
//icons
import MenuIcon from "@material-ui/icons/Menu";
import DeveloperModeIcon from "@material-ui/icons/DeveloperMode";
import CardMembershipIcon from "@material-ui/icons/CardMembership";
import PersonIcon from "@material-ui/icons/Person";
import AccountCircle from "@material-ui/icons/AccountCircle";
import AppsIcon from "@material-ui/icons/Apps";
//icons//
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import grey from "@material-ui/core/colors/grey";
import { Link as NLink } from "react-router-dom";
import Codi_Icon from "../../assets/blue_codi.png";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
//Helpers
import AppContext from "../../helpers/context/context";
import logout from "../../helpers/logout/logout";
//Import modal Component
import { useHistory } from "react-router-dom";
import Modal from "../../components/Modal/Modal";
//import colors
import colors from "../../config/colors/colors";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textDecoration: "none",
    color: "white",
    marginRight: "2rem",
    marginLeft: "0.3rem",
    fontWeight: "bold",
    "@media (max-width: 899x)": {
      marginLeft: "0.2rem",
    },
  },
  divider: {
    backgroundColor: colors.white,
  },
  leftpart: {
    paddingLeft: "0rem",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    "@media (max-width: 899px)": {
      paddingLeft: "0rem",
    },
  },
  menucito: {
    textDecoration: "none",
    color: colors.darkText,
  },
  appbarcolor: {
    backgroundColor: "#191A21",
    color: "white",
    paddingRight: "0.1rem",
    maxHeight: "54px",
    "@media (max-width: 900px)": {},
  },
  linkStyle: {
    textDecoration: "none",
    color: "white",
  },
  DrawerlinkStyle: {
    textDecoration: "none",
    color: colors.white,
  },
  toolbar: {
    paddingTop: "0rem",
    paddingBottom: "0rem",
    paddingRight: "0.8rem",
    paddingLeft: "1.2rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    maxHeight: "55px",
    marginTop: "0.4rem",
    "@media (max-width: 900px)": {
      marginTop: "0.5rem",
      maxHeight: "55px",
    },
  },
  submenus: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  each: {
    marginRight: "30px",
  },
  codilog: {
    maxWidth: "2.5rem",
    maxHeight: "2.5rem",
    "@media (max-width: 899px)": {
      maxWidth: "2.3rem",
      maxHeight: "2.3rem",
    },
  },
  drawerContainer: {
    padding: "20px 30px",
    backgroundColor: "#00000",
  },
  drawerTheme: {
    "& .MuiDrawer-paperAnchorLeft": {
      backgroundColor: "#191A21",
    },
  },
  menuButton: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
    size: "18px",
    marginLeft: "38px",
  },
  list: {
    width: 250,
  },
  modal: {
    marginLeft: "-10px",
    paddingLeft: "0px",
  },
  MenuItem: {
    textDecoration: "none",
    color: "black",
  },
}));

export default function Navbar(is_admin, mobile) {
  const [auth, setAuth] = useState(true);
  const [is_admins, setAdmin] = useState(is_admin);

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const apcol = grey[900];
  const handleChange = (event) => {};

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  //Internet stuff que me vole para hacerla responsive
  const [state, setState] = useState({
    mobileView: mobile,
    drawerOpen: false,
  });
  const { mobileView, drawerOpen } = state;
  // useEffect(() => {
  //   const setResponsiveness = () => {
  //     return window.innerWidth < 900
  //       ? setState((prevState) => ({ ...prevState, mobileView: true }))
  //       : setState((prevState) => ({
  //           ...prevState,
  //           mobileView: false,
  //         }));
  //   };

  //   setResponsiveness();

  //   window.addEventListener("resize", () => setResponsiveness());
  // }, []);

  const handleClose = () => {
    setAnchorEl(null);
  };
  const preventDefault = (event) => event.preventDefault();
  const title = "<Codi/>";

  const [openModal, setOpenModal] = useState(false);

  const toggleModal = () => {
    setOpenModal(!openModal);
  };

  let history = useHistory();

  const handleCloseLogOut = (modalTitle) => {
    logout.logOut();
    history.push("/");
  };

  const msg = {
    title: "<Codi/>",
    description: "¿Estás seguro seguro de que deseas cerrar sesión?",
    closeText: "Cancelar",
    functionText: "Cerrar sesión",
  };

  const displayDesktop = () => {
    return (
      <Toolbar className={classes.toolbar}>
        <div className={classes.leftpart}>
          <img src={Codi_Icon} alt="Codi Icon" className={classes.codilog} />

          <Typography variant="h5">
            <div className={classes.title}>{title}</div>
          </Typography>

          <div className={classes.submenus}>
            <Typography variant="h7" className={classes.each}>
              <div className={classes.linkStyle}>Problemas</div>
            </Typography>

            <Typography variant="h7">
              <div className={classes.linkStyle}>Premium</div>
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
            style={{ paddingTop: "0.3rem", paddingRight: "0.2rem" }}
          >
            <AccountCircle style={{ fontSize: 32 }} />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={open}
            onClose={handleClose}
            className={classes.menucito}
          >
            <div className={classes.MenuItem}>
              <MenuItem onClick={handleClose}>Perfil</MenuItem>
            </div>

            {is_admins ? (
              <div className={classes.DrawerlinkStyle}>
                <MenuItem onClick={handleClose} className={classes.MenuItem}>
                  Administrar Problemas
                </MenuItem>
              </div>
            ) : null}

            <MenuItem style={{ padding: "0px" }} onClick={handleClose}>
              <Button
                // onClick={toggleModal}
                style={{
                  width: "100%",
                  paddingLeft: "15px",
                  justifyContent: "flex-start",
                  color: "red",
                }}
              >
                {"Cerrar sesión"}
              </Button>
              <Modal
                title={msg.title}
                description={msg.description}
                functionText={msg.functionText}
                closeText={msg.closeText}
                passedFunction={handleCloseLogOut}
                toggleModal={toggleModal}
                open={openModal}
                singleButton={false}
              />
            </MenuItem>
          </Menu>
        </div>
      </Toolbar>
    );
  };

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
          className={classes.drawerTheme}
        >
          <div className={classes.drawerContainer}>{getDrawerChoices()}</div>
        </Drawer>
        <div className={classes.leftpart}>
          <div>
            <img src={Codi_Icon} alt="Codi Icon" className={classes.codilog} />
          </div>

          <Typography variant="h5">
            <div className={classes.title}>{title}</div>
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
          style={{ paddingTop: "0.4rem", paddingRight: "0.2rem" }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
    );
  };
  const getDrawerChoices = () => {
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));
    return (
      <>
        <List>
          <div
            {...{ onClick: handleDrawerClose }}
            className={classes.DrawerlinkStyle}
          >
            <ListItem button key={"Problemas"}>
              <ListItemIcon className={classes.DrawerlinkStyle}>
                <DeveloperModeIcon />
              </ListItemIcon>
              <ListItemText primary={"Problemas"} />
            </ListItem>
          </div>
          <div
            {...{ onClick: handleDrawerClose }}
            className={classes.DrawerlinkStyle}
          >
            <ListItem button key={"Premium"}>
              <ListItemIcon className={classes.DrawerlinkStyle}>
                <CardMembershipIcon />
              </ListItemIcon>
              <ListItemText primary={"Premium"} />
            </ListItem>
          </div>
        </List>
        <Divider className={classes.divider} />
        <List>
          <div
            {...{ onClick: handleDrawerClose }}
            className={classes.DrawerlinkStyle}
          >
            <ListItem button key={"Perfil"}>
              <ListItemIcon className={classes.DrawerlinkStyle}>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText primary={"Perfil"} />
            </ListItem>
          </div>
          <div style={{ padding: "0px" }} className={classes.modal}>
            <Button
              // onClick={toggleModal}
              style={{
                width: "100%",
                paddingLeft: "15px",
                justifyContent: "flex-start",
                color: "red",
              }}
            >
              {"Cerrar sesión"}
            </Button>
            <Modal
              title={msg.title}
              description={msg.description}
              acceptText={msg.acceptText}
              cancelText={msg.cancelText}
              passedRedFunction={handleCloseLogOut}
              passedBlueFunction={toggleModal}
              toggleModal={toggleModal}
              open={openModal}
              singleButton={false}
            />
          </div>
        </List>
      </>
    );
  };

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        color={apcol}
        classes={{ root: classes.appbarcolor }}
      >
        {auth ? (mobileView ? displayMobile() : displayDesktop()) : null}
      </AppBar>
    </div>
  );
}
