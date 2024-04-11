import { useTranslation } from "react-i18next";
import WebsiteImg from "../../../assets/images/Pages/Home/website.jpeg";

export default function RootBody() {
    const { t } = useTranslation();

    return (
        <div className="mb-auto">
            <section className="h-[32rem] overflow-hidden">
                <div className="group/slide relative h-full">
                    <img className="w-full" src={WebsiteImg} alt="Section" />
                    <div className="top-0 absolute opacity-40 dark:opacity-65 transition-opacity duration-500 group-hover/slide:opacity-20 dark:group-hover/slide:opacity-30 bg-black h-full w-full"></div>
                    <div className="text-center top-0 absolute w-full h-full flex flex-col gap-2 items-center justify-center text-white">
                        <div className="tracking-wider font-semibold text-5xl">
                            {t("pages.home.slides.website.Dreams")}
                        </div>
                        <div className="tracking-wide">
                            {t("pages.home.slides.website.Develop")}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
