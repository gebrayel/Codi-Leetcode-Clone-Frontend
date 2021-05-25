import React, { Component, Fragment, useEffect, useState } from "react";

import ProblemList from "../../components/problemList";
import useQuery from "../../hooks/useQuery/useQuery";
import problemAPI from "../../api/problems/problems";

const ProblemsScreen = (
    {
        /*rows*/
    }
) => {
    const query = useQuery();
    const [problems, setProblems] = useState([]);

    function createData(ID, Numero, Title, Difficulty, Solved) {
        var color = "";
        if (ID % 2 == 0) {
            var color = "#9399BC";
        } else {
            var color = "#7E84A7";
        }
        return { Numero, Title, Difficulty, Solved, color };
    }

    useEffect(() => {
        const difficulty = query.get("difficulty");
        const getProblems = async (difficulty) => {
            const probs = await problemAPI.getProblemsByDifficulty(difficulty);

            setProblems([probs]);
            console.log(probs);
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
