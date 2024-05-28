import RulersIcon from "../../../../assets/icons/Rulers.svg";
import {
    PROJECT_SIZES_ENUM,
    ProjectSizesNames,
} from "../../../../enums/ProjectSizesEnum";
import MiniTag from "../../../General/MiniTag";

interface ProjectSizeInterface {
    showSize: PROJECT_SIZES_ENUM;
    filterSize: number | PROJECT_SIZES_ENUM;
    onSizeClick: (size: PROJECT_SIZES_ENUM) => void;
    iconClasses?: string;
}

function ProjectSize({
    showSize,
    filterSize,
    onSizeClick,
    iconClasses,
}: ProjectSizeInterface) {
    return (
        <div className="flex gap-3 justify-between">
            <div>
                <RulersIcon
                    className={
                        (iconClasses ? iconClasses + " " : "") + "w-6 h-6"
                    }
                />
            </div>
            <div className="flex gap-1 justify-end flex-wrap">
                {
                    <MiniTag
                        name={ProjectSizesNames[showSize]}
                        onClick={() => onSizeClick(showSize)}
                        isActive={filterSize === showSize}
                    />
                }
            </div>
        </div>
    );
}

export default ProjectSize;
