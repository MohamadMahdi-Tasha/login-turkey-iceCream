// Codes By Mahdi Tasha
// Importing Part
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';

import FormComponent from "./components/formComponent.tsx";

// Variables
const rootElement = document.getElementById('react-root') as HTMLElement;
const reactRootElement = ReactDOM.createRoot(rootElement);

// Wrapping whole app inside Strict mode of React and rendering them in root element
reactRootElement.render(
    <React.StrictMode>
        <div className={'flex lg:items-center items-start lg:justify-center p-[20px] bg-theme-color min-h-screen'}>
            <FormComponent />
        </div>
    </React.StrictMode>
)