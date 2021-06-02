import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Chart from "../../components/Chart/Chart";
import { RefreshSharp } from "@material-ui/icons";

export default function ProfileScreen({ x, ...props }) {
  let locvalue = localStorage.getItem("user");
  locvalue = JSON.parse(locvalue);
  const classes = useStyles(props);
  let [text, setText] = useState({
    value: locvalue["name"],
    editMode: false,
    modif: "",
  });
  const image = () => {
    return (
      <img
        src={locvalue["pic_url"]}
        alt="Girl in a jacket"
        width="250rem"
        height="250rem"
        style={{ borderRadius: "50%" }}
      />
    );
  };
  const changeEditMode = () => {
    // setText({ ...text, editMode: !text.editMode });
  };
  const updateValue = () => {
    // setText({
    //   ...text,
    //   editMode: false,
    // });
  };
  const textEdition = () => {
    return (
      <div>
        <input
          type="text"
          onChange={(e) => {
            console.log(e.target.value);
            console.log(text.value);
            setText({ ...text, modif: e.target.value });
            console.log(text.value);
            console.log(text.modif);
          }}
          id="text"
          defaultValue={text.value}
        />
        <button
          onClick={() => {
            setText({ ...text, editMode: !text.editMode, modif: "" });
            console.log(text.value);
          }}
        >
          X
        </button>
        <button
          onClick={() => {
            let a = text.modif;
            setText({ ...text, modif: "", value: a, editMode: false });
            console.log(text.value);
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
      {image()}
      {text.editMode ? textEdition() : textView()}
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
}));
