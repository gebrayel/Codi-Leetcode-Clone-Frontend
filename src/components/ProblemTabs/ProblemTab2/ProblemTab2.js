import React, { useContext, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, MenuItem } from "@material-ui/core";

import "../../../styles/screens/ProblemFormScreen/ProblemTabs/ProblemTab2/ProblemTab2.scss";
import Button from "@material-ui/core/Button";
import Context from "../../../helpers/context/context";
import CodeEditor from "../../CodeEditor/CodeEditor";
import colors from "../../../config/colors/colors";
import InputLabel from "@material-ui/core/InputLabel";
import k from "../../../helpers/constants/constants";

export default function ProblemTab2() {
  const classes = useStyles();
  const { problemInfo, setProblemInfo } = useContext(Context);

  const [currentLanguage, setCurrentLanguage] = useState("python");
  const [currentCode, setCurrentCode] = useState("");

  useEffect(() => {
    let lang = currentLanguage;
    if (lang === "text/x-java") {
      lang = "java"
    }
    const savedCode = localStorage.getItem(lang);
    if (savedCode) {
      return setCurrentCode(savedCode);
    }

    const templates = problemInfo.templates;
    for (let i = 0; i < templates.length; i++) {
      const curr = templates[i];
      if (curr.language.toLowerCase() === lang) {
        setCurrentCode(curr.code);
        break;
      }
    }
  }, [currentLanguage]);

  const onChange = (e) => {
    if (!e.target) return;
    setCurrentLanguage(e.target.value);
  };
  
  const saveTemplateCode = (actualLanguage) => {
    if (actualLanguage === "text/x-java") {
      actualLanguage = "java"
    }
    const templates = problemInfo.templates;
    for (let i = 0; i < templates.length; i++) {
      const curr = templates[i];
      if (curr.language.toLowerCase() === actualLanguage) {
        templates[i].code = currentCode;
        setProblemInfo({
          ...problemInfo,
          templates: templates,
        });
        localStorage.setItem(actualLanguage, currentCode);
        break;
      }
    }
  };

  return (
    <div className={classes.root}>
      <div id="TextFieldBox__Tab2">
        <TextField
          id="SelectField__Tab2"
          select
          label="Lenguaje"
          className={`
            ${classes.whiteTheme} 
            ${classes.textField}
            ${classes.LabelLanguageForm}
          `}
          onChange={onChange}
          name="language"
          value={currentLanguage}
        >
          {k.languagesDropdown.map((option) => (
            <MenuItem
              className={classes.whiteThemeIconSelect}
              key={option.value}
              value={option.value}
            >
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
      <div id="CodeEditorBox__Tab2">
        <InputLabel
          id="TemplateLabel__Tab2"
          style={{
            color: "white",
            marginBottom: "1rem",
            fontWeight: "bold",
          }}
          htmlFor="template"
        >
          Template
        </InputLabel>
        <CodeEditor
          id="CodeEditor__Tab2"
          className="CodeEditorBox"
          name="solutionCode"
          value={
            // actualLanguage === "text/x-java" ? javaTemplate : pythonTemplate
            currentCode
          }
          language={currentLanguage}
          onChange={
            // actualLanguage === "text/x-java"
            //   ? setJavaTemplate
            //   : setPythonTemplate
            setCurrentCode
          }
        />
        <div id="ButtonBoxCodeEditor__Tab2">
          <Button
            variant="contained"
            color="primary"
            onClick={() => saveTemplateCode(currentLanguage)}
            disabled={
              // Validacion de guardado en el Code Editor
              // actualLanguage.trim().replace("\n", "") === "" ||
              // (actualLanguage.trim().replace("\n", "") === "text/x-java" &&
              //   javaTemplate.trim().replace("\n", "") === "") ||
              // (actualLanguage.trim().replace("\n", "") === "python" &&
              //   pythonTemplate.trim().replace("\n", "") === "")
              currentCode === ""
            }
          >
            Guardar template
          </Button>
        </div>
      </div>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    color: "white",
  },
  textField: {
    color: "white",
  },
  LabelLanguageForm: {
    "& .MuiFormLabel-root": {
      fontWeight: "bold",
      "@media (min-width:320px) and (max-width:426px)": {
        marginTop: "7%",
      },
      "@media (min-width:426px) and (max-width:768px)": {
        marginTop: "0%",
      },
      "@media (min-width: 768px) ": {
        marginTop: "6%",
      },
    },
  },
  whiteTheme: {
    "& .MuiSelect-icon": {
      color: "white",
      height: "80%",
    },
    "& .MuiInputLabel-formControl": {
      color: "white",
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
