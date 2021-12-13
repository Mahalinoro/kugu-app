import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import './assets/css/globals.css';
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from '@auth0/auth0-react';
require('dotenv').config();

const domain = process.env.REACT_APP_ISSUER_BASE_URL;
const clientID = process.env.REACT_APP_CLIENT_ID;

ReactDOM.render(
  <Auth0Provider
  domain={domain}
  clientId={clientID}
  redirectUri={window.location.origin}>
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
  </Auth0Provider>,
  document.getElementById("root")
);