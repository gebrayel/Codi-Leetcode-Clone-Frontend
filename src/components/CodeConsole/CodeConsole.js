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
        <h3
          className={classes.status}
          style={output == expected ? { color: "#8FFF00" } : { color: "red" }}
        >
          {output == expected ? "Aceptado" : "Rechazado"}
        </h3>
        <div className={classes.rowSpace}>
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
        </div>
      </>
    );
  };
  const showLoader = () => {
    return (
      <div className={classes.cubeBox}>
        <CubeLoader />
      </div>
    );
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
    marginBottom: ".5rem",
    paddingTop: ".5rem",
    paddingLeft: ".5rem",
    fontWeight: "normal",
    fontSize: "1.2rem",
  },
  block: {
    backgroundColor: "#1B1D2B",
    height: "9rem",
    paddingBottom: ".3rem",
    display: "flex",
    alignItems: "center",
  },
  row: {
    display: "flex",
    width: "100%",
    marginBottom: ".7rem",
  },
  space: {
    color: colors.white,
    backgroundColor: "#9B9B9B",
    fontWeight: "normal",
    width: "95%",
    wordBreak: "break-word",
    minHeight: "1.6rem",
    display: "flex",
    alignItems: "center",
    paddingLeft: ".5rem",
    fontSize: "1rem",
    margin: 0,
  },
  cubeBox: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    "& .makeStyles-container-88": {
      paddingTop: 0,
    },
  },
  cube: {},
  rowSpace: {
    overflowY: "auto",
    scrollBehavior: "smooth",
    "&::-webkit-scrollbar": {
      width: 8,
    },
    "&::-webkit-scrollbar-track": {
      boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
      webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "rgba(0,0,0,.2)",
      outline: "1px solid slategrey",
      borderRadius: 7,
    },
    maxHeight: "7rem",
  },

  tag: {
    width: "5rem",
    backgroundColor: "#1B1D2B",
    textAlign: "center",
    color: colors.white,
    paddingTop: ".2rem",
    paddingBottom: ".2rem",
    fontWeight: "normal",
    fontSize: ".9rem",
    paddingBottom: ".4rem",
  },
  consoleBlock: {
    marginTop: ".4rem",
    maxWidth: "98%",
  },
  title: {
    color: colors.white,
    fontWeight: "normal",
    display: "flex",
    alignItems: "center",
    fontSize: "1rem",
  },
  right: {
    display: "flex",
    width: "95%",
  },
  left: {
    display: "flex",
    width: "5rem",
    marginRight: "1rem",
    paddingLeft: ".5rem",
  },
}));
