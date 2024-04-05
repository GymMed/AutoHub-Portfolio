import { ChangeEvent } from "react";
import Select from "./Select";
import { useTranslation } from "react-i18next";
import { AVAILABLE_SELECT_LANGUAGES } from "../../utils/constants";

function onChangeLanguage(event: ChangeEvent<HTMLSelectElement>, i18n: i18n) {
    const language = event.target.value;
    i18n.changeLanguage(language);
}

function LanguageSelect() {
    const { i18n } = useTranslation();

    return (
        <div>
            <Select
                name="languageSelect"
                id="languageSelect"
                options={AVAILABLE_SELECT_LANGUAGES}
                onChange={(event) => {
                    onChangeLanguage(event, i18n);
                }}
                icon={null}
            />
        </div>
    );
}

export default LanguageSelect;
