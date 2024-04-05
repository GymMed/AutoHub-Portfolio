import { STATUS_ENUM } from "../enums/StatusManager";

export interface ValidationResultInterface {
    statusText: string;
    status: STATUS_ENUM;
}
