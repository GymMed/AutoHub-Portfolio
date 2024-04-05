class GithubApi {
    static name = "gymmed";

    static getSortedRepositories(): string {
        return `${GithubApi.getRepositories()}/sort=created&direction=desc`;
    }

    static getRepositories(): string {
        return `https://api.github.com/users/${GithubApi.name}/repos`;
    }

    static getPagesBase(): string {
        return `https://${GithubApi.name}.github.io`;
    }

    static getPages(projectName: string): string {
        return `${GithubApi.getPagesBase()}/${projectName}/`;
    }

    static getRepositoryBase(): string {
        return `https://api.github.com/repos/${GithubApi.name}`;
    }

    static getRepository(projectName: string): string {
        return `${GithubApi.getRepositoryBase()}/${projectName}`;
    }

    static getCommits(projectName: string): string {
        return `${GithubApi.getRepository(projectName)}/commits`;
    }

    static getGitCommits(projectName: string): string {
        return `${GithubApi.getRepository(projectName)}/git/commits`;
    }
}

export { GithubApi };
