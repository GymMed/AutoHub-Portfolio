import { SelectItemOptionInterface } from "./SelectItemOptionInterface";

export interface SelectItemInterface {
    options: SelectItemOptionInterface[];
    onClickValue?: (option: SelectItemOptionInterface) => void;
}
