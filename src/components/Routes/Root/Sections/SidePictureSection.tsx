// import ProfilePicture from "../../../../assets/images/Github/User/ProfileTransparent.png";
import { useTranslation } from "react-i18next";
import ProfilePicture from "../../../../assets/images/Github/User/ProfileSmall.png";

function SidePictureSection() {
    const { t } = useTranslation();

    return (
        <section className="text-light-500 dark:text-light-400 items-center justify-center flex flex-col gap-5 relative min-h-[32rem] overflow-hidden">
            <div className="w-full h-full flex items-center justify-between gap-3">
                <div className="w-full h-full flex items-center justify-center gap-3">
                    <div className="flex flex-col gap-3 mx-10">
                        <div className="tracking-wider text-3xl font-bold">
                            {t("pages.home.owner.title")}
                        </div>
                        <div className="text-xl flex gap-3 flex-col text-justify">
                            <div>{t("pages.home.owner.paragraph")}</div>{" "}
                            <div>{t("pages.home.owner.paragraph2")}</div>
                        </div>
                    </div>
                </div>
                <div className="w-[40%] h-full flex items-center justify-center">
                    <div className="w-44 rounded-full border-2 border-blue-500">
                        <img
                            className="rounded-full"
                            src={ProfilePicture}
                            alt="Profile"
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SidePictureSection;
