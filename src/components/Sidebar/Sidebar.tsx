import { APP_NAME } from "../../utils/constants";
import LanguageSelect from "../General/LanguageSelect";
import Navigation from "./Navigation/Navigation";
import LeftSvg from "../../../src/assets/icons/Left.svg";
import RightSvg from "../../../src/assets/icons/Right.svg";
import SunSvg from "../../../src/assets/icons/lightModes/Sun.svg";
import MoonSvg from "../../../src/assets/icons/lightModes/Moon.svg";
import { useSidebarStateContext } from "../General/Contexts/SidebarStateProvider";

function Sidebar() {
    const { isOpened, setIsOpened, isDark, setIsDark } =
        useSidebarStateContext();

    function getClassBasedOnSidebar(isOpened: boolean): string {
        if (isOpened) return "w-64 min-w-64 ";
        return "w-16 min-w-16 ";
    }

    return (
        <>
            <header
                className={
                    getClassBasedOnSidebar(isOpened) +
                    "fixed duration-1000 transform min-h-screen shadow-lg text-light-500 dark:text-light-400 flex flex-col justify-between py-5 px-2 bg-white dark:bg-dark-eval-1"
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
                            <>
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
                            </>
                        }
                        {/* {isOpened ? APP_NAME : APP_NAME[0]} */}
                    </div>
                    <Navigation />
                </div>
                <div className="font-semibold flex flex-col gap-3">
                    <div
                        className={
                            (isOpened ? "opacity-100" : "opacity-0") +
                            " transition-opacity duration-500 w-full flex items-center justify-center"
                        }
                    >
                        <LanguageSelect />
                    </div>
                    <div className="p-[0.25rem]">
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
                    </div>
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
                    "-z-10 py-5 px-2 border-l-2 duration-1000 transform min-h-screen"
                }
            ></div>
        </>
    );
}

export default Sidebar;
