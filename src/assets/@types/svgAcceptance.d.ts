// src/assets/@types/svgAcceptance.d.ts

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
