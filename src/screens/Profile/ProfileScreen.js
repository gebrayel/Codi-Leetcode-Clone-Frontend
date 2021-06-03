import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Chart from "../../components/Chart/Chart";
import user from "../../api/user/user";
import AppContext from "../../helpers/context/context";
import IconButton from "@material-ui/core/IconButton";
import EditTwoToneIcon from "@material-ui/icons/EditTwoTone";
import CancelOutlinedIcon from "@material-ui/icons/CancelOutlined";
import DoneOutlineOutlinedIcon from "@material-ui/icons/DoneOutlineOutlined";
import TextField from "@material-ui/core/TextField";

import colors from "../../config/colors/colors";

export default function ProfileScreen({ x, ...props }) {
  const classes = useStyles(props);
  let locvalue = localStorage.getItem("user");
  locvalue = JSON.parse(locvalue);
  let [text, setText] = useState({
    value: locvalue["name"],
    editMode: false,
    modif: "",
  });
  const userC = useContext(AppContext);
  let problems = [
    { difficulty: "easy", solved: 2, total: 2 },

    { difficulty: "medium", solved: 2, total: 2 },

    { difficulty: "hard", solved: 2, total: 2 },
  ];
  let difficulties = [];
  let solved = [];
  let total = [];

  problems.map((val) => {
    difficulties.push(val.difficulty);
    solved.push(val.solved);
    total.push(val.total);
  });

  let intentos = 0;
  intentos = 75.4;

  let languages = [
    { language: "Java", count: 5 },

    { language: "Python", count: 5 },
  ];
  let language = [];
  let count = [];

  languages.map((lan) => {
    language.push(lan.language);
    count.push(lan.count);
  });

  const textEdition = () => {
    return (
      <div className={classes.textButtom}>
        <TextField
          id="text"
          className={classes.whiteTheme}
          defaultValue={text.value}
        />

        <IconButton
          onClick={() => {
            setText({ ...text, editMode: !text.editMode, modif: "" });
          }}
        >
          <CancelOutlinedIcon style={{ fontSize: "2rem", color: "#E75656" }} />
        </IconButton>
        <IconButton
          onClick={() => {
            try {
              let textModified = document.getElementById("text").value;
              user.putUser(userC.user, userC.setUser, textModified).then(() => {
                setText({
                  ...text,
                  modif: "",
                  value: textModified,
                  editMode: false,
                });
                locvalue.name = textModified;
                localStorage.setItem("user", JSON.stringify(locvalue));
              });
            } catch (error) {
              setText({ ...text, editMode: !text.editMode, modif: "" });
            }
          }}
        >
          <DoneOutlineOutlinedIcon
            style={{ fontSize: "2rem", color: "#84DB65" }}
          />
        </IconButton>
      </div>
    );
  };
  const textView = () => {
    return (
      <div className={classes.textButtom}>
        <div className={classes.textname}>{text.value}</div>
        <IconButton
          onClick={() => {
            setText({ ...text, editMode: !text.editMode });
          }}
        >
          <EditTwoToneIcon style={{ fontSize: "2rem", color: "#869BFF" }} />
        </IconButton>
      </div>
    );
  };
  return (
    <>
      <div style={{ marginTop: "5rem" }} className={classes.header}>
        <div className={classes.box}>
          <img
            src={locvalue["pic_url"]}
            alt="avatar"
            className={classes.image}
          />
          {text.editMode ? textEdition() : textView()}
        </div>
        <div className={classes.divider}>
          <div className={classes.flexSpace}>
            <div className={classes.charttext}>Problemas</div>
            <div className={classes.doughnut_container}>
              <Chart
                labels={difficulties}
                data={solved}
                colors={["#FFCD56", "#FF9F40", "#36A2EB"]}
                font_color="white"
                type="Doughnut"
                etiquetas={false}
              />
            </div>
          </div>
          <div className={classes.flexSpace}>
            <div className={classes.charttext}>Intentos</div>
            <div className={classes.doughnut_container}>
              <Chart
                labels={["% Exito", "% Fracaso"]}
                data={[intentos, 100 - intentos]}
                colors={["#36A2EB", "#E75656"]}
                font_color="white"
                type="Doughnut"
                etiquetas={false}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={classes.secondRow}>
        <div className={classes.flexSpace2}>
          <div className={classes.charttext}>Lenguajes mas usados</div>
          <div className={classes.doughnut_container2}>
            <Chart
              labels={language}
              data={count}
              colors={["#36A2EB", "#E75656"]}
              font_color="white"
              type="Bar"
              etiquetas={false}
            />
          </div>
        </div>
      </div>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  doughnut_container: {
    margin: 0,
    // marginTop: "10vh",
    maxHeight: 300,
    width: 300,
    "@media (max-width: 550px)": {
      maxHeight: 200,
      width: 250,
    },
    "@media (max-width: 425px)": {
      maxHeight: 150,
      width: 150,
    },
  },
  doughnut_container2: {
    margin: 0,
    // marginTop: "10vh",
    maxHeight: 400,
    width: 500,
    "@media (max-width: 768px)": {
      maxHeight: 300,
      width: 350,
    },
    "@media (max-width: 550px)": {
      maxHeight: 200,
      width: 250,
    },
    "@media (max-width: 425px)": {
      maxHeight: 150,
      width: 150,
    },
  },
  header: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
  },
  secondRow: {
    "@media (max-width: 768px)": {
      display: "flex",
      justifyContent: "space-around",
      flexWrap: "wrap",
    },
  },
  divider: {},
  flexSpace: {
    padding: 10,
    backgroundColor: "#595959",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    maxHeight: 150,
    maxWidth: 500,
    borderRadius: 15,
    borderColor: "#B6B6B6",
    borderWidth: 10,
    marginBottom: 20,
    "@media (max-width: 550px)": {
      maxHeight: 150,
      maxWidth: 400,
    },
    "@media (max-width: 425px)": {
      maxWidth: 250,
    },
  },
  flexSpace2: {
    padding: 10,
    backgroundColor: "#595959",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    maxHeight: 250,
    maxWidth: 700,
    borderRadius: 15,
    borderColor: "#B6B6B6",
    borderWidth: 10,
    marginBottom: 20,
    marginLeft: "5rem",
    marginTop: "1rem",
    "@media (max-width: 768px)": {
      margin: 5,
      maxHeight: 150,
      maxWidth: 500,
    },
    "@media (max-width: 550px)": {
      margin: 5,
      maxHeight: 150,
      maxWidth: 400,
    },
    "@media (max-width: 425px)": {
      maxWidth: 300,
      padding: "10px",
      margin: 5,
    },
  },
  charttext: {
    fontSize: "1.5rem",
    color: colors.white,
    marginRight: "4rem",
    paddingLeft: "2rem",
    "@media (max-width: 425px)": {
      fontSize: "0.75rem",
      marginRight: "2rem",
    },
  },
  image: {
    width: "13rem",
    height: "13rem",
    borderRadius: "50%",
    "@media (max-width: 425px)": {
      width: "9rem",
      height: "9rem",
    },
  },
  textname: {
    fontSize: "2rem",
    color: "white",
    fontWeight: "20px",
    "@media (max-width: 425px)": {
      fontSize: "1.5rem",
    },
  },
  textButtom: {
    display: "flex",
    justifyContent: "spaceBetween",
    alignItems: "center",
  },
  box: {
    margin: 0,
    maxWidth: "30rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  whiteTheme: {
    "& .MuiInputBase-root ": {
      color: colors.white,
      fontSize: "2rem",
      color: "white",
      fontWeight: "20px",
      "@media (max-width: 425px)": {
        fontSize: "1rem",
      },
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
