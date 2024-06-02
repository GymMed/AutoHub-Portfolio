declare module "*.svg" {
    import * as React from "react";

    const ReactComponent: React.FunctionComponent<
        // React.SVGProps<SVGSVGElement> & { className?: string }
        React.ComponentProps<"svg"> & {
            className?: string;
            width?: string;
            height?: string;
        }
    >;

    export default ReactComponent;
}
/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />
