import React from "react";

import CodeConsole from "../components/CodeConsole/CodeConsole";

export default {
    title: "Codi/CodeConsole",
    component: CodeConsole,
    argTypes: {
        input: {
            description: "Datos de entrada de la funcion."
        },
        output: {
            description: "Respuesta de la funcion."
        },
        expected: {
            description: "Respuesta esperada, si es igual que el output, entonces la solucion es correcta."
        },
        isLoading: {
            description: "Booleano del componente de carga que aparece al esperar la respuesta de la API."
        },
    },
};

const Template = (args) => <CodeConsole {...args} />;

export const Aceptado = Template.bind({});

export const Rechazado = Template.bind({});

Aceptado.args = {
    input: '[1,2,3]',
    output: '3',
    expected: '3',
    isLoading: false,
};

Rechazado.args = {
    input: '[1,2,3]',
    output: '3',
    expected: '2',
    isLoading: false,
};