import React, {useState,useEffect} from 'react';
import Button from '@material-ui/core/Button';
import StepperC from "../../components/StepperC/StepperC";
import "../../styles/screens/ProblemFormScreen/ProblemFormScreen.scss";

const ProblemFormScreen = () => {
    //Recuperar el paso en el Step del problema donde se registro el ultimo cambio del localStorage
    let initialActiveStep=JSON.parse(localStorage.getItem('activeStep'));
    if(!initialActiveStep){
        initialActiveStep=0;
    }
    
    //Recuperar la informacion del problema del localStorage
    let initialProblemInfo=JSON.parse(localStorage.getItem('problemInfo'));
    if(!initialProblemInfo){
        initialProblemInfo={
        name:'',
        difficulty:'',
        description:'',
        solution:'',
        solutionCode:{},
        language:{},
        templateCode:{}

    };
    }

    //Recuperar el java template del localStorage
    let initialJavaTemplate=JSON.parse(localStorage.getItem('javaTemplate'));
    if(!initialJavaTemplate){
        initialJavaTemplate="";
    }

    //Recuperar el python template del localStorage
    let initialPythonTemplate=JSON.parse(localStorage.getItem('pythonTemplate'));
    if(!initialPythonTemplate){
        initialPythonTemplate="";
    }
    //Recuperar el codigo solucion del localStorage
    let initialCode=JSON.parse(localStorage.getItem('code'));
    if(!initialCode){
        initialCode="";
    }

    //Recuperar los casos de prueba del localStorage
    let inputOutputsIniciales=JSON.parse(localStorage.getItem('inputOutputs'));
    if(!inputOutputsIniciales){
        inputOutputsIniciales=[];
    }

    //Controlador de cada Step del StepperC component
    const [activeStep, setActiveStep] = useState(initialActiveStep);

    //Codigo solucion del problema
    const [code,setCode]=useState(initialCode);
    
    //Codigo del template de java del problema
    const [javaTemplate,setJavaTemplate]=useState(initialJavaTemplate);
    
    //Codigo del template de python del problema
    const [pythonTemplate,setPythonTemplate]=useState(initialPythonTemplate);
    
    //Informacion basica inicial del problema
    const [problemInfo,handleProblemInfo]=useState(initialProblemInfo)
    
    //arreglo de casos de prueba del problema
    const [inputOutputs,setInputOutputs]=useState(inputOutputsIniciales);
    
    useEffect(() => {
        
        

        //Agregar al localStorage la informacion del problema
        let initialActiveStep=JSON.parse(localStorage.getItem('activeStep'));
        if(initialActiveStep || initialActiveStep===0){
            localStorage.setItem('activeStep',JSON.stringify(activeStep));

        }else{
            localStorage.setItem('activeStep',JSON.stringify(0));
        }

        //Agregar al localStorage la informacion del problema
        let initialProblemInfo=JSON.parse(localStorage.getItem('problemInfo'));
        if(initialProblemInfo){
            localStorage.setItem('problemInfo',JSON.stringify(problemInfo));
        
        }else{
            localStorage.setItem('problemInfo',JSON.stringify({}));
        }

        //Agregar al localStorage la informacion del java template del problema
        let initialJavaTemplate=JSON.parse(localStorage.getItem('javaTemplate'));
        if(initialJavaTemplate || initialJavaTemplate===""){
            localStorage.setItem('javaTemplate',JSON.stringify(javaTemplate));
        
        }else{
            localStorage.setItem('javaTemplate',JSON.stringify(""));
        }

        //Agregar al localStorage la informacion del python template del problema
        let initialPythonTemplate=JSON.parse(localStorage.getItem('pythonTemplate'));
        if(initialPythonTemplate || initialPythonTemplate===""){
            console.log(pythonTemplate)
            localStorage.setItem('pythonTemplate',JSON.stringify(pythonTemplate));
            
        }else{
            localStorage.setItem('pythonTemplate',JSON.stringify(""));
        }

        //Agregar al localStorage el codigo solucion del problema
        let initialCode=JSON.parse(localStorage.getItem('code'));
        if(initialCode || initialCode===""){
            localStorage.setItem('code',JSON.stringify(code));
        
        }else{
            localStorage.setItem('code',JSON.stringify(""));
        }

        //Agregar al localStorage los data testing
        let inputOutputsIniciales=JSON.parse(localStorage.getItem('inputOutputs'));
        
        if(inputOutputsIniciales){
            localStorage.setItem('inputOutputs',JSON.stringify(inputOutputs));
        
        }else{
            localStorage.setItem('inputOutputs',JSON.stringify([]));
        }

    }, [activeStep,problemInfo,code,javaTemplate,pythonTemplate,inputOutputs])
    
    
    const handleNextStepper = () => {
        let validateCases=""
        if(activeStep===2){
            if(inputOutputs.length===0){
                validateCases=validateCases+"Debes agregar al menos un caso de prueba para el problema.\n"
            }
            if(validateCases.trim().replace("\n","")!=="") {alert(validateCases); return;}
            save();
        }else{
          
            if(activeStep===0){
                if(problemInfo.name===undefined || problemInfo.name.trim().replace("\n","").length<3) {
                    validateCases=validateCases+"El titulo del problema debe tener al menos 3 caracteres.\n"
                }
                if(problemInfo.difficulty===undefined || problemInfo.difficulty.trim().replace("\n","")===""){ 
                    validateCases=validateCases+"Debes seleccionar una dificultad para el problema.\n"
                }
                if(problemInfo.description===undefined || problemInfo.description.trim().replace("\n","").length<8) {
                    validateCases=validateCases+"Debes agregar una descripcion para el problema de al menos 8 caracteres.\n"
                }
                if(problemInfo.solution===undefined || problemInfo.solution.trim().replace("\n","")===""){ 
                    validateCases=validateCases+"Debes agregar una solucion para el problema.\n"
                }
                if(code.trim().replace("\n","")==="") {
                    validateCases=validateCases+"Debes agregar un codigo solucion al problema.\n"
                }
            }else if(activeStep===1){
                
                if( 
                    problemInfo.templateCode===undefined 
                    || problemInfo.templateCode.javaTemplate===undefined 
                    || problemInfo.templateCode.javaTemplate.trim().replace("\n","")===""
                    ){ 
                    validateCases=validateCases+"Debes agregar un template al problema en codigo Java.\n"
                }
                if(
                    problemInfo.templateCode===undefined
                    ||problemInfo.templateCode.pythonTemplate===undefined 
                    || problemInfo.templateCode.pythonTemplate.trim().replace("\n","")===""
                    ){ 
                    validateCases=validateCases+"Debes agregar un template al problema en codigo Python.\n"
                }

            }
            if(validateCases.trim().replace("\n","")!=="") {alert(validateCases); return;}
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
            console.log(problemInfo);
            console.log(javaTemplate);
            console.log(pythonTemplate);
        }
  };
  
  //funcion que elimina un inputOutput por su id
  const eliminarInputOutput= (id) =>{
    const nuevosinputOutputs=inputOutputs.filter(resp=> resp.id!==id);
    setInputOutputs(nuevosinputOutputs);
  }
  
  //funcion que tome los Inputs y Outputs actuales y agregue la nueva
  const agregarInputOutput = inputOutput => {
    setInputOutputs([
      ...inputOutputs,
      inputOutput
    ]);
  }

  const handleBackStepper = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
      console.log(activeStep);
  };
  
  const save =()=>{
    //Reiniciar todos los States para que no queden en el local Storage
    // setActiveStep(0)
    setCode("")
    setJavaTemplate("")
    setPythonTemplate("")
    handleProblemInfo({})
    setInputOutputs([])
    console.log("problema guardado");
    console.log(javaTemplate);
    console.log(pythonTemplate);
    console.log(inputOutputs);
    console.log(problemInfo);
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
                agregarInputOutput={agregarInputOutput}
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


