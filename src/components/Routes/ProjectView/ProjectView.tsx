import { useParams } from "react-router-dom";
import { ProjectsProvider } from "../../General/Contexts/ProjectsProvider";
import FullPageTemplate from "../PagesTemplates/FullPageTemplate";
import ProjectViewBody from "./Body";

function ProjectView() {
    const { name } = useParams();
    const finalName =
        name && typeof name === "string" ? name.replace(/-/g, " ") : name;

    return (
        <FullPageTemplate headerText={finalName}>
            <ProjectsProvider>
                <ProjectViewBody />
            </ProjectsProvider>
        </FullPageTemplate>
    );
}

export default ProjectView;
