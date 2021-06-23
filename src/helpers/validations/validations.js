const validateTab1 = (
    problemInfo,
    setProblemInfo,
    codeSolution,
    setActiveStep
) => {
    let validateCases = "";
    const { name, difficulty, description, solution } = problemInfo;

    if (name.length < 3) {
        validateCases +=
            "El titulo del problema debe tener al menos 3 caracteres.\n";
    }
    if (difficulty === "") {
        validateCases += "Debes seleccionar una dificultad para el problema.\n";
    }
    if (description === "") {
        validateCases +=
            "Debes agregar una descripción para el problema de al menos 8 caracteres.\n";
    }
    if (solution === "") {
        validateCases += "Debes agregar una solución para el problema.\n";
    }
    if (codeSolution === "") {
        validateCases += "Debes agregar un codigo solucion al problema.\n";
    }

    if (validateCases !== "") {
        return validateCases;
    }

    const currentProblemInfo = {
        ...problemInfo,
        solutionCode: codeSolution,
    };
    setProblemInfo(currentProblemInfo);

    localStorage.setItem("problemInfo", JSON.stringify(problemInfo));
    localStorage.setItem("code", codeSolution);
    localStorage.setItem("activeStep", JSON.stringify(0));
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
};

const validateTab2 = (problemInfo, setActiveStep) => {
    let validateCases = "";
    const { templates } = problemInfo;

    templates.forEach((temp) => {
        if (temp.code === "") {
            validateCases +=
                "Debes agregar un template al problema en codigo " +
                temp.language +
                ".\n";
        }
    });
    if (validateCases !== "") {
        return validateCases;
    }

    localStorage.setItem("problemInfo", JSON.stringify(problemInfo));
    localStorage.setItem("activeStep", JSON.stringify(1));
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
};

const validateTab3 = (problemInfo, save) => {
    let validateCases = "";
    if (problemInfo.testCases.length === 0) {
        validateCases +=
            "Debes agregar al menos un caso de prueba para el problema.\n";
    }
    if (validateCases !== "") {
        return validateCases;
    }
    save();
};

export default {
    validateTab1,
    validateTab2,
    validateTab3,
};
