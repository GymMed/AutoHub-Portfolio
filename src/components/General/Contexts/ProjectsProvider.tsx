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

interface projectsProviderInterface {
    children: ReactNode;
}

interface projectsContextInterface {
    repositories: object[] | null;
    setRepositories: React.Dispatch<React.SetStateAction<object[] | null>>;
}

const ProjecsContext = createContext<projectsContextInterface>({
    repositories: null,
    setRepositories: () => {},
});

const useProjectsContext = () => useContext(ProjecsContext);

function ProjectsProvider({ children }: projectsProviderInterface) {
    const [repositories, setRepositories] = useState<object[] | null>([]);

    async function getGitHubRepositories() {
        const repos = await FetchCacher.fetch(
            GithubApi.getSortedRepositories()
        );

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
        getGitHubRepositories();
    }, []);

    return (
        <ProjecsContext.Provider value={{ repositories, setRepositories }}>
            {children}
        </ProjecsContext.Provider>
    );
}

export { useProjectsContext, ProjectsProvider };
