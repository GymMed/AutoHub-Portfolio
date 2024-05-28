import { ReactNode } from "react";
import { FRAMEWORKS_ENUM } from "../../../../enums/FrameworksEnum";
import { PROGRAMMING_LANGUAGES_ENUM } from "../../../../enums/LanguagesEnum";

interface ViewMiniTagsInterface {
    headerText: string;
    showItems: FRAMEWORKS_ENUM[] | PROGRAMMING_LANGUAGES_ENUM[];
    miniTag: (
        item: FRAMEWORKS_ENUM | PROGRAMMING_LANGUAGES_ENUM,
        key: number
    ) => ReactNode;
}

function ViewMiniTags({
    headerText,
    showItems,
    miniTag,
}: ViewMiniTagsInterface) {
    console.log(headerText, showItems);

    return (
        <div className="flex justify-between">
            <div>{headerText}</div>
            <div className="text-white flex gap-1 items-center justify-center">
                {showItems &&
                    showItems.map((item, key) => {
                        return miniTag(item, key);
                    })}
            </div>
        </div>
    );
}

export default ViewMiniTags;
