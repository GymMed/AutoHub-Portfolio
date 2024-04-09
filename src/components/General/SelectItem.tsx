import { useEffect, useRef, useState } from "react";
import { SelectItemInterface } from "../../interfaces/Select/SelectItemInterface";
import { SelectItemOptionInterface } from "../../interfaces/Select/SelectItemOptionInterface";
// import DownSvg from "../../assets/icons/Down.svg";
// import CrossSvg from "../../assets/icons/Cross.svg";

interface SelectItemDataInterface {
    show: boolean;
    search: string;
    shownOptions: SelectItemOptionInterface[];
    selected: number;
}

function SelectItem({ options, onClickValue }: SelectItemInterface) {
    const [selectItemData, setSelectItemData] =
        useState<SelectItemDataInterface>({
            show: false,
            search: "",
            shownOptions: options,
            selected: 0,
        });
    const selectRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClick(event: MouseEvent) {
            if (selectRef.current?.contains(event.target as Node)) {
                return;
            }

            setSelectItemData({
                ...selectItemData,
                search: "",
                shownOptions: options,
                show: false,
            });
        }

        window.addEventListener("click", handleClick);

        return () => {
            window.removeEventListener("click", handleClick);
        };
    }),
        [];

    const maxSelection = selectItemData.shownOptions.length - 1;

    return (
        <div className="relative" ref={selectRef}>
            <input
                type="text"
                className="p-2 rounded bg-light-200 dark:bg-dark-eval-1 focus:ring focus:ring-offset-2 focus:ring-primary-500"
                placeholder=". . ."
                value={selectItemData.search}
                onKeyDown={(event) => {
                    if (event.key === "Enter") {
                        if (onClickValue) {
                            onClickValue(
                                selectItemData.shownOptions[
                                    selectItemData.selected
                                ]
                            );
                        }

                        setSelectItemData({
                            ...selectItemData,
                            show: false,
                            shownOptions: options,
                            search: "",
                        });
                        return;
                    }

                    if (event.key === "ArrowDown") {
                        setSelectItemData({
                            ...selectItemData,
                            selected:
                                selectItemData.selected >= maxSelection
                                    ? 0
                                    : selectItemData.selected + 1,
                        });
                        return;
                    }

                    if (event.key === "ArrowUp") {
                        setSelectItemData({
                            ...selectItemData,
                            selected:
                                selectItemData.selected <= 0
                                    ? maxSelection
                                    : selectItemData.selected - 1,
                        });
                        return;
                    }
                }}
                onFocus={() => {
                    setSelectItemData({ ...selectItemData, show: true });
                }}
                onChange={(event) => {
                    setSelectItemData({
                        ...selectItemData,
                        show: true,
                        search: event.target.value,
                        shownOptions: options.filter((option) => {
                            if (
                                option.label
                                    .toLowerCase()
                                    .includes(event.target.value.toLowerCase())
                            )
                                return true;
                            return false;
                        }),
                        selected: 0,
                    });
                }}
            />
            <div
                className={
                    (selectItemData.show &&
                    selectItemData.shownOptions.length > 0
                        ? ""
                        : "hidden ") +
                    "mt-2 absolute py-2 bg-white dark:bg-dark-eval-0 rounded z-10 min-w-20 w-full max-h-72 overflow-y-auto"
                }
            >
                {selectItemData.shownOptions.map((option, key) => {
                    return (
                        <div
                            key={key}
                            className={
                                (key === 0 ? "border-t " : "") +
                                (key === selectItemData.selected
                                    ? "border-white border-t bg-primary-500 dark:bg-primary-500 hover:bg-primary-700 hover:dark:bg-primary-700 text-white "
                                    : "border-light-200 dark:border-light-400 hover:dark:bg-dark-eval-1 hover:bg-light-200 ") +
                                "p-2 border-b"
                            }
                            onClick={() => {
                                if (onClickValue) {
                                    onClickValue(option);
                                }

                                setSelectItemData({
                                    ...selectItemData,
                                    show: false,
                                    search: "",
                                    shownOptions: options,
                                });
                            }}
                        >
                            {option.label}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default SelectItem;
