import { useNavigate, useSearchParams } from "react-router-dom";
import {
    FRAMEWORKS_ENUM,
    FrameworksNames,
} from "../../../../enums/FrameworksEnum";
import { ROUTES_ENUM } from "../../../../enums/RoutesEnums";
import { AVAILABLE_ROUTES } from "../../../../utils/constants";
import ViewMiniTags from "./ViewMiniTags";
import MiniTag from "../../../General/MiniTag";

interface StackViewsInterface {
    stack: FRAMEWORKS_ENUM[];
}

function StackViews({ stack }: StackViewsInterface) {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    return (
        <ViewMiniTags
            headerText={"Stack:"}
            showItems={stack}
            miniTag={(framework, key) => {
                return (
                    <MiniTag
                        key={key}
                        name={FrameworksNames[framework]}
                        onClick={() => {
                            searchParams.set(
                                "stack",
                                FrameworksNames[framework].toLowerCase()
                            );

                            navigate(
                                `${
                                    AVAILABLE_ROUTES[ROUTES_ENUM.Projects].path
                                }?${searchParams.toString()}`
                            );
                        }}
                    />
                );
            }}
        />
    );
}

export default StackViews;