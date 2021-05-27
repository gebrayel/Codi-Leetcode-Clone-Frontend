import React, { useEffect, useState } from "react";

import colors from "../../config/colors/colors";
import ProblemList from "../../components/ProblemList/ProblemList";
import problemAPI from "../../api/problems/problems";
import useQuery from "../../hooks/useQuery/useQuery";

const ProblemsScreen = () => {
    const query = useQuery();
    const [problems, setProblems] = useState([]);
    const user = JSON.parse(localStorage.getItem('user'));

    const spanishDifficulty = {
        easy: "Fácil",
        medium: "Intermedio",
        hard: "Difícil",
    };

    useEffect(() => {
        const difficulty = query.get("difficulty");
        const getProblems = async (difficulty, user) => {
            const probs = await problemAPI.getProblemsByDifficulty(difficulty, user);
            let arrayProbs = probs.map((prob, index) => {
                return { ...prob, 
                    color: index % 2 === 0 ? colors.evenRow : colors.oddRow,
                    difficulty: spanishDifficulty[prob.difficulty] 
                }
            })
            setProblems(arrayProbs);
        };
        getProblems(difficulty, user);
    }, []);

    return (
        <div className="ProblemScreenContainer">
            <div className="ProblemListContainer">
                <h1 className="ProblemScreenTitle"> Problemas </h1>
                <ProblemList rows={problems} />
            </div>
        </div>
    );
};

export default ProblemsScreen;
