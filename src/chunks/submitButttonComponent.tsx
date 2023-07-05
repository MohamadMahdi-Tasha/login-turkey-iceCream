// Codes By Mahdi Tasha
// Importing Part
import {useState} from "react";

// Creating Submit Button Functional Component And Exporting It As Default
export default function SubmitButtonComponent():JSX.Element {
    // Creating States
    const [mouseX, setMouseX] = useState(0);
    const [mouseY, setMouseY] = useState(0);

    // Small Inner Components
    function HoveredButtonComponent():JSX.Element {
        // Returning JSX
        return (
            <button tabIndex={-1}
                className={'text-center rounded-[10px] bg-theme-color text-white block py-[13px] px-[20px] text-[20px] font-bold font-mono absolute'}
                style={{
                    right: `${mouseX}px`,
                    top: `${mouseY - 100}px`
                }}
            >
                Submit
            </button>
        );
    }

    function ButtonComponent():JSX.Element {
        // Returning JSX
        return (
            <button tabIndex={-1} className={'text-center rounded-[10px] bg-theme-color text-white block py-[13px] px-[20px] text-[20px] font-bold font-mono absolute'}>
                Submit
            </button>
        );
    }

    // Returning JSX
    return (
        <div
            className={'h-[200px]'}
            onMouseMove={(event) => {
                setMouseX(event.pageX);
                setMouseY(event.pageY);
            }}
             onMouseLeave={() => {
                 setMouseX(0);
                 setMouseY(0);
             }}
        >
            {(mouseX === 0) ? <ButtonComponent /> : <HoveredButtonComponent />}
        </div>
    );
}