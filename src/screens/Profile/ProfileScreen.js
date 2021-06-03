import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Chart from "../../components/Chart/Chart";
import { RefreshSharp } from "@material-ui/icons";
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
    <div style={{ marginTop: "5rem" }}>
      <div className={classes.box}>
        <img src={locvalue["pic_url"]} alt="avatar" className={classes.image} />
        {text.editMode ? textEdition() : textView()}
      </div>
      <div className={classes.doughnut_container}>
        <Chart
          labels={["Faltante", "Facil", "Medio", "Dificil"]}
          data={[1, 1, 0, 0]}
          colors={["#FFCD56", "#FF9F40", "#36A2EB", "#FF6384"]}
          font_color="white"
          type="Doughnut"
        />
      </div>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  doughnut_container: {
    marginTop: "10vh",
    height: 400,
    width: 400,
  },
  image: {
    width: "13rem",
    height: "13rem",
    borderRadius: "50%",
  },
  textname: {
    fontSize: "2rem",
    color: "white",
    fontWeight: "20px",
  },
  textButtom: {
    display: "flex",
    justifyContent: "spaceBetween",
    alignItems: "center",
  },
  box: {
    maxWith: "auto",
    justifyContent: "center",
  },
  whiteTheme: {
    "& .MuiInputBase-root ": {
      color: colors.white,
      fontSize: "2rem",
      color: "white",
      fontWeight: "20px",
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
