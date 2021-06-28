import React from "react";

import Tabs from "../components/Tabs/Tabs";

export default {
    title: "Codi/Tabs",
    component: Tabs,
    argTypes: {
        type: {
            description: "Tipo de Tab. Puede ser: description, solution o submissions"
        },
        id: {
            description: "ID del problema."
        },
        title: {
            description: "Titulo del problema. La letra es de color blanco."
        },
        difficulty: {
            description: "Dificultad del problema. Deberia ser: Facil, Normal o Dificil"
        },
        colorDifficulty: {
            description: "Color del texto de difficulty.",
            control: { type: "color" },
        },
        description: {
            description: "Descripcion del problema. La letra es de color blanco."
        }
    },
};

const Template = (args) => <Tabs {...args}/>;

export const Tab = Template.bind({});

Tab.args = {
    type : "description",
    id : 1,
    title : "N-Sumas",
    difficulty : "Hard",
    colorDifficulty : "#F31483",
    description : "Descripcion del problema...",
};