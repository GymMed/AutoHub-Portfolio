import calendarImg from "../assets/images/2023-calendar-img.png";
// import { DATABASES_ENUM } from "../enums/DatabasesEnum";
import { FRAMEWORKS_ENUM } from "../enums/FrameworksEnum";
import { PROGRAMMING_LANGUAGES_ENUM } from "../enums/LanguagesEnum";
import { PROJECT_SIZES_ENUM } from "../enums/ProjectSizesEnum";
import { PROJECT_STATUSES_ENUM } from "../enums/ProjectStatusEnum";
import { GithubAdditionalDataInterface } from "../interfaces/Github/GithubAdditionalDataInterface";
import ImageImporter from "./ImageImporter";

export async function getProjects(): Promise<GithubAdditionalDataInterface[]> {
    return [
        {
            id: 712495665,
            // name: "2023 Calendar",
            size: PROJECT_SIZES_ENUM.VerySmall,
            status: PROJECT_STATUSES_ENUM.Finished,
            gifs: [],
            images: [calendarImg],
            stack: [],
            languages: [
                PROGRAMMING_LANGUAGES_ENUM.html,
                PROGRAMMING_LANGUAGES_ENUM.css,
                PROGRAMMING_LANGUAGES_ENUM.javascript,
            ],
        },
        {
            id: 767590068,
            size: PROJECT_SIZES_ENUM.Small,
            status: PROJECT_STATUSES_ENUM.Finished,
            gifs: await ImageImporter.importImages(
                import.meta.glob(
                    `../assets/gifs/BIT-React-People-Recaller/*.gif`
                )
            ),
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
                PROGRAMMING_LANGUAGES_ENUM.typescript,
            ],
        },
        {
            id: 767197090,
            size: PROJECT_SIZES_ENUM.Small,
            status: PROJECT_STATUSES_ENUM.Unfinised,
            gifs: await ImageImporter.importImages(
                import.meta.glob(`../assets/gifs/BIT-React-Google-Timer/*.gif`)
            ),
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
            size: PROJECT_SIZES_ENUM.Medium,
            status: PROJECT_STATUSES_ENUM.Finished,
            gifs: await ImageImporter.importImages(
                import.meta.glob(
                    `../assets/gifs/BIT-React-Vehicle-Rent-CRUD/*.gif`
                )
            ),
            images: await ImageImporter.importImages(
                import.meta.glob(
                    `../assets/images/BIT-React-Vehicle-Rent-CRUD/*.{jpg,jpeg,png,svg}`
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
            id: 765648122,
            size: PROJECT_SIZES_ENUM.VerySmall,
            status: PROJECT_STATUSES_ENUM.Finished,
            gifs: await ImageImporter.importImages(
                import.meta.glob(`../assets/gifs/BIT-React-ToDoList/*.gif`)
            ),
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
            size: PROJECT_SIZES_ENUM.Small,
            status: PROJECT_STATUSES_ENUM.Finished,
            gifs: await ImageImporter.importImages(
                import.meta.glob(`../assets/gifs/BIT-React-Timer/*.gif`)
            ),
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
            size: PROJECT_SIZES_ENUM.Small,
            status: PROJECT_STATUSES_ENUM.Finished,
            gifs: await ImageImporter.importImages(
                import.meta.glob(
                    `../assets/gifs/BIT-JS-Chuck-Norris-Joke/*.gif`
                )
            ),
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
            size: PROJECT_SIZES_ENUM.Small,
            status: PROJECT_STATUSES_ENUM.Unfinised,
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
            size: PROJECT_SIZES_ENUM.VerySmall,
            status: PROJECT_STATUSES_ENUM.Finished,
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
            size: PROJECT_SIZES_ENUM.Small,
            status: PROJECT_STATUSES_ENUM.Finished,
            gifs: await ImageImporter.importImages(
                import.meta.glob(`../assets/gifs/BIT-JS-Tip-Calculator/*.gif`)
            ),
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
            size: PROJECT_SIZES_ENUM.Small,
            status: PROJECT_STATUSES_ENUM.Finished,
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
            size: PROJECT_SIZES_ENUM.Medium,
            status: PROJECT_STATUSES_ENUM.Finished,
            gifs: await ImageImporter.importImages(
                import.meta.glob(`../assets/gifs/BIT-Alpine-Cocktails/*.gif`)
            ),
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
            size: PROJECT_SIZES_ENUM.Small,
            status: PROJECT_STATUSES_ENUM.Finished,
            gifs: await ImageImporter.importImages(
                import.meta.glob(`../assets/gifs/BIT-Alpine-Dogs-Fetcher/*.gif`)
            ),
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
            id: 732843973,
            size: PROJECT_SIZES_ENUM.Small,
            status: PROJECT_STATUSES_ENUM.Unfinised,
            images: [],
            stack: [FRAMEWORKS_ENUM.Alpinejs, FRAMEWORKS_ENUM.Tailwind],
            languages: [
                PROGRAMMING_LANGUAGES_ENUM.html,
                PROGRAMMING_LANGUAGES_ENUM.css,
                PROGRAMMING_LANGUAGES_ENUM.javascript,
            ],
        },
        {
            id: 733879386,
            size: PROJECT_SIZES_ENUM.VerySmall,
            status: PROJECT_STATUSES_ENUM.Finished,
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
            size: PROJECT_SIZES_ENUM.Small,
            status: PROJECT_STATUSES_ENUM.Finished,
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
            size: PROJECT_SIZES_ENUM.Small,
            status: PROJECT_STATUSES_ENUM.Finished,
            gifs: await ImageImporter.importImages(
                import.meta.glob(
                    `../assets/gifs/BIT-Alpine-Table-Example/*.gif`
                )
            ),
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
            size: PROJECT_SIZES_ENUM.Small,
            status: PROJECT_STATUSES_ENUM.Finished,
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
            size: PROJECT_SIZES_ENUM.Small,
            status: PROJECT_STATUSES_ENUM.Finished,
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
            size: PROJECT_SIZES_ENUM.VerySmall,
            status: PROJECT_STATUSES_ENUM.Finished,
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
            size: PROJECT_SIZES_ENUM.Small,
            status: PROJECT_STATUSES_ENUM.Finished,
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
            size: PROJECT_SIZES_ENUM.VerySmall,
            status: PROJECT_STATUSES_ENUM.Finished,
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
            size: PROJECT_SIZES_ENUM.Small,
            status: PROJECT_STATUSES_ENUM.Finished,
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
            size: PROJECT_SIZES_ENUM.VerySmall,
            status: PROJECT_STATUSES_ENUM.Finished,
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
            size: PROJECT_SIZES_ENUM.VerySmall,
            status: PROJECT_STATUSES_ENUM.Finished,
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
            size: PROJECT_SIZES_ENUM.VerySmall,
            status: PROJECT_STATUSES_ENUM.Finished,
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
            size: PROJECT_SIZES_ENUM.VerySmall,
            status: PROJECT_STATUSES_ENUM.Finished,
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
            size: PROJECT_SIZES_ENUM.VerySmall,
            status: PROJECT_STATUSES_ENUM.Finished,
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
            size: PROJECT_SIZES_ENUM.Medium,
            status: PROJECT_STATUSES_ENUM.Finished,
            gifs: await ImageImporter.importImages(
                import.meta.glob(`../assets/gifs/BIT-2048-Game/*.gif`)
            ),
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
            size: PROJECT_SIZES_ENUM.VerySmall,
            status: PROJECT_STATUSES_ENUM.Finished,
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
            size: PROJECT_SIZES_ENUM.VerySmall,
            status: PROJECT_STATUSES_ENUM.Finished,
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
        {
            id: 717772224,
            size: PROJECT_SIZES_ENUM.Small,
            status: PROJECT_STATUSES_ENUM.Finished,
            gifs: await ImageImporter.importImages(
                import.meta.glob(
                    `../assets/gifs/BIT-Friday-Challenge-Figma-Boots/*.gif`
                )
            ),
            images: await ImageImporter.importImages(
                import.meta.glob(
                    `../assets/images/BIT-Friday-Challenge-Figma-Boots/*.{jpg,jpeg,png,svg}`
                )
            ),
            stack: [],
            languages: [
                PROGRAMMING_LANGUAGES_ENUM.html,
                PROGRAMMING_LANGUAGES_ENUM.css,
                PROGRAMMING_LANGUAGES_ENUM.javascript,
            ],
        },
        {
            id: 717065286,
            size: PROJECT_SIZES_ENUM.VerySmall,
            status: PROJECT_STATUSES_ENUM.Finished,
            images: await ImageImporter.importImages(
                import.meta.glob(
                    `../assets/images/BIT-Figma-Contact-Form/*.{jpg,jpeg,png,svg}`
                )
            ),
            stack: [],
            languages: [
                PROGRAMMING_LANGUAGES_ENUM.html,
                PROGRAMMING_LANGUAGES_ENUM.css,
                PROGRAMMING_LANGUAGES_ENUM.javascript,
            ],
        },
        {
            id: 716485968,
            size: PROJECT_SIZES_ENUM.Small,
            status: PROJECT_STATUSES_ENUM.Finished,
            gifs: await ImageImporter.importImages(
                import.meta.glob(`../assets/gifs/BIT-Design-Parallax/*.gif`)
            ),
            images: await ImageImporter.importImages(
                import.meta.glob(
                    `../assets/images/BIT-Design-Parallax/*.{jpg,jpeg,png,svg}`
                )
            ),
            stack: [],
            languages: [
                PROGRAMMING_LANGUAGES_ENUM.html,
                PROGRAMMING_LANGUAGES_ENUM.css,
                PROGRAMMING_LANGUAGES_ENUM.javascript,
            ],
        },
        {
            id: 715563793,
            size: PROJECT_SIZES_ENUM.Small,
            status: PROJECT_STATUSES_ENUM.Finished,
            gifs: await ImageImporter.importImages(
                import.meta.glob(`../assets/gifs/BIT-Invoice-Generator/*.gif`)
            ),
            images: await ImageImporter.importImages(
                import.meta.glob(
                    `../assets/images/BIT-Invoice-Generator/*.{jpg,jpeg,png,svg}`
                )
            ),
            stack: [],
            languages: [
                PROGRAMMING_LANGUAGES_ENUM.html,
                PROGRAMMING_LANGUAGES_ENUM.css,
                PROGRAMMING_LANGUAGES_ENUM.javascript,
                PROGRAMMING_LANGUAGES_ENUM.jquery,
            ],
        },
        {
            id: 712095637,
            size: PROJECT_SIZES_ENUM.VerySmall,
            status: PROJECT_STATUSES_ENUM.Finished,
            images: await ImageImporter.importImages(
                import.meta.glob(
                    `../assets/images/BIT-Wiki-Copy-To-Html/*.{jpg,jpeg,png,svg}`
                )
            ),
            stack: [],
            languages: [
                PROGRAMMING_LANGUAGES_ENUM.html,
                PROGRAMMING_LANGUAGES_ENUM.css,
            ],
        },
        {
            id: 700367680,
            size: PROJECT_SIZES_ENUM.Small,
            status: PROJECT_STATUSES_ENUM.Finished,
            gifs: await ImageImporter.importImages(
                import.meta.glob(
                    `../assets/gifs/Threading-Test-NetFramework/*.gif`
                )
            ),
            images: await ImageImporter.importImages(
                import.meta.glob(
                    `../assets/images/Threading-Test-NetFramework/*.{jpg,jpeg,png,svg}`
                )
            ),
            stack: [FRAMEWORKS_ENUM.NetWinForms],
            languages: [PROGRAMMING_LANGUAGES_ENUM.Csharp],
        },
        {
            id: 691325877,
            size: PROJECT_SIZES_ENUM.Small,
            status: PROJECT_STATUSES_ENUM.Finished,
            images: await ImageImporter.importImages(
                import.meta.glob(
                    `../assets/images/Dont-Starve-Created-Mods/*.{jpg,jpeg,png,svg}`
                )
            ),
            stack: [],
            languages: [PROGRAMMING_LANGUAGES_ENUM.lua],
        },
        {
            id: 624689877,
            size: PROJECT_SIZES_ENUM.Small,
            status: PROJECT_STATUSES_ENUM.Finished,
            images: await ImageImporter.importImages(
                import.meta.glob(
                    `../assets/images/DigitalSignerConsole/*.{jpg,jpeg,png,svg}`
                )
            ),
            stack: [],
            languages: [PROGRAMMING_LANGUAGES_ENUM.Csharp],
        },
        {
            id: 623283184,
            size: PROJECT_SIZES_ENUM.Medium,
            status: PROJECT_STATUSES_ENUM.Finished,
            images: await ImageImporter.importImages(
                import.meta.glob(
                    `../assets/images/DigitalSignatureSigningXML/*.{jpg,jpeg,png,svg}`
                )
            ),
            stack: [FRAMEWORKS_ENUM.NetWinForms],
            languages: [
                PROGRAMMING_LANGUAGES_ENUM.Csharp,
                PROGRAMMING_LANGUAGES_ENUM.xml,
            ],
        },
        {
            id: 591618032,
            size: PROJECT_SIZES_ENUM.Medium,
            status: PROJECT_STATUSES_ENUM.Finished,
            images: await ImageImporter.importImages(
                import.meta.glob(
                    `../assets/images/Sviezias_Oras/*.{jpg,jpeg,png,svg}`
                )
            ),
            stack: [FRAMEWORKS_ENUM.AndroidStudio],
            languages: [PROGRAMMING_LANGUAGES_ENUM.java],
        },
        {
            id: 559199527,
            size: PROJECT_SIZES_ENUM.Small,
            status: PROJECT_STATUSES_ENUM.Finished,
            images: await ImageImporter.importImages(
                import.meta.glob(
                    `../assets/images/EkspertineSistema/*.{jpg,jpeg,png,svg}`
                )
            ),
            stack: [FRAMEWORKS_ENUM.NetWinForms],
            languages: [PROGRAMMING_LANGUAGES_ENUM.Csharp],
        },
        {
            id: 535282095,
            size: PROJECT_SIZES_ENUM.Small,
            status: PROJECT_STATUSES_ENUM.Unfinised,
            images: await ImageImporter.importImages(
                import.meta.glob(
                    `../assets/images/TestTask/*.{jpg,jpeg,png,svg}`
                )
            ),
            // database: DATABASES_ENUM.MySQL,
            stack: [
                FRAMEWORKS_ENUM.Laravel,
                FRAMEWORKS_ENUM.Vue,
                FRAMEWORKS_ENUM.Tailwind,
            ],
            languages: [
                PROGRAMMING_LANGUAGES_ENUM.sql,
                PROGRAMMING_LANGUAGES_ENUM.php,
                PROGRAMMING_LANGUAGES_ENUM.javascript,
                PROGRAMMING_LANGUAGES_ENUM.html,
                PROGRAMMING_LANGUAGES_ENUM.css,
            ],
        },
        {
            id: 527764964,
            size: PROJECT_SIZES_ENUM.Medium,
            status: PROJECT_STATUSES_ENUM.Unfinised,
            gifs: await ImageImporter.importImages(
                import.meta.glob(`../assets/gifs/OutwardSaveFixer/*.gif`)
            ),
            images: await ImageImporter.importImages(
                import.meta.glob(
                    `../assets/images/OutwardSaveFixer/*.{jpg,jpeg,png,svg}`
                )
            ),
            stack: [FRAMEWORKS_ENUM.NetWinForms],
            languages: [
                PROGRAMMING_LANGUAGES_ENUM.Csharp,
                PROGRAMMING_LANGUAGES_ENUM.xml,
            ],
        },
        {
            id: 519884012,
            size: PROJECT_SIZES_ENUM.Small,
            status: PROJECT_STATUSES_ENUM.Finished,
            gifs: await ImageImporter.importImages(
                import.meta.glob(`../assets/gifs/OutwardSaveTransfer/*.gif`)
            ),
            images: await ImageImporter.importImages(
                import.meta.glob(
                    `../assets/images/OutwardSaveTransfer/*.{jpg,jpeg,png,svg}`
                )
            ),
            stack: [FRAMEWORKS_ENUM.NetWinForms],
            languages: [
                PROGRAMMING_LANGUAGES_ENUM.Csharp,
                PROGRAMMING_LANGUAGES_ENUM.xml,
            ],
        },
    ];
}
