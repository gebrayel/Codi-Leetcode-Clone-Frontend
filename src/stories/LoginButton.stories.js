import React from "react";

import LoginButton from "../components/LoginButton/LoginButton2";

export default {
    title: "Codi/LoginButton",
    component: LoginButton,
    argTypes: {
        type: {
            description: "Tipo de inicio de sesion. Puede ser: google o github.",
            control: {
                options: {
                  google: "google",
                  github: "github"
                },
                type: "select",
            }
        }
    },
};

const Template = (args) => <LoginButton {...args}/>;

export const BotonLogin = Template.bind({});

BotonLogin.args = {
    type : "google"
};