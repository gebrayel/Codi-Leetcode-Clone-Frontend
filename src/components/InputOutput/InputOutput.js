import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import colors from "../../config/colors/colors";
import Button from '@material-ui/core/Button';
import RemoveIcon from '@material-ui/icons/Remove';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';





const InputOutput = (inputOutput) => {
    const classes = useStyles();
    console.log(inputOutput.inputOutput)
    const{eliminarInputOutput}=inputOutput;
    const {id,input,output}=inputOutput.inputOutput;

    function FormRow() {
        return (
            <React.Fragment>
                <Grid item xs={2} lg={2}>
                    <Paper className={classes.paper}>{input}</Paper>
                </Grid>
                <Grid item xs={2} lg={2}>
                    <Paper className={classes.paper}>{output}</Paper>
                </Grid>
                <Grid item xs={2} lg={2}>
                    <Paper className={classes.paper}>
                        <Button
                            variant="contained"
                            color="primary"
                            size="small"
                            className={classes.ButtonRemove__ProblemTab3}
                            onClick={()=>eliminarInputOutput(id)}
                        >
                            Eliminar <RemoveIcon/>
                        </Button>
                    </Paper>
                </Grid>
            </React.Fragment>
        );
  }

    return ( 
        
        <div id="TextFieldBox__InputOutput" >
            <Grid container spacing={1}>
                <Grid container item xs={12} spacing={3}>
                    <FormRow />
                </Grid>
            </Grid>
            
        </div> 
    );
}
 
export default InputOutput;

const useStyles = makeStyles((theme) => ({
  root: {
    width:"100%",
    color:"white",
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    justifyContent:"center",
    backgroundColor: colors.background,
  },

  InputBox__Tab3:{
    // display:"inline-block",
    marginRight:"5%"
  },
  OutputBox__Tab3:{
    // display:"inline-block",
    marginRight:"5%"
  },
  ButtonRemove__ProblemTab3:{
    //   marginTop:"1.8%",
    // textAlign:"right",
    // justifyContent:"right"
      
  },

  marginTextField__ProblemTab3:{
      marginRight:"5%"
  },
  whiteTheme: {
    "& .MuiSelect-icon":{
      color:"white",
      height:"80%",
     },
    
    "& .MuiInputLabel-formControl":{
        color:"white"
    },
      "& .MuiInputBase-root ": {
        color: colors.white,  
    },
      "& .MuiInputBase-input .MuiInput-input": {
        color: colors.white,
    },
      "& .MuiInput-underline:before": {
        borderColor: colors.white,
        borderWidth: "0.2rem",
        borderBottom: "0.2rem solid white",
    },
      "& .MuiInput-underline:after": {
        borderColor: colors.white,
        borderWidth: "0.2rem",
        borderBottom: "0.2rem solid white",
    },
  }
}));