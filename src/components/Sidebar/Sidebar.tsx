import { APP_NAME, AVAILABLE_ROUTES } from "../../utils/constants";
import Navigation from "./Navigation/Navigation";
import LeftSvg from "../../../src/assets/icons/Left.svg";
import RightSvg from "../../../src/assets/icons/Right.svg";
import { useSidebarStateContext } from "../General/Contexts/SidebarStateProvider";
import { Link } from "react-router-dom";
import { ROUTES_ENUM } from "../../enums/RoutesEnums";

function Sidebar() {
    const { isOpened, setIsOpened } = useSidebarStateContext();

    function getClassBasedOnSidebar(isOpened: boolean): string {
        if (isOpened) return "w-64 min-w-64 ";
        return "w-16 min-w-16 ";
    }

    return (
        <>
            <header
                className={
                    getClassBasedOnSidebar(isOpened) +
                    "top-0 bottom-0 z-20 fixed duration-1000 transform shadow-lg text-light-500 dark:text-light-400 flex flex-col justify-between py-5 px-2 bg-white dark:bg-dark-eval-1"
                }
            >
                <div className="flex flex-col gap-5">
                    <div
                        className={
                            (isOpened ? "" : "w-full ") +
                            "text-primary-500 px-3.5 font-bold text-2xl flex items-center"
                        }
                    >
                        {
                            <Link
                                to={AVAILABLE_ROUTES[ROUTES_ENUM.Home].path}
                                className="cursor-pointer caret-transparent flex"
                            >
                                <div>{APP_NAME[0]}</div>
                                <div
                                    className={
                                        (isOpened
                                            ? "opacity-100"
                                            : "opacity-0") +
                                        " duration-500 transition-opacity"
                                    }
                                >
                                    {APP_NAME.substring(1, APP_NAME.length)}
                                </div>
                            </Link>
                        }
                        {/* {isOpened ? APP_NAME : APP_NAME[0]} */}
                    </div>
                    <Navigation />
                </div>
                <div className="font-semibold flex flex-col gap-3">
                    {/* <div
                        className={
                            (isOpened ? "opacity-100" : "opacity-0") +
                            " transition-opacity duration-500 w-full flex items-center justify-center"
                        }
                    >
                        <LanguageSelect />
                    </div> */}
                    {/* <div className="p-[0.25rem]">
                        <button
                            type="button"
                            className="rounded p-2 font-bold text-primary-500 hover:bg-primary-500 hover:text-white focus:ring focus:ring-offset-2 focus:ring-primary-500"
                            onClick={() => {
                                setIsDark(!isDark);
                            }}
                        >
                            {(isDark && <SunSvg className="w-6 h-6" />) || (
                                <MoonSvg className="w-6 h-6" />
                            )}
                        </button>
                    </div> */}
                    <div className="px-1.5 justify-end flex w-full">
                        <button
                            type="button"
                            className="rounded-full p-2 text-primary-500 border border-primary-500 hover:bg-primary-500 hover:text-white focus:ring focus:ring-offset-2 focus:ring-primary-500"
                            onClick={() => setIsOpened(!isOpened)}
                        >
                            {(isOpened && <LeftSvg />) || <RightSvg />}
                        </button>
                    </div>
                </div>
            </header>
            <div
                className={
                    getClassBasedOnSidebar(isOpened) +
                    "max-sm:w-16 max-sm:min-w-16 -z-10 py-5 px-2 border-l-2 duration-1000 transform min-h-screen"
                }
            ></div>
        </>
    );
}

export default Sidebar;
