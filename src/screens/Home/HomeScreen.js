import React, { useContext } from "react";

import AppContext from "../../helpers/context/context";
import codeTyping from "../../assets/animations/code-typing.json";
import LoginButton from "../../components/LoginButton/LoginButton";
import LottieF from "../../components/LottieFile/LottieFile";
import RobotLoader from "../../components/RobotLoader/RobotLoader";

export const HomeScreen = () => {
    let codi = "<Codi />";
    const { isLoading } = useContext(AppContext);

    return (
        <div id="HomeScreenContainer">
            { isLoading ? 
            (
                <RobotLoader />
            ) : 
            (
                <>
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
                </>
            )}
            
        </div>
    );
};

export default HomeScreen;
