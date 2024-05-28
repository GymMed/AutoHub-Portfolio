import MailOwner from "./Sections/MailOwner";
import SocialOwner from "./Sections/SocialOwner";

function ContactMeBody() {
    return (
        <div className="my-auto mx-auto p-5 flex flex-col gap-3">
            <MailOwner />
            <SocialOwner />
        </div>
    );
}

export default ContactMeBody;
