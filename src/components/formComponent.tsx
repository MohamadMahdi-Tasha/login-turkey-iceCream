// Codes By Mahdi Tasha
// Importing Part
import InputComponent from "../chunks/inputComponent.tsx";
import SubmitButtonComponent from "../chunks/submitButttonComponent.tsx";

// Creating Form Functional Component And Exporting It As Default
export default function FormComponent():JSX.Element {
    // Returning JSX
    return (
        <form
            onKeyDown={(event) => {
                if (event.key.toLowerCase() === 'enter') {
                    event.preventDefault()
                }
            }}
            action="#"
            className={'bg-white rounded-[20px] rounded-0 lg:w-[500px] w-full px-[20px] py-[30px] shadow-lg flex flex-col gap-[25px]'}
        >
            <h1 className={'text-center text-[35px] font-black font-mono text-theme-color'}>Login Form</h1>
            <InputComponent inputType={'email'} id={"email-input"} placeHolder={'Email'} />
            <InputComponent inputType={'password'} id={"password-input"} placeHolder={'Password'} />
            <SubmitButtonComponent />
        </form>
    );
}