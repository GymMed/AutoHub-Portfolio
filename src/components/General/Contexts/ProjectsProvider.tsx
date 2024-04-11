import React, {
    ReactNode,
    createContext,
    useCallback,
    useContext,
    useEffect,
    useState,
} from "react";
import { FetchCacher } from "../../../utils/api/FetchCacher";
import { GithubApi } from "../../../utils/api/GithubAPI";
import { getProjects } from "../../../utils/additionalProjectsData.tsx";
import { GithubRepositoryInterface } from "../../../interfaces/Github/GithubRepositoryInterface.tsx";
import { useOwnerContext } from "./OwnerProvider.tsx";
import {
    PROGRAMMING_LANGUAGES_ENUM,
    ProgrammingLanguagesNames,
} from "../../../enums/LanguagesEnum.tsx";
import { PROJECTS_PROVIDER_STATES_ENUM } from "../../../enums/ProjectsProviderStatesEnum.tsx";

interface projectsProviderInterface {
    children: ReactNode;
}

interface projectsContextInterface {
    repositories: GithubRepositoryInterface[] | null;
    setRepositories: React.Dispatch<
        React.SetStateAction<GithubRepositoryInterface[] | null>
    >;
    totalPages: number;
    setTotalPages: React.Dispatch<React.SetStateAction<number>>;
    state: PROJECTS_PROVIDER_STATES_ENUM;
    setState: React.Dispatch<
        React.SetStateAction<PROJECTS_PROVIDER_STATES_ENUM>
    >;
}

const ProjectsContext = createContext<projectsContextInterface>({
    repositories: null,
    setRepositories: () => {},
    totalPages: 1,
    setTotalPages: () => {},
    state: PROJECTS_PROVIDER_STATES_ENUM.NotStarted,
    setState: () => {},
});

const useProjectsContext = () => useContext(ProjectsContext);

function ProjectsProvider({ children }: projectsProviderInterface) {
    const [repositories, setRepositories] = useState<
        GithubRepositoryInterface[] | null
    >([]);

    const [totalPages, setTotalPages] = useState<number>(1);
    const repositoriesPerAPICall = 30;

    const [state, setState] = useState<PROJECTS_PROVIDER_STATES_ENUM>(
        PROJECTS_PROVIDER_STATES_ENUM.NotStarted
    );

    const { owner, totalRepositories } = useOwnerContext();

    // async function getGitHubRepositories() {
    //     const repos = await FetchCacher.fetch(
    //         GithubApi.getSortedRepositories()
    //     );

    //     if (!Array.isArray(repos)) return;

    //     const projects = await getProjects();

    //     for (const repository of repos) {
    //         for (const project of projects) {
    //             if (project.id === repository.id) repository.data = project;
    //         }
    //     }

    //     console.log(repos, "repos");
    //     setRepositories(repos);
    // }

    const getLanguagesForProjects = useCallback(
        async (repos: GithubRepositoryInterface[]) => {
            for (const repo of repos) {
                if (!repo.fetchData) {
                    repo.fetchData = {};

                    if (!repo.fetchData.languages)
                        repo.fetchData.languages = {
                            statistics: {},
                            enums: [],
                        };

                    repo.fetchData.languages.statistics =
                        await FetchCacher.fetch(
                            GithubApi.getRepositoryLanguages(repo.name)
                        );

                    for (const language of Object.keys(
                        repo.fetchData.languages.statistics
                    )) {
                        for (const enumKey in ProgrammingLanguagesNames) {
                            if (
                                language.toLowerCase() ===
                                ProgrammingLanguagesNames[enumKey].toLowerCase()
                            ) {
                                repo.fetchData.languages.enums.push(
                                    Number(
                                        enumKey
                                    ) as PROGRAMMING_LANGUAGES_ENUM
                                );
                                break;
                            }
                        }
                    }
                }
            }
        },
        [repositories]
    );

    async function getAllGitHubRepositories() {
        if (!owner) return [];

        const pagesToFetch = Math.ceil(
            owner.public_repos / repositoriesPerAPICall
        );
        const pagesPlusOne = pagesToFetch + 1;
        const urls: string[] = [];

        for (let currentPage = 1; currentPage < pagesPlusOne; currentPage++) {
            urls.push(GithubApi.getRepositories(currentPage));
        }
        const reposArray: GithubRepositoryInterface[][] =
            await FetchCacher.multipleFetches(urls);

        const repos = [];
        let currentRepo = 0;
        for (
            let currentPage = 0;
            currentPage < reposArray.length;
            currentPage++
        ) {
            for (
                currentRepo = 0;
                currentRepo < reposArray[currentPage].length;
                currentRepo++
            ) {
                repos.push(reposArray[currentPage][currentRepo]);
            }
        }

        if (!Array.isArray(repos)) return;

        const projects = await getProjects();
        let foundMatch = false;
        const noMatchesRepos = [];

        for (const repository of repos) {
            foundMatch = false;

            for (const project of projects) {
                if (project.id === repository.id) {
                    repository.data = project;
                    foundMatch = true;
                    break;
                }
            }

            if (foundMatch) {
                foundMatch = false;
            } else {
                noMatchesRepos.push(repository);
            }
        }

        await getLanguagesForProjects(noMatchesRepos);

        console.log(repos, "repos");
        setRepositories(repos);
        setState(PROJECTS_PROVIDER_STATES_ENUM.Finished);
    }

    useEffect(() => {
        setTotalPages(Math.ceil(totalRepositories / repositoriesPerAPICall));
    }, [totalRepositories]);

    useEffect(() => {
        // getGitHubRepositories();
        setState(PROJECTS_PROVIDER_STATES_ENUM.Loading);
        getAllGitHubRepositories();
    }, []);

    return (
        <ProjectsContext.Provider
            value={{
                repositories,
                setRepositories,
                totalPages,
                setTotalPages,
                state,
                setState,
            }}
        >
            {children}
        </ProjectsContext.Provider>
    );
}

export { useProjectsContext, ProjectsProvider };
