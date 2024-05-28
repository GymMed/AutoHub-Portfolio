import { useNavigate, useSearchParams } from "react-router-dom";
import {
    PROGRAMMING_LANGUAGES_ENUM,
    ProgrammingLanguagesNames,
} from "../../../../enums/LanguagesEnum";
import MiniTag from "../../../General/MiniTag";
import ViewMiniTags from "./ViewMiniTags";
import { AVAILABLE_ROUTES } from "../../../../utils/constants";
import { ROUTES_ENUM } from "../../../../enums/RoutesEnums";

interface LanguagesViewsInterface {
    languages: PROGRAMMING_LANGUAGES_ENUM[];
}

function LanguagesViews({ languages }: LanguagesViewsInterface) {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    return (
        <ViewMiniTags
            headerText={"Languages:"}
            showItems={languages}
            miniTag={(language, key) => {
                return (
                    <MiniTag
                        key={key}
                        name={ProgrammingLanguagesNames[language]}
                        onClick={() => {
                            searchParams.set(
                                "languages",
                                ProgrammingLanguagesNames[
                                    language
                                ].toLowerCase()
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

export default LanguagesViews;
