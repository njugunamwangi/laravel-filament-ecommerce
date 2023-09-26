import {useStateContext} from "../contexts/ContextProvider.jsx";

export default function Toast() {
    const { toast} = useStateContext({});

    let classes = ["w-[400px]", "py-2", "px-3", "fixed", "right-2", "bottom-2", "z-50", "animate-fade-in-down", "text-sm", "rounded-lg", "dark:bg-gray-800",];

    if (toast.variant === 'success') {
        classes = [
            ...classes,
            "text-green-800", "bg-green-50", "dark:text-green-400"
        ];
    } else if (toast.variant === 'warning') {
        classes = [
            ...classes,
            "text-yellow-800", "bg-yellow-50", "dark:text-yellow-400"
        ];
    } else if (toast.variant === 'info') {
        classes = [
            ...classes,
            "text-blue-800", "bg-blue-50", "dark:text-blue-400"
        ];
    } else {
        classes = [
            ...classes,
            "text-red-800", "bg-red-50", "dark:text-red-400"
        ];
    }

    return (
        <>
            {
                toast.show && (
                    <>
                        <div className={classes.join(" ")} role="alert">
                            <span className="font-medium normal-case">{toast.variant} alert!</span> {toast.message}
                        </div>
                    </>
                )
            }
        </>

    )
}
