import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import clsx from "clsx";

import Button from "@material-ui/core/Button";
import CodeIcon from "@material-ui/icons/Code";
import DescriptionIcon from "@material-ui/icons/Description";
import InputIcon from "@material-ui/icons/Input";
import Step from "@material-ui/core/Step";
import StepConnector from "@material-ui/core/StepConnector";
import StepLabel from "@material-ui/core/StepLabel";
import Stepper from "@material-ui/core/Stepper";
import Typography from "@material-ui/core/Typography";

import colors from "../../config/colors/colors";
import ProblemTab1 from "../ProblemTabs/ProblemTab1/ProblemTab1";
import ProblemTab2 from "../ProblemTabs/ProblemTab2/ProblemTab2";
import ProblemTab3 from "../ProblemTabs/ProblemTab3/ProblemTab3";

const getSteps = () => {
  return ["Descripción del Problema", "Templates del Problema", "Datos de Prueba"];
}

const ColorlibStepIcon = (props) => {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons = {
    1: <DescriptionIcon />,
    2: <CodeIcon />,
    3: <InputIcon />,
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}
function getStepContent(
  step,
  problemInfo,
) {
  switch (step) {
    case 0:
      return (
        <ProblemTab1 />
      );
    case 1:
      return (
        <ProblemTab2 />
      );
    case 2:
      return (
        <ProblemTab3
          testCases={problemInfo.testCases}
        />
      );
    default:
      return "Unknown step";
  }
}

export default function StepperC({
  activeStep,
  setActiveStep,
  problemInfo,
}) {
  const classes = useStyles();
  const steps = getSteps();
  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper
        className={classes.Stepper}
        alternativeLabel
        activeStep={activeStep}
        connector={<ColorlibConnector />}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>
              <div style={{ color: "white" }}>{label}</div>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed - you&apos;re finished
            </Typography>
            <Button onClick={handleReset} className={classes.button}>
              Reset
            </Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>
              {getStepContent(
                activeStep,
                problemInfo,
              )}
            </Typography>
          </div>
        )}
      </div>
    </div>
  );
}

const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  active: {
    "& $line": {
      backgroundImage:
        "linear-gradient( 95deg,rgb(81, 81, 174) 0%,rgb(81, 81, 174) 50%,rgb(138,35,135) 100%)",
    },
  },
  completed: {
    "& $line": {
      backgroundImage:
        "linear-gradient( 95deg,rgb(81, 81, 174) 0%,rgb(81, 81, 174) 50%,rgb(138,35,135) 100%)",
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: "#eaeaf0",
    borderRadius: 1,
  },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: "#ccc",
    zIndex: 1,
    color: "#fff",
    width: 50,
    height: 50,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  active: {
    backgroundImage:
      "linear-gradient( 136deg, rgb(81, 81, 174) 0%, rgb(81, 81, 174) 50%, rgb(138,35,135) 100%)",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  },
  completed: {
    backgroundImage:
      "linear-gradient( 136deg, rgb(81, 81, 174) 0%, rgb(81, 81, 174) 50%, rgb(138,35,135) 100%)",
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },

  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  Stepper: {
    backgroundColor: colors.background,
  },
}));
