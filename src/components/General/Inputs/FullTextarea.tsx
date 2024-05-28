import LabelBase from "./LabelBase";
import TextareaBase from "./TextareaBase";

interface FullTextareaInterface {
    labelHeader: string;
    name: string;
    id: string;
    cols?: number;
    rows?: number;
}

function FullTextarea({
    labelHeader,
    id,
    name,
    cols = 30,
    rows = 10,
}: FullTextareaInterface) {
    return (
        <div className="flex gap-2 flex-col w-full">
            <LabelBase labelHeader={labelHeader} forElement={id} />
            <TextareaBase id={id} name={name} cols={cols} rows={rows} />
        </div>
    );
}

export default FullTextarea;
