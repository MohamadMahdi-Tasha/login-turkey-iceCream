// Codes By Mahdi Tasha
// Creating Submit Button Functional Component And Exporting It As Default
export default function SubmitButtonComponent():JSX.Element {
    // Returning JSX
    return (
        <button
            className={'w-full text-center rounded-[10px] bg-theme-color text-white py-[15px] text-[20px] font-bold font-mono'}
        >
            Submit
        </button>
    );
}