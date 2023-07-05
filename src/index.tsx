// Codes By Mahdi Tasha
// Importing Part
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';

// Variables
const rootElement = document.getElementById('react-root') as HTMLElement;
const reactRootElement = ReactDOM.createRoot(rootElement);

// Wrapping whole app inside Strict mode of React and rendering them in root element
reactRootElement.render(
    <React.StrictMode>
        <h1>sad</h1>
    </React.StrictMode>
)