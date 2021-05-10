import React from 'react'
import Lottie from 'react-lottie';
/*import animationDat from '../../images/robot_playing.json' */

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
          height={props.height}
          width={props.width}
          id={props.idLF}
        />
    );
}