import { ProjectsProvider } from "../../General/Contexts/ProjectsProvider";
import FullPageTemplate from "../PagesTemplates/FullPageTemplate";
import ProjectsBody from "./Body";

function Projects() {
    return (
        <FullPageTemplate>
            <ProjectsProvider>
                <ProjectsBody />
            </ProjectsProvider>
        </FullPageTemplate>
    );
}

export default Projects;
