import { PREVIEW_TYPES_ENUM } from "../enums/PreviewTypesEnum";

export interface PreviewerViewContainerInterface {
    title: string;
    viewsPath: string[];
    viewType: PREVIEW_TYPES_ENUM;
}
