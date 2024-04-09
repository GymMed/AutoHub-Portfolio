import { useSidebarStateContext } from "../General/Contexts/SidebarStateProvider";
import LanguageSelect from "../General/LanguageSelect";
import SunSvg from "../../assets/icons/lightModes/Sun.svg";
import MoonSvg from "../../assets/icons/lightModes/Moon.svg";

interface HeaderInterface {
    text: string;
}

function Header({ text }: HeaderInterface) {
    const { isDark, setIsDark } = useSidebarStateContext();
    return (
        <div className="p-5 text-light-500 dark:text-light-400 font-semibold text-2xl bg-white dark:bg-dark-eval-1 shadow-lg flex justify-between">
            <div className="flex items-center">{text}</div>
            <div className="font-semibold text-base flex gap-2 items-center justify-center">
                <LanguageSelect />
                <div className="">
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
            </div>
        </div>
    );
}

export default Header;
