import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./components/Routes/Root/Root";
import NotFound from "./components/Routes/NotFound/NotFound";
import "./utils/i18n";
import { SidebarStateProvider } from "./components/General/Contexts/SidebarStateProvider";
import { AVAILABLE_ROUTES } from "./utils/constants";
import { ROUTES_ENUM } from "./enums/RoutesEnums";
import Projects from "./components/Routes/Projects/Projects";
import ProjectView from "./components/Routes/ProjectView/ProjectView";
import { OwnerProvider } from "./components/General/Contexts/OwnerProvider";
import ContactMe from "./components/Routes/ContactMe/ContactMe";

const router = createBrowserRouter([
    {
        path: AVAILABLE_ROUTES[ROUTES_ENUM.Home].path,
        element: <Root />,
    },
    {
        path: AVAILABLE_ROUTES[ROUTES_ENUM.Projects].path,
        element: <Projects />,
    },
    {
        path: AVAILABLE_ROUTES[ROUTES_ENUM.ProjectView].path,
        element: <ProjectView />,
    },
    {
        path: AVAILABLE_ROUTES[ROUTES_ENUM.ContactMe].path,
        element: <ContactMe />,
    },
    {
        path: "*",
        element: <NotFound />,
    },
]);

function App() {
    return (
        <OwnerProvider>
            <SidebarStateProvider>
                <RouterProvider router={router} />
            </SidebarStateProvider>
        </OwnerProvider>
    );
}
export default App;
