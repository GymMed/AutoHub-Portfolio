import { FRAMEWORKS_ENUM, FrameworksNames } from "../enums/FrameworksEnum";
import {
    PROGRAMMING_LANGUAGES_ENUM,
    ProgrammingLanguagesNames,
} from "../enums/LanguagesEnum";
import {
    PROJECT_SIZES_ENUM,
    ProjectSizesNames,
} from "../enums/ProjectSizesEnum";

class FilterParamsHelper {
    static getStackFromQuery(searchParams: URLSearchParams) {
        const stackQuery = searchParams.getAll("stack");
        const stackResult: FRAMEWORKS_ENUM[] = [];

        if (!stackQuery) {
            return stackResult;
        }

        for (const queryParam of stackQuery) {
            for (const nameKey in FrameworksNames) {
                if (FrameworksNames[nameKey].toLowerCase() === queryParam) {
                    stackResult.push(Number(nameKey));
                    break;
                }
            }
        }

        return stackResult;
    }

    static getLanguagesFromQuery(searchParams: URLSearchParams) {
        const languagesQuery = searchParams.getAll("languages");
        const languagesResult: PROGRAMMING_LANGUAGES_ENUM[] = [];

        if (!languagesQuery) {
            return languagesResult;
        }

        for (const queryParam of languagesQuery) {
            for (const nameKey in ProgrammingLanguagesNames) {
                if (
                    ProgrammingLanguagesNames[nameKey].toLowerCase() ===
                    queryParam.toLowerCase()
                ) {
                    languagesResult.push(Number(nameKey));
                    break;
                }
            }
        }
        return languagesResult;
    }

    static getSizeFromQuery(searchParams: URLSearchParams) {
        const sizeQuery = searchParams.get("size");
        const sizeResult: number | PROJECT_SIZES_ENUM = -1;

        if (!sizeQuery) {
            return sizeResult;
        }

        for (const nameKey in ProjectSizesNames) {
            if (
                ProjectSizesNames[nameKey].toLowerCase() ===
                sizeQuery.toLowerCase()
            )
                return Number(nameKey);
        }

        return sizeResult;
    }

    static getSearchFromQuery(searchParams: URLSearchParams) {
        const searchQuery = searchParams.get("search");
        const searchResult: string = "";

        if (!searchQuery) {
            return searchResult;
        }
        return searchQuery;
    }
}

export default FilterParamsHelper;
