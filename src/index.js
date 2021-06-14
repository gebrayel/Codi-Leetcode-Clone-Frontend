import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./styles/styles.scss";
import { app } from "./config/firebase/firebase-config";

import axios from "axios";
import Navbar from "./components/Navbar/Navbar";
import settings from "./config/settings/settings";

axios.defaults.baseURL = settings.apiUrl;

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
