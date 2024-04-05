import { ReactNode } from "react";

interface FullScreenTemplateInterface {
    children: ReactNode;
}

function FullScreenTemplate({ children }: FullScreenTemplateInterface) {
    return <div className="flex min-h-screen min-w-fit">{children}</div>;
}

export default FullScreenTemplate;
