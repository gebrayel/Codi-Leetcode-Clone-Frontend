import React from 'react'
import kitty from '../../assets/animations/robot_playing.json';
import '../Difficulties/Difficulties.scss';

import colors from "../../config/colors/colors";

import DifficultyBox from '../../components/DifficultyBox/DifficultyBox';
import LottieF from '../../components/LottieFile/LottieFile'

export default function Difficulties(props) {
    
    return (
        <div id="background">
            <div id='lottie'>
                <LottieF animationData={kitty} height={'100%'} width={'50%'} idLF='kitty'/>
            </div>
            <div id="boxes">
                <DifficultyBox
                    title="<Fácil>"
                    titleColor={colors.easy}
                >
                    Si eres nuevo programando y quieres conocer lo básico de este mundo.
                </DifficultyBox>
                <DifficultyBox
                    title="{Intermedio}"
                    titleColor={colors.medium}
                >
                    Si ya llevas un tiempo en este mundo y deseas mejorar tus habilidades.
                </DifficultyBox>
                <DifficultyBox
                    title="#Difícil}"
                    titleColor={colors.hard}
                >
                    ¿Te consideras un programador experto? Entonces vamos a ponerte a prueba.
                </DifficultyBox>
            </div>
         </div>
    );
}