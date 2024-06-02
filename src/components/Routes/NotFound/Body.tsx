import LinkAsButton from "../../General/LinkAsButton";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { STATUS_ENUM } from "../../../enums/StatusManager";

function NotFoundBody() {
    const { t } = useTranslation();

    return (
        <div className="text-center my-auto flex items-center justify-center w-full p-10">
            <div className="flex flex-col gap-3 items-center justify-center bg-gradient-to-br from-primary-500 to-primary-700 p-5 rounded-lg shadow-lg text-white">
                <div className="font-bold text-3xl">404</div>
                <div className="font-semibold text-xl">
                    {t("pages.404.pageNotFound")}
                </div>
                <p>
                    {t("pages.404.pageYouLookingFor")}
                    <br />
                    {t("pages.404.checkUrl")}
                    <Link to={"/"}>
                        <span className="font-bold text-sky-200 hover:underline">
                            {t("pages.404.homePage")}
                        </span>
                    </Link>
                    .<br />
                    {t("pages.404.visitUsLater")}
                </p>
                <LinkAsButton
                    text={t("pages.404.goHome")}
                    status={STATUS_ENUM.Success}
                    href="/"
                />
            </div>
        </div>
    );
}

export default NotFoundBody;
