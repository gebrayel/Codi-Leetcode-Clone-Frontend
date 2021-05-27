import React, { useContext } from 'react';
import { useHistory } from "react-router-dom";
import { GoogleLoginButton, GithubLoginButton } from "react-social-login-buttons";

import AppContext from "../../helpers/context/context";
import fb from "../../config/firebase/firebaseAuth";

export default function LoginButton({
    type,
}) {
    const { setUser } = useContext(AppContext);
    const history = useHistory();

    /**
     * Manejar inicio de sesión
     */
    const handleClick = async () => {
        let user;
        switch (type.toLowerCase()) {
            case "google":
                user = await fb.loginWithGoogle(setUser);
                break;
            case "github":
                user = await fb.loginWithGithub(setUser);
                break;
            default:
                break;
        }
        if(user[0]){
            history.push("/difficulties")
        }
    }

    /**
     * Obtener el botón corresposdiente al
     * tipo
     * @returns Componente Login Button
     */
    const getButton = () => {
        switch (type.toLowerCase()) {
            case "google":
                return (
                    <GoogleLoginButton 
                        className="LoginButton"
                        onClick={handleClick}
                    />
                )
            case "github":
                return (
                    <GithubLoginButton 
                        className="LoginButton"
                        onClick={handleClick}
                    />
                )
            default:
                break;
        }
    }
    return getButton();
}
