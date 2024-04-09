import { formatDate } from "../../../utils/dateFormater";
import DataSpliter from "../../General/DataSpliter";
import { useTranslation } from "react-i18next";
import { GithubApi } from "../../../utils/api/GithubAPI";
import GitIcon from "../../../assets/icons/Git.svg";
import GlobeIcon from "../../../assets/icons/Globe.svg";
import StackIcon from "../../../assets/icons/Stack.svg";
import CodeIcon from "../../../assets/icons/Code.svg";
import RulersIcon from "../../../assets/icons/Rulers.svg";
import { useProjectsContext } from "../../General/Contexts/ProjectsProvider";
import { useNavigate } from "react-router-dom";
import {
    FRAMEWORKS_ENUM,
    FrameworksNames,
} from "../../../enums/FrameworksEnum";
import {
    PROGRAMMING_LANGUAGES_ENUM,
    ProgrammingLanguagesNames,
} from "../../../enums/LanguagesEnum";
import MiniTag from "../../General/MiniTag";
import { useCallback, useEffect, useState } from "react";
import { GithubRepositoryInterface } from "../../../interfaces/Github/GithubRepositoryInterface";
import { ProjectSizesNames } from "../../../enums/ProjectSizesEnum";
import ProjectsFilter from "./ProjectsFilter";
import { ProjectsFilterDataInterface } from "../../../interfaces/ProjectsFilterDataInterface";
import Paginator from "../../General/Paginator";
import { PaginationDataInterface } from "../../../interfaces/Pagination/PaginationDataInterface";

function makeHighlight(text: string, searchString: string) {
    const regex = new RegExp(`(${searchString})`, "gi");
    const parts = text.split(regex);

    if (parts.length < 2) return text;

    return parts.map((part, index) => {
        if (index % 2 === 1)
            return (
                <div
                    key={index}
                    className="border-2 border-accent-500 w-fit px-1 bg-gradient-to-br from-accent-600 to-accent-800 rounded"
                >
                    {part}
                </div>
            );
        else return part;
    });
}

function getSearchString(text: string, searchString: string) {
    return searchString && searchString !== ""
        ? makeHighlight(text, searchString)
        : text;
}

function ProjectsBody() {
    const { t } = useTranslation();
    const { repositories } = useProjectsContext();

    // const sortDESCByCreatedAt = useMemo(() => {
    //     if (!repositories) return [];
    //     return [...repositories].sort(
    //         (a, b) => Date.parse(b.created_at) - Date.parse(a.created_at)
    //     );
    // }, [repositories]);

    const sortDESCByCreatedAt = useCallback(
        (repos: GithubRepositoryInterface[] | null) => {
            if (!repos) return [];
            return repos.sort(
                (a, b) => Date.parse(b.created_at) - Date.parse(a.created_at)
            );
        },
        []
    );

    const [shownRepositories, setShownRepositories] = useState<
        GithubRepositoryInterface[]
    >(sortDESCByCreatedAt(repositories));

    const [filterData, setFilterData] = useState<ProjectsFilterDataInterface>({
        show: false,
        search: "",
        stack: [],
        languages: [],
        size: -1,
    });

    const [paginationData, setPaginationData] =
        useState<PaginationDataInterface>({
            activePage: 0,
        });

    const reposPerPage = 10;
    const totalPaginationLinksForSide = 2;
    const totalPages = Math.ceil(shownRepositories.length / reposPerPage);

    function addStack(frameworkEnum: FRAMEWORKS_ENUM) {
        const data = { ...filterData };
        data.show = true;

        for (
            let currentFramework = 0;
            currentFramework < filterData.stack.length;
            currentFramework++
        ) {
            if (frameworkEnum === filterData.stack[currentFramework]) {
                data.stack.splice(currentFramework, 1);
                setFilterData(data);
                return;
            }
        }

        data.stack.push(frameworkEnum);
        setFilterData(data);
    }

    function addLanguage(languageEnum: PROGRAMMING_LANGUAGES_ENUM) {
        const data = { ...filterData };
        data.show = true;

        for (
            let currentLanguage = 0;
            currentLanguage < filterData.languages.length;
            currentLanguage++
        ) {
            if (languageEnum === filterData.languages[currentLanguage]) {
                data.languages.splice(currentLanguage, 1);
                setFilterData(data);
                return;
            }
        }

        data.languages.push(languageEnum);
        setFilterData(data);
    }

    const navigate = useNavigate();
    const placeholderImg = "https://placehold.co/250x250";

    // useEffect(() => {
    //     setCurrentPages(totalPages);
    // }, [totalPages]);

    useEffect(() => {
        const sortedRepositories = sortDESCByCreatedAt(repositories).filter(
            (repository) => {
                if (filterData.search !== "") {
                    if (
                        !repository.name
                            .toLowerCase()
                            .includes(filterData.search) &&
                        !repository.name
                            .toLowerCase()
                            .replace(/-/g, " ")
                            .includes(filterData.search)
                    ) {
                        return false;
                    }
                }

                if (
                    filterData.stack.length < 1 &&
                    filterData.languages.length < 1 &&
                    filterData.size < 0
                ) {
                    return true;
                }

                if (!repository.data) {
                    return false;
                }

                if (
                    !filterData.stack.every((framework) =>
                        repository.data?.stack.includes(framework)
                    )
                ) {
                    return false;
                }

                if (
                    !filterData.languages.every((language) =>
                        repository.data?.languages.includes(language)
                    )
                ) {
                    return false;
                }

                if (
                    filterData.size > -1 &&
                    filterData.size !== repository.data.size
                )
                    return false;

                return true;
            }
        );

        setShownRepositories(sortedRepositories);
    }, [filterData, repositories]);
    const fromRepos = paginationData.activePage * reposPerPage;

    return (
        <div className="flex flex-col gap-3">
            <ProjectsFilter
                projects={shownRepositories}
                filterData={filterData}
                setFilterData={setFilterData}
                addStack={addStack}
                addLanguage={addLanguage}
            />

            <div className="max-sm:grid-cols-1 max-md:grid-cols-1 max-lg:grid-cols-2 max-xl:grid-cols-3 max-2xl:grid-cols-4 p-5 grid grid-cols-4 gap-5 mb-auto">
                {shownRepositories &&
                    shownRepositories.length > 0 &&
                    shownRepositories
                        .slice(
                            fromRepos,
                            fromRepos + reposPerPage > shownRepositories.length
                                ? shownRepositories.length - fromRepos
                                : fromRepos + reposPerPage
                        )
                        .map((project, key) => {
                            return (
                                <div
                                    key={key}
                                    className="group/card flex flex-col gap-1 hover:shadow-2xl hover:cursor-pointer hover:from-primary-700 hover:to-primary-900 from-primary-500 to-primary-700 text-white bg-gradient-to-br rounded shadow-md p-3"
                                    onClick={() => {
                                        navigate(
                                            `/projects/${project.name}/view`
                                        );
                                    }}
                                >
                                    <div className="p-2 w-full relative aspect-square shadow-inner bg-light-100 dark:bg-dark-eval-0 group-hover/card:bg-light-100 group-hover/card:dark:bg-dark-eval-0 rounded flex items-center justify-center">
                                        <div
                                            className="left-0 top-0 max-md:hidden group/img opacity-0 hover:opacity-100 w-full h-full absolute rounded flex flex-col justify-between"
                                            onClick={(event) => {
                                                event.stopPropagation();
                                            }}
                                        >
                                            <div className="rounded-t group-hover/img:w-full w-0 transform bg-neutral-900 opacity-75 duration-700 h-0 group-hover/img:h-1/2 border-b border-white flex items-center justify-center">
                                                <a
                                                    target="_blank"
                                                    href={project.html_url}
                                                    className="hidden group-hover/img:block border border-white p-2 rounded hover:border-green-500 hover:text-green-500"
                                                >
                                                    <GitIcon
                                                        width="24"
                                                        height="24"
                                                    />
                                                </a>
                                            </div>
                                            <div className="self-end rounded-b group-hover/img:w-full w-0 h-0 group-hover/img:h-1/2 transform bg-neutral-900 opacity-75 duration-700 flex items-center justify-center">
                                                {project.has_pages && (
                                                    <a
                                                        target="_blank"
                                                        href={GithubApi.getPages(
                                                            project.name
                                                        )}
                                                        className="hidden group-hover/img:block border border-white p-2 rounded hover:border-green-500 hover:text-green-500"
                                                    >
                                                        <GlobeIcon
                                                            width="24"
                                                            height="24"
                                                        />
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                        <img
                                            className="h-auto object-contain aspect-square rounded"
                                            src={
                                                project.data?.images &&
                                                project.data.images.length > 0
                                                    ? project.data.images[0]
                                                    : placeholderImg
                                            }
                                            alt="image"
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="text-center font-semibold flex flex-wrap items-center justify-center py-1 mb-auto">
                                        {getSearchString(
                                            project.data?.name
                                                ? project.data.name
                                                : project.name.replace(
                                                      /-/g,
                                                      " "
                                                  ),
                                            filterData.search
                                        )}
                                    </div>
                                    {project.data && (
                                        <>
                                            <div className="flex gap-3 justify-between">
                                                <div>
                                                    <StackIcon className="w-6 h-6" />
                                                </div>
                                                <div className="flex gap-1 justify-end flex-wrap">
                                                    {(project.data.stack &&
                                                        project.data.stack
                                                            .length > 0 &&
                                                        project.data.stack.map(
                                                            (
                                                                framework,
                                                                key
                                                            ) => {
                                                                return (
                                                                    <MiniTag
                                                                        key={
                                                                            key
                                                                        }
                                                                        name={
                                                                            FrameworksNames[
                                                                                framework
                                                                            ]
                                                                        }
                                                                        onClick={() => {
                                                                            addStack(
                                                                                framework
                                                                            );
                                                                        }}
                                                                        isActive={filterData.stack.includes(
                                                                            framework
                                                                        )}
                                                                    />
                                                                );
                                                            }
                                                        )) || (
                                                        <MiniTag
                                                            name={t(
                                                                "projectsStackEnum.None"
                                                            )}
                                                        />
                                                    )}
                                                </div>
                                            </div>
                                            <div className="flex gap-3 justify-between">
                                                <div>
                                                    <CodeIcon className="w-6 h-6" />
                                                </div>
                                                <div className="flex gap-1 justify-end flex-wrap">
                                                    {(project.data.languages &&
                                                        project.data.languages
                                                            .length > 0 &&
                                                        project.data.languages.map(
                                                            (language, key) => {
                                                                return (
                                                                    <MiniTag
                                                                        key={
                                                                            key
                                                                        }
                                                                        name={
                                                                            ProgrammingLanguagesNames[
                                                                                language
                                                                            ]
                                                                        }
                                                                        onClick={() => {
                                                                            addLanguage(
                                                                                language
                                                                            );
                                                                        }}
                                                                        isActive={filterData.languages.includes(
                                                                            language
                                                                        )}
                                                                    />
                                                                );
                                                            }
                                                        )) || (
                                                        <MiniTag name="None" />
                                                    )}
                                                </div>
                                            </div>
                                            <div className="flex gap-3 justify-between">
                                                <div>
                                                    <RulersIcon className="w-6 h-6" />
                                                </div>
                                                <div className="flex gap-1 justify-end flex-wrap">
                                                    {
                                                        <MiniTag
                                                            name={
                                                                ProjectSizesNames[
                                                                    project.data
                                                                        .size
                                                                ]
                                                            }
                                                            onClick={() => {
                                                                setFilterData(
                                                                    (
                                                                        previousFilterData
                                                                    ) => {
                                                                        return {
                                                                            ...previousFilterData,
                                                                            show: true,
                                                                            size:
                                                                                previousFilterData.size >
                                                                                -1
                                                                                    ? -1
                                                                                    : project
                                                                                          .data
                                                                                          .size,
                                                                        };
                                                                    }
                                                                );
                                                            }}
                                                            isActive={
                                                                filterData.size ===
                                                                project.data
                                                                    .size
                                                            }
                                                        />
                                                    }
                                                </div>
                                            </div>
                                        </>
                                    )}
                                    {project.created_at && (
                                        <DataSpliter
                                            keyText={t(
                                                "pages.projects.createdAt"
                                            )}
                                            valueText={formatDate(
                                                project.created_at
                                            )}
                                        />
                                    )}
                                    {project.pushed_at && (
                                        <DataSpliter
                                            keyText={t(
                                                "pages.projects.pushedAt"
                                            )}
                                            valueText={formatDate(
                                                project.pushed_at
                                            )}
                                        />
                                    )}
                                </div>
                            );
                        })}
            </div>

            {shownRepositories.length > 0 && (
                <Paginator
                    paginationData={paginationData}
                    setPaginationData={setPaginationData}
                    totalPages={totalPages}
                    totalPaginationLinksForSide={totalPaginationLinksForSide}
                />
            )}
        </div>
    );
}

export default ProjectsBody;
