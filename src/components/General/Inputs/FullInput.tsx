import InputBase from "./InputBase";
import LabelBase from "./LabelBase";

interface FullInputInterface {
    labelHeader: string;
    id: string;
    name: string;
    type?: string;
    placeholder?: string;
}

function FullInput({
    labelHeader,
    id,
    name,
    type = "text",
    placeholder = "",
}: FullInputInterface) {
    return (
        <div className="flex flex-col gap-2 w-full">
            <LabelBase labelHeader={labelHeader} forElement={id} />
            <InputBase
                type={type}
                id={id}
                name={name}
                placeholder={placeholder}
            />
        </div>
    );
}

export default FullInput;
