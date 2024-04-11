import {
    PROGRAMMING_LANGUAGES_ENUM,
    ProgrammingLanguagesNames,
} from "../../../../enums/LanguagesEnum";
import MiniTag from "../../../General/MiniTag";
import CodeIcon from "../../../../assets/icons/Code.svg";

interface ProjectLanguagesInterface {
    showLanguages: PROGRAMMING_LANGUAGES_ENUM[];
    filterLanguages: PROGRAMMING_LANGUAGES_ENUM[];
    onLanguageClick: (language: PROGRAMMING_LANGUAGES_ENUM) => void;
}

function ProjectLanguages({
    showLanguages,
    filterLanguages,
    onLanguageClick,
}: ProjectLanguagesInterface) {
    return (
        <div className="flex gap-3 justify-between">
            <div>
                <CodeIcon className="w-6 h-6" />
            </div>
            <div className="flex gap-1 justify-end flex-wrap">
                {(showLanguages &&
                    showLanguages.length > 0 &&
                    showLanguages.map((language, key) => {
                        return (
                            <MiniTag
                                key={key}
                                name={ProgrammingLanguagesNames[language]}
                                onClick={() => {
                                    onLanguageClick(language);
                                }}
                                isActive={filterLanguages.includes(language)}
                            />
                        );
                    })) || <MiniTag name="None" />}
            </div>
        </div>
    );
}

export default ProjectLanguages;
