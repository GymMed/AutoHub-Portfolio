import { SelectOptionInterface } from "../interfaces/SelectOptionInterface";
import HomeSvg from "../../src/assets/icons/Home.svg";
import ProjectsSvg from "../../src/assets/icons/FolderFill.svg";
import { RouteDataInterface } from "../interfaces/RouteDataInterface";
import { ROUTES_ENUM } from "../enums/RoutesEnums";

export const APP_NAME = "Gymmed";
export const NAVIGATION_ROUTES: ROUTES_ENUM[] = [
    ROUTES_ENUM.Home,
    ROUTES_ENUM.Projects,
];

export const AVAILABLE_ROUTES: RouteDataInterface[] = [
    {
        path: "/",
        name: "Home",
        icon: <HomeSvg />,
    },
    {
        path: "/projects",
        name: "Projects",
        icon: <ProjectsSvg />,
    },
    {
        path: "/projects/:name/view",
        name: "Project",
    },
];

export const AVAILABLE_SELECT_LANGUAGES: SelectOptionInterface[] = [
    { value: "en", text: "EN" },
    { value: "lt", text: "LT" },
];
