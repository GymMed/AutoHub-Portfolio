import i18n from "i18next";
// import LanguageDetector from "i18next-browser-languagedetector";
// import Backend from "i18next-xhr-backend";
import { initReactI18next } from "react-i18next";
import translationEnglish from "../assets/translations/en/translation.json";
import translationLithuania from "../assets/translations/lt/translation.json";

// const fallbackLng: string[] = ["en"];

//use ISO 639-1 standart language codes
const resources = {
    en: {
        translation: translationEnglish,
    },
    lt: {
        translation: translationLithuania,
    },
};

i18n.use(initReactI18next).init({ resources, lng: "en" });

// i18n.use(Backend) // used to load data from othe directory
//     .use(LanguageDetector) // detects the current language
//     .use(initReactI18next) // passes i18n down to react-i18next
//     .init({
//         fallbackLng, // default language
//         detection: {
//             checkWhitelist: true,
//         },
//         debug: false,
//         interpolation: {
//             escapeValue: false, // no need for react. it escapes by default
//         },
//     });

export default i18n;
