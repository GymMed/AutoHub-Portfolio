import { formatDate } from "../../../utils/dateFormater";
import DataSpliter from "../../General/DataSpliter";
import { useTranslation } from "react-i18next";
import { GithubApi } from "../../../utils/api/GithubAPI";
import GitIcon from "../../../assets/icons/Git.svg";
import GlobeIcon from "../../../assets/icons/Globe.svg";
import ForkIcon from "../../../assets/icons/CodeFork.svg";
import { useProjectsContext } from "../../General/Contexts/ProjectsProvider";
import { useNavigate, useSearchParams } from "react-router-dom";
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
import ProjectsFilter from "./ProjectsFilter";
import { ProjectsFilterDataInterface } from "../../../interfaces/ProjectsFilterDataInterface";
import Paginator from "../../General/Paginator";
import { PaginationDataInterface } from "../../../interfaces/Pagination/PaginationDataInterface";
import ProjectLanguages from "./Card/ProjectLanguages";
import { PROJECTS_PROVIDER_STATES_ENUM } from "../../../enums/ProjectsProviderStatesEnum";
import Loader from "../../General/Loader";
import ProjectStack from "./Card/ProjectStack";
import ProjectSize from "./Card/ProjectSize";
import { ProjectSizesNames } from "../../../enums/ProjectSizesEnum";
import FilterParamsHelper from "../../../utils/FilterParamsHelper";

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
    const [searchParams, setSearchParams] = useSearchParams();

    const { repositories, state } = useProjectsContext();

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
        search: FilterParamsHelper.getSearchFromQuery(searchParams),
        stack: FilterParamsHelper.getStackFromQuery(searchParams),
        languages: FilterParamsHelper.getLanguagesFromQuery(searchParams),
        size: FilterParamsHelper.getSizeFromQuery(searchParams),
    });

    const [paginationData, setPaginationData] =
        useState<PaginationDataInterface>({
            activePage: 0,
        });

    const reposPerPage = 12;
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
                searchParams.delete(
                    "stack",
                    FrameworksNames[frameworkEnum].toLowerCase()
                );
                setSearchParams(searchParams);
                return;
            }
        }

        data.stack.push(frameworkEnum);
        setFilterData(data);
        searchParams.append(
            "stack",
            FrameworksNames[frameworkEnum].toLowerCase()
        );
        searchParams.delete("page");
        setSearchParams(searchParams);
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
                searchParams.delete(
                    "languages",
                    ProgrammingLanguagesNames[languageEnum].toLowerCase()
                );

                setSearchParams(searchParams);
                return;
            }
        }

        data.languages.push(languageEnum);

        setFilterData(data);
        searchParams.append(
            "languages",
            ProgrammingLanguagesNames[languageEnum].toLowerCase()
        );
        searchParams.delete("page");
        setSearchParams(searchParams);
    }

    function setSizeSearchParams(newSize: number) {
        if (newSize < 0) {
            searchParams.delete("size");
        } else {
            searchParams.set("size", ProjectSizesNames[newSize].toLowerCase());
        }
        searchParams.delete("page");
        setSearchParams(searchParams);
    }

    useEffect(() => {
        setPaginationData({ ...paginationData, activePage: 0 });
    }, [filterData]);

    const navigate = useNavigate();
    const placeholderImg = "https://placehold.co/250x250";

    useEffect(() => {
        if (!repositories) {
            setShownRepositories([]);
            return;
        }

        const sortedRepositories = sortDESCByCreatedAt(
            repositories.filter((repository) => {
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

                if (
                    !filterData.stack.every((framework) => {
                        if (repository.data?.stack)
                            return repository.data?.stack.includes(framework);

                        if (repository.fetchData?.stack?.enums)
                            return repository.fetchData.stack.enums.includes(
                                framework
                            );
                    })
                ) {
                    return false;
                }

                if (
                    !filterData.languages.every((language) => {
                        if (repository.data?.languages)
                            return repository.data.languages.includes(language);

                        if (repository.fetchData?.languages?.enums)
                            return repository.fetchData.languages.enums.includes(
                                language
                            );

                        return false;
                    })
                ) {
                    return false;
                }

                if (filterData.size > -1) {
                    if (
                        !repository.data &&
                        repository.fetchData?.size &&
                        repository.fetchData.size === filterData.size
                    )
                        return true;

                    if (filterData.size !== repository.data?.size) return false;
                }

                return true;
            })
        );

        setShownRepositories(sortedRepositories);

        const currentPage = searchParams.get("page");

        if (!currentPage) return;

        setPaginationData({
            ...paginationData,
            activePage: Number(currentPage) - 1,
        });
    }, [filterData, repositories]);
    const fromRepos = paginationData.activePage * reposPerPage;

    return (
        <div className="flex flex-col gap-3 mb-auto">
            <ProjectsFilter
                projects={shownRepositories}
                filterData={filterData}
                setFilterData={setFilterData}
                addStack={addStack}
                addLanguage={addLanguage}
            />

            {state === PROJECTS_PROVIDER_STATES_ENUM.Loading && (
                <Loader text={t("pages.projects.loading")} />
            )}

            <div className="max-sm:grid-cols-1 max-md:grid-cols-1 max-lg:grid-cols-2 max-xl:grid-cols-3 max-2xl:grid-cols-4 p-5 grid grid-cols-4 gap-5 mb-auto">
                {shownRepositories &&
                    shownRepositories.length > 0 &&
                    shownRepositories
                        .slice(
                            fromRepos,
                            fromRepos + reposPerPage > shownRepositories.length
                                ? fromRepos +
                                      (shownRepositories.length - fromRepos)
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
                                        {(project.data?.images && (
                                            <img
                                                className="h-auto object-contain aspect-square rounded"
                                                src={
                                                    project.data.images.length >
                                                    0
                                                        ? project.data.images[0]
                                                        : placeholderImg
                                                }
                                                alt="image"
                                                loading="lazy"
                                            />
                                        )) || (
                                            <img
                                                className="h-auto object-contain aspect-square rounded"
                                                src={
                                                    project.fetchData?.images &&
                                                    project.fetchData.images
                                                        .length > 0
                                                        ? project.fetchData
                                                              .images[0]
                                                              .download_url
                                                        : placeholderImg
                                                }
                                                alt="image"
                                                loading="lazy"
                                            />
                                        )}
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
                                    {project.fork && (
                                        <div className="flex gap-3 justify-between">
                                            <div>
                                                <ForkIcon className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <MiniTag
                                                    name={"Forked Project"}
                                                />
                                            </div>
                                        </div>
                                    )}
                                    {(project.data && (
                                        <>
                                            <ProjectStack
                                                showStack={project.data.stack}
                                                filterStack={filterData.stack}
                                                onStackClick={addStack}
                                            />

                                            <ProjectLanguages
                                                showLanguages={
                                                    project.data.languages
                                                }
                                                filterLanguages={
                                                    filterData.languages
                                                }
                                                onLanguageClick={addLanguage}
                                            />

                                            <ProjectSize
                                                showSize={project.data.size}
                                                filterSize={filterData.size}
                                                onSizeClick={() => {
                                                    setFilterData(
                                                        (
                                                            previousFilterData
                                                        ) => {
                                                            const newSize =
                                                                previousFilterData.size >
                                                                -1
                                                                    ? -1
                                                                    : project
                                                                          .data
                                                                          .size;

                                                            setSizeSearchParams(
                                                                newSize
                                                            );

                                                            return {
                                                                ...previousFilterData,
                                                                show: true,
                                                                size: newSize,
                                                            };
                                                        }
                                                    );
                                                }}
                                            />
                                        </>
                                    )) ||
                                        (project.fetchData && (
                                            <>
                                                {project.fetchData.stack && (
                                                    <ProjectStack
                                                        showStack={
                                                            project.fetchData
                                                                .stack.enums
                                                        }
                                                        filterStack={
                                                            filterData.stack
                                                        }
                                                        onStackClick={addStack}
                                                    />
                                                )}
                                                {project.fetchData
                                                    .languages && (
                                                    <ProjectLanguages
                                                        showLanguages={
                                                            project.fetchData
                                                                .languages.enums
                                                        }
                                                        filterLanguages={
                                                            filterData.languages
                                                        }
                                                        onLanguageClick={
                                                            addLanguage
                                                        }
                                                    />
                                                )}
                                                {project.fetchData.size &&
                                                    project.fetchData.size >
                                                        -1 && (
                                                        <ProjectSize
                                                            showSize={
                                                                project
                                                                    .fetchData
                                                                    .size
                                                            }
                                                            filterSize={
                                                                filterData.size
                                                            }
                                                            onSizeClick={() => {
                                                                setFilterData(
                                                                    (
                                                                        previousFilterData
                                                                    ) => {
                                                                        const newSize =
                                                                            previousFilterData.size >
                                                                            -1
                                                                                ? -1
                                                                                : project
                                                                                      .fetchData
                                                                                      .size;

                                                                        setSizeSearchParams(
                                                                            newSize
                                                                        );
                                                                        return {
                                                                            ...previousFilterData,
                                                                            show: true,
                                                                            size: newSize,
                                                                        };
                                                                    }
                                                                );
                                                            }}
                                                        />
                                                    )}
                                            </>
                                        ))}
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
