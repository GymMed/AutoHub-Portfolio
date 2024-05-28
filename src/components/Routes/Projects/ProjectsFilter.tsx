import { useTranslation } from "react-i18next";
import FilterIcon from "../../../assets/icons/Filter.svg";
import SearchIcon from "../../../assets/icons/Search.svg";
import {
    FRAMEWORKS_ENUM,
    FrameworksNames,
} from "../../../enums/FrameworksEnum";
import {
    PROGRAMMING_LANGUAGES_ENUM,
    ProgrammingLanguagesNames,
} from "../../../enums/LanguagesEnum";
import {
    PROJECT_SIZES_ENUM,
    ProjectSizesNames,
} from "../../../enums/ProjectSizesEnum";
import { GithubRepositoryInterface } from "../../../interfaces/Github/GithubRepositoryInterface";
import { ProjectsFilterDataInterface } from "../../../interfaces/ProjectsFilterDataInterface";
// import MiniTag from "../../General/MiniTag";
// import SelectItem from "../../General/SelectItem";
import CrossIcon from "../../../assets/icons/Cross.svg";
import FullSelectItem from "../../General/FullSelectItem";
import { useSearchParams } from "react-router-dom";

interface ProjectsFilter {
    projects: GithubRepositoryInterface[];
    filterData: ProjectsFilterDataInterface;
    setFilterData: (filterData: ProjectsFilterDataInterface) => void;
    addStack: (frameworkEnum: FRAMEWORKS_ENUM) => void;
    addLanguage: (languageEnum: PROGRAMMING_LANGUAGES_ENUM) => void;
}

function ProjectsFilter({
    projects,
    filterData,
    setFilterData,
    addStack,
    addLanguage,
}: ProjectsFilter) {
    const { t } = useTranslation();
    const [searchParam, setSearchParam] = useSearchParams();

    const sizeOptions = Object.keys(PROJECT_SIZES_ENUM)
        .filter((value) => !isNaN(Number(value)))
        .map((key) => {
            return {
                value: key,
                label: ProjectSizesNames[Number(key)],
            };
        });
    sizeOptions.unshift({ value: "-1", label: t("projectsSizesEnum.All") });

    return (
        <div
            id="project-filter"
            className="flex flex-col items-center p-4 mx-5 mt-5 rounded bg-white dark:bg-dark-eval-1 text-light-500 dark:text-light-400"
        >
            <div className="w-full flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                    <div className="font-semibold">
                        {t("pages.projects.filter.projectsAvailable")}
                    </div>
                    <div className="font-bold">{projects.length}</div>
                </div>
                <div>
                    <button
                        type="button"
                        className="p-2 hover:bg-light-500 hover:text-white hover:dark:bg-light-400 hover:dark:text-dark-eval-0 focus:ring focus:ring-offset-2 focus:ring-light-400 focus:dark:ring-light-500 rounded transition-colors duration-300"
                        onClick={() => {
                            setFilterData({
                                ...filterData,
                                show: !filterData.show,
                            });
                        }}
                    >
                        <FilterIcon className="w-6 h-6" />
                    </button>
                </div>
            </div>

            <div
                className={
                    (filterData.show ? `max-h-[60rem] ` : "max-h-0 ") +
                    "overflow-hidden transition-all duration-700 rounded w-full"
                }
            >
                <div className="mt-3 flex flex-col items-center gap-3">
                    <div className="w-full relative flex items-center justify-center">
                        <input
                            type="text"
                            className="w-full py-2 pl-5 pr-2 shadow-inner dark:bg-dark-eval-0 bg-light-100 rounded-full placeholder:text-light-400 placeholder:dark:text-light-500 focus:ring focus:ring-offset-2 focus:ring-primary-500 focus:ring-offset-transparent"
                            placeholder={t("pages.projects.filter.search")}
                            onChange={(event) => {
                                const searchValue =
                                    event.target.value.toLowerCase();
                                setFilterData({
                                    ...filterData,
                                    search: searchValue,
                                });

                                if (searchValue)
                                    searchParam.set("search", searchValue);
                                else searchParam.delete("search");

                                setSearchParam(searchParam);
                            }}
                        />
                        <button
                            type="button"
                            className="absolute h-full flex items-center right-5"
                        >
                            <SearchIcon className="w-6 h-6" />
                        </button>
                    </div>

                    <div className="flex flex-wrap gap-3">
                        <FullSelectItem
                            header={t("pages.projects.filter.stack")}
                            selectItemData={{
                                options: Object.keys(FRAMEWORKS_ENUM)
                                    .filter((value) => !isNaN(Number(value)))
                                    .map((key) => {
                                        return {
                                            value: key,
                                            label: FrameworksNames[Number(key)],
                                        };
                                    }),
                                onClickValue: (option) => {
                                    addStack(Number(option.value));
                                },
                            }}
                            selectEnumData={filterData.stack.map(
                                (framework) => {
                                    return {
                                        value: framework,
                                        name: FrameworksNames[framework],
                                        onClick: () => addStack(framework),
                                        icon: <CrossIcon className="w-4 h-4" />,
                                    };
                                }
                            )}
                        />

                        <FullSelectItem
                            header={t("pages.projects.filter.languages")}
                            selectItemData={{
                                options: Object.keys(PROGRAMMING_LANGUAGES_ENUM)
                                    .filter((value) => !isNaN(Number(value)))
                                    .map((key) => {
                                        return {
                                            value: key,
                                            label: ProgrammingLanguagesNames[
                                                Number(key)
                                            ],
                                        };
                                    }),
                                onClickValue: (option) => {
                                    addLanguage(Number(option.value));
                                },
                            }}
                            selectEnumData={filterData.languages.map(
                                (language) => {
                                    return {
                                        value: language,
                                        name: ProgrammingLanguagesNames[
                                            language
                                        ],
                                        onClick: () => {
                                            addLanguage(language);
                                        },
                                        icon: <CrossIcon className="w-4 h-4" />,
                                    };
                                }
                            )}
                        />

                        <FullSelectItem
                            header={t("pages.projects.filter.size")}
                            selectItemData={{
                                options: sizeOptions,
                                onClickValue: (option) => {
                                    const newSize = Number(option.value);
                                    setFilterData({
                                        ...filterData,
                                        size: newSize,
                                    });

                                    searchParam.set(
                                        "size",
                                        ProjectSizesNames[newSize].toLowerCase()
                                    );
                                    setSearchParam(searchParam);
                                },
                            }}
                            selectEnumData={[
                                {
                                    value: filterData.size,
                                    name:
                                        filterData.size > -1
                                            ? ProjectSizesNames[filterData.size]
                                            : t("projectsSizesEnum.All"),
                                    onClick: () => {
                                        setFilterData({
                                            ...filterData,
                                            size: -1,
                                        });

                                        searchParam.delete("size");
                                        setSearchParam(searchParam);
                                    },
                                    icon:
                                        filterData.size > -1 ? (
                                            <CrossIcon className="w-4 h-4" />
                                        ) : (
                                            ""
                                        ),
                                },
                            ]}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectsFilter;
