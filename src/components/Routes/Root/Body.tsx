import { useTranslation } from "react-i18next";

import CarouselSection from "./Sections/CarouselSection";
import ProjectsSection from "./Sections/ProjectsSection";
import SidePictureSection from "./Sections/SidePictureSection";

export default function RootBody() {
    const { t } = useTranslation();

    return (
        <div className="mb-auto">
            <CarouselSection />
            <SidePictureSection />
            <ProjectsSection />
        </div>
    );
}
