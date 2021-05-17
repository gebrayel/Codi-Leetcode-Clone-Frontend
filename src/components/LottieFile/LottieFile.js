import React from 'react'
import Lottie from 'react-lottie';

export default function LottieFile(props) {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: props.animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    
    return (
        <Lottie 
          options={defaultOptions}
        />
    );
}