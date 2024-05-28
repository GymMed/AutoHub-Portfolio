interface LabelBaseInterface {
    labelHeader: string;
    forElement: string;
}

function LabelBase({ labelHeader, forElement }: LabelBaseInterface) {
    return <label htmlFor={forElement}>{labelHeader}</label>;
}

export default LabelBase;
