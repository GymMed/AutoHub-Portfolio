import translationEN from "../translations/en/translation.json";
import translationLT from "../translations/lt/translation.json";

declare module "i18next" {
    interface CustomTypeOptions {
        defaultNS: "translation";
        resources: {
            translation: typeof translationEN;
            translation: typeof translationLT;
        };
    }
}
