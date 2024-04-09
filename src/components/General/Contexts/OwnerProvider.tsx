import React, { ReactNode, useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { FetchCacher } from "../../../utils/api/FetchCacher";
import { GithubApi } from "../../../utils/api/GithubAPI";
import { GithubUserInterface } from "../../../interfaces/Github/GithubUserInterface";
import { getPrivateProjects } from "../../../utils/privateProjects";

interface ownerProviderInterface {
    children: ReactNode;
}

interface ownerContextInterface {
    owner: GithubUserInterface | null;
    setOwner: React.Dispatch<React.SetStateAction<GithubUserInterface | null>>;
    totalRepositories: number;
    setTotalRepositories: React.Dispatch<React.SetStateAction<number>>;
}

const OwnerContext = createContext<ownerContextInterface>({
    owner: null,
    setOwner: () => {},
    totalRepositories: 0,
    setTotalRepositories: () => {},
});

const useOwnerContext = () => useContext(OwnerContext);

function OwnerProvider({ children }: ownerProviderInterface) {
    const [owner, setOwner] = useState<GithubUserInterface | null>(null);
    const [totalRepositories, setTotalRepositories] = useState<number>(0);

    async function getOwner() {
        const user: GithubUserInterface = await FetchCacher.fetch(
            GithubApi.getUser(GithubApi.name)
        );

        if (!user) return;

        setOwner(user);
        setTotalRepositories(
            user.public_repos + (await getPrivateProjects()).length
        );
    }

    useEffect(() => {
        getOwner();
    }, []);

    return (
        <OwnerContext.Provider
            value={{ owner, setOwner, totalRepositories, setTotalRepositories }}
        >
            {children}
        </OwnerContext.Provider>
    );
}

export { useOwnerContext, OwnerProvider };
