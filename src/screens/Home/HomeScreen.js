import React from "react";
import codeTyping from "../../assets/animations/code-typing.json";
import LoginButton from "../../components/LoginButton/LoginButton";
import LottieF from "../../components/LottieFile/LottieFile";

export const HomeScreen = () => {
    let codi = "<Codi />";

    return (
        <>
            <div id="HomeScreenContainer">
                <div id="HomeScreenLottie">
                    <LottieF animationData={codeTyping} />
                </div>
                <h1 id="HomeScreenTitle"> Crea y aprende con {codi} </h1>
                <h2 id="HomeScreenText">
                    Codi es el mejor lugar para conseguir ejercicios de <br />
                    programación, con diferentes dificultades y lograr una{" "}
                    <br />  
                    entrevista de ensueño.
                </h2>
                <div id="HomeScreenButtons">
                    <LoginButton 
                        type="GitHub"
                    />
                    <LoginButton 
                        type="Google"
                    />
                </div>
            </div>
        </>
    );
};

export default HomeScreen;
