// src/assets/@types/svgAcceptance.d.ts
/// <reference types="vite-plugin-svgr/client" />

// declare module "*.svg" {
//     const content: any;
//     export default content;
// }
import * as React from "react";

declare module "*.svg" {
    const ReactComponent: React.FunctionComponent<
        React.SVGProps<SVGSVGElement> & { className?: string }
    >;
    export default ReactComponent;
}
