import { GoogleLoginButton } from "react-social-login-buttons";

export const GitHub = () => {
    return (
        <>
            <GoogleLoginButton onClick={() => alert("Hello")} />
        </>
    );
};

export default GitHub;
