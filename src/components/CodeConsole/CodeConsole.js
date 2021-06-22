import React, { useContext, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CubeLoader from "../CubeLoader/CubeLoader";
import colors from "../../config/colors/colors";

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
        <h2
          className={classes.status}
          style={output == expected ? { color: "#8FFF00" } : { color: "red" }}
        >
          {output == expected ? "Aceptado" : "Rechazado"}
        </h2>
        <div className={classes.row}>
          <div className={classes.left}>
            <div className={classes.title}>Input</div>
          </div>
          <div className={classes.right}>
            <div className={classes.space}>{input}</div>
          </div>
        </div>
        <div className={classes.row}>
          <div className={classes.left}>
            <div className={classes.title}>Output</div>
          </div>
          <div className={classes.right}>
            <div className={classes.space}>{output}</div>
          </div>
        </div>
        <div className={classes.row}>
          <div className={classes.left}>
            <div className={classes.title}>Esperado</div>
          </div>
          <div className={classes.right}>
            <div className={classes.space}>{expected}</div>
          </div>
        </div>
      </>
    );
  };
  const showLoader = () => {
    return <CubeLoader />;
  };
  return (
    <div className={classes.consoleBlock}>
      <div className={classes.tag}>Consola</div>
      <div className={classes.block}>
        {isLoading ? showLoader() : output == "" ? consoleNew() : consoleUsed()}
      </div>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  status: {
    marginTop: 0,
    paddingTop: ".5rem",
    paddingLeft: ".5rem",
    fontWeight: "normal",
  },
  block: {
    backgroundColor: "#1B1D2B",
    // clipPath: "polygon(0 0, 25% 0, 25% 20%, 100% 20%, 100% 100%, 0 100%)",
    minHeight: "9rem",
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  },
  space: {
    color: colors.white,
    backgroundColor: "#9B9B9B",
    fontWeight: "normal",
    width: "25rem",
    wordWrap: "break-word",
  },
  tag: {
    width: "5rem",
    backgroundColor: "#1B1D2B",
    textAlign: "center",
    color: colors.white,
    paddingTop: ".7rem",
    paddingBottom: ".5rem",
    fontWeight: "normal",
  },
  consoleBlock: {
    marginTop: 10,
    maxWidth: "100%",
  },
  title: {
    color: colors.white,
    fontWeight: "normal",
    marginRight: "2rem",
  },
  right: {
    display: "flex",
    width: "25rem",
    marginRight: "3rem",
  },
  left: {
    display: "flex",
  },
}));
