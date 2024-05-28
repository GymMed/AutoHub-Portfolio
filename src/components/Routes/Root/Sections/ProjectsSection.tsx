import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FetchCacher } from "../../../../utils/api/FetchCacher";
import { GithubApi } from "../../../../utils/api/GithubAPI";
import RepositoriesProcessor from "../../../../utils/RepositoriesProcessor";
import Loader from "../../../General/Loader";
import { PROJECTS_PROVIDER_STATES_ENUM } from "../../../../enums/ProjectsProviderStatesEnum";
import { GithubRepositoryInterface } from "../../../../interfaces/Github/GithubRepositoryInterface";
import { useNavigate } from "react-router-dom";
import ProjectCard from "./ProjectsSection/ProjectCard";
import { AVAILABLE_ROUTES } from "../../../../utils/constants";
import { ROUTES_ENUM } from "../../../../enums/RoutesEnums";
import ProjectCardHighlight from "./ProjectsSection/ProjectCardHighlight";

function ProjectsSection() {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const [state, setState] = useState<PROJECTS_PROVIDER_STATES_ENUM>(
        PROJECTS_PROVIDER_STATES_ENUM.NotStarted
    );
    const [errorMessage, setErrorMessage] = useState<string>("");
    const [repositories, setRepositories] = useState<
        GithubRepositoryInterface[]
    >([]);

    async function getProjects() {
        const urls: string[] = [
            GithubApi.getRepository("BIT-2048-Game"),
            GithubApi.getRepository("BIT-Alpine-Cocktails"),
            GithubApi.getRepository("BIT-React-Vehicle-Rent-CRUD"),
        ];

        const repos = await FetchCacher.multipleFetches(urls);
        await RepositoriesProcessor.process(repos);

        let fetchError = false;
        for (const repo of repos) {
            if (repo.documentation_url) {
                fetchError = true;
                setErrorMessage(repo.message);
                break;
            }
        }

        if (!fetchError) setState(PROJECTS_PROVIDER_STATES_ENUM.Finished);
        else setState(PROJECTS_PROVIDER_STATES_ENUM.Error);
        setRepositories(repos);
    }

    useEffect(() => {
        setState(PROJECTS_PROVIDER_STATES_ENUM.Loading);
        getProjects();
    }, []);

    function showProjects() {
        switch (state) {
            case PROJECTS_PROVIDER_STATES_ENUM.Loading: {
                return (
                    <div className="flex items-center justify-center w-full">
                        <Loader />
                    </div>
                );
            }
            case PROJECTS_PROVIDER_STATES_ENUM.Finished: {
                return (
                    <div className="grid max-lg:grid-cols-1 grid-cols-3 items-center justify-between gap-3">
                        {repositories.map((repository, key) => {
                            return (
                                <div key={key} className="group/card">
                                    <ProjectCard repository={repository} />
                                    <ProjectCardHighlight />
                                </div>
                            );
                        })}
                    </div>
                );
            }
            case PROJECTS_PROVIDER_STATES_ENUM.Error: {
                return (
                    <div className="flex flex-col gap-2 text-red-500 text-center w-full font-semibold text-lg">
                        <div>{t("components.Loader.error")}</div>
                        <div className="text-sm">{errorMessage}</div>
                    </div>
                );
            }
            default: {
                return <></>;
            }
        }
    }

    return (
        <section>
            <div className="p-5 flex flex-col gap-7 mt-7">
                <div className="text-center tracking-wider text-3xl font-semibold text-light-500 dark:text-light-400">
                    {t("pages.home.projects.header")}
                </div>
                {showProjects()}
                {state === PROJECTS_PROVIDER_STATES_ENUM.Finished && (
                    <div className="flex items-center justify-center">
                        <button
                            type="button"
                            className="tracking-wide bg-gradient-to-br from-primary-500 to-primary-700 hover:from-primary-700 hover:bg-primary-900 text-white py-2 px-4 rounded font-semibold"
                            onClick={() => {
                                navigate(
                                    AVAILABLE_ROUTES[ROUTES_ENUM.Projects].path
                                );
                            }}
                        >
                            {t("pages.home.projects.loadMore")}
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}

export default ProjectsSection;
