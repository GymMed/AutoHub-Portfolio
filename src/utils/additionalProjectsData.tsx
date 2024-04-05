import calendarImg from "../assets/images/2023-calendar-img.png";
import { FRAMEWORKS_ENUM } from "../enums/FrameworksEnum";
import { PROGRAMMING_LANGUAGES_ENUM } from "../enums/LanguagesEnum";
import ImageImporter from "./ImageImporter";

// const peopleRecallerImages = require.context(
//     "../assets/images/BIT-React-People-Recaller",
//     false
// );

// function importAll(r) {
//     let images = {};
//     r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
//     return images
// }
// console.log("his", peopleRecallerImages);

export async function getProjects() {
    return [
        {
            id: 712495665,
            // name: "2023 Calendar",
            size: "very small",
            images: [calendarImg],
            stack: [],
            languages: [PROGRAMMING_LANGUAGES_ENUM.css],
        },
        {
            id: 767590068,
            size: "small",
            images: await ImageImporter.importImages(
                import.meta.glob(
                    `../assets/images/BIT-React-People-Recaller/*.{jpg,jpeg,png,svg}`
                )
            ),
            stack: [FRAMEWORKS_ENUM.React, FRAMEWORKS_ENUM.Tailwind],
            languages: [
                PROGRAMMING_LANGUAGES_ENUM.html,
                PROGRAMMING_LANGUAGES_ENUM.css,
                PROGRAMMING_LANGUAGES_ENUM.javascript,
            ],
        },
        {
            id: 767197090,
            size: "small",
            images: await ImageImporter.importImages(
                import.meta.glob(
                    `../assets/images/BIT-React-Google-Timer/*.{jpg,jpeg,png,svg}`
                )
            ),
            stack: [FRAMEWORKS_ENUM.React, FRAMEWORKS_ENUM.Tailwind],
            languages: [
                PROGRAMMING_LANGUAGES_ENUM.html,
                PROGRAMMING_LANGUAGES_ENUM.css,
                PROGRAMMING_LANGUAGES_ENUM.javascript,
            ],
        },
        {
            id: 766129219,
            size: "small",
            images: await ImageImporter.importImages(
                import.meta.glob(
                    `../assets/images/BIT-React-Vehicle-Rent-CRUD/*.{jpg,jpeg,png,svg}`
                )
            ),
            stack: [
                FRAMEWORKS_ENUM.React,
                FRAMEWORKS_ENUM.Expressjs,
                FRAMEWORKS_ENUM.Tailwind,
            ],
            languages: [
                PROGRAMMING_LANGUAGES_ENUM.html,
                PROGRAMMING_LANGUAGES_ENUM.css,
                PROGRAMMING_LANGUAGES_ENUM.javascript,
            ],
        },
        {
            id: 765648122,
            size: "small",
            images: await ImageImporter.importImages(
                import.meta.glob(
                    `../assets/images/BIT-React-ToDoList/*.{jpg,jpeg,png,svg}`
                )
            ),
            stack: [FRAMEWORKS_ENUM.React, FRAMEWORKS_ENUM.Tailwind],
            languages: [
                PROGRAMMING_LANGUAGES_ENUM.html,
                PROGRAMMING_LANGUAGES_ENUM.css,
                PROGRAMMING_LANGUAGES_ENUM.javascript,
            ],
        },
        {
            id: 762520229,
            size: "small",
            images: await ImageImporter.importImages(
                import.meta.glob(
                    `../assets/images/BIT-React-Timer/*.{jpg,jpeg,png,svg}`
                )
            ),
            stack: [FRAMEWORKS_ENUM.React, FRAMEWORKS_ENUM.Tailwind],
            languages: [
                PROGRAMMING_LANGUAGES_ENUM.html,
                PROGRAMMING_LANGUAGES_ENUM.css,
                PROGRAMMING_LANGUAGES_ENUM.javascript,
            ],
        },
        {
            id: 754595029,
            size: "small",
            images: await ImageImporter.importImages(
                import.meta.glob(
                    `../assets/images/BIT-JS-Chuck-Norris-Joke/*.{jpg,jpeg,png,svg}`
                )
            ),
            stack: [FRAMEWORKS_ENUM.Tailwind],
            languages: [
                PROGRAMMING_LANGUAGES_ENUM.html,
                PROGRAMMING_LANGUAGES_ENUM.css,
                PROGRAMMING_LANGUAGES_ENUM.javascript,
            ],
        },
        {
            id: 751796289,
            size: "small",
            images: await ImageImporter.importImages(
                import.meta.glob(
                    `../assets/images/BIT-Alpine-Netflix-Frontend/*.{jpg,jpeg,png,svg}`
                )
            ),
            stack: [FRAMEWORKS_ENUM.Tailwind],
            languages: [
                PROGRAMMING_LANGUAGES_ENUM.html,
                PROGRAMMING_LANGUAGES_ENUM.css,
                PROGRAMMING_LANGUAGES_ENUM.javascript,
            ],
        },
        {
            id: 745023324,
            size: "small",
            images: await ImageImporter.importImages(
                import.meta.glob(
                    `../assets/images/BIT-Alpine-FAQ-Accordion/*.{jpg,jpeg,png,svg}`
                )
            ),
            stack: [FRAMEWORKS_ENUM.Alpinejs, FRAMEWORKS_ENUM.Tailwind],
            languages: [
                PROGRAMMING_LANGUAGES_ENUM.html,
                PROGRAMMING_LANGUAGES_ENUM.css,
                PROGRAMMING_LANGUAGES_ENUM.javascript,
            ],
        },
        {
            id: 742348958,
            size: "small",
            images: await ImageImporter.importImages(
                import.meta.glob(
                    `../assets/images/BIT-JS-Tip-Calculator/*.{jpg,jpeg,png,svg}`
                )
            ),
            stack: [FRAMEWORKS_ENUM.Tailwind],
            languages: [
                PROGRAMMING_LANGUAGES_ENUM.html,
                PROGRAMMING_LANGUAGES_ENUM.css,
                PROGRAMMING_LANGUAGES_ENUM.javascript,
            ],
        },
        {
            id: 741919922,
            size: "small",
            images: await ImageImporter.importImages(
                import.meta.glob(
                    `../assets/images/BIT-Alpine-Password-Generator/*.{jpg,jpeg,png,svg}`
                )
            ),
            stack: [FRAMEWORKS_ENUM.Alpinejs, FRAMEWORKS_ENUM.Tailwind],
            languages: [
                PROGRAMMING_LANGUAGES_ENUM.html,
                PROGRAMMING_LANGUAGES_ENUM.css,
                PROGRAMMING_LANGUAGES_ENUM.javascript,
            ],
        },
        {
            id: 740799046,
            size: "small",
            images: await ImageImporter.importImages(
                import.meta.glob(
                    `../assets/images/BIT-Alpine-Cocktails/*.{jpg,jpeg,png,svg}`
                )
            ),
            stack: [FRAMEWORKS_ENUM.Alpinejs, FRAMEWORKS_ENUM.Tailwind],
            languages: [
                PROGRAMMING_LANGUAGES_ENUM.html,
                PROGRAMMING_LANGUAGES_ENUM.css,
                PROGRAMMING_LANGUAGES_ENUM.javascript,
            ],
        },
        {
            id: 736361550,
            size: "small",
            images: await ImageImporter.importImages(
                import.meta.glob(
                    `../assets/images/BIT-Alpine-Dogs-Fetcher/*.{jpg,jpeg,png,svg}`
                )
            ),
            stack: [FRAMEWORKS_ENUM.Alpinejs, FRAMEWORKS_ENUM.Tailwind],
            languages: [
                PROGRAMMING_LANGUAGES_ENUM.html,
                PROGRAMMING_LANGUAGES_ENUM.css,
                PROGRAMMING_LANGUAGES_ENUM.javascript,
            ],
        },
        {
            id: 733879386,
            size: "small",
            images: await ImageImporter.importImages(
                import.meta.glob(
                    `../assets/images/BIT-Alpine-Palindrome-Checker/*.{jpg,jpeg,png,svg}`
                )
            ),
            stack: [FRAMEWORKS_ENUM.Alpinejs, FRAMEWORKS_ENUM.Tailwind],
            languages: [
                PROGRAMMING_LANGUAGES_ENUM.html,
                PROGRAMMING_LANGUAGES_ENUM.css,
                PROGRAMMING_LANGUAGES_ENUM.javascript,
            ],
        },
        {
            id: 731160469,
            size: "small",
            images: await ImageImporter.importImages(
                import.meta.glob(
                    `../assets/images/BIT-Alpine-BMI-Calculator-Component/*.{jpg,jpeg,png,svg}`
                )
            ),
            stack: [FRAMEWORKS_ENUM.Alpinejs, FRAMEWORKS_ENUM.Tailwind],
            languages: [
                PROGRAMMING_LANGUAGES_ENUM.html,
                PROGRAMMING_LANGUAGES_ENUM.css,
                PROGRAMMING_LANGUAGES_ENUM.javascript,
            ],
        },
        {
            id: 730976192,
            size: "small",
            images: await ImageImporter.importImages(
                import.meta.glob(
                    `../assets/images/BIT-Alpine-Table-Example/*.{jpg,jpeg,png,svg}`
                )
            ),
            stack: [FRAMEWORKS_ENUM.Alpinejs, FRAMEWORKS_ENUM.Tailwind],
            languages: [
                PROGRAMMING_LANGUAGES_ENUM.html,
                PROGRAMMING_LANGUAGES_ENUM.css,
                PROGRAMMING_LANGUAGES_ENUM.javascript,
            ],
        },
        {
            id: 730456768,
            size: "small",
            images: await ImageImporter.importImages(
                import.meta.glob(
                    `../assets/images/BIT-Alpine-String-Generator/*.{jpg,jpeg,png,svg}`
                )
            ),
            stack: [FRAMEWORKS_ENUM.Alpinejs, FRAMEWORKS_ENUM.Tailwind],
            languages: [
                PROGRAMMING_LANGUAGES_ENUM.html,
                PROGRAMMING_LANGUAGES_ENUM.css,
                PROGRAMMING_LANGUAGES_ENUM.javascript,
            ],
        },
        {
            id: 729896575,
            size: "small",
            images: await ImageImporter.importImages(
                import.meta.glob(
                    `../assets/images/BIT-JS-String-Generator/*.{jpg,jpeg,png,svg}`
                )
            ),
            stack: [FRAMEWORKS_ENUM.Tailwind],
            languages: [
                PROGRAMMING_LANGUAGES_ENUM.html,
                PROGRAMMING_LANGUAGES_ENUM.css,
                PROGRAMMING_LANGUAGES_ENUM.javascript,
            ],
        },
        {
            id: 728852543,
            size: "small",
            images: await ImageImporter.importImages(
                import.meta.glob(
                    `../assets/images/BIT-JS-Rhombus-Drawer/*.{jpg,jpeg,png,svg}`
                )
            ),
            stack: [FRAMEWORKS_ENUM.Tailwind],
            languages: [
                PROGRAMMING_LANGUAGES_ENUM.html,
                PROGRAMMING_LANGUAGES_ENUM.css,
                PROGRAMMING_LANGUAGES_ENUM.javascript,
            ],
        },
        {
            id: 727863263,
            size: "small",
            images: await ImageImporter.importImages(
                import.meta.glob(
                    `../assets/images/BIT-JS-Coin-Flipper-And-Square-Drawer/*.{jpg,jpeg,png,svg}`
                )
            ),
            stack: [FRAMEWORKS_ENUM.Tailwind],
            languages: [
                PROGRAMMING_LANGUAGES_ENUM.html,
                PROGRAMMING_LANGUAGES_ENUM.css,
                PROGRAMMING_LANGUAGES_ENUM.javascript,
            ],
        },
        {
            id: 726969553,
            size: "small",
            images: await ImageImporter.importImages(
                import.meta.glob(
                    `../assets/images/BIT-JS-Password-Tester/*.{jpg,jpeg,png,svg}`
                )
            ),
            stack: [FRAMEWORKS_ENUM.Tailwind],
            languages: [
                PROGRAMMING_LANGUAGES_ENUM.html,
                PROGRAMMING_LANGUAGES_ENUM.css,
                PROGRAMMING_LANGUAGES_ENUM.javascript,
            ],
        },
        {
            id: 726615029,
            size: "small",
            images: await ImageImporter.importImages(
                import.meta.glob(
                    `../assets/images/BIT-JS-Calculator-Quiz/*.{jpg,jpeg,png,svg}`
                )
            ),
            stack: [FRAMEWORKS_ENUM.Tailwind],
            languages: [
                PROGRAMMING_LANGUAGES_ENUM.html,
                PROGRAMMING_LANGUAGES_ENUM.css,
                PROGRAMMING_LANGUAGES_ENUM.javascript,
            ],
        },
        {
            id: 725951352,
            size: "small",
            images: await ImageImporter.importImages(
                import.meta.glob(
                    `../assets/images/BIT-Javascript-Guessing-Game/*.{jpg,jpeg,png,svg}`
                )
            ),
            stack: [FRAMEWORKS_ENUM.Tailwind],
            languages: [
                PROGRAMMING_LANGUAGES_ENUM.html,
                PROGRAMMING_LANGUAGES_ENUM.css,
                PROGRAMMING_LANGUAGES_ENUM.javascript,
            ],
        },
        {
            id: 725821390,
            size: "small",
            images: await ImageImporter.importImages(
                import.meta.glob(
                    `../assets/images/BIT-Javascript-Introduction-3/*.{jpg,jpeg,png,svg}`
                )
            ),
            stack: [FRAMEWORKS_ENUM.Tailwind],
            languages: [
                PROGRAMMING_LANGUAGES_ENUM.html,
                PROGRAMMING_LANGUAGES_ENUM.css,
                PROGRAMMING_LANGUAGES_ENUM.javascript,
            ],
        },
        {
            id: 725429444,
            size: "small",
            images: await ImageImporter.importImages(
                import.meta.glob(
                    `../assets/images/BIT-Javascript-Introduction-2/*.{jpg,jpeg,png,svg}`
                )
            ),
            stack: [FRAMEWORKS_ENUM.Tailwind],
            languages: [
                PROGRAMMING_LANGUAGES_ENUM.html,
                PROGRAMMING_LANGUAGES_ENUM.css,
                PROGRAMMING_LANGUAGES_ENUM.javascript,
            ],
        },
        {
            id: 724775179,
            size: "small",
            images: await ImageImporter.importImages(
                import.meta.glob(
                    `../assets/images/BIT-Javascript-Introduction/*.{jpg,jpeg,png,svg}`
                )
            ),
            stack: [FRAMEWORKS_ENUM.Bootstrap],
            languages: [
                PROGRAMMING_LANGUAGES_ENUM.html,
                PROGRAMMING_LANGUAGES_ENUM.css,
                PROGRAMMING_LANGUAGES_ENUM.javascript,
            ],
        },
        {
            id: 724378171,
            size: "small",
            images: await ImageImporter.importImages(
                import.meta.glob(
                    `../assets/images/BIT-CSS-Battle-Castlevania/*.{jpg,jpeg,png,svg}`
                )
            ),
            stack: [],
            languages: [
                PROGRAMMING_LANGUAGES_ENUM.html,
                PROGRAMMING_LANGUAGES_ENUM.css,
            ],
        },
        {
            id: 721417620,
            size: "small",
            images: await ImageImporter.importImages(
                import.meta.glob(
                    `../assets/images/BIT-2048-Game/*.{jpg,jpeg,png,svg}`
                )
            ),
            stack: [FRAMEWORKS_ENUM.Bootstrap],
            languages: [
                PROGRAMMING_LANGUAGES_ENUM.html,
                PROGRAMMING_LANGUAGES_ENUM.css,
                PROGRAMMING_LANGUAGES_ENUM.javascript,
            ],
        },
        {
            id: 720033150,
            size: "small",
            images: await ImageImporter.importImages(
                import.meta.glob(
                    `../assets/images/BIT-Design-Shopping-Cart/*.{jpg,jpeg,png,svg}`
                )
            ),
            stack: [FRAMEWORKS_ENUM.Bootstrap],
            languages: [
                PROGRAMMING_LANGUAGES_ENUM.html,
                PROGRAMMING_LANGUAGES_ENUM.css,
                PROGRAMMING_LANGUAGES_ENUM.javascript,
            ],
        },
        {
            id: 718730383,
            size: "small",
            images: await ImageImporter.importImages(
                import.meta.glob(
                    `../assets/images/BIT-Figma-Login-Form/*.{jpg,jpeg,png,svg}`
                )
            ),
            stack: [],
            languages: [
                PROGRAMMING_LANGUAGES_ENUM.html,
                PROGRAMMING_LANGUAGES_ENUM.css,
                PROGRAMMING_LANGUAGES_ENUM.javascript,
            ],
        },
    ];
}
