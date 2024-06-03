// import ProfilePicture from "../../../../assets/images/Github/User/ProfileTransparent.png";
import { useTranslation } from "react-i18next";
import ProfilePicture from "../../../../assets/images/Github/User/ProfileSmall.png";
import { useNavigate } from "react-router-dom";
import { AVAILABLE_ROUTES } from "../../../../utils/constants";
import { ROUTES_ENUM } from "../../../../enums/RoutesEnums";

function SidePictureSection() {
    const { t } = useTranslation();
    const navigate = useNavigate();

    return (
        <section className="text-light-500 dark:text-light-400 items-center justify-center flex flex-col gap-5 relative min-h-[32rem] overflow-hidden">
            <div className="mt-5 w-full h-full flex items-center justify-between gap-3 max-md:flex-col">
                <div className="w-full h-full flex items-center justify-center gap-3 max-md:order-2">
                    <div className="flex flex-col gap-3 mx-10">
                        <div className="max-md:text-center tracking-wider text-3xl font-bold">
                            {t("pages.home.owner.title")}
                        </div>
                        <div className="text-xl flex gap-3 flex-col text-justify">
                            <div>{t("pages.home.owner.paragraph")}</div>{" "}
                            <div>{t("pages.home.owner.paragraph2")}</div>
                        </div>
                    </div>
                </div>
                <div className="w-[40%] h-full flex items-center justify-center max-md:order-1">
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
            <div className="mx-10 mt-5 self-start">
                <button
                    type="button"
                    className="tracking-wider uppercase rounded text-lg focus:ring focus:ring-offset-2 focus:ring-offset-dark-eval-0 focus:ring-accent-500 from-accent-500 to-accent-700 hover:from-accent-700 hover:to-accent-900 text-white font-semibold bg-gradient-to-br"
                    onClick={() => {
                        navigate(AVAILABLE_ROUTES[ROUTES_ENUM.ContactMe].path);
                    }}
                >
                    <div className="hover:scale-105 px-4 py-1">
                        {t("pages.home.owner.button")}
                    </div>
                </button>
            </div>
        </section>
    );
}

export default SidePictureSection;
