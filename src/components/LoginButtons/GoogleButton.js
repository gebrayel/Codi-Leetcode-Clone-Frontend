import { useContext } from "react";
import { GoogleLoginButton } from "react-social-login-buttons";

import AppContext from "../../helpers/context/context";
import fb from "../../config/firebase/firebaseAuth";

export const GitHub = () => {
    const { setUser } = useContext(AppContext);

    return (
        <GoogleLoginButton
            className="LoginButton"
            onClick={() => fb.loginWithGoogle(setUser)}
        />
    );
};

export default GitHub;
