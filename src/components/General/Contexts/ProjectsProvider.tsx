import React, {
    ReactNode,
    createContext,
    useContext,
    useEffect,
    useState,
} from "react";
import { FetchCacher } from "../../../utils/api/FetchCacher";
import { GithubApi } from "../../../utils/api/GithubAPI";
import { getProjects } from "../../../utils/additionalProjectsData.tsx";
import { GithubRepositoryInterface } from "../../../interfaces/Github/GithubRepositoryInterface.tsx";
import { useOwnerContext } from "./OwnerProvider.tsx";

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
}

const ProjectsContext = createContext<projectsContextInterface>({
    repositories: null,
    setRepositories: () => {},
    totalPages: 1,
    setTotalPages: () => {},
});

const useProjectsContext = () => useContext(ProjectsContext);

function ProjectsProvider({ children }: projectsProviderInterface) {
    const [repositories, setRepositories] = useState<
        GithubRepositoryInterface[] | null
    >([]);

    const [totalPages, setTotalPages] = useState<number>(1);
    const repositoriesPerAPICall = 30;

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

        for (const repository of repos) {
            for (const project of projects) {
                if (project.id === repository.id) repository.data = project;
            }
        }

        console.log(repos, "repos");
        setRepositories(repos);
    }

    useEffect(() => {
        setTotalPages(Math.ceil(totalRepositories / repositoriesPerAPICall));
    }, [totalRepositories]);

    useEffect(() => {
        // getGitHubRepositories();
        getAllGitHubRepositories();
    }, []);

    return (
        <ProjectsContext.Provider
            value={{
                repositories,
                setRepositories,
                totalPages,
                setTotalPages,
            }}
        >
            {children}
        </ProjectsContext.Provider>
    );
}

export { useProjectsContext, ProjectsProvider };
