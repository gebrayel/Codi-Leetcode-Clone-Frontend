import React, { useContext, useEffect, useState } from "react";

import AppContext from "../../helpers/context/context";
import colors from "../../config/colors/colors";
import ProblemList from "../../components/ProblemList/ProblemList";
import problemAPI from "../../api/problems/problems";
import RobotLoader from "../../components/RobotLoader/RobotLoader";
import useQuery from "../../hooks/useQuery/useQuery";
import EditIcon from "@material-ui/icons/Edit";

const ProblemsScreen = () => {
  const query = useQuery();
  const [problems, setProblems] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));
  const { isLoading, setIsLoading } = useContext(AppContext);

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
          <h1 className="ProblemScreenTitle"> Problemas </h1>
          <ProblemList rows={problems} />
        </div>
      )}
    </div>
  );
};

export default ProblemsScreen;
