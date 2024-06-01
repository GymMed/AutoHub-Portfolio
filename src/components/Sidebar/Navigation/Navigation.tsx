import { AVAILABLE_ROUTES, NAVIGATION_ROUTES } from "../../../utils/constants";
import NavigationLink from "./NavigationLink";
import { useTranslation } from "react-i18next";

export default function Navigation() {
    const { t } = useTranslation();

    return (
        <nav>
            <ul className="flex flex-col gap-2">
                {NAVIGATION_ROUTES.map((routeEnum, key) => {
                    const route = AVAILABLE_ROUTES[routeEnum];

                    return (
                        <NavigationLink
                            key={key}
                            icon={route.icon}
                            text={t(
                                `nav.${route.name}` as unknown as TemplateStringsArray
                            )}
                            url={route.path}
                        />
                    );
                })}
            </ul>
        </nav>
    );
}
