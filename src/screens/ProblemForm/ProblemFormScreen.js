import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import StepperC from "../../components/StepperC/StepperC";
import "../../styles/screens/ProblemFormScreen/ProblemFormScreen.scss";

import Context from "../../helpers/context/context";
import valids from "../../helpers/validations/validations";
import cache from "../../helpers/cache/cache";
import k from "../../helpers/constants/constants";



const ProblemFormScreen = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [problemInfo, setProblemInfo] = useState(k.problemInfoEmpty);
  const [codeSolution, setCodeSolution] = useState("");

  useEffect(() => {
    cache.initializeFormValues(setActiveStep, setProblemInfo, setCodeSolution);
  }, [])

  const handleNextStepper = () => {
    switch (activeStep) {
      case 0:
        valids.validateTab1(problemInfo, setProblemInfo, codeSolution, setActiveStep);
        break;
      case 1:
        valids.validateTab2(problemInfo, setActiveStep);
        break;
      case 2:
        valids.validateTab3(problemInfo, save);
        break;
      default:
        console.log("Lmao")
        break;
    }
  };

  const handleBackStepper = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const save = () => {
    setActiveStep(0);
    setCodeSolution("");
    setProblemInfo(k.problemInfoEmpty);
    cache.removeFormCacheItems();
  };

  return (
    <Context.Provider
      value={{
        problemInfo,
        setProblemInfo,
        //Tab 1
        codeSolution,
        setCodeSolution,
      }}
    >
      <div className="ProblemFormScreenContainer">
        <StepperC
          id="StepperComponent"
          activeStep={activeStep}
          setActiveStep={setActiveStep}
          problemInfo={problemInfo}
        />
        <div id="buttonBox">
          {activeStep !== 0 ? (
            <div id="BackButton__ProblemFormScreen">
              <Button
                color="secondary"
                variant="contained"
                disabled={activeStep === 0}
                onClick={handleBackStepper}
                className="button"
              >
                Regresar
              </Button>
            </div>
          ) : null}
          {activeStep < 3 ? (
            <div id="NextButton__ProblemFormScreen">
              <Button
                variant="contained"
                color="primary"
                onClick={handleNextStepper}
                className="button"
                disabled={activeStep > 2}
              >
                {activeStep > 1 ? "Guardar" : "Siguiente"}
              </Button>
            </div>
          ) : null}
        </div>
      </div>
    </Context.Provider>
  );
};
export default ProblemFormScreen;
