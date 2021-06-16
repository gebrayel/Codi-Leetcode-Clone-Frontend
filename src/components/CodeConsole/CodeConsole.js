import React, { useContext, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CubeLoader from "../CubeLoader/CubeLoader";

export default function CustomInput({ input, output, expected, isLoading }) {
  const classes = useStyles();

  const selectPhrase = () => {
    return;
  };
  const consoleNew = () => {
    return (
      <>
        <div>{selectPhrase()}</div>
      </>
    );
  };
  const consoleUsed = () => {
    return (
      <>
        <div
          className={classes.status}
          style={output == expected ? { color: "green" } : { color: "red" }}
        >
          {output == expected ? "Aceptado" : "Rechazado"}
        </div>
        <div className={classes.row}>
          <div className={classes.title}>Input</div>
          <div className={classes.space}>{input}</div>
        </div>
        <div className={classes.row}>
          <div className={classes.title}>Output</div>
          <div className={classes.space}>{output}</div>
        </div>
        <div className={classes.row}>
          <div className={classes.title}>Esperado</div>
          <div className={classes.space}>{expected}</div>
        </div>
      </>
    );
  };
  const showLoader = () => {};
  return (
    <div className={classes.block}>
      {isLoading ? showLoader() : output == "" ? consoleNew() : consoleUsed()}
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  status: {},
  block: {
    backgroundColor: "#1B1D2B",
  },
  row: {
    display: "flex",
  },
  space: {
    backgroundColor: "#9B9B9B",
  },
}));
