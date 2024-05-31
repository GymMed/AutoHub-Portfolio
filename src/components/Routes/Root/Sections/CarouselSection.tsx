import Carousel from "../../../General/Carousel/Carousel";
import WebsiteImg from "../../../../assets/images/Pages/Home/website.jpeg";
import SpaceImg from "../../../../assets/images/Pages/Home/blueSkies.jpeg";
// import ProfileImg from "../../../../assets/images/Github/User/Profile.jpg";
// import ProfileTransparentImg from "../../../../assets/images/Github/User/ProfileTransparent.png";
import ProfileWithBgImg from "../../../../assets/images/Github/User/ProfileFull.png";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { AVAILABLE_ROUTES } from "../../../../utils/constants";
import { ROUTES_ENUM } from "../../../../enums/RoutesEnums";

function CarouselSection() {
    const { t } = useTranslation();
    const navigate = useNavigate();

    return (
        <section className="flex flex-col gap-5 relative h-[32rem] overflow-hidden">
            <Carousel autoActive={true} slideTime={5000}>
                <div className="group/slide relative h-full w-full">
                    <img className="w-full" src={WebsiteImg} alt="Section" />
                    <div className="top-0 absolute opacity-40 dark:opacity-65 transition-opacity duration-500 group-hover/slide:opacity-20 dark:group-hover/slide:opacity-30 bg-black h-full w-full"></div>
                    <div className="text-center sm:pt-8 md:pt-24 top-0 absolute w-full h-full flex flex-col gap-2 items-center justify-center text-white">
                        <div className="tracking-wider font-semibold text-5xl">
                            {t("pages.home.slides.website.Dreams")}
                        </div>
                        <div className="tracking-wide">
                            {t("pages.home.slides.website.Develop")}
                        </div>
                        <button
                            type="button"
                            className="mt-8 tracking-wide bg-gradient-to-br from-primary-500 to-primary-700 hover:from-primary-700 hover:bg-primary-900 text-white py-2 px-4 rounded font-semibold"
                            onClick={() => {
                                navigate(
                                    AVAILABLE_ROUTES[ROUTES_ENUM.ContactMe].path
                                );
                            }}
                        >
                            {t("pages.home.slides.website.Button")}
                        </button>
                    </div>
                </div>

                <div className="group/slide h-full w-full">
                    <img className="w-full" src={SpaceImg} alt="Section" />
                    <div className="top-0 absolute opacity-40 dark:opacity-65 transition-opacity duration-500 group-hover/slide:opacity-20 dark:group-hover/slide:opacity-30 bg-gradient-to-br from-light-500 to-light-700 h-full w-full"></div>
                    <div className="text-center top-0 absolute w-full h-full flex items-center text-white">
                        <div className="grow tracking-wider p-10 font-semibold text-3xl h-full flex flex-col gap-3 items-center justify-center relative">
                            <div className="rounded-lg bg-opacity-60 bg-sections-profile p-3 flex flex-col gap-3 items-center justify-center">
                                <div className="tracking-widest text-wrap z-10">
                                    {t("pages.home.slides.person.Title")}
                                </div>
                                <div className="text-wrap text-lg tracking-normal max-w-[32rem] text-justify z-10">
                                    {t("pages.home.slides.person.Text")}
                                </div>
                            </div>
                            <div className="absolute h-full w-full flex items-end">
                                <div className="relative bg-sections-profile w-full h-[26%] p-2">
                                    <div className="absolute w-full z-10">
                                        <button
                                            type="button"
                                            className="rounded text-lg focus:ring focus:ring-offset-2 focus:ring-offset-sections-profile focus:ring-accent-500 from-accent-500 to-accent-700 hover:from-accent-700 hover:to-accent-900 text-white font-semibold bg-gradient-to-br tracking-wide"
                                            onClick={() => {
                                                navigate(
                                                    AVAILABLE_ROUTES[
                                                        ROUTES_ENUM.ContactMe
                                                    ].path
                                                );
                                            }}
                                        >
                                            <div className="hover:scale-105 px-4 py-1">
                                                {t(
                                                    "pages.home.slides.person.Button"
                                                )}
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tracking-wide h-full flex max-xl:self-start max-xl:absolute max-xl:w-full z-0">
                            <div className="max-xl:w-full max-xl:block hidden"></div>
                            <img
                                className="object-contain object-bottom h-full"
                                src={ProfileWithBgImg}
                                alt="Section"
                            />
                        </div>
                    </div>
                </div>
            </Carousel>
        </section>
    );
}

export default CarouselSection;
