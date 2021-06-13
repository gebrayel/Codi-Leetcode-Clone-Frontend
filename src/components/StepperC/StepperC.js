import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Check from '@material-ui/icons/Check';
import StepConnector from '@material-ui/core/StepConnector';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CodeIcon from '@material-ui/icons/Code';
import InputIcon from '@material-ui/icons/Input';
import DescriptionIcon from '@material-ui/icons/Description';
import ProblemTab1 from "../ProblemTabs/ProblemTab1/ProblemTab1";
import ProblemTab2 from "../ProblemTabs/ProblemTab2/ProblemTab2";
import ProblemTab3 from '../ProblemTabs/ProblemTab3/ProblemTab3';
import colors from "../../config/colors/colors";

function QontoStepIcon(props) {
  const classes = useQontoStepIconStyles();
  const { active, completed } = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
      })}
    >
      {completed ? <Check className={classes.completed} /> : <div className={classes.circle} />}
    </div>
  );
}

function getSteps() {
  return ['Descripcion del Problema', 'Template del Problema', 'Testing Data'];
}

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons = {
    1: <DescriptionIcon />,
    2: <CodeIcon/>,
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
                        handleProblemInfo,
                        code,
                        setCode,
                        javaTemplate,
                        setJavaTemplate,
                        pythonTemplate,
                        setPythonTemplate,
                        inputOutputs,
                        setInputOutputs,
                        eliminarInputOutput) {
  switch (step) {
    case 0:
      return <ProblemTab1 
                          code={code} 
                          setCode={setCode} 
                          problemInfo={problemInfo} 
                          handleProblemInfo={handleProblemInfo} 
              /> 
    case 1:
      return <ProblemTab2 
                          javaTemplate={javaTemplate} 
                          setJavaTemplate={setJavaTemplate} 
                          pythonTemplate={pythonTemplate} 
                          setPythonTemplate={setPythonTemplate} 
                          problemInfo={problemInfo} 
                          handleProblemInfo={handleProblemInfo} 
              /> 
      case 2:
        return <ProblemTab3 
                          problemInfo={problemInfo} 
                          handleProblemInfo={handleProblemInfo} 
                          inputOutputs={inputOutputs}
                          setInputOutputs={setInputOutputs}
                          eliminarInputOutput={eliminarInputOutput}
                          />
        default:
          return 'Unknown step';
  }
}

export default function StepperC({
                                  activeStep,
                                  setActiveStep,
                                  problemInfo,
                                  handleProblemInfo,
                                  code,
                                  setCode,
                                  javaTemplate,
                                  setJavaTemplate,
                                  pythonTemplate,
                                  setPythonTemplate,
                                  inputOutputs,
                                  setInputOutputs,
                                  eliminarInputOutput}){
  
  const classes = useStyles();
  const steps = getSteps();
  const handleReset = () => {
    setActiveStep(0);
  };
  
  return (
    <div className={classes.root}>
      
      <Stepper className={classes.Stepper} 
                alternativeLabel 
                activeStep={activeStep} 
                connector={<ColorlibConnector />}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>
              <div style={{color:"white"}}>
                {label}
              </div> 
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
              {
                getStepContent(activeStep,
                              problemInfo,
                              handleProblemInfo,
                              code,
                              setCode,
                              javaTemplate,
                              setJavaTemplate,
                              pythonTemplate,
                              setPythonTemplate,
                              inputOutputs,
                              setInputOutputs,
                              eliminarInputOutput)
              }
            </Typography>
            
          </div>
        )}
      </div>
    </div>
  );
}

const QontoConnector = withStyles({
  alternativeLabel: {
    top: 10,
    left: 'calc(-50% + 16px)',
    right: 'calc(50% + 16px)',
  },
  active: {
    '& $line': {
      borderColor: '#784af4',
    },
  },
  completed: {
    '& $line': {
      borderColor: '#784af4',
    },
  },
  line: {
    borderColor: '#eaeaf0',
    borderTopWidth: 3,
    borderRadius: 1,
  },
  
})(StepConnector);

const useQontoStepIconStyles = makeStyles({
  root: {
    color: '#eaeaf0',
    display: 'flex',
    height: 22,
    alignItems: 'center',
  },
  active: {
    color: '#784af4',
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: 'currentColor',
  },
  completed: {
    color: '#784af4',
    zIndex: 1,
    fontSize: 18,
  },
  
});

const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  active: {
    '& $line': {
      backgroundImage:
        'linear-gradient( 95deg,rgb(81, 81, 174) 0%,rgb(81, 81, 174) 50%,rgb(138,35,135) 100%)',
    },
  },
  completed: {
    '& $line': {
      backgroundImage:
        'linear-gradient( 95deg,rgb(81, 81, 174) 0%,rgb(81, 81, 174) 50%,rgb(138,35,135) 100%)',
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: '#eaeaf0',
    borderRadius: 1,
  },
  
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: "#ccc",
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    backgroundImage:
      'linear-gradient( 136deg, rgb(81, 81, 174) 0%, rgb(81, 81, 174) 50%, rgb(138,35,135) 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  },
  completed: {
    backgroundImage:
      'linear-gradient( 136deg, rgb(81, 81, 174) 0%, rgb(81, 81, 174) 50%, rgb(138,35,135) 100%)',
  },
  

});


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  Stepper:{
    backgroundColor:colors.background,

  }
}));

