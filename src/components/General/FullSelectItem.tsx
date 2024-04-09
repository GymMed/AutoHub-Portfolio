import { SelectItemInterface } from "../../interfaces/Select/SelectItemInterface";
import MiniTag from "./MiniTag";
import SelectItem from "./SelectItem";
import { ReactNode } from "react";

interface SelectEnumDataInterface {
    value: number;
    name: string;
    onClick: () => void;
    icon?: ReactNode;
}

interface FullSelectItemInterface {
    header: string;
    selectItemData: SelectItemInterface;
    selectEnumData: SelectEnumDataInterface[];
}

function FullSelectItem({
    header,
    selectItemData,
    selectEnumData,
}: FullSelectItemInterface) {
    return (
        <div className="h-min flex flex-col gap-3 justify-center items-center dark:bg-dark-eval-0 bg-light-100 p-2 shadow-inner rounded">
            <div className="flex items-center gap-2">
                <div>{header}</div>
                <SelectItem
                    options={selectItemData.options}
                    onClickValue={selectItemData.onClickValue}
                />
            </div>
            {selectEnumData.length > 0 && (
                <div className=" text-white flex gap-1">
                    {selectEnumData.map((data) => {
                        return (
                            <MiniTag
                                name={data.name}
                                icon={data.icon ? data.icon : ""}
                                onClick={data.onClick}
                            />
                        );
                    })}
                </div>
            )}
        </div>
    );
}

export default FullSelectItem;
