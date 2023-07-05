// Codes By Mahdi Tasha
// Importing Part
import FormComponent from "./formComponent.tsx";
import HolderComponent from "./holderComponent.tsx";

// Creating App Functional Component And Exporting It As Default
export default function AppComponent():JSX.Element {
    // Returning JSX
    return (
        <HolderComponent>
            <FormComponent />
        </HolderComponent>
    );
}