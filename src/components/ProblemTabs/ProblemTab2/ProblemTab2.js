import React,{useState} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import colors from "../../../config/colors/colors";
import "../../../styles/screens/ProblemFormScreen/ProblemTab1.scss";
import {  TextField,
          OutlinedInput,
          FormControl,
          InputLabel,
          Input,
          FormHelperText,
          TextareaAutosize,
          MenuItem,
          Select } from '@material-ui/core';
import CodeEditor from "../../CodeEditor/CodeEditor";
import { Height } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    width:"100%",
    color:"white"
    
  },
  textField: {
    // marginLeft: theme.spacing(20),
    marginRight: theme.spacing(5),
    
    fontFamily:"arial",
    fontSize:"18px",
    color:"white",
    // width:"400px",
  },
  TextareaAutosize:{
    
  },
  TextareaAutosizeLg:{
    // 
    // width:"80vh",
    
  }
}));

export default function ProblemTab1({problemInfo,handleProblemInfo,code,setCode}) {
  const classes = useStyles();
 const difficulties = [
  {
    value: 'easy',
    label: 'Facil',
  },
  {
    value: 'medium',
    label: 'Intermedio',
  },
  {
    value: 'hard',
    label: 'Dificil',
  }
];
  const [open, setOpen] = useState(false);
  

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  
  const onChange = e =>{
    if(e.target==undefined) return
    handleProblemInfo({
        ...problemInfo,
        [e.target.name]:e.target.value
    })
  }

  return (
        <div className={classes.root}>
      <div>
        <div id="TextFieldBox">
          
            <TextField
              label="Titulo"
              id="TitleField"
              className={classes.textField}
              name="name"
              onChange={onChange}
              value={problemInfo.name}
              
            />
            
            <TextField
              
              id="SelectField"
              select
              label="Dificultad"
              className={classes.textField}
              onChange={onChange}
              name="difficulty"
              value={problemInfo.difficulty}
            >
              {difficulties.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            
        </div>
        
        <div id="TextAreaLgBox">
            
          <TextareaAutosize
            style={{width:"85%"}}
            id="TextAreaLg"
            className={classes.TextareaAutosizeLg}
            aria-label="Problem Description" 
            rowsMin={8} 
            placeholder="Descripcion del Problema" 
            name="description"
            onChange={onChange}
            value={problemInfo.description}
            
          />
        </div>
        
        <TextareaAutosize
          style={{height:"291px"}}
          className="TextArea"
          aria-label="Problem Solution" 
          rowsMin={8} 
          placeholder="Solucion del Problema" 
          helperText="Solucion"
          name="solution"
          onChange={onChange}
          value={problemInfo.solution}
          autoComplete="false"
        />

        <div id="CodeEditorBox">
            <CodeEditor
              id="CodeEditor"
              className="CodeEditorBox"
              name='solutionCode'
              // python text/x-java
              value={code}
              language="python"
              onChange={setCode}
            />
        </div>

      </div>
    </div>
    

  );
}