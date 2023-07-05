// Codes By Mahdi Tasha
// Importing Part
import {useState, useRef} from "react";

// Declaring Types Of Props
interface propsType {
    placeHolder: string;
    inputType: string;
    id: string;
}

// Creating Input Functional Component And Exporting It As Default
export default function InputComponent({placeHolder, inputType, id}:propsType):JSX.Element {
    // Creating State Of Input
    const [isOpened, setOpened] = useState(false);

    // Creating Ref Of Input
    const inputRef:any = useRef();
    const input = inputRef.current;

    // Returning JSX
    return (
        <div className={'border rounded-[10px] border-theme-color relative'}
             onClick={() => input.focus()}
        >
            <label
                htmlFor={id}
                data-opened={isOpened}
                className={'bg-white block font-mono text-[15px] transition-all duration-300 absolute text-theme-color px-[20px] data-[opened="false"]:top-[15px] data-[opened="false"]:left-0 data-[opened="true"]:top-[-15px] data-[opened="true"]:left-[20px]'}
            >
                {placeHolder} :
            </label>
            <input
                type={inputType}
                onFocus={() => setOpened(true)}
                onBlur={() => (input.value !== '') ? setOpened(true) : setOpened(false)}
                ref={inputRef}
                id={id}
                required
                className={'block outline-0 px-[20px] py-[15px] rounded-[10px] w-full placeholder:text-[15px] placeholder:font-mono'} />
        </div>
    );
}