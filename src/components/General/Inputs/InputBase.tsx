interface InputBaseInterface {
    id: string;
    name: string;
    type?: string;
    placeholder?: string;
}

function InputBase({
    id,
    name,
    type = "text",
    placeholder = "",
}: InputBaseInterface) {
    return (
        <input
            id={id}
            name={name}
            type={type}
            placeholder={placeholder}
            className="p-2 rounded border border-light-400 dark:border-light-700 dark:bg-dark-eval-0 focus:ring focus:ring-offset-2 focus:ring-offset-transparent focus:ring-primary-500"
        />
    );
}

export default InputBase;
