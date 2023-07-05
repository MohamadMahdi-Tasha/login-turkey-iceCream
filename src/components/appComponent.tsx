// Codes By Mahdi Tasha
// Importing Part
import FormComponent from "./formComponent.tsx";
import HolderComponent from "./holderComponent.tsx";

// Creating App Functional Component And Exporting It As Default
export default function AppComponent():any {
    // Conditional Rendering
    if (window.innerWidth > 1024) {
        return (
            <HolderComponent>
                <FormComponent />
            </HolderComponent>
        );
    } else {
        return (
            <HolderComponent>
                <h1 className={'text-[30px] text-center font-mono font-bold text-white'}>Please Play This Game On Desktop</h1>
            </HolderComponent>
        );
    }
}