import { matchPath } from "react-router-dom";
import { ROUTES_ENUM } from "../enums/RoutesEnums";
import { AVAILABLE_ROUTES } from "./constants";

function getActiveRouteEnum(path: string): ROUTES_ENUM {
    const enumKeys = Object.keys(ROUTES_ENUM).filter(
        (value) => !isNaN(Number(value))
    );
    let currentKey = 0;

    for (const key of enumKeys) {
        currentKey = parseInt(key);
        if (matchPath(AVAILABLE_ROUTES[currentKey].path, path))
            return currentKey;
    }

    return ROUTES_ENUM.Home;
}

export { getActiveRouteEnum };
