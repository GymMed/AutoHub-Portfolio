import { useNavigate, useSearchParams } from "react-router-dom";
import {
    PROJECT_SIZES_ENUM,
    ProjectSizesNames,
} from "../../../../enums/ProjectSizesEnum";
import { ROUTES_ENUM } from "../../../../enums/RoutesEnums";
import { AVAILABLE_ROUTES } from "../../../../utils/constants";
import MiniTag from "../../../General/MiniTag";
import { useTranslation } from "react-i18next";

interface SizeViewInterface {
    sizeEnum: PROJECT_SIZES_ENUM;
}

function SizeView({ sizeEnum }: SizeViewInterface) {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const { t } = useTranslation();

    return (
        <div className="flex justify-between">
            <div>{t("pages.projectView.body.size")}</div>
            <div className="text-white flex gap-1 items-center justify-center">
                <MiniTag
                    name={ProjectSizesNames[sizeEnum]}
                    onClick={() => {
                        searchParams.set(
                            "size",
                            ProjectSizesNames[sizeEnum].toLowerCase()
                        );

                        navigate(
                            `${
                                AVAILABLE_ROUTES[ROUTES_ENUM.Projects].path
                            }?${searchParams.toString()}`
                        );
                    }}
                />
            </div>
        </div>
    );
}

export default SizeView;
