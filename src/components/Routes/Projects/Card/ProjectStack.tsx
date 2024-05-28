import { useTranslation } from "react-i18next";
import StackIcon from "../../../../assets/icons/Stack.svg";
import {
    FRAMEWORKS_ENUM,
    FrameworksNames,
} from "../../../../enums/FrameworksEnum";
import MiniTag from "../../../General/MiniTag";

interface ProjectStackInterface {
    showStack: FRAMEWORKS_ENUM[];
    filterStack: FRAMEWORKS_ENUM[];
    onStackClick: (framework: FRAMEWORKS_ENUM) => void;
    iconClasses?: string;
}

function ProjectStack({
    showStack,
    filterStack,
    onStackClick,
    iconClasses,
}: ProjectStackInterface) {
    const { t } = useTranslation();

    return (
        <div className="flex gap-3 justify-between">
            <div>
                <StackIcon
                    className={
                        (iconClasses ? iconClasses + " " : "") + "w-6 h-6"
                    }
                />
            </div>
            <div className="flex gap-1 justify-end flex-wrap">
                {(showStack &&
                    showStack.length > 0 &&
                    showStack.map((framework, key) => {
                        return (
                            <MiniTag
                                key={key}
                                name={FrameworksNames[framework]}
                                onClick={() => {
                                    onStackClick(framework);
                                }}
                                isActive={filterStack.includes(framework)}
                            />
                        );
                    })) || <MiniTag name={t("projectsStackEnum.None")} />}
            </div>
        </div>
    );
}

export default ProjectStack;
