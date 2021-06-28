import React from "react";
import LottieFile from "../components/LottieFile/LottieFile";
import robot_says_hi from "../assets/animations/robot_says_hi.json";
import robot_playing from "../assets/animations/robot_playing.json";
import robot_loader from "../assets/animations/robot-loader.json";

export default {
  title: "Codi/LottieFile",
  component: LottieFile,
  argTypes: {
    animationData: {
      description:
        "Este es el json de la animacion que se le pasara al lottiefile y que mostrara",
      control: {
        options: {
          robot1: robot_says_hi,
          robot2: robot_playing,
          robot3: robot_loader,
        },
        type: "select",
      },
    },
  },
  default: "a",
};

const Template = (args) => <LottieFile {...args} />;

export const LottieFile_Animation = Template.bind({});

LottieFile_Animation.args = {
  animationData: robot_says_hi,
};
