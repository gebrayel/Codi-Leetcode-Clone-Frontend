import { GithubLoginButton } from "react-social-login-buttons";

export const GitHub = () => {
    return (
        <>
            <GithubLoginButton
                className="LoginButton"
                onClick={() => alert("Hello")}
            />
        </>
    );
};

export default GitHub;
