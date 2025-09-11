import React from 'react';
import ReactDOM from 'react-dom';
import Main from "./Main.tsx";
import Welcome from "./Welcome.tsx";

if (document.getElementById('main')) {
    const Index = ReactDOM.createRoot(document.getElementById("main"));

    Index.render(
        <React.StrictMode>
            <Main />
        </React.StrictMode>
    )
}
