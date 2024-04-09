import { FRAMEWORKS_ENUM } from "../enums/FrameworksEnum";
import { PROGRAMMING_LANGUAGES_ENUM } from "../enums/LanguagesEnum";
import { PROJECT_SIZES_ENUM } from "../enums/ProjectSizesEnum";

export interface ProjectsFilterDataInterface {
    show: boolean;
    search: string;
    stack: FRAMEWORKS_ENUM[];
    languages: PROGRAMMING_LANGUAGES_ENUM[];
    size: PROJECT_SIZES_ENUM | number;
}
