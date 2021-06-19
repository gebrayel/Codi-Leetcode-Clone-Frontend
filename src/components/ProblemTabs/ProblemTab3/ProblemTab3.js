import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import colors from "../../../config/colors/colors";
import "../../../styles/screens/ProblemFormScreen/ProblemTabs/ProblemTab3/ProblemTab3.scss";
import InputOutput from "../../InputOutput/InputOutput";
import InputOutputForm from "../../InputOutputForm/InputOutputForm";
import Context from "../../../helpers/context/context";

export default function ProblemTab3({

}) {
  const classes = useStyles();
  const { problemInfo } = useContext(Context);
  const testCases = problemInfo.testCases;

  return (
    <div className={classes.root}>
      <InputOutputForm />
      <div className="InputOutputsRegisteredBox">
        {testCases.length === 0 ? null : (
          <h2>Casos de Prueba Registrados:</h2>
        )}
        {testCases.map((testCase) => (
          <InputOutput
            id={testCase.id}
            input={testCase.input}
            output={testCase.output}
          />
        ))}
      </div>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    color: colors.white,
  },
}));
