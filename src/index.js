import React from 'react';
import ReactDOM from 'react-dom';
import * as ReactDOMClient from 'react-dom/client';
import App from '@routes/App';

const root = ReactDOMClient.createRoot(document.getElementById("app"));
root.render(

<React.StrictMode>
    <App />
</React.StrictMode>

);

reportWebVitals();

