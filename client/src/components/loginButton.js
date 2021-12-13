const React = require("react");
const { useAuth0 } = require('@auth0/auth0-react');
// const axios = require('axios');

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();
    // const login = async () => {
    //     await axios.get('/login');
    // }
    return (
        <button onClick={() => loginWithRedirect()} className="nav-button primary-color">
            Sign Up | Login
        </button>
    )
}

export default LoginButton;