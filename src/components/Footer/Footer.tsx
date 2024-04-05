import { useTranslation } from "react-i18next";
import { APP_NAME } from "../../utils/constants";
import SocialSection from "./Sections/SocialSection";
import SocialSectionLink from "./Sections/SocialSectionLink";
import FacebookSvg from "../../assets/icons/Social/Facebook.svg";
import LinkedinSvg from "../../assets/icons/Social/Linkedin.svg";
import GithubSvg from "../../assets/icons/Social/Github.svg";

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
                        <SocialSectionLink url="https://github.com/GymMed">
                            <GithubSvg />
                        </SocialSectionLink>
                        <SocialSectionLink url="https://www.linkedin.com/in/gytis-m/">
                            <LinkedinSvg />
                        </SocialSectionLink>
                        <SocialSectionLink>
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
