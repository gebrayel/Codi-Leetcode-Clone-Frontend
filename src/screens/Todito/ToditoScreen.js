import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import Todito from "../../components/Todito/Todito";
import colors from "../../config/colors/colors";
import CodeConsole from "../../components/CodeConsole/CodeConsole";
export default function Toditocreen({ x, ...props }) {
  const classes = useStyles(props);
  // borrable
  let [input, setInput] = useState("pene too");
  let pene = "pene";
  let [output, setOutput] = useState("pene");
  let [consoleLoading, setConsoleLoading] = useState(false);
  let [expected, setExpected] = useState("pene too");
  // borrable
  return (
    <>
      <Box className={classes.container}>
        <Todito
          type="description"
          id={51}
          title="N-Reinas"
          difficulty="Difícil"
          colorDifficulty="#E75656"
          solution="print('hello')"
          description="El rompecabezas de las n-reinas es un problema de colocar n reinas en un tablero de ajedrez de tamaño nxn, de tal manera de que no existan dos reinas que se puedan atacar una a otra. Dado un entero n, retorne todas las posibles soluciones al problema de las n-reinas."
          data={[
            { time: "08/06/2021", status: "Aprobado", language: "Java" },
            { time: "09/06/2021", status: "Desaprobado", language: "Python" },
          ]}
        />
      </Box>
      <Box>
        <CodeConsole
          input={input}
          output={output}
          isLoading={consoleLoading}
          expected={expected}
        />
      </Box>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "#282A36",
    width: "50%",
    height: "92vh",
    marginTop: "4%",
  },
}));
