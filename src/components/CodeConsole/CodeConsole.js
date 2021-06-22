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
    marginBottom: ".5rem",
    paddingTop: ".5rem",
    paddingLeft: ".5rem",
    fontWeight: "normal",
    fontSize: "1.2rem",
  },
  block: {
    backgroundColor: "#1B1D2B",
    // clipPath: "polygon(0 0, 25% 0, 25% 20%, 100% 20%, 100% 100%, 0 100%)",
    minHeight: "9rem",
    paddingBottom: ".3rem",
  },
  row: {
    display: "flex",
    // justifyContent: "space-around",
    width: "100%",
    paddingLeft: ".5rem",
    marginBottom: ".7rem",
  },
  space: {
    color: colors.white,
    backgroundColor: "#9B9B9B",
    fontWeight: "normal",
    width: "95%",
    wordWrap: "break-word",
    height: "1.6rem",
    display: "flex",
    alignItems: "center",
    paddingLeft: ".5rem",
    fontSize: "1rem",
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
    maxWidth: "100%",
  },
  title: {
    color: colors.white,
    fontWeight: "normal",
    // marginRight: "2rem",
    display: "flex",
    alignItems: "center",
    fontSize: "1rem",
  },
  right: {
    display: "flex",
    width: "95%",
    paddingRight: "1rem",
    paddingLeft: "2rem",
  },
  left: {
    display: "flex",
    width: "5rem",
  },
}));
