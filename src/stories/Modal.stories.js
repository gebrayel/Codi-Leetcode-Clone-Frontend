import React from "react";

import Modal from "../components/Modal/Modal";

export default {
    title: "Codi/Modal",
    component: Modal,
    argTypes: {
        title: {
            description: "Titulo del modal"
        },
        description: {
            description: "Descripcion del modal."
        },
        closeText: {
            description: "Texto del boton para cerrar el modal."
        },
        toggleModal: {
            description: "Funcion que le mando al useState del modal, su valor actual negado."
        },
        functionText: {
            description: "Texto del segundo boton del modal."
        },
        passedFunction: {
            description: "Funcion ocurre al darle click al segundo boton."
        },
        open: {
            description: "Valor actual del useState. Colocalo en True para visualizar el modal."
        },
        singleButton: {
            description: "Booleano para indicar que es solo un boton o dos botones."
        }
    },
};

const Template = (args) => <Modal {...args}/>;

export const PopUp = Template.bind({});

const funcionSegundoBoton = () => {
    return 'Exitoso.';
};

PopUp.args = {
    title : "Error de conexion",
    description : "Hubo un problema al intentar conectarse, intenta mas tarde.",
    closeText : "Cerrar",
    toggleModal : funcionSegundoBoton,
    functionText : "Siguiente",
    passedFunction : funcionSegundoBoton,
    open : false,
    singleButton : true,
};