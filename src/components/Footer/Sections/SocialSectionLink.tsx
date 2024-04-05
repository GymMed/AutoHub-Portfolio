import { ReactNode } from "react";

interface SocialSectionLinkInterface {
    children: ReactNode;
    url?: string;
}

function SocialSectionLink({ children, url = "" }: SocialSectionLinkInterface) {
    return (
        <li className="hover:scale-110 border border-transparent hover:bg-gradient-to-br hover:dark:from-light-900 hover:dark:to-light-950 hover:from-light-200 hover:to-light-300 hover:shadow-xl p-1 rounded">
            <a target="_blank" href={url}>
                {children}
            </a>
        </li>
    );
}

export default SocialSectionLink;
