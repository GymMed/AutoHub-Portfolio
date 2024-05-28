import { ReactNode } from "react";

interface ContactSocialLinkInterface {
    children: ReactNode;
    url?: string;
}

function ContactSocialLink({ children, url = "" }: ContactSocialLinkInterface) {
    return (
        <li className="hover:scale-110 border border-transparent hover:bg-gradient-to-br hover:text-white hover:dark:from-blue-500 hover:dark:to-blue-700 hover:from-blue-500 hover:to-blue-700 hover:shadow-xl p-1 rounded">
            <a target="_blank" href={url}>
                {children}
            </a>
        </li>
    );
}

export default ContactSocialLink;
