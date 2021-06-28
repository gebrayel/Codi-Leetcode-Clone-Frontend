import React from "react";
import SubscriptionText from "../components/SubscriptionText/SubscriptionText";
import yellowCodi from "../assets/yellow_codi.png";
import checkM from "../assets/animations/checkMarkSubscription.json";
import prem from "../assets/animations/premiumSubscription.json";
import lock from "../assets/animations/lockSubscription.json";

export default {
  title: "Codi/SubscriptionText",
  component: SubscriptionText,
  argTypes: {
    type: {
      description:
        "Este definira como mostrara la informacion en el espacio, toma valores de 0 o 1",
      control: {
        type: "select",
        options: [0, 1],
      },
    },
    anim: {
      description:
        "Este sera la animacion en formato json que mostrara el componente si el type es 0, si es 1 mostrara por default el logo de la app en color amarillo",
      control: {
        type: "select",
        options: {
          logoApp: yellowCodi,
          checkMarck: checkM,
          premiumIcon: prem,
          candado: lock,
        },
      },
    },
    color: {
      description:
        "Este sera el color del texto del componente mas largo del componente si type es 1, si type es 0 sera el color de todo el texto",
      control: {
        type: "color",
      },
    },
    children: {
      description: "Este definira el texto del componente si el type es 0",
    },
    textAlign: {
      description: "Este definira la alineacion del texto",
    },
    subColor: {
      description:
        "Este definira el color del texto secundario si el type es 1",
      control: {
        type: "color",
      },
    },
  },
};

const Template = (args) => <SubscriptionText {...args} />;

export const Texto_Subscripcion = Template.bind({});
export const Texto_Subscripcion_con_Logo = Template.bind({});
export const Texto_Subscripcion_con_Animacion = Template.bind({});

Texto_Subscripcion.args = {
  type: "0",
  anim: yellowCodi,
  color: "black",
  children: "¡Llegó la hora de unirte al GOLDEN CUBE de la programación!",
  textAlign: "center",
  subColor: "#E8FB76",
};
Texto_Subscripcion_con_Logo.args = {
  type: "0",
  anim: yellowCodi,
  color: "black",
  children: "¡Llegó la hora de unirte al GOLDEN CUBE de la programación!",
  textAlign: "center",
  subColor: "#E8FB76",
};
Texto_Subscripcion_con_Animacion.args = {
  type: "1",
  anim: checkM,
  color: "black",
  children: "texto de pruebas",
  textAlign: "center",
  subColor: "#E8FB76",
};
