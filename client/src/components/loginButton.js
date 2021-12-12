const React = require("react");
const { useAuth0 } = require('@auth0/auth0-react');

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();

    return (
        <button onClick={() => loginWithRedirect()} className="nav-button primary-color">
            Sign Up | Login
        </button>
    )
}

export default LoginButton;