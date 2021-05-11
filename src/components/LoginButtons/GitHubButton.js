import { GithubLoginButton } from "react-social-login-buttons";

export const GitHub = () => {
    return (
        <>
            <GithubLoginButton
                className="GitHubButton"
                onClick={() => alert("Hello")}
            />
        </>
    );
};

export default GitHub;
