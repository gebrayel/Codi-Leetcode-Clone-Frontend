import React from "react";

import Chart from "../components/Chart/Chart";

export default {
    title: "Codi/Chart",
    component: Chart,
    argTypes: {
        labels: {
            description: "Nombre de cada dato."
        },
        data: {
            description: "Valores del gráfico."
        },
        colors: {
            description: "Colores por cada nombre de dato, puede ser solo un color como en el caso del gráfico de linea."
        },
        font_color: {
            description: "Color del texto de las etiquetas.",
            control: {type: 'color'}
        },
        type: {
            description: "Tipo de gráfico. Puede ser: pie, doughnut, bar o line.",
            control: {type: 'object'}
        },
        etiquetas: {
            description: "Booleano que aparece o desaparece las etiquetas."
        },
        label: {
            description: "Nombres de las etiquetas."
        },
    },
};

const Template = (args) => <Chart {...args} />;

export const Grafico = Template.bind({});

export const Line = Template.bind({});

export const Bar = Template.bind({});

export const Pie = Template.bind({});

export const Doughnut = Template.bind({});

Grafico.args = {
    labels: ["Enero", "Febrero"],
    data: [10, 30],
    colors: ["#36A2EB", "#FF6384"],
    font_color: "black",
    type: "Pie",
    etiquetas: true,
    label: ["Enero", "Febrero"]
};

Line.args = {
    labels: ["Enero", "Febrero"],
    data: [10, 30],
    colors: ["#36A2EB"],
    font_color: "black",
    type: "Line",
    etiquetas: false,
    label: ["Enero", "Febrero"]
};

Bar.args = {
    labels: ["Enero", "Febrero"],
    data: [10, 30],
    colors: ["#36A2EB", "#FF6384"],
    font_color: "black",
    type: "Bar",
    etiquetas: false,
    label: ["Enero", "Febrero"]
};

Pie.args = {
    labels: ["Enero", "Febrero"],
    data: [10, 30],
    colors: ["#36A2EB", "#FF6384"],
    font_color: "black",
    type: "Pie",
    etiquetas: false,
    label: ["Enero", "Febrero"]
};

Doughnut.args = {
    labels: ["Enero", "Febrero"],
    data: [10, 30],
    colors: ["#36A2EB", "#FF6384"],
    font_color: "black",
    type: "Doughnut",
    etiquetas: false,
    label: ["Enero", "Febrero"]
};