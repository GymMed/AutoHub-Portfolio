import { ValidationError, useForm } from "@formspree/react";
import FullInput from "../../../General/Inputs/FullInput";
import FullTextarea from "../../../General/Inputs/FullTextarea";
import { STATUS_ENUM } from "../../../../enums/StatusManager";
import Button from "../../../General/Button";
import { useTranslation } from "react-i18next";

function MailOwner() {
    const [state, handleSubmit] = useForm("xbjnqwvw");
    const { t } = useTranslation();

    if (state.succeeded) {
        return (
            <div className="my-auto mx-auto p-5">
                <div className="p-5 dark:bg-dark-eval-1 dark:text-light-400 rounded flex flex-col gap-3">
                    <p className="text-lg animate-pulse text-green-500">
                        {t("pages.contactMe.sections.MailOwner.success")}
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="p-5 bg-white shadow-lg dark:bg-dark-eval-1 dark:text-light-400 rounded flex flex-col gap-5">
            <div className="flex justify-center items-center font-semibold text-2xl">
                {t("pages.contactMe.sections.MailOwner.header")}
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <div className="flex gap-3 w-full">
                    <FullInput
                        labelHeader={t(
                            "pages.contactMe.sections.MailOwner.fullName"
                        )}
                        type="name"
                        id="name"
                        name="text"
                    />
                    <FullInput
                        labelHeader={t(
                            "pages.contactMe.sections.MailOwner.email"
                        )}
                        type="email"
                        id="email"
                        name="email"
                    />
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />
                </div>
                <FullInput
                    labelHeader={t(
                        "pages.contactMe.sections.MailOwner.subject"
                    )}
                    type="text"
                    id="subject"
                    name="subject"
                />
                <FullTextarea
                    labelHeader={t(
                        "pages.contactMe.sections.MailOwner.message"
                    )}
                    id="message"
                    name="message"
                />{" "}
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />
                <Button
                    status={STATUS_ENUM.Success}
                    text={t("pages.contactMe.sections.MailOwner.submit")}
                    disabled={state.submitting}
                />
            </form>
        </div>
    );
}

export default MailOwner;
