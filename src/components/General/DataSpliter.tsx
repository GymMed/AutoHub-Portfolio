interface DataSpliterInterface {
    keyText: string;
    valueText: string;
}

function DataSpliter({ keyText, valueText }: DataSpliterInterface) {
    return (
        <div className="flex gap-3 justify-between text-sm">
            <div className="font-extralight">{keyText}</div>
            <div className="font-normal">{valueText}</div>
        </div>
    );
}

export default DataSpliter;
