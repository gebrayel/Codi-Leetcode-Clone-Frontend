import React, { Component,Fragment,useState } from 'react'

import ProblemList from '../../components/problemList';


const ProblemsScreen = () => {
    
    function createData( Numero, Title, Difficulty, Solved) {
        var color='';
        if (Numero%2==0){
            var color="#9399BC"
        }else{
            var color="#7E84A7"
        }
        return { Numero, Title, Difficulty, Solved,color };
        }

    const rows = [
    createData(1, 'Fibonacci', 'Intermedio', '1'),
    createData(2, 'Numeros primos', 'Facil', '0'),
    createData(3, 'Dijkstra', 'Dificil', '1'),
    createData(4, 'DFS', 'Intermedio', '0'),
    createData(5, 'Binary Search', 'Intermedio', '1'),
    createData(6, 'Palindromo', 'Facil', '0'),
    createData(7, 'Numeros vampiros', 'Intermedio', '1'),
    createData(8, 'Numeros oblongo', 'Facil', '0'),
    createData(9, 'Ordenar vector', 'Facil', '1'),
    createData(10, 'Unir dos vectores', 'Facil', '0')
    ];
    const title='Problemas'
    
    return ( 
<div>

        <ProblemList title={title} rows={rows}/>

</div>
        

     );
}
 
export default ProblemsScreen;