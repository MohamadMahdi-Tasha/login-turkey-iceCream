// Codes By Mahdi Tasha
// Importing Part
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';

import AppComponent from "./components/appComponent.tsx";

// Variables
const rootElement = document.getElementById('react-root') as HTMLElement;
const reactRootElement = ReactDOM.createRoot(rootElement);

// Wrapping whole app inside Strict mode of React and rendering them in root element
reactRootElement.render(<React.StrictMode><AppComponent /></React.StrictMode>)