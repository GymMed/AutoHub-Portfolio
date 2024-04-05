import { ReactNode } from "react";

interface SocialSectionInterface {
    headerText: string;
    children?: ReactNode;
}

function SocialSection({ headerText, children }: SocialSectionInterface) {
    return (
        <div className="flex flex-col items-center gap-2">
            <div className="font-semibold text-light-900 dark:text-light-500">
                {headerText}
            </div>
            <ul className="text-sm flex gap-1.5">{children}</ul>
        </div>
    );
}

export default SocialSection;
