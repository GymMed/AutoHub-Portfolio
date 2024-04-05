import { useLocation } from "react-router-dom";
import { AVAILABLE_ROUTES } from "../../../utils/constants";
import { getActiveRouteEnum } from "../../../utils/navigator";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import Sidebar from "../../Sidebar/Sidebar";
import FullScreenTemplate from "./FullScreenTemplate";
import { useTranslation } from "react-i18next";
import { ReactNode } from "react";

interface FullPageTemplateInterface {
    headerText?: string;
    children: ReactNode;
}

function FullPageTemplate({ headerText, children }: FullPageTemplateInterface) {
    const { t } = useTranslation();
    const location = useLocation();

    return (
        <FullScreenTemplate>
            <Sidebar />
            <div className="flex flex-col w-full bg-light-100 dark:bg-dark-eval-0">
                <Header
                    text={
                        headerText
                            ? headerText
                            : t(
                                  // @ts-ignore
                                  `nav.${
                                      AVAILABLE_ROUTES[
                                          getActiveRouteEnum(location.pathname)
                                      ].name
                                  }`
                              )
                    }
                />
                {children}
                <Footer />
            </div>
        </FullScreenTemplate>
    );
}

export default FullPageTemplate;
