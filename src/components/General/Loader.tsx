import { useTranslation } from "react-i18next";
import LoadingIcon from "../../assets/icons/Loading.svg";

interface LoaderInterface {
    text?: string;
}

function Loader({ text = "" }: LoaderInterface) {
    const { t } = useTranslation();

    if (!text) {
        text = t("components.Loader.loading");
    }

    return (
        <div className="mt-5 flex items-center justify-center gap-2 text-light-500 dark:text-light-400">
            <div className="text-xl font-semibold self-end">{text}</div>
            <LoadingIcon className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" />
        </div>
    );
}

export default Loader;
