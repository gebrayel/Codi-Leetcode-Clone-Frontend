import React, { Component, Fragment, useEffect, useState } from "react";

import ProblemList from "../../components/ProblemList/ProblemList";
import useQuery from "../../hooks/useQuery/useQuery";
import problemAPI from "../../api/problems/problems";

const ProblemsScreen = (
    {
        /*rows*/
    }
) => {
    const query = useQuery();
    const [problems, setProblems] = useState([]);

    const spanishDifficulty = {
        easy: "Fácil",
        medium: "Intermedio",
        hard: "Difícil",
    };

    function createData(id, problem_id, description, difficulty, solved) {
        difficulty = spanishDifficulty[difficulty];
        var color = "";
        if (id % 2 == 0) {
            color = "#7E84A7";
        } else {
            color = "#5E627D";
        }
        return { problem_id, description, difficulty, solved, color };
    }

    useEffect(() => {
        const difficulty = query.get("difficulty");
        const getProblems = async (difficulty) => {
            const probs = await problemAPI.getProblemsByDifficulty(difficulty);
            let arrayProbs = [];

            for (let i in probs) {
                arrayProbs.push(
                    createData(
                        i,
                        probs[i].problem_id,
                        probs[i].description,
                        probs[i].difficulty,
                        false
                    )
                );
            }
            console.log(probs);
            setProblems(arrayProbs);
        };
        getProblems(difficulty);
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
