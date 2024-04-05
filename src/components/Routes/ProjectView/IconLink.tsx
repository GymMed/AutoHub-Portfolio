import { ReactNode } from "react";

interface IconLinkInterface {
    href: string;
    children: ReactNode;
}

function IconLink({ href, children }: IconLinkInterface) {
    return (
        <a
            target="_blank"
            href={href}
            className="border border-white dark:border-light-400 p-2 rounded hover:dark:border-green-500 hover:border-green-500 hover:text-green-500 focus:ring focus:ring-offset-2 focus:ring-green-500"
        >
            {children}
        </a>
    );
}

export default IconLink;
