import { useTranslation } from "react-i18next";
import { APP_NAME, SOCIALS_LINKS } from "../../utils/constants";
import SocialSection from "./Sections/SocialSection";
import SocialSectionLink from "./Sections/SocialSectionLink";
import FacebookSvg from "../../assets/icons/Social/Facebook.svg";
import LinkedinSvg from "../../assets/icons/Social/Linkedin.svg";
import GithubSvg from "../../assets/icons/Social/Github.svg";
import { SOCIALS_ENUM } from "../../enums/SocialsEnum";

function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="flex flex-col gap-3 text-light-900 dark:text-light-400 bg-gradient-to-br px-10 py-5 bg-white dark:bg-dark-eval-1 shadow-lg">
            <div className="flex flex-wrap justify-between">
                <div className="font-semibold text-3xl flex justify-center items-center">
                    {APP_NAME}
                </div>
                <div className="flex flex-wrap gap-10">
                    <SocialSection headerText={t("footer.findMe")}>
                        <SocialSectionLink
                            url={SOCIALS_LINKS[SOCIALS_ENUM.GitHub]}
                        >
                            <GithubSvg />
                        </SocialSectionLink>
                        <SocialSectionLink
                            url={SOCIALS_LINKS[SOCIALS_ENUM.Linkedin]}
                        >
                            <LinkedinSvg />
                        </SocialSectionLink>
                        <SocialSectionLink
                            url={SOCIALS_LINKS[SOCIALS_ENUM.Facebook]}
                        >
                            <FacebookSvg />
                        </SocialSectionLink>
                    </SocialSection>
                </div>
            </div>
            <div className="text-xs text-center">{t("footer.service")}</div>
        </footer>
    );
}

export default Footer;
