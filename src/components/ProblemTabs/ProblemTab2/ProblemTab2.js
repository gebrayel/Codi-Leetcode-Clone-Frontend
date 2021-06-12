import React, {useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import "../../../styles/screens/ProblemFormScreen/ProblemTabs/ProblemTab2/ProblemTab2.scss";
import {  TextField,
          MenuItem } from '@material-ui/core';
import CodeEditor from "../../CodeEditor/CodeEditor";
import InputLabel from '@material-ui/core/InputLabel';
import colors from "../../../config/colors/colors";
import Button from '@material-ui/core/Button';

export default function ProblemTab2({
                                      problemInfo,
                                      handleProblemInfo,
                                      javaTemplate,
                                      setJavaTemplate,
                                      pythonTemplate,
                                      setPythonTemplate}) {
  const classes = useStyles();
  // languages: python text/x-java
  var languageCode="text/x-java"
  const languages = [
    {
      value: 'text/x-java',
      label: 'Java',
    },
    {
      value: 'python',
      label: 'Python',
    },
  ];
  
  const [actualLanguage,setActualLanguage]=useState("python");
  
  const onChange = e => {
    if(e.target==undefined) return
    if(e.target.name==="language"){
      setActualLanguage(e.target.value);
      var problemLanguage=""
      if(actualLanguage==="text/x-java"){ 
        problemLanguage="java"
        handleProblemInfo({
        ...problemInfo,
        [e.target.name]:{
          language:{ 
            ...actualLanguage,
            [problemLanguage]:e.target.value
          }
        }
      })
      }else{
        problemLanguage="python"
        handleProblemInfo({
          ...problemInfo,
          [e.target.name]:{
            language:{ 
            ...actualLanguage,
            [problemLanguage]:e.target.value
            }
          }
        })
      }
    }else{
      handleProblemInfo({
        ...problemInfo,
        [e.target.name]:e.target.value
      })
    }
  }
  const saveTemplateCode = actualLanguage =>{
    if(actualLanguage==="python"){
      problemInfo.templateCode={...problemInfo.templateCode, pythonTemplate:pythonTemplate}
    }
    else problemInfo.templateCode={...problemInfo.templateCode,javaTemplate:javaTemplate}
  } 
 
  return (
        <div className={classes.root}>
          <div id="TextFieldBox__Tab2" >
                <TextField
                  id="SelectField__Tab2"
                  select
                  label="Lenguaje"
                  className={`${classes.whiteTheme} ${classes.textField}`}
                  onChange={onChange}
                  name="language"
                  value={actualLanguage}
                  >
                  {languages.map((option) => (
                    <MenuItem className={classes.whiteThemeIconSelect} key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
          </div>
          <div id="CodeEditorBox__Tab2">
            <InputLabel id="TemplateLabel__Tab2" style={{color:"white",marginBottom:"1rem"}} htmlFor="template">Template</InputLabel>
            <CodeEditor
              id="CodeEditor__Tab2"
              className="CodeEditorBox"
              name='solutionCode'
              value={actualLanguage==="text/x-java" ? javaTemplate : pythonTemplate}
              language={actualLanguage}
              onChange={actualLanguage==="text/x-java" ? setJavaTemplate : setPythonTemplate }
            />
            <div id="ButtonBoxCodeEditor__Tab2">
              <Button
                      variant="contained"
                      color="primary"
                      onClick={()=>saveTemplateCode(actualLanguage)}
                      disabled={
                        // Validacion de guardado en el Code Editor
                        actualLanguage.trim().replace("\n","")===""
                        || (
                            actualLanguage.trim().replace("\n","")==="text/x-java" 
                            && javaTemplate.trim().replace("\n","")===""
                            )
                        ||
                        (
                          actualLanguage.trim().replace("\n","")==="python" 
                          && pythonTemplate.trim().replace("\n","")===""
                        )
                        }
                      >
                      Guardar template
              </Button>
            </div>
          </div>
        </div>   
);}

const useStyles = makeStyles((theme) => ({
  root: {
    width:"100%",
    color:"white"
    
  },
  textField: {
    color:"white",
  },
  whiteTheme:{

  "& .MuiSelect-icon":{
    color:"white"
    },
  "& .MuiInputLabel-formControl":{
      color:"white"
    },
    "& .MuiInputBase-root ": {
      color: colors.white,
      
    },
    "& .MuiInputBase-input .MuiInput-input": {
      color: colors.white,
    },
    "& .MuiInput-underline:before": {
      borderColor: colors.white,
      borderWidth: "0.2rem",
      borderBottom: "0.2rem solid white",
    },
    "& .MuiInput-underline:after": {
      borderColor: colors.white,
      borderWidth: "0.2rem",
      borderBottom: "0.2rem solid white",
    },
  },  
}));
