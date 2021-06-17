import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import colors from "../../../config/colors/colors";
import "../../../styles/screens/ProblemFormScreen/ProblemTabs/ProblemTab3/ProblemTab3.scss";
import InputOutput from "../../InputOutput/InputOutput";
import InputOutputForm from "../../InputOutputForm/InputOutputForm";

export default function ProblemTab3({
  testCases,
}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className="InputOutputsRegisteredBox">
        {testCases.length === 0 ? null : (
          <h2>Casos de Prueba Registrados:</h2>
        )}
        {testCases.map((testCase) => (
          <InputOutput
            key={testCase.id}
            input={testCase.input}
            output={testCase.output}
          />
        ))}
      </div>
      <InputOutputForm />
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    color: colors.white,
  },
}));
