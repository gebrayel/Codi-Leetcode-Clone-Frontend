import React, { useState, useEffect, useContext } from "react";
import Button from "@material-ui/core/Button";
import StepperC from "../../components/StepperC/StepperC";
import "../../styles/screens/ProblemFormScreen/ProblemFormScreen.scss";
import { useHistory } from "react-router-dom";

import Context from "../../helpers/context/context";
import cache from "../../helpers/cache/cache";
import k from "../../helpers/constants/constants";
import Modal from "../../components/Modal/Modal";
import net from "../../helpers/connection/connection";
import problemAPI from "../../api/problems/problems";
import RobotLoader from "../../components/RobotLoader/RobotLoader";
import valids from "../../helpers/validations/validations";
import useQuery from "../../hooks/useQuery/useQuery";

const problemInfoEmpty = {
    testCases: [],
    name: "",
    difficulty: "",
    description: "",
    solution: "",
    solutionCode: "",
    templates: [
        {
            language: "Java",
            code: "",
        },
        {
            language: "Python",
            code: "",
        },
    ],
};

const ProblemFormScreen = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [problemInfo, setProblemInfo] = useState(problemInfoEmpty);
    const [codeSolution, setCodeSolution] = useState("");
    const { isLoading, setIsLoading, connectionError, setConnectionError } = useContext(Context);
    const [errorModal, setErrorModal] = useState(false);
    const [mensaje, setMensaje] = useState("");
    const query = useQuery();
    const problemID = query.get("problemId");
    const history = useHistory();

    const [endModal, setEndModal] = useState(false);

    useEffect(() => {
        if (!problemID) {
            return cache.initializeFormValues(
                setActiveStep,
                setProblemInfo,
                setCodeSolution
            );
        }
        getProblem();
    }, []);

    const getProblem = async () => {
        setIsLoading(true);
        const response = await problemAPI.getProblemById(problemID);
        setIsLoading(false);

        if (response.status === 200) {
            setProblemInfo(response.data);
            setCodeSolution(response.data.solutionCode);
        } else {
            setConnectionError(true);
        }
    };

    const handleNextStepper = () => {
        switch (activeStep) {
            case 0:
                const validTab1 = valids.validateTab1(
                    problemInfo,
                    setProblemInfo,
                    codeSolution,
                    setActiveStep
                );

                if (validTab1) {
                    setMensaje(validTab1);
                    toggleErrorModal();
                }
                break;
            case 1:
                const validTab2 = valids.validateTab2(
                    problemInfo,
                    setActiveStep
                );

                if (validTab2) {
                    setMensaje(validTab2);
                    toggleErrorModal();
                }
                break;
            case 2:
                const validTab3 = valids.validateTab3(problemInfo, save);

                if (validTab3) {
                    setMensaje(validTab3);
                    toggleErrorModal();
                }
                break;
            default:
                console.log("Lmao");
                break;
        }
    };

    const handleBackStepper = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const save = async () => {
        setIsLoading(true);
        let res;
        if (!problemID) {
            res = await problemAPI.postProblem(problemInfo);
        } else {
            problemInfo.problem_id = parseInt(problemID);
            res = await problemAPI.updateProblem(problemInfo);
        }
        setIsLoading(false);
        if (res.status === 201 || res.status === 200) {
            setEndModal(true);
            cache.removeFormCacheItems(problemInfo);
            setActiveStep(0);
            setCodeSolution("");
            setProblemInfo(problemInfoEmpty);
        } else {
        }
    };

    const toggleErrorModal = () => {
        setErrorModal(!errorModal);
    };

    const toggleEndModal = () => {
        setEndModal(endModal);
        history.push("/difficulties");
    }

    const msgError = {
        title: "Error en el formulario",
        description: mensaje,
        closeText: "Cerrar",
    };

    return (
        <>
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
                    {isLoading ? (
                        <RobotLoader />
                    ) : (
                        <>
                            <StepperC
                                id="StepperComponent"
                                activeStep={activeStep}
                                setActiveStep={setActiveStep}
                                problemInfo={problemInfo}
                            />
                            <div id="buttonBox">
                                {activeStep !== 0 ? (
                                    <div
                                        id="BackButton__ProblemFormScreen"
                                        className="backButton"
                                    >
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
                                            {activeStep > 1
                                                ? "Guardar"
                                                : "Siguiente"}
                                        </Button>
                                    </div>
                                ) : null}
                            </div>
                        </>
                    )}
                </div>
            </Context.Provider>
            <Modal
                title={msgError.title}
                description={msgError.description}
                functionText={msgError.functionText}
                closeText={msgError.closeText}
                toggleModal={toggleErrorModal}
                open={errorModal}
                singleButton={true}
            />

            <Modal
                title={k.msgEndModal.title}
                description={k.msgEndModal.description}
                closeText={k.msgEndModal.closeText}
                toggleModal={toggleEndModal}
                open={endModal}
                singleButton={true}
            />

            <Modal
                title={k.msgConnectionError.title}
                description={k.msgConnectionError.description}
                closeText={k.msgConnectionError.closeText}
                toggleModal={() => net.goBack(history, setConnectionError)}
                open={connectionError}
                singleButton={true}
            />
        </>
    );
};
export default ProblemFormScreen;
