import React from "react";

import DifficultyBox from "../components/DifficultyBox/DifficultyBox";

export default {
    title: "Codi/DifficultyBox",
    component: DifficultyBox,
    argTypes: {
        title: {
            description: "Titulo del box."
        },
        titleColor: {
            description: "Color del titulo.",
            control: {type: 'color'}
        },
        difficulty: {
            description: "Dificultad que se buscara en la BD. Puede ser: easy, medium, hard y all."
        },
        text: {
            description: "Descripcion del Box. No intente dar click, fallara porque solo es visible en StoryBook."
        }
    },
};

const Template = (args) => <DifficultyBox {...args}>{args.text}</DifficultyBox>;

export const Box = Template.bind({});

Box.args = {
    title:"{Intermedio}",
    titleColor:"#32EDE9",
    difficulty:"medium",
    text: "Si ya llevas un tiempo en este mundo y deseas mejorar tus habilidades."
};