import React, {useState,useEffect} from 'react';
import Button from '@material-ui/core/Button';
import StepperC from "../../components/StepperC/StepperC";
import "../../styles/screens/ProblemFormScreen/ProblemFormScreen.scss";

const ProblemFormScreen = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [code,setCode]=useState("");
    const [javaTemplate,setJavaTemplate]=useState("");
    const [pythonTemplate,setPythonTemplate]=useState("");
    //Recuperar Inputs y outputs del localStorage
    let inputOutputsIniciales=JSON.parse(localStorage.getItem('inputOutputs'));
    if(!inputOutputsIniciales){
        inputOutputsIniciales=[
            {   id:1,
                input:"[1,2]",
                output:"[3,4]"
                
            },
            {   id:2,
                input:"Rommel",
                output:"El mejor del mundo"
                
            }
        ];
        // console.log(Object.key(inputOutputsIniciales[0]))
    }
    //arreglo de Inputs y Outputs
    const [inputOutputs,setInputOutputs]=useState(inputOutputsIniciales);
    
    useEffect(() => {
        
        console.log(inputOutputs)

        let inputOutputsIniciales=JSON.parse(localStorage.getItem('inputOutputs'));
        
        if(inputOutputsIniciales){
            localStorage.setItem('inputOutputs',JSON.stringify(inputOutputs));
        
        }else{
            localStorage.setItem('inputOutputs',JSON.stringify([]));
        }

    }, [inputOutputs])
    
    const [problemInfo,handleProblemInfo]=useState({
        name:'',
        difficulty:'',
        description:'',
        solution:'',
        solutionCode:{},
        language:{},
        templateCode:{}

    })
    const handleNextStepper = () => {
        if(activeStep==2){
        //HACER VALIDACION DEL FORMULARIO AQUI
        save();
      }else{
          
        let validateCases=""
        if(activeStep===0){
            // if(problemInfo.name.trim().replace("\n","").length<3) {
            //     validateCases=validateCases+"El titulo del problema debe tener al menos 3 caracteres.\n"
            // }
            // if(problemInfo.difficulty.trim().replace("\n","")===""){ 
            //     validateCases=validateCases+"Debes seleccionar una dificultad para el problema.\n"
            // }
            // if(problemInfo.description.trim().replace("\n","").length<8) {
            //     validateCases=validateCases+"Debes agregar una descripcion para el problema de al menos 8 caracteres.\n"
            // }
            // if(problemInfo.solution.trim().replace("\n","")===""){ 
            //     validateCases=validateCases+"Debes agregar una solucion para el problema.\n"
            // }
            // if(code.trim().replace("\n","")==="") {
            //     validateCases=validateCases+"Debes agregar un codigo solucion al problema.\n"
            // }
        }else if(activeStep===1){
            
            // if(
            //     problemInfo.templateCode.javaTemplate===undefined 
            //     || problemInfo.templateCode.javaTemplate.trim().replace("\n","")===""
            //     ){ 
            //     validateCases=validateCases+"Debes agregar un template al problema en codigo Java.\n"
            // }
            // if(
            //     problemInfo.templateCode.pythonTemplate===undefined 
            //     || problemInfo.templateCode.pythonTemplate.trim().replace("\n","")===""
            //     ){ 
            //     validateCases=validateCases+"Debes agregar un template al problema en codigo Python.\n"
            // }

        }
        if(validateCases.trim().replace("\n","")!=="") {alert(validateCases); return;}
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        console.log(problemInfo);
        console.log(javaTemplate);
        console.log(pythonTemplate)
        }
  };
  //funcion que elimina un inputOutput por su id
  const eliminarInputOutput= () =>{
      console.log("holamundo")
    // const nuevosinputOutputs=inputOutputs.filter(resp=> resp.id!==id);
    // setInputOutputs(inputOutputs);
  }
  const handleBackStepper = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
      console.log(activeStep);
  };
  const save =()=>{
      console.log("problema guardado");
      console.log(problemInfo)
  }
    return ( 
        <div className="ProblemFormScreenContainer">
            <StepperC
                id="StepperComponent"
                activeStep={activeStep} 
                setActiveStep={setActiveStep} 
                problemInfo={problemInfo}
                handleProblemInfo={handleProblemInfo}
                code={code}
                setCode={setCode}
                javaTemplate={javaTemplate}
                setJavaTemplate={setJavaTemplate}
                pythonTemplate={pythonTemplate}
                setPythonTemplate={setPythonTemplate}
                inputOutputs={inputOutputs}
                setInputOutputs={setInputOutputs}
                eliminarInputOutput={eliminarInputOutput}
            />
            <div id="buttonBox">
                {activeStep !== 0 ? 
                    <div id="BackButton__ProblemFormScreen">

                        <Button  
                            color="secondary" 
                            variant="contained" 
                            disabled={activeStep === 0} 
                            onClick={handleBackStepper} 
                            className="button">
                            Regresar
                        </Button> 
                    </div>
                    
                :null }
                {activeStep<3 ? 
                    <div id="NextButton__ProblemFormScreen">
                        <Button
                                variant="contained"
                                color="primary"
                                onClick={handleNextStepper}
                                className="button"
                                disabled={activeStep>2}
                                >
                                {activeStep > 1 ? 'Guardar' : 'Siguiente'}
                        </Button>
                    </div>
                :null }
            </div>
        </div>
        );
} 
export default ProblemFormScreen;


