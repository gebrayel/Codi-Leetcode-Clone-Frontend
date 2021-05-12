import { GoogleLoginButton } from "react-social-login-buttons";

export const GitHub = () => {
    return (
        <>
            <GoogleLoginButton
                className="LoginButton"
                onClick={() => alert("Hello")}
            />
        </>
    );
};

export default GitHub;
