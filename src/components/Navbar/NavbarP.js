import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import AirplanemodeActiveIcon from '@material-ui/icons/AirplanemodeActive';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton'
import {makeStyles} from '@material-ui/core/styles'
import {ThemeProvider} from '@material-ui/core/styles'
import {useTheme, useMediaQuery} from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import blue_codi from '../../assets/blue_codi.png'
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';

const title = "<Codi/>"
const useStyle = makeStyles(theme =>({
    offset: theme.mixins.toolbar
}))

const NavbarP = () =>{
    const classes = useStyle()
    return(
        <ThemeProvider >
            <AppBar position="static" color="primary">
              <Toolbar>

                
                  {/* <img id="codi_nav" src={blue_codi}  /> */}
                  <Typography variant="h4">
                      {title}
                  </Typography>
                
                  {/* <img id="codi_nav" src={blue_codi}  /> */}
                  <Typography variant="h6">
                      Problemas
                  </Typography>
                  <Typography variant="h6">
                      Premium
                  </Typography>
                  <IconButton aria-label="AccountCircleOutlined" >
                  <AccountCircleOutlinedIcon color="primary"/>
                  </IconButton>
              </Toolbar>
            </AppBar>

            {/*
            <Button color="primary">
              Color
            </Button>

            <Button variant="outlined" color="primary">
              Color
            </Button>

            <Button disableElevation variant="outlined" color="primary">
              Color
            </Button>

            <Button fullWidth variant="outlined" color="primary">
              Color
            </Button>

            <Button size="medium" variant="outlined" color="primary">
              Color
            </Button>


            <Button 
            variant="contained" 
            color="primary" 
            endIcon={<AirplanemodeActiveIcon/>}>
              AIRPLANE ZONE
            </Button>

            <IconButton 
            aria-label="delete" 
            color="secundary"
            >
              <AirplanemodeActiveIcon color="primary"/>
            </IconButton>
            
            <Button className={classes.stl}>
              personalizado ejasi
            </Button> */}

        </ThemeProvider>
    )
}

export default NavbarP;