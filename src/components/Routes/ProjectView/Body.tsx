import { formatDate } from "../../../utils/dateFormater";
import DataSpliter from "../../General/DataSpliter";
import { useTranslation } from "react-i18next";
import { GithubApi } from "../../../utils/api/GithubAPI";
import GitIcon from "../../../assets/icons/Git.svg";
import GlobeIcon from "../../../assets/icons/Globe.svg";
import { useProjectsContext } from "../../General/Contexts/ProjectsProvider";
import { useParams } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { FetchCacher } from "../../../utils/api/FetchCacher";
import { getProjects } from "../../../utils/additionalProjectsData";
import Previewer from "../../General/Previewer/Previewer";
import { PREVIEW_TYPES_ENUM } from "../../../enums/PreviewTypesEnum";
import IconLink from "./IconLink";
import { PreviewerViewContainerInterface } from "../../../interfaces/PreviewerViewContainerInterface";
import { GithubRepositoryInterface } from "../../../interfaces/Github/GithubRepositoryInterface";

interface RepositoryDataInterface {
    repository: object;
    commits: object[];
}

function ProjectViewBody() {
    const [repositoryData, setRepositoryData] =
        useState<RepositoryDataInterface>({
            repository: {},
            commits: [],
        });

    const { t } = useTranslation();
    const { repositories } = useProjectsContext();
    const { name } = useParams();

    async function getRepository() {
        if (!name) return;

        const repository: GithubRepositoryInterface = await FetchCacher.fetch(
            GithubApi.getRepository(name)
        );
        console.log(repository);
        const projects = await getProjects();

        for (const project of projects) {
            if (project.id === repository.id) {
                repository.data = project;
            }
        }

        const commits = await getCommits();

        setRepositoryData({ ...repositoryData, repository, commits });
    }

    async function getCommits() {
        if (!name) return;

        const commits = await FetchCacher.fetch(GithubApi.getCommits(name));
        return commits;
    }

    const getViewData = useMemo(() => {
        const views: PreviewerViewContainerInterface[] = [];
        const reposData = repositoryData.repository.data;

        if (!reposData) return [];

        if (reposData.gifs && reposData.gifs.length > 0) {
            views.push({
                title: t("pages.projectView.gifs"),
                viewsPath: reposData.gifs,
                viewType: PREVIEW_TYPES_ENUM.Gif,
            });
        }

        if (reposData.images && reposData.images.length > 0) {
            views.push({
                title: t("pages.projectView.images"),
                viewsPath: reposData.images,
                viewType: PREVIEW_TYPES_ENUM.Image,
            });
        }

        return views;
    }, [repositoryData]);

    useEffect(() => {
        getRepository();
    }, []);

    return (
        <div className="mb-auto items-center flex flex-col gap-3 dark:text-light-400">
            {repositoryData.repository && (
                <div className="p-5 flex flex-col gap-3">
                    {repositoryData.repository.data &&
                        getViewData.length > 0 && (
                            <Previewer views={getViewData} />
                        )}
                    <div className="text-2xl font-medium text-center">
                        {repositoryData.repository.name}
                    </div>
                    <div className="rounded shadow-lg p-3 bg-white dark:bg-dark-eval-1">
                        <div className="flex justify-between items-center">
                            <div>View:</div>
                            <div className="flex gap-3 items-center justify-center">
                                <IconLink
                                    href={repositoryData.repository.html_url}
                                >
                                    <GitIcon width="24" height="24" />
                                </IconLink>
                                {repositoryData.repository.has_pages && (
                                    <IconLink
                                        href={GithubApi.getPages(
                                            repositoryData.repository.name
                                        )}
                                    >
                                        <GlobeIcon width="24" height="24" />
                                    </IconLink>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ProjectViewBody;
