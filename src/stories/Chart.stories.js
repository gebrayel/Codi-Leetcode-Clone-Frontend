import React from "react";

import Chart from "../components/Chart/Chart";

export default {
  title: "Codi/Chart",
  component: Chart,
  argTypes: {
    labels: {
      description: "Nombre de cada dato.",
    },
    data: {
      description: "Valores del gráfico.",
    },
    colors: {
      description:
        "Colores por cada nombre de dato, puede ser solo un color como en el caso del gráfico de linea.",
    },
    font_color: {
      description: "Color del texto.",
    },
    type: {
      description: "Tipo de gráfico. Puede ser: pie, doughnut, bar o line.",
    },
    etiquetas: {
      description: "Booleano que aparece o desaparece las etiquetas.",
    },
  },
};

const Template = (args) => <Chart {...args} />;

export const Line = Template.bind({});

Line.args = {
  labels: ["Enero", "Febrero"],
  data: [10, 30],
  colors: ["#36A2EB"],
  font_color: "white",
  type: "Line",
  etiquetas: false,
};
