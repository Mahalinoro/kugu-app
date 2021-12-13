import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import '../assets/css/nav.css';

const LogoutButton = () => {
  const { logout } = useAuth0();
  
  return (
    <button className="text-color" onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </button>
  );
};

export default LogoutButton;