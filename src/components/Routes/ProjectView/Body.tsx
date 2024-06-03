import { formatDate } from "../../../utils/dateFormater";
import { useTranslation } from "react-i18next";
import { GithubApi } from "../../../utils/api/GithubAPI";
import GitIcon from "../../../assets/icons/Git.svg";
import GlobeIcon from "../../../assets/icons/Globe.svg";
import ForkIcon from "../../../assets/icons/CodeFork.svg";
import { useParams } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { FetchCacher } from "../../../utils/api/FetchCacher";
import Previewer from "../../General/Previewer/Previewer";
import { PREVIEW_TYPES_ENUM } from "../../../enums/PreviewTypesEnum";
import IconLink from "./IconLink";
import { PreviewerViewContainerInterface } from "../../../interfaces/PreviewerViewContainerInterface";
import { GithubRepositoryInterface } from "../../../interfaces/Github/GithubRepositoryInterface";
import { GithubRepositoryFetchDataInterface } from "../../../interfaces/Github/GithubRepositoryFetchDataInterface";
import { GithubContentItemInteface } from "../../../interfaces/Github/GithubContentItemInteface";
import RepositoriesProcessor from "../../../utils/RepositoriesProcessor";
import StackViews from "./Card/StackViews";
import LanguagesViews from "./Card/LanguagesViews";
import SizeView from "./Card/SizeView";
import { GithubAdditionalDataInterface } from "../../../interfaces/Github/GithubAdditionalDataInterface";

interface RepositoryDataInterface {
    repository: GithubRepositoryInterface | null;
    commits: object[];
}

function ProjectViewBody() {
    const [repositoryData, setRepositoryData] =
        useState<RepositoryDataInterface>({
            repository: null,
            commits: [],
        });

    const { t } = useTranslation();
    const { name } = useParams();

    async function getRepository() {
        if (!name) return;

        const repository: GithubRepositoryInterface = await FetchCacher.fetch(
            GithubApi.getRepository(name)
        );

        if (!Array.isArray(repository))
            await RepositoriesProcessor.process([repository]);

        const commits = await getCommits();
        console.log(repository, commits);

        setRepositoryData({ ...repositoryData, repository, commits });
    }

    async function getCommits() {
        if (!name) return;

        const commits = await FetchCacher.fetch(GithubApi.getCommits(name));
        return commits;
    }

    function getStringsFromGithubContentData(
        contentData: GithubContentItemInteface[]
    ) {
        const urls: string[] = [];

        for (const item of contentData) {
            urls.push(item.download_url);
        }

        return urls;
    }

    function getViewsFromFetch(fetchData: GithubRepositoryFetchDataInterface) {
        const views: PreviewerViewContainerInterface[] = [];

        if (fetchData.gifs && fetchData.gifs.length > 0) {
            views.push({
                title: t("pages.projectView.gifs"),
                viewsPath: getStringsFromGithubContentData(fetchData.gifs),
                viewType: PREVIEW_TYPES_ENUM.Gif,
            });
        }

        if (fetchData.images && fetchData.images.length > 0) {
            views.push({
                title: t("pages.projectView.images"),
                viewsPath: getStringsFromGithubContentData(fetchData.images),
                viewType: PREVIEW_TYPES_ENUM.Image,
            });
        }

        return views;
    }

    function getViews(reposData: GithubAdditionalDataInterface) {
        const views: PreviewerViewContainerInterface[] = [];

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
    }

    const getViewData = useMemo(() => {
        if (!repositoryData.repository) return [];

        if (!repositoryData.repository.data) {
            if (!repositoryData.repository.fetchData) return [];

            const fetchData = repositoryData.repository.fetchData;

            return getViewsFromFetch(fetchData);
        }

        const reposData = repositoryData.repository.data;

        if (!reposData) return [];

        return getViews(reposData);
    }, [repositoryData]);

    useEffect(() => {
        getRepository();
    }, []);

    return (
        <div className="mb-auto items-center flex flex-col gap-3 dark:text-light-400">
            {repositoryData.repository &&
                repositoryData.repository.documentation_url && (
                    <div className="text-red-500 flex flex-col gap-2 text-center">
                        <div className="text-lg font-semibold">
                            {t("components.Loader.error")}
                        </div>
                        <div className="text-sm">
                            {repositoryData.repository.message ?? ""}
                        </div>
                    </div>
                )}
            {repositoryData.repository &&
                !repositoryData.repository.documentation_url && (
                    <div className="p-5 flex flex-col gap-3">
                        {(repositoryData.repository.data &&
                            getViewData.length > 0 && (
                                <Previewer views={getViewData} />
                            )) ||
                            (repositoryData.repository.fetchData &&
                                getViewData.length > 0 && (
                                    <Previewer views={getViewData} />
                                ))}
                        <div className="text-2xl font-medium text-center">
                            {repositoryData.repository.name}
                        </div>
                        <div className="flex flex-col gap-3 rounded shadow-lg p-3 bg-white dark:bg-dark-eval-1">
                            <div className="flex justify-between items-center">
                                <div>{t("pages.projectView.body.view")}</div>
                                <div className="flex gap-3 items-center justify-center">
                                    <IconLink
                                        href={
                                            repositoryData.repository.html_url
                                        }
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
                            {repositoryData.repository.fork && (
                                <div className="flex gap-1 items-center justify-center w-full text-center font-semibold">
                                    <ForkIcon className="w-6 h-6" />
                                    <div>Code is Forked</div>
                                    <ForkIcon className="w-6 h-6" />
                                </div>
                            )}
                            {repositoryData.repository.data && (
                                <>
                                    <StackViews
                                        stack={
                                            repositoryData.repository.data.stack
                                        }
                                    />

                                    <LanguagesViews
                                        languages={
                                            repositoryData.repository.data
                                                .languages
                                        }
                                    />

                                    <SizeView
                                        sizeEnum={
                                            repositoryData.repository.data.size
                                        }
                                    />
                                </>
                            )}

                            {repositoryData.repository.fetchData && (
                                <>
                                    {repositoryData.repository.fetchData
                                        .stack && (
                                        <StackViews
                                            stack={
                                                repositoryData.repository
                                                    .fetchData.stack.enums
                                            }
                                        />
                                    )}

                                    {repositoryData.repository.fetchData
                                        .languages && (
                                        <LanguagesViews
                                            languages={
                                                repositoryData.repository
                                                    .fetchData.languages.enums
                                            }
                                        />
                                    )}

                                    {repositoryData.repository.fetchData
                                        .size && (
                                        <SizeView
                                            sizeEnum={
                                                repositoryData.repository
                                                    .fetchData.size
                                            }
                                        />
                                    )}
                                </>
                            )}

                            {repositoryData.repository.description && (
                                <div className="flex justify-between gap-3">
                                    <div>
                                        {t(
                                            "pages.projectView.body.description"
                                        )}
                                    </div>
                                    <div>
                                        {repositoryData.repository.description}
                                    </div>
                                </div>
                            )}

                            <div className="flex justify-between">
                                <div>{t("pages.projectView.body.created")}</div>
                                <div>
                                    {formatDate(
                                        repositoryData.repository.created_at
                                    )}
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <div>{t("pages.projectView.body.updated")}</div>
                                <div>
                                    {formatDate(
                                        repositoryData.repository.updated_at
                                    )}
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <div>{t("pages.projectView.body.pushed")}</div>
                                <div>
                                    {formatDate(
                                        repositoryData.repository.pushed_at
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
