import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import colors from "../../../config/colors/colors";
import "../../../styles/screens/ProblemFormScreen/ProblemTabs/ProblemTab3/ProblemTab3.scss";
import InputOutput from "../../InputOutput/InputOutput";
import InputOutputForm from "../../InputOutputForm/InputOutputForm";

export default function ProblemTab3({
  inputOutputs,
  eliminarInputOutput,
  agregarInputOutput,
}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className="InputOutputsRegisteredBox">
        {inputOutputs.length === 0 ? null : (
          <h2>Casos de Prueba Registrados:</h2>
        )}
        {inputOutputs.map((inputOutput) => (
          <InputOutput
            key={inputOutput.id}
            inputOutput={inputOutput}
            eliminarInputOutput={eliminarInputOutput}
          />
        ))}
      </div>
      <InputOutputForm
        inputOutputs={inputOutputs}
        agregarInputOutput={agregarInputOutput}
      />
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    color: colors.white,
  },
}));
