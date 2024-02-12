import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GoogleOAuthProvider clientId={`http://139213695092-qfd3s5is1jrrt0ic97intf58cga11emj.apps.googleusercontent.com`}> {/* clientId={`${process.env.REACT_APP_GOOGLE_CLIENT_ID}`} */}
        <App />
        <Toaster />
      </GoogleOAuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
