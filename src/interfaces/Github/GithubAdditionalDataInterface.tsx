import { FRAMEWORKS_ENUM } from "../../enums/FrameworksEnum";
import { PROGRAMMING_LANGUAGES_ENUM } from "../../enums/LanguagesEnum";
import { PROJECT_SIZES_ENUM } from "../../enums/ProjectSizesEnum";
import { PROJECT_STATUSES_ENUM } from "../../enums/ProjectStatusEnum";

export interface GithubAdditionalDataInterface {
    id: number;
    name?: string;
    size: PROJECT_SIZES_ENUM;
    status: PROJECT_STATUSES_ENUM;
    gifs?: string[];
    images?: string[];
    stack: FRAMEWORKS_ENUM[];
    languages: PROGRAMMING_LANGUAGES_ENUM[];
}
