import React, { useContext, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import AppContext from "../../helpers/context/context";
import colors from "../../config/colors/colors";
import ProblemList from "../../components/ProblemList/ProblemList";
import problemAPI from "../../api/problems/problems";
import RobotLoader from "../../components/RobotLoader/RobotLoader";
import useQuery from "../../hooks/useQuery/useQuery";
import EditIcon from "@material-ui/icons/Edit";

const ProblemsScreen = () => {
  const classes = useStyles();
  const query = useQuery();
  const [problems, setProblems] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));
  const { isLoading, setIsLoading } = useContext(AppContext);
  const history = useHistory();
  const spanishDifficulty = {
    easy: "Fácil",
    medium: "Intermedio",
    hard: "Difícil",
  };

  useEffect(() => {
    const difficulty = query.get("difficulty");
    const getProblems = async (difficulty, user) => {
      setIsLoading(true);
      const probs = await problemAPI.getProblemsByDifficulty(difficulty, user);
      let arrayProbs = probs.map((prob, index) => {
        return {
          ...prob,
          color: index % 2 === 0 ? colors.evenRow : colors.oddRow,
          difficulty: spanishDifficulty[prob.difficulty],
          description: (
            <a
              className="ProblemLink"
              href={"/IDE?problemId=" + prob.problem_id}
            >
              {prob.name}
            </a>
          ),
          edit: (
            <a
              className="ProblemLink"
              href={"/ProblemForm?problemId=" + prob.problem_id}
            >
              <EditIcon />
            </a>
          ),
        };
      });
      setProblems(arrayProbs);
      setIsLoading(false);
    };
    getProblems(difficulty, user);
  }, []);
  return (
    <div className="ProblemScreenContainer">
      {isLoading ? (
        <RobotLoader />
      ) : (
        <div className="ProblemListContainer">
          <div>
            <div className="BoxTitle__ProblemScreen">
              <h1 className="ProblemScreenTitle"> Problemas </h1>
            </div>
            {user.is_admin ? (
              <div className="buttonBox__ProblemScreen">
                <Button
                  className={classes.buttonAll}
                  onClick={() => history.push("/problemForm")}
                  variant="contained"
                  color="primary"
                >
                  /*Crear Problema*/
                </Button>
              </div>
            ) : null}
          </div>
          <div className="ProblemListContainerBox">
            <ProblemList rows={problems} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProblemsScreen;

const useStyles = makeStyles((theme) => ({
  buttonAll: {
    background: "rgba(126, 132, 167, 0.63)",
    color: "#ECECEC",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "bold",
    borderRadius: 0,
    height: "60px",
    border: "1px solid rgba(99, 98, 98, 0.26)",
    boxSizing: "border-box",
    boxShadow: "5px 4px 4px rgba(0, 0, 0, 0.28)",
    borderRadius: "10px",
    fontSize: "100%",
    transition: "background 1s",
    transition: "color 1s",

    [theme.breakpoints.down("sm")]: {
      fontSize: "70%",
    },
    [theme.breakpoints.down("xs")]: {
      height: "50px",
      fontSize: "70%",
    },

    "&:hover": {
      transition: "background 1s",
      transition: "color 1s",
      background: "#FFFFFF",
      color: "#474747",
      cursor: "pointer",
    },
  },
}));
