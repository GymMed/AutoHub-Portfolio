import { FRAMEWORKS_ENUM } from "../../enums/FrameworksEnum";
import { PROGRAMMING_LANGUAGES_ENUM } from "../../enums/LanguagesEnum";
import { PROJECT_SIZES_ENUM } from "../../enums/ProjectSizesEnum";
import { GithubContentItemInteface } from "./GithubContentItemInteface";

export interface GithubRepositoryFetchDataInterface {
    languages?: {
        statistics: object;
        enums: PROGRAMMING_LANGUAGES_ENUM[];
    };
    stack?: {
        enums: FRAMEWORKS_ENUM[];
    };
    size?: number | PROJECT_SIZES_ENUM;
    gifs?: GithubContentItemInteface[];
    images?: GithubContentItemInteface[];
}
