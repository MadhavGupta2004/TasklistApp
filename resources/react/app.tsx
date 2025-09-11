import ReactDOM from 'react-dom/client';
import Main from "./Main.js";
import './index.css'
import React from "react";

ReactDOM.createRoot(document.getElementById('app')).render(
    <Main />
);

if (document.getElementById('app')) {
    const Index = ReactDOM.createRoot(document.getElementById("app"));

    Index.render(
        <React.StrictMode>
            <Main />
        </React.StrictMode>
    )
}
