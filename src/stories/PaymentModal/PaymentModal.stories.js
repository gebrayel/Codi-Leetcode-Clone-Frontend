import React, { useState } from "react";
import PaymentModal from "./PaymentModal";

export default {
  title: "Codi/PaymentModal",
  component: PaymentModal,
  argTypes: {
    modalP: {
      description:
        "Este valor en false no muestra el modal, en true si lo muestra",
    },
    price: {
      description: "Este valor sera el precio que se muestra en la card",
      control: {
        type: "select",
        options: ["$15", "$30", "$50"],
      },
    },
    subscription: {
      description: "Este valor sera el tipo de subscricion que se desee",
      control: {
        type: "select",
        options: ["<Semanal>", "{Mensual}", "#Anual"],
      },
    },
  },
};

const Template = (args) => <PaymentModal {...args} />;

export const Modal_de_Pago = Template.bind({});

Modal_de_Pago.args = {
  modalP: false,
  price: "$15",
  subscription: "<Semanal>",
};
