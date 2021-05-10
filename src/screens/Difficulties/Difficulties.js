import React from 'react'
import animationDat from '../../images/robot_playing.json'
import LottieF from '../../components/LottieFile/LottieFile'
import '../Difficulties/Difficulties.scss'

export default function Difficulties(props) {
    
    return (
        <div id="bg_diff">

            <div id="navbar_diff">Navbar</div>
            <div id='kitty2'>
                <LottieF animationData={animationDat} height={'100%'} width={'50%'} idLF='kitty'/>
            </div>

            <div id='card1_diff'>
                <h1 id='h1_diff'>{'<'}Fácil{'>'}</h1>
                <p id='p1_diff'>Si eres nuevo<br/>programando y<br/>quieres conocer lo<br/>básico de este<br/>mundo.</p>
            </div>

            <div id='card2_diff'>
                <h1 id='h2_diff'>{'{'}Intermedio{'}'}</h1>
                <p id='p2_diff'>Si ya llevas un<br/>tiempo en este<br/>mundo y deseas<br/>mejorar tus<br/>habilidades.</p>
            </div>

            <div id='card3_diff'>
                <h1 id='h3_diff'>#Difícil</h1>
                <p id='p3_diff'>¿Te consideras un<br/>programador<br/>experto? Entonces<br/>vamos a ponerte a<br/>prueba.</p>
            </div>
        
         </div>
    );
}