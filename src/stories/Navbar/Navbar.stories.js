import React from "react";
import Navbar from "../Navbar/Navbar";

export default {
  title: "Codi/Navbar",
  component: Navbar,
  argTypes: {},
};

const Template = (args) => <Navbar {...args} />;

export const Barra_de_Navegacion = Template.bind({});

Barra_de_Navegacion.args = {
  isAdmin: true,
  mobile: true,
};

// export const Vista_Escritorio = Template.bind({});

// export const Vista_Movil = Template.bind({});
