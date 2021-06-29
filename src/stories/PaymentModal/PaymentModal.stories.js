import React, { useState } from "react";
import PaymentModal from "./PaymentModal";

export default {
  title: "Codi/PaymentModal",
  component: PaymentModal,
  argTypes: {},
};

const Template = (args) => <PaymentModal {...args} />;

export const Modal_de_Pago = Template.bind({});

Modal_de_Pago.args = {
  modalP: false,
  price: "15",
  subscription: "34",
};
