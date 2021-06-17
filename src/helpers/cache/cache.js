const removeFormCacheItems = (problemInfo) => {
    const keys = [
      "problemInfo",
      "code",
      "activeStep",
    ];
    problemInfo.templates.forEach(temp => {
      keys.push(temp.language);
    });

    keys.forEach(key => {
      localStorage.removeItem(key);
    })
}

const initializeFormValues = (
    setActiveStep,
    setProblemInfo,
    setCodeSolution
) => {
    const initialActiveStep = JSON.parse(localStorage.getItem("activeStep"));
    if (initialActiveStep) setActiveStep(initialActiveStep)
    
    const initialProblemInfo = JSON.parse(localStorage.getItem("problemInfo"));
    if (initialProblemInfo) setProblemInfo(initialProblemInfo);
    

    const initialCodeSolution = localStorage.getItem("code");
    if (initialCodeSolution) setCodeSolution(initialCodeSolution);
}

export default {
    removeFormCacheItems,
    initializeFormValues
}