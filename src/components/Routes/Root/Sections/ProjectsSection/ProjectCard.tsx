import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { GithubRepositoryInterface } from "../../../../../interfaces/Github/GithubRepositoryInterface";
import { useState } from "react";
import ProjectLanguages from "../../../Projects/Card/ProjectLanguages";
import ProjectStack from "../../../Projects/Card/ProjectStack";
import ProjectSize from "../../../Projects/Card/ProjectSize";
import { AVAILABLE_ROUTES } from "../../../../../utils/constants";
import { ROUTES_ENUM } from "../../../../../enums/RoutesEnums";
import {
    PROGRAMMING_LANGUAGES_ENUM,
    ProgrammingLanguagesNames,
} from "../../../../../enums/LanguagesEnum";
import {
    PROJECT_SIZES_ENUM,
    ProjectSizesNames,
} from "../../../../../enums/ProjectSizesEnum";
import {
    FRAMEWORKS_ENUM,
    FrameworksNames,
} from "../../../../../enums/FrameworksEnum";

interface ProjectCardInterface {
    repository: GithubRepositoryInterface;
}

function ProjectCard({ repository }: ProjectCardInterface) {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    const [view, setView] = useState<string | undefined>(
        repository.data?.images?.[0]
    );
    const placeholdImage = "https://placehold.co/250x250";
    const iconsClasses = "text-light-500";

    return (
        <div
            className="h-full rounded bg-white dark:bg-dark-eval-2 flex flex-col gap-2 hover:shadow-lg"
            onMouseEnter={() => {
                if (repository.data?.gifs && repository.data.gifs[0]) {
                    setView(repository.data?.gifs[0]);
                }
            }}
            onMouseLeave={() => {
                setView(repository.data?.images?.[0]);
            }}
        >
            <div
                className="flex items-center justify-center aspect-square w-full rounded-t dark:bg-dark-eval-1 bg-white overflow-hidden"
                onClick={() => {
                    navigate(`/projects/${repository.name}/view`);
                }}
            >
                <img
                    src={view ? view : placeholdImage}
                    alt="Project presentation"
                    className=""
                    loading="lazy"
                />
            </div>

            <Link
                to={`/projects/${repository.name}/view`}
                className="hover:animate-pulse hover:text-blue-500 hover:dark:text-blue-300 max-lg:text-3xl max-md:text-2xl max-sm:text-xl text-light-500 dark:text-white text-center font-semibold mb-auto"
            >
                {repository.name.replace(/-/g, " ")}
            </Link>

            {repository.data && (
                <div className="flex flex-col gap-2 text-white p-2">
                    <ProjectStack
                        iconClasses={iconsClasses}
                        showStack={repository.data.stack}
                        filterStack={[]}
                        onStackClick={(framework: FRAMEWORKS_ENUM) => {
                            searchParams.set(
                                "stack",
                                FrameworksNames[framework].toLowerCase()
                            );

                            navigate(
                                `${
                                    AVAILABLE_ROUTES[ROUTES_ENUM.Projects].path
                                }?${searchParams.toString()}`
                            );
                        }}
                    />

                    <ProjectLanguages
                        iconClasses={iconsClasses}
                        showLanguages={repository.data.languages}
                        filterLanguages={[]}
                        onLanguageClick={(
                            language: PROGRAMMING_LANGUAGES_ENUM
                        ) => {
                            searchParams.set(
                                "languages",
                                ProgrammingLanguagesNames[
                                    language
                                ].toLowerCase()
                            );

                            navigate(
                                `${
                                    AVAILABLE_ROUTES[ROUTES_ENUM.Projects].path
                                }?${searchParams.toString()}`
                            );
                        }}
                    />

                    <ProjectSize
                        iconClasses={iconsClasses}
                        showSize={repository.data.size}
                        filterSize={-1}
                        onSizeClick={(size: PROJECT_SIZES_ENUM) => {
                            searchParams.set(
                                "size",
                                ProjectSizesNames[size].toLowerCase()
                            );

                            navigate(
                                `${
                                    AVAILABLE_ROUTES[ROUTES_ENUM.Projects].path
                                }?${searchParams.toString()}`
                            );
                        }}
                    />
                </div>
            )}
        </div>
    );
}

export default ProjectCard;
