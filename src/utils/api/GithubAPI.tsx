class GithubApi {
    static name = "gymmed";

    static getUser(name: string): string {
        return `https://api.github.com/users/${name}`;
    }

    static getSortedRepositories(page: number = 1): string {
        return `${GithubApi.getRepositories(page)}&sort=created&direction=desc`;
    }

    static getRepositories(page: number = 1): string {
        return `https://api.github.com/users/${GithubApi.name}/repos?page=${page}`;
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
