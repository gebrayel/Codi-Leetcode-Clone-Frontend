import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Chart from "../../components/Chart/Chart";

export default function ProfileScreen({ x, ...props }) {
  const classes = useStyles(props);

  const image = () => {
    let x = localStorage.getItem("user");
    x = JSON.parse(x);
    return (
      <img
        src={x["pic_url"]}
        alt="Girl in a jacket"
        width="250rem"
        height="250rem"
        style={{ borderRadius: "50%" }}
      />
    );
  };
  return (
    <div style={{ marginTop: "5rem" }}>
      {image()}
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
