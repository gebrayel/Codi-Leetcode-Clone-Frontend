import React from "react";

import Chart from "../components/Chart/Chart";

export default {
  title: "Codi/Chart",
  component: Chart,
  argTypes: {},
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