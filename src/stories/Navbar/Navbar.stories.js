import React from "react";
import Navbar from "../Navbar/Navbar";

export default {
  title: "Codi/Navbar",
  component: Navbar,
  argTypes: {
    isAdmin: {
      description:
        "Dependiendo del valor de esta variable, si es true, cambiara el drawer de la derecha mostrando administrar problemas, o, si es false, muestra todos menos administrar problemas",
    },
    mobile: {
      description:
        "Dependiendo del valor de esta variable, si es true, se muestra la navbar de mobile, si es false, muestra la navbar desktop",
    },
  },
};

const Template = (args) => <Navbar {...args} />;

export const Barra_de_Navegacion = Template.bind({});

Barra_de_Navegacion.args = {
  isAdmin: true,
  mobile: true,
};

// export const Vista_Escritorio = Template.bind({});

// export const Vista_Movil = Template.bind({});
