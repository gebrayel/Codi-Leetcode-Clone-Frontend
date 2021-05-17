import { useContext } from "react";
import { GithubLoginButton } from "react-social-login-buttons";

import AppContext from "../../helpers/context/context";
import fb from "../../config/firebase/firebaseAuth";

export const GitHub = () => {
    const { setUser }  = useContext(AppContext);

    return (
        <GithubLoginButton
            className="LoginButton"
            onClick={() => fb.loginWithGithub(setUser)}
        />
    );
};

export default GitHub;
