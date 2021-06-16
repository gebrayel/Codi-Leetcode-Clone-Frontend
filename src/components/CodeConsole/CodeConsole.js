import React, { useContext, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

export default function CustomInput(input, output, esperado, isLoading) {
  const classes = useStyles();

  const consoleNew = () => {
    return (
      <>
        <div>
          clic run when u feel ready remind ur smart...i guess dont forget the ;
          att your javaby
        </div>
      </>
    );
  };
  const consoleUsed = () => {};
  const showLoader = () => {};
  return (
    <>{isLoading ? showLoader : output == "" ? consoleNew : consoleUsed}</>
  );
}

const useStyles = makeStyles((theme) => ({}));
