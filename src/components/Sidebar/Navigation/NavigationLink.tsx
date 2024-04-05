import { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { useSidebarStateContext } from "../../General/Contexts/SidebarStateProvider";

interface NavigationLinkInterface {
    text: string;
    url: string;
    icon?: ReactNode;
}

interface NavLinkReturnsInterface {
    isActive: boolean;
    isPending: boolean;
    isTransitioning: boolean;
}

function getLinkClasses(isActive: boolean) {
    if (!isActive) {
        return "font-semibold hover:scale-105 hover:underline";
    }
    return "font-bold text-primary-100 bg-gradient-to-br from-primary-500 to-primary-700 rounded";
}

export default function NavigationLink({
    text,
    url,
    icon,
}: NavigationLinkInterface) {
    const { isOpened } = useSidebarStateContext();

    return (
        <NavLink to={url}>
            {({ isActive }: NavLinkReturnsInterface) => {
                return (
                    <li
                        className={
                            getLinkClasses(isActive) +
                            ` flex items-center gap-2 py-2 px-[0.6875rem]`
                        }
                    >
                        <div className="">{icon}</div>
                        <div
                            className={
                                (isOpened ? "opacity-100 " : "opacity-0 ") +
                                "duration-1000 transition-opacity"
                            }
                        >
                            {text}
                        </div>
                    </li>
                );
            }}
        </NavLink>
    );
}
