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
      <div>
        <input
          type="text"
          onChange={(e) => {
            setText({ ...text, modif: e.target.value });
          }}
          id="text"
          defaultValue={text.value}
        />
        <button
          onClick={() => {
            setText({ ...text, editMode: !text.editMode, modif: "" });
            locvalue.name = "hola";
            console.log(locvalue);
          }}
        >
          X
        </button>
        <button
          onClick={() => {
            try {
              let textModified = text.modif;
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
      <div>
        <div>{text.value}</div>
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
        <img
          src={locvalue["pic_url"]}
          alt="Girl in a jacket"
          width="250rem"
          height="250rem"
          style={{ borderRadius: "50%" }}
        />
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
  imgText: {},
}));
