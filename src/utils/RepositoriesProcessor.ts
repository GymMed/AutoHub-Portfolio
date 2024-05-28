import {
    FRAMEWORKS_ENUM,
    FrameworksNames,
    FrameworksSearchArrays,
} from "../enums/FrameworksEnum";
import {
    PROGRAMMING_LANGUAGES_ENUM,
    ProgrammingLanguagesNames,
} from "../enums/LanguagesEnum";
import {
    PROJECT_SIZES_ENUM,
    ProjectSizesNames,
} from "../enums/ProjectSizesEnum";
import { GithubRepositoryInterface } from "../interfaces/Github/GithubRepositoryInterface";
import { getProjects } from "./additionalProjectsData";
import { FetchCacher } from "./api/FetchCacher";
import { GithubApi } from "./api/GithubAPI";

class RepositoriesProcessor {
    static async process(repos: GithubRepositoryInterface[]) {
        if (!Array.isArray(repos) || repos.length < 1) return;

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

        await Promise.all([
            RepositoriesProcessor.getLanguagesForProjects(noMatchesRepos),
            RepositoriesProcessor.getStackForProjects(noMatchesRepos),
            RepositoriesProcessor.getSizeForProjects(noMatchesRepos),
            RepositoriesProcessor.getGifsForProjects(noMatchesRepos),
            RepositoriesProcessor.getImagesForProjects(noMatchesRepos),
        ]);
    }

    static async getStackForProjects(repos: GithubRepositoryInterface[]) {
        let topicLowercase = "";
        let topicIndex = -1;
        const frameworksSearchArraysLowerCase = FrameworksSearchArrays.map(
            (searchArray) =>
                searchArray.map((searchTerm) => searchTerm.toLowerCase())
        );

        for (const repo of repos) {
            if (!repo.fetchData) {
                repo.fetchData = {};
            }

            if (!repo.fetchData.stack)
                repo.fetchData.stack = {
                    enums: [],
                };

            repo.fetchData.stack.enums = [];

            if (!repo.topics || repo.topics.length < 1) continue;

            for (const topic of repo.topics) {
                topicLowercase = topic.toLowerCase();
                topicIndex = -1;

                for (const arrayIndex in frameworksSearchArraysLowerCase) {
                    if (frameworksSearchArraysLowerCase[arrayIndex].length < 1)
                        continue;

                    if (
                        frameworksSearchArraysLowerCase[arrayIndex].includes(
                            topicLowercase
                        )
                    ) {
                        topicIndex = Number(arrayIndex);
                        break;
                    }
                }

                if (topicIndex > -1) {
                    repo.fetchData.stack.enums.push(
                        topicIndex as FRAMEWORKS_ENUM
                    );
                    continue;
                }

                for (const enumKey in FrameworksNames) {
                    if (
                        topicLowercase ===
                        FrameworksNames[enumKey].toLowerCase()
                    ) {
                        repo.fetchData.stack.enums.push(
                            Number(enumKey) as FRAMEWORKS_ENUM
                        );
                        break;
                    }
                }
            }
        }
    }

    static async getLanguagesForProjects(repos: GithubRepositoryInterface[]) {
        for (const repo of repos) {
            if (!repo.fetchData) {
                repo.fetchData = {};
            }

            if (!repo.fetchData.languages)
                repo.fetchData.languages = {
                    statistics: {},
                    enums: [],
                };

            repo.fetchData.languages.statistics = await FetchCacher.fetch(
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
                            Number(enumKey) as PROGRAMMING_LANGUAGES_ENUM
                        );
                        break;
                    }
                }
            }
        }
    }

    static async getSizeForProjects(repos: GithubRepositoryInterface[]) {
        for (const repo of repos) {
            if (!repo.fetchData) {
                repo.fetchData = {};
            }

            if (!repo.fetchData.size) repo.fetchData.size = -1;

            if (!repo.topics || repo.topics.length < 1) continue;

            for (const topic of repo.topics) {
                for (const enumKey in ProjectSizesNames) {
                    if (
                        topic.toLowerCase() ===
                        ProjectSizesNames[enumKey].toLowerCase()
                    ) {
                        repo.fetchData.size = Number(
                            enumKey
                        ) as PROJECT_SIZES_ENUM;
                        break;
                    }
                }
            }
        }
    }

    static async getImagesForProjects(repos: GithubRepositoryInterface[]) {
        for (const repo of repos) {
            if (!repo.fetchData) {
                repo.fetchData = {};
            }

            const item = await FetchCacher.fetch(
                GithubApi.getImages(repo.name)
            );

            if (item.message) continue;
            repo.fetchData.images = item;
        }
    }

    static async getGifsForProjects(repos: GithubRepositoryInterface[]) {
        for (const repo of repos) {
            if (!repo.fetchData) {
                repo.fetchData = {};
            }

            const item = await FetchCacher.fetch(GithubApi.getGifs(repo.name));

            if (item.message) continue;
            repo.fetchData.gifs = item;
        }
    }
}

export default RepositoriesProcessor;
