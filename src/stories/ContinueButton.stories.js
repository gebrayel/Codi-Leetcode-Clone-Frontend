import React, { useEffect, useState } from "react";

import ContinueButton from "../components/ContinueButton/ContinueButton";

export default {
    title: "Codi/ContinueButton",
    component: ContinueButton,
    argTypes: {
        buttonText: {
            description: "Texto del boton."
        },
        onClick: {
            description: "Funcion que inicia al hacer click en el boton."
        },
    },
};

const Template = (args) => <ContinueButton {...args} />;

const funcionOnClick = () => {
    return 'Exitoso.';
};

export const BotonParaContinuar = Template.bind({});

BotonParaContinuar.args = {
    buttonText: 'Continuar',
    onClick: funcionOnClick,
};