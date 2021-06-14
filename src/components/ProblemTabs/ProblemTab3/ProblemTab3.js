import React, {useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {  TextField,
          MenuItem } from '@material-ui/core';
import CodeEditor from "../../CodeEditor/CodeEditor";
import InputLabel from '@material-ui/core/InputLabel';
import colors from "../../../config/colors/colors";
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import "../../../styles/screens/ProblemFormScreen/ProblemTabs/ProblemTab3/ProblemTab3.scss";
import InputOutput from "../../InputOutput/InputOutput";
import InputOutputForm from "../../InputOutputForm/InputOutputForm";

export default function ProblemTab3({
                                    problemInfo, 
                                    handleProblemInfo,
                                    inputOutputs,
                                    setInputOutputs,
                                    eliminarInputOutput,
                                    agregarInputOutput
                                      }) {
  const classes = useStyles();
  
  const onChange = e => {
    if(e.target===undefined) return
    
      handleProblemInfo({
        ...problemInfo,
        [e.target.name]:e.target.value
      })
    }
  
  return (
        <div className={classes.root}>
            <div className="InputOutputsRegisteredBox">
              {
                inputOutputs.length===0 
                ? null
                : <h2 >Casos de Prueba Registrados:</h2>
              }
              
            {inputOutputs.map(inputOutput=>(
                <InputOutput
                    key={inputOutput.id}
                    inputOutput={inputOutput}
                    eliminarInputOutput={eliminarInputOutput}
                />
            ))}
                
            </div>
            <InputOutputForm 
                          inputOutputs={inputOutputs} 
                          agregarInputOutput={agregarInputOutput}/>
          
        </div>   
);}

const useStyles = makeStyles((theme) => ({
  root: {
    width:"100%",
    color:colors.white
  },
  
}));