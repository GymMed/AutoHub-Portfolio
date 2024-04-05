import { ChangeEvent, ReactElement } from "react";
import { SelectOptionInterface } from "../../interfaces/SelectOptionInterface";

interface SelectInterface {
    name: string;
    id: string;
    onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
    options: SelectOptionInterface[];
    icon: ReactElement | null;
}

function getClassesBasedOnIcon(hasIcon: boolean): string {
    if (hasIcon) {
        return "";
    }
    return "";
}

function Select({ name, id, options, onChange, icon = null }: SelectInterface) {
    const hasIcon: boolean = icon ? true : false;

    return (
        <select
            className={
                getClassesBasedOnIcon(hasIcon) +
                "dark:bg-dark-eval-0 border border-primary-500 p-2 text-primary-500 focus:ring focus:ring-offset-2 focus:ring-primary-500 rounded"
            }
            name={name}
            id={id}
            onChange={(event) => {
                onChange(event);
            }}
        >
            {options.map((option, key) => {
                return (
                    <option key={key} value={option.value}>
                        {option.text}
                    </option>
                );
            })}
        </select>
    );
}

export default Select;
