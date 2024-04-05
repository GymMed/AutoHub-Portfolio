import calendarImg from "../../../assets/images/2023-calendar-img.png";
import { formatDate } from "../../../utils/dateFormater";
import DataSpliter from "../../General/DataSpliter";
import { useTranslation } from "react-i18next";
import { GithubApi } from "../../../utils/api/GithubAPI";
import GitIcon from "../../../assets/icons/Git.svg";
import GlobeIcon from "../../../assets/icons/Globe.svg";
import StackIcon from "../../../assets/icons/Stack.svg";
import CodeIcon from "../../../assets/icons/Code.svg";
import { useProjectsContext } from "../../General/Contexts/ProjectsProvider";
import { useNavigate } from "react-router-dom";
import { FrameworksNames } from "../../../enums/FrameworksEnum";
import { ProgrammingLanguagesNames } from "../../../enums/LanguagesEnum";
import MiniTag from "../../General/MiniTag";

function ProjectsBody() {
    const { t } = useTranslation();
    const { repositories } = useProjectsContext();
    const navigate = useNavigate();

    return (
        <div className="bg-gray-100 dark:bg-dark-eval-0 max-sm:grid-cols-1 max-md:grid-cols-1 max-lg:grid-cols-2 max-xl:grid-cols-3 max-2xl:grid-cols-4 p-5 grid grid-cols-3 gap-5 mb-auto">
            {repositories &&
                repositories.length > 0 &&
                repositories.map((project, key) => {
                    return (
                        <div
                            key={key}
                            className="group/card flex flex-col gap-1 hover:shadow-2xl hover:cursor-pointer hover:from-primary-700 hover:to-primary-900 from-primary-500 to-primary-700 text-white bg-gradient-to-br rounded shadow-md p-3"
                            onClick={() => {
                                navigate(`/projects/${project.name}/view`);
                            }}
                        >
                            <div className="p-2 w-full relative aspect-square shadow-inner bg-light-100 dark:bg-dark-eval-0 group-hover/card:bg-light-100 group-hover/card:dark:bg-dark-eval-0 rounded flex items-center">
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
                                            <GitIcon width="24" height="24" />
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
                                            : calendarImg
                                    }
                                    alt="image"
                                    loading="lazy"
                                />
                            </div>
                            <div className="font-semibold text-center py-1 mb-auto">
                                {project.data?.name
                                    ? project.data.name
                                    : project.name.replaceAll("-", " ")}
                            </div>

                            {project.data && (
                                <>
                                    <div className="flex gap-3 justify-between">
                                        <div>
                                            <StackIcon className="w-6 h-6" />
                                        </div>
                                        <div className="flex gap-1 justify-end">
                                            {(project.data.stack &&
                                                project.data.stack.length > 0 &&
                                                project.data.stack.map(
                                                    (framework, key) => {
                                                        return (
                                                            <MiniTag
                                                                key={key}
                                                                framework={
                                                                    FrameworksNames[
                                                                        framework
                                                                    ]
                                                                }
                                                            />
                                                        );
                                                    }
                                                )) || (
                                                <MiniTag framework="None" />
                                            )}
                                        </div>
                                    </div>

                                    <div className="flex gap-3 justify-between">
                                        <div>
                                            <CodeIcon className="w-6 h-6" />
                                        </div>
                                        <div className="flex gap-1 justify-end">
                                            {(project.data.languages &&
                                                project.data.languages.length >
                                                    0 &&
                                                project.data.languages.map(
                                                    (language, key) => {
                                                        return (
                                                            <MiniTag
                                                                key={key}
                                                                framework={
                                                                    ProgrammingLanguagesNames[
                                                                        language
                                                                    ]
                                                                }
                                                            />
                                                        );
                                                    }
                                                )) || (
                                                <MiniTag framework="None" />
                                            )}
                                        </div>
                                    </div>

                                    <div className="font-extralight text-sm text-right">
                                        {project.data.size}
                                    </div>
                                </>
                            )}
                            {project.created_at && (
                                <DataSpliter
                                    keyText={t("pages.projects.createdAt")}
                                    valueText={formatDate(project.created_at)}
                                />
                            )}
                            {project.pushed_at && (
                                <DataSpliter
                                    keyText={t("pages.projects.pushedAt")}
                                    valueText={formatDate(project.pushed_at)}
                                />
                            )}
                        </div>
                    );
                })}
        </div>
    );
}

export default ProjectsBody;
