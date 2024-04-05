import React, {
    ReactNode,
    createContext,
    useContext,
    useEffect,
    useState,
} from "react";
import { FetchCacher } from "../../../utils/api/FetchCacher";

interface sidebarProviderInterface {
    children: ReactNode;
}

interface sidebarContextInterface {
    isOpened: boolean;
    setIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
    isDark: boolean;
    setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
}

const SidebarStateContext = createContext<sidebarContextInterface>({
    isOpened: true,
    setIsOpened: () => {},
    isDark: false,
    setIsDark: () => {},
});

const useSidebarStateContext = () => useContext(SidebarStateContext);

function SidebarStateProvider({ children }: sidebarProviderInterface) {
    const [isOpened, setIsOpened] = useState<boolean>(true);
    const [isDark, setIsDark] = useState<boolean>(false);

    useEffect(() => {
        const storedDark = localStorage.getItem(FetchCacher.prefix + "isDark");

        if (storedDark) setIsDark(storedDark ? true : false);
    }, []);

    useEffect(() => {
        if (isDark) document.documentElement.classList.add("dark");
        else document.documentElement.classList.remove("dark");

        localStorage.setItem(FetchCacher.prefix + "isDark", isDark ? "1" : "0");
    }, [isDark]);

    return (
        <SidebarStateContext.Provider
            value={{ isOpened, setIsOpened, isDark, setIsDark }}
        >
            {children}
        </SidebarStateContext.Provider>
    );
}

export { useSidebarStateContext, SidebarStateProvider };
