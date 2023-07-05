// Codes By Mahdi Tasha
// Defining Types Of Props
interface propsType {
    children: any;
}

// Creating Holder Functional Component And Exporting It As Default
export default function HolderComponent({children}:propsType):JSX.Element {
    // Returning JSX
    return (
        <div className={'flex lg:items-center items-start lg:justify-center p-[20px] bg-theme-color min-h-screen'}>
            {children}
        </div>
    );
}