import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Chart from "../../components/Chart/Chart";
import { RefreshSharp } from "@material-ui/icons";
import user from "../../api/user/user";
import AppContext from "../../helpers/context/context";

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
        <input type="text" id="text" defaultValue={text.value} />
        <button
          onClick={() => {
            console.log(document.getElementById("text").value);
            setText({ ...text, editMode: !text.editMode, modif: "" });
          }}
        >
          X
        </button>
        <button
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
          Ok
        </button>
      </div>
    );
  };
  const textView = () => {
    console.log(text.value);
    return (
      <div className={classes.textButtom}>
        <div className={classes.textname}>{text.value}</div>
        <button
          onClick={() => {
            setText({ ...text, editMode: !text.editMode });
          }}
        >
          edit
        </button>
      </div>
    );
  };
  return (
    <div style={{ marginTop: "5rem" }}>
      <div>
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
    width: "15rem",
    height: "15rem",
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
  },
}));
