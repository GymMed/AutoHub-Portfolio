interface TextareaBaseInterface {
    name?: string;
    id?: string;
    cols?: number;
    rows?: number;
    required?: boolean;
}

function TextareaBase({
    name = "",
    id = "",
    cols = 30,
    rows = 10,
    required = false,
}: TextareaBaseInterface) {
    return (
        <textarea
            className="p-2 rounded border border-light-400 dark:border-light-700 dark:bg-dark-eval-0 focus:ring focus:ring-offset-2 focus:ring-offset-transparent focus:ring-primary-500"
            name={name}
            id={id}
            cols={cols}
            rows={rows}
        ></textarea>
    );
}

export default TextareaBase;
