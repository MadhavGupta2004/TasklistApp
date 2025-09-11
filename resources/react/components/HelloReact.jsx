import React from 'react';
import ReactDOM from 'react-dom';
//import HelloReact from "@/HelloReact.jsx";


export default function HelloReact() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Hello MY React</div>

                        <div className="card-body">I'm an example component!</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

if (document.getElementById('hello-react')) {
    const Index = ReactDOM.createRoot(document.getElementById("hello-react"));

    Index.render(
        <React.StrictMode>
            <HelloReact/>
        </React.StrictMode>
    )
}
