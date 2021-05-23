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

    useEffect(() => {
        const difficulty = query.get("difficulty");
        const getProblems = async (difficulty) => {
            const probs = await problemAPI.getProblemsByDifficulty(difficulty);
            setProblems(probs);
        }
        getProblems(difficulty);
    }, []);

    
    
    function createData(Numero, Title, Difficulty, Solved) {
        var color = "";
        if (Numero % 2 == 0) {
            var color = "#9399BC";
        } else {
            var color = "#7E84A7";
        }
        return { Numero, Title, Difficulty, Solved, color };
    }

    const rows = [
        createData(1, "Fibonacci", "Intermedio", "1"),
        createData(2, "Numeros primos", "Facil", "0"),
        createData(3, "Dijkstra", "Dificil", "1"),
        createData(4, "DFS", "Intermedio", "0"),
        createData(5, "Binary Search", "Intermedio", "1"),
        createData(6, "Palindromo", "Facil", "0"),
        createData(7, "Numeros vampiros", "Intermedio", "1"),
        createData(8, "Numeros oblongo", "Facil", "0"),
        createData(9, "Ordenar vector", "Facil", "1"),
        createData(10, "Unir dos vectores", "Facil", "0"),
        createData(7, "Numeros vampiros", "Intermedio", "1"),
        createData(8, "Numeros oblongo", "Facil", "0"),
        createData(9, "Ordenar vector", "Facil", "1"),
        createData(10, "Unir dos vectores", "Facil", "0"),
    ];

    return (
        <div className="ProblemScreenContainer">
            <div className="ProblemListContainer">
                <h1 className="ProblemScreenTitle"> Problemas </h1>
                <ProblemList rows={rows} />
            </div>
        </div>
    );
};

export default ProblemsScreen;
