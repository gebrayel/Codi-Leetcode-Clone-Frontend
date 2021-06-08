import React, {useState} from 'react';
import ProblemTab1 from '../../components/ProblemTabs/ProblemTab1/ProblemTab1';

import Button from '@material-ui/core/Button';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import StepperC from "../../components/StepperC/StepperC";
import "../../styles/screens/ProblemFormScreen/ProblemFormScreen.scss";
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    

    
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
    }));
const ProblemFormScreen = () => {
    
   
    const [activeStep, setActiveStep] = useState(0);
    const [code,setCode]=useState("");
    const [problemInfo,handleProblemInfo]=useState({
        name:'',
        difficulty:'',
        description:'',
        solution:'',
        solutionCode:'',

    })
    const classes = useStyles();

    const handleNextStepper = () => {
        if(activeStep==2){
        //HACER VALIDACION DEL FORMULARIO AQUI
        save();
      }else{
          
        let validateCases=""
        // if(activeStep===0){
        //     if(problemInfo.name.trim().replace("\n","").length<3) validateCases=validateCases+"El titulo del problema debe tener al menos 3 caracteres.\n"
        //     if(problemInfo.difficulty.trim().replace("\n","")==="") validateCases=validateCases+"Debes seleccionar una dificultad para el problema.\n"
        //     if(problemInfo.description.trim().replace("\n","").length<8) validateCases=validateCases+"Debes agregar una descripcion para el problema de al menos 8 caracteres.\n"
        //     if(problemInfo.solution.trim().replace("\n","")==="") validateCases=validateCases+"Debes agregar una solucion para el problema.\n"
        //     if(code.trim().replace("\n","")==="") validateCases=validateCases+"Debes agregar un codigo solucion al problema.\n"
            
        //     if(validateCases.trim().replace("\n","")!=="") {alert(validateCases); return;}
        // }
        
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        console.log(activeStep);
        console.log(problemInfo);
        console.log(code);
        
        }
  };

  const handleBackStepper = () => {
      
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
      console.log(activeStep);
  };
  const save =()=>{
      console.log("problema guardado");
      console.log(problemInfo)

  }
    

    return ( 
        <div className="ProblemScreenContainer">
            <StepperC
                id="StepperComponent"
                activeStep={activeStep} 
                setActiveStep={setActiveStep} 
                problemInfo={problemInfo}
                handleProblemInfo={handleProblemInfo}
                code={code}
                setCode={setCode}
            />
            <div id="buttonBox">

                {activeStep !== 0 ? 
                    <Button  
                        color="secondary" 
                        variant="contained" 
                        disabled={activeStep === 0} 
                        onClick={handleBackStepper} 
                        className="button">
                        Back
                    </Button> 
                    
                :null }
                {activeStep<3 ? 
                
                
                    <Button
                            variant="contained"
                            color="primary"
                            onClick={handleNextStepper}
                            className="button"
                            disabled={activeStep>2}
                        >
                            {activeStep > 1 ? 'Guardar' : 'Siguiente'}
                        </Button>
                
                :null}
                
                
                
            </div>
        </div>
        
        );
}
 
export default ProblemFormScreen;