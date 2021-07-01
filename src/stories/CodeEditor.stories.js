import React, { useEffect, useState } from "react";

import CodeEditor from "../components/CodeEditor/CodeEditor";

export default {
    title: "Codi/CodeEditor",
    component: CodeEditor,
    argTypes: {
        readOnly: {
            description: "Booleano que indica si el editor de codigo es solo para lectura o es posible editarlo."
        },
        language: {
            description: "Lenguaje de programacion. Acepta: text/x-java y python."
        },
        value: {
            description: "UseState que representa el codigo. Puede editar este campo, para ver cambios en el codigo."
        },
        onChange: {
            description: "UseState que representa el setCodigo."
        },
    },
};

const Template = (args) => <CodeEditor {...args} />;

const CodeUseState = () => {
    const [code, setCode] = useState("");
    return setCode;
};

export const EditorDeCodigo = Template.bind({});

EditorDeCodigo.args = {
    readOnly: true,
    language: "text/x-java",
    value: "print('Hello world!')",
    onChange: CodeUseState,
};