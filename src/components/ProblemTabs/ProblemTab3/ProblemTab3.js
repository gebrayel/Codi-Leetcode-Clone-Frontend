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
export default function ProblemTab3({
                                    problemInfo, 
                                    handleProblemInfo,
                                    inputOutputs,
                                    setInputOutputs,
                                    eliminarInputOutput
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
            {inputOutputs.map(inputOutput=>(
                <InputOutput
                    key={inputOutput.id}
                    inputOutput={inputOutput}
                    eliminarInputOutput={eliminarInputOutput}
                />
            ))}
                
            </div>
          <Button 
                variant="contained" 
                className={classes.ButtonAdd__ProblemTab3}>
                Añadir<AddIcon className={classes.addIcon}/>
          </Button>
        </div>   
);}

const useStyles = makeStyles((theme) => ({
  root: {
    width:"100%",
  },
  addIcon:{
    marginLeft:"5%",
    marginBottom:"3%"
  },
  ButtonAdd__ProblemTab3:{
      marginTop:"5%"
  }
}));