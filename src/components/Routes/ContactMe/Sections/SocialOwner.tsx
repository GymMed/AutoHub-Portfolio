import ContactSocialLink from "./Socials/ContactSocialLink";
import GithubSvg from "../../../../assets/icons/Social/Github.svg";
import LinkedinSvg from "../../../../assets/icons/Social/Linkedin.svg";
import FacebookSvg from "../../../../assets/icons/Social/Facebook.svg";
import PhoneSvg from "../../../../assets/icons/Social/Phone.svg";
import { PHONE_NUMBER, SOCIALS_LINKS } from "../../../../utils/constants";
import { SOCIALS_ENUM } from "../../../../enums/SocialsEnum";
import { useTranslation } from "react-i18next";

function SocialOwner() {
    const { t } = useTranslation();

    return (
        <div className="p-5 bg-white shadow-lg dark:bg-dark-eval-1 dark:text-light-400 rounded flex flex-col gap-2">
            <div className="w-full text-center text-lg font-semibold">
                {t("pages.contactMe.sections.SocialsOwner.header")}
            </div>
            <ul className="flex items-center justify-center gap-3">
                <ContactSocialLink url={SOCIALS_LINKS[SOCIALS_ENUM.GitHub]}>
                    <GithubSvg />
                </ContactSocialLink>

                <ContactSocialLink url={SOCIALS_LINKS[SOCIALS_ENUM.Linkedin]}>
                    <LinkedinSvg />
                </ContactSocialLink>

                <ContactSocialLink url={SOCIALS_LINKS[SOCIALS_ENUM.Facebook]}>
                    <FacebookSvg />
                </ContactSocialLink>
            </ul>
            <div className="w-full flex items-center justify-center gap-3">
                <div>
                    <PhoneSvg />
                </div>
                <div>{PHONE_NUMBER}</div>
            </div>
        </div>
    );
}

export default SocialOwner;
