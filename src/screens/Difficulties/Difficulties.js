import React from 'react'
import animationDat from '../../images/robot_playing.json'
import LottieF from '../../components/LottieFile/LottieFile'

export default function Difficulties(props) {
    
    return (
      <div>
          <LottieF animationData={animationDat} height={400} width={400} id='kitty' />
        
      </div>
    );
}