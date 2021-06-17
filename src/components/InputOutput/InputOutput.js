import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import RemoveIcon from "@material-ui/icons/Remove";

import colors from "../../config/colors/colors";
import Context from "../../helpers/context/context";

const InputOutput = ({
  id,
  input,
  output
}) => {
  const classes = useStyles();
  const { problemInfo, setProblemInfo } = useContext(Context);

  const removeTestCase = (id) => {
    const testCases = problemInfo.testCases;
    const filteredTestCases = testCases.filter((resp) => resp.id !== id);
    setProblemInfo({
      ...problemInfo,
      testCases: filteredTestCases
    });
  }

  function InputOutputDeleteButton() {
    return (
      <Button
        variant="contained"
        size="small"
        className={classes.ButtonRemove__ProblemTab3}
        onClick={() => removeTestCase(id)}
      >
        Eliminar <RemoveIcon />
      </Button>
    );
  }

  function FormRowTextFields() {
    return (
      <React.Fragment>
        <Grid item={true} xs={12} md={1} lg={1} xl={1}>
          <h4 className={classes.titleTextField}>Input:</h4>
        </Grid>
        <Grid item={true} xs={8} md={3} lg={5} xl={3}>
          <TextField
            disabled={true}
            color="white"
            label={input}
            className={`
              ${classes.whiteTheme} 
              ${classes.TextField__Tab3}
            `}
            name="input"
            placeholder={input}
          ></TextField>
        </Grid>
        <Grid item={true} xs={12} md={1} lg={1} xl={1}>
          <h4 className={classes.titleTextField}>Output:</h4>
        </Grid>
        <Grid item={true} xs={8} md={3} lg={4} xl={3}>
          <TextField
            disabled={true}
            color="white"
            label={output}
            className={`
              ${classes.whiteTheme} 
              ${classes.TextField__Tab3}
            `}
            name="input"
            placeholder={output}
          ></TextField>
        </Grid>
        <Grid item={true} xs={8} md={2} lg={3} xl={2}>
          <Paper
            className={`
              ${classes.paper}
              ${classes.itemStles}
            `}
          >
            <InputOutputDeleteButton />
          </Paper>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div id="TextFieldBox__InputOutput">
      <Paper className={classes.paperContainer}>
        <Grid
          direction="row"
          justify="center"
          alignItems="center"
          container
          spacing={0}
        >
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            className={classes.itemStles}
            xs={9}
            md={12}
            lg={8}
            spacing={0}
          >
            <FormRowTextFields />
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default InputOutput;

const useStyles = makeStyles((theme) => ({
  root: {
    width: "70%",
    color: "white",
    flexGrow: 1,
  },
  paperContainer: {
    padding: theme.spacing(1),
    textAlign: "center",
    justifyContent: "center",
    backgroundColor: colors.background,
    color: colors.white,
    marginLeft: "0%",
    width: "100%",
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    justifyContent: "center",
    backgroundColor: colors.background,
    color: colors.white,
    marginLeft: "0%",
  },
  titleTextField: {
    marginTop: "5%",
    paddingTop: "25%",
    "@media (min-width: 320px) and (max-width:1024px)": {
      paddingTop: "0%",
    },
    "@media (min-width: 1024px)": {
      paddingTop: "50%",
    },
  },
  TextField__Tab3: {
    textAlign: "left",
    overflowX: "auto",
    paddingTop: "5%",
  },
  itemStles: {
    "& .MuiPaper-elevation1": {
      boxShadow: "none",
      borderRadius: "none",
      overflowX: "hidden",
    },
  },
  InputBox__Tab3: {
    marginRight: "5%",
  },
  OutputBox__Tab3: {
    marginRight: "5%",
  },
  ButtonRemove__ProblemTab3: {
    marginTop: "10%",
  },

  marginTextField__ProblemTab3: {
    marginRight: "5%",
  },
  whiteTheme: {
    "& .MuiSelect-icon": {
      color: "white",
      height: "80%",
    },

    "& .MuiInputLabel-formControl": {
      color: "white",
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
  },
}));
