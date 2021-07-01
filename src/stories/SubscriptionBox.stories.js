import React from "react";
import SubscriptioBox from "../components/SubscriptionBox/SubscriptionBox";

export default {
  title: "Codi/SubscriptionBox",
  component: SubscriptioBox,
  argTypes: {
    title: {
      description: "Este sera el titulo de la tarjeta",
    },
    amount: {
      description: "Este sera el precio de la tarjeta",
    },
    time: {
      description: "Este sera el tiempo de duracion de la tarjeta",
    },
    before: {
      description: "Este sera el precio antes del descuento",
    },
    after: {
      description: "Este sera el porcentaje de ahorro",
    },
    ideal: {
      description:
        "Este sera el texto que prela el a quien va dirigida la tarjeta",
      control: {
        disable: true,
      },
    },
    prac: {
      description: "Este sera el texto de a quien va dirigida la tarjeta",
    },
    buttonText: {
      description: "Este sera el texto del boton de la tarjeta",
    },
    color1: {
      description: "Este sera el color de el fondo de la tarjeta",
      control: {
        type: "color",
      },
    },
    color2: {
      description:
        "Este sera el color del fondo del boton y de la banda de la tarjeta",
      control: {
        type: "color",
      },
    },
    color3: {
      description: "Este sera el color del hover del boton",
      control: {
        type: "color",
      },
    },
  },
};

const Template = (args) => <SubscriptioBox {...args} />;

export const Caja_Subscripcion = Template.bind({});

Caja_Subscripcion.args = {
  title: "<Semanal>",
  amount: "$8/Se",
  time: "7 DÍAS",
  before: "Antes: $1",
  after: "Ahorro: 0,0%",
  ideal: "Ideal para:",
  prac: "Practicantes Dummies",
  buttonText: "Subscribirse",
  color1: "#CBCBCD",
  color2: "#E75656",
  color3: "#FB2121",
};
